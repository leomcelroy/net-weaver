import componentsLibrary from "./componentsLibrary.js";

const { blocks } = componentsLibrary;

const test =  {
  name: "test component",
  type: "power",
  superClasses: [],
  ports: [
    {
      name: "5v",
      leftRightUpDown: "left", // of block
      type: "digital", // string eg digital bidirectional, usb host
      array: false // boolean
    },
    {
      name: "GND",
      leftRightUpDown: "right", // of block
      type: "digital", // string eg digital bidirectional, usb host
      array: false // boolean
    }
  ],
  argParams: [
    { 
      name: "voltage",
      type: "float", // int | float | range | string
      defaultValue: 5, //empty | int | float | range | string
    }
  ]
}

export const nodes = { 
  "test component": test 
};

blocks.forEach( comp => {

  if (
    ["InternalSubcircuit", "InternalBlock"]
    .some(x => comp.superClasses.includes(x))
  ) {
    return;
  }

  if (comp.is_abstract) {
    return;
  }

  const type = comp.type;

  nodes[type] = {
    name: type,
    type: type,
    superClasses: comp.superClasses,
    ports: comp.ports.map(p => ({
      name: p.name,
      leftRightUpDown: [null, "left", "up", "down"].includes(p.hint_position) ? "left" : "right", // of block
      type: p.type, // string eg digital bidirectional, usb host
      array: p.is_array, // boolean
      srcSinkBi: p.hint_array_direction
    })),
    argParams: comp.argParams
  }
})

Object.values(nodes).forEach(n => {
  n.ports.forEach((port, i) => {
    port.idx = i;
  })
})
