// import { StringStream } from "./StringStream.js";

const lexerRules = {
  literalModifier: function(string) {
    let result = "";

    if (string[0] !== "(") return result;

    let parenCount = 0;
    let i = 0;

    while (i < string.length) {
      const char = string[i];
      if (char === "(") parenCount++;
      if (char === ")") parenCount--;

      result += char;
      
      if (parenCount === 0) break;
      i++;
    }

    return result;
  },
  symbol: /[a-zA-Z_][a-zA-Z0-9_]+/,
  cssKeyValue: /[a-zA-Z\-_]+:([^;]+);/,
  ".": ".",
  "{": "{",
  "}": "}",
  whitespace: /\s+/
}

// what about composing modifiers?

const lex = makeLexer(lexerRules, ["whitespace"]);

export function initCss(ops = {}) {

  const DEFAULT_MODIFIERS = {
    hover: (name, props) => `${name}:hover {${props} }`,
    sm: (name, props) => `@media (min-width: 200px) { ${name} {${props} } }`,
    md: (name, props) => `@media (min-width: 300px) { ${name} {${props} } }`,
    // "sm":  "@media (min-width: 200px)",
    // "md":  "@media (min-width: 300px)",
    // "lg":  "@media (min-width: 1024px)",
    // "xl":  "@media (min-width: 1280px)",
    // "2xl": "@media (min-width: 1536px)",
  };

  let modifiers = DEFAULT_MODIFIERS;
  if (ops.modifiers) {

    if (ops.clearModifiers) modifiers = {};

    for (const modKey in ops.modifiers) {
      modifiers[modKey] = ops.modifiers[modKey];
    }
  }

  const rules = {};
  let cssStr = "";

  function css(strings, ...values) {
    const fullString = strings.reduce(
      (acc, current, i) =>
        acc + current + (values[i] !== undefined ? values[i] : ""),
      "",
    );

    const stream = (() => {
      const lexemes = lex(fullString);
      let index = 0;

      return {
        next() {
          const lexeme = lexemes[index];
          index += 1;
          return lexeme;
        },
        peek(offset = 0) {
          return lexemes[index + offset];
        },
        eof() {
          return index >= lexemes.length;
        },
        index,
        length: lexemes.length
      }
    })();

    let entries = [];
    let steps = 0;

    while (!stream.eof()) {

      if (steps > stream.length) {
        console.warn("Some parsing error in css.", {
          entries,
          index: stream.index,
          peek: stream.peek()
        });
        break;
      }

      let modifier = null;
      let properties = [];
      let literal = false;

      if (stream.peek()?.type === "literalModifier") {
        const literalMatch = stream.next().value;
        modifier = literalMatch.slice(1, -1);   
        literal = true;     
      } 

      if (stream.peek()?.type === "symbol") {
        const varModifierMatch = stream.next().value;
        modifier = varModifierMatch;
      }

      if (stream.peek()?.type === "." && stream.peek(1)?.type === "cssKeyValue") {
        stream.next();
      }

      if (stream.peek()?.type === "{") {

        // skip {
        stream.next();

        const content = [];
        while (stream.peek().type !== "}") {
          if (stream.eof()) break;

          content.push(stream.next().value);
        }

        // skip }
        stream.next();

        properties = content
          .map((prop) => {
            let [name, value] = prop
              .split(":")
              .map((part) => part.trim());
            value = value.slice(0, -1).trim();
            return { name, value };
          })
          .filter((prop) => prop.name && prop.value);
      
      } else if (stream.peek()?.type === "cssKeyValue") {
        const colonSemiMatch = stream.next().value;
      
        const [name, value] = colonSemiMatch.split(":");
        properties.push({ name: name.trim(), value: value.slice(0, -1).trim() });
      }

      if (properties.length > 0) {
        entries.push({
          modifier,
          literal,
          properties,
        });
      }

      steps++;
    }

    const name = makeName(entries);
    if (name in rules) {
      console.log("class exists");
    } else {
      rules[name] = entries;

      const newCssStrRules = entriesToRules(name, entries, modifiers);
      cssStr += `${newCssStrRules.join("\n")}\n`;
    }

    return name;
  }



  return {
    getCssStr: () => cssStr,
    rules,
    css,
  };
}

