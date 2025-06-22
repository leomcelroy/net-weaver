import { kicadParser } from "./kicadParser.js";
import { unindent } from "./utils/unindent.js";

export function generateSVGPCBcode(compiledObj) {
  const result = [];

  const {
    kicadFootprints,
    svgpcbInstantiations,
    netlist,
    svgpcbFunctions,
    svgpcb,
  } = compiledObj;

  kicadFootprints.forEach((fp) => {
    const { name, data } = fp;

    const line = `const ${name} = ${JSON.stringify(kicadParser(data))};`;
    result.push(line);
  });

  if (svgpcb) {
    result.push(svgpcb);
  } else {
    result.push("");
    result.push(`const board = new PCB();`);
    result.push("");

    svgpcbInstantiations.forEach((line) => {
      result.push(line);
    });

    result.push("");

    // result.push(`board.setNetlist(${JSON.stringify(netlist)})`);

    result.push("");

    result.push(unindent`
      const limit0 = pt(-0.5, -0.6);
      const limit1 = pt(2.4, 1.7);
      const xMin = Math.min(limit0[0], limit1[0]);
      const xMax = Math.max(limit0[0], limit1[0]);
      const yMin = Math.min(limit0[1], limit1[1]);
      const yMax = Math.max(limit0[1], limit1[1]);
  
      const filletRadius = 0.1;
      const outline = path(
        [(xMin+xMax/2), yMax-0.05],
        ["fillet", filletRadius, [xMax-.05, yMax-.05]],
        ["fillet", filletRadius, [xMax-.05, yMin+0.05]],
        ["fillet", filletRadius, [xMin+0.05, yMin+0.05]], 
        ["fillet", filletRadius, [xMin+0.05, yMax-.05]], 
        [(xMin+xMax/2), yMax-0.05],
      );
      board.addShape("outline", outline);
  
      renderPCB({
        pcb: board,
        layerColors: {
          "F.Paste": "#000000ff",
          "F.Mask": "#000000ff",
          "B.Mask": "#000000ff",
          "componentLabels": "#00e5e5e5",
          "outline": "#002d00ff",
          "padLabels": "#ffff99e5",
          "B.Cu": "#ef4e4eff",
          "F.Cu": "#ff8c00cc",
        },
        limits: {
          x: [xMin, xMax],
          y: [yMin, yMax]
        },
        background: "#00000000",
        mmPerUnit: 25.4
      })
    `);

    result.push("");

    svgpcbFunctions.forEach((line) => {
      result.push(line);
    });
  }

  return result.join("\n");
}
