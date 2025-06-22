export function unindent(strings, ...values) {
  let fullText = strings.reduce(
    (acc, str, i) => acc + str + (values[i] || ""),
    ""
  );

  // Trim leading and trailing blank lines
  fullText = fullText.replace(/^\n+|\n+$/g, "");

  const lines = fullText.split("\n");

  // Determine the smallest indentation level across non-empty lines
  const minIndent = lines
    .filter((line) => line.trim())
    .reduce((min, line) => {
      const currentIndent = line.match(/^\s*/)[0].length;
      return currentIndent < min ? currentIndent : min;
    }, Infinity);

  // Remove the common indentation
  return lines.map((line) => line.substring(minIndent)).join("\n");
}