function entriesToRules(name, entries, modifiers) {
  const rules = [];

  const groupedBySelector = entries.reduce((acc, obj) => {
    const key = `${obj.modifier || "null"}-${obj.literal}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

  name = `.${name}`;

  // should preserve order and group before
  // then apply modifiers which are functions
  // name need not be hash

  for (const ruleSet in groupedBySelector) {
    const group = groupedBySelector[ruleSet];
    const isModifier = group[0].modifier !== null;
    const isLiteral = group[0].literal;

    const props = group
      .map((x) => x.properties)
      .flat()
      .reduce((a, b) => {
        return a + ` ${b.name}:${b.value};`;
      }, "");

    if (!isModifier) {
      rules.push(`${name} {${props} }\n`);
      continue;
    }

    if (isLiteral) {
      const selector = group[0].modifier.replaceAll("&", name);
      rules.push(`${selector} {${props} }\n`);
      continue;
    }

    if (!isLiteral) {
      const mod = modifiers[group[0].modifier];
      rules.push(mod(name, props));
      continue;
    }
  }

  return rules;
}

function makeName(arr) {
  const props = arr
    .map((x) =>
      x.properties.map((p) => `${x.modifier ?? ""};${p.name};${p.value}`),
    )
    .flat()
    .sort()
    .join("");

  const code = hashCode(props);

  return `_${code}`;
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export function makeLexer(rules, skip = []) {
  for (const ruleKey in rules) {
    const rule = rules[ruleKey];
    const isRegEx = rule instanceof RegExp;
    if (!isRegEx) continue;
    rules[ruleKey] = makeRuleStart(rule);
  }

  return string => { 
    let index = 0;

    const peek = () => string[index];

    const longest = (acc, cur) => cur.length >= acc.length 
      ? cur 
      : acc;

    const lexemes = [];

    while (index < string.length) {
      let type, value;

      const matches = [];
      for (const key in rules) {
        type = key;
        value = "";
        let rule = rules[key];

        if (typeof rule === "function") {
          const stringToCheck = string.slice(index);
          value = rule(stringToCheck);
        } else if (rule instanceof RegExp) {
          // console.log(rule);
          let tempValue = string.slice(index).match(rule);

          // if using ^ in regex don't need to check index was start
          if (tempValue !== null && tempValue.index === 0) {
            value = tempValue[0];        
          }
        } else if (Array.isArray(rule)) {
          const matches = [];
          for (let i = 0; i < rule.length; i++) {
            if (typeof rule[i] !== "string") console.error("makeLexer only accepts arrays of strings.");
            const match = string.slice(index).startsWith(rule[i]);
            if (match) matches.push(rule[i]);
          }

          value = matches.length > 0 
            ? matches.slice(1).reduce(longest, matches[0])
            : "";
        } else if (typeof rule === "string") {
          if (string.slice(index).startsWith(rule)) {
            value = rule;
          };
        }

        matches.push([ key, value ]);
      }

      // take longest match
      matches.forEach(m => {
        const [ rule, matchStr ] = m;
        if (matchStr.length > value.length) {
          value = matchStr;
          type = rule;
        }
      });

      if (!skip.includes(type)) lexemes.push({ type, value, index });
      
      index += value.length;
      if (value.length === 0) {
        console.warn("failed to lex string", {
          lookingAt: peek(),
          index,
          string,
          lexemes
        });
        break;
      };
    }

    return lexemes;
  }
}

function makeRuleStart(rule) {
  if (!(rule instanceof RegExp)) return null;
  const trimmedSlashes = rule.toString().slice(1, -1);
  if (trimmedSlashes[0] === "^") return new RegExp(trimmedSlashes);
  return new RegExp(`^${trimmedSlashes}`);
}