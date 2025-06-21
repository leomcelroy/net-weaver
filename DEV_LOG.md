# net-weaver

### March 10, 2025

- copy paste components
- label modal
  - rename all
  - delete all
  - delete
  - rename
- undo/redo
- connecting naming logic
- gpio naming bug
- kicad netlist interface
- JSON-PCB export
- ux
  - better part naming and descriptions
  - images
  - part library site
- highlight ports


- Making e-ink reminder
  - can't use AA batteries in series
  - power on the rp2040 xiao?

### Feb. 18, 2025

- Get end to end running
  - stepper driver board
- copy paste components
- label modal
  - rename all
  - delete all
  - delete
  - rename
- undo/redo
- connecting naming logic
- port type highlighting
- connector builder?
- gpio naming bug
- kicad netlist interface
- JSON-PCB export
- ux
  - better part naming and descriptions
  - images
  - part library site
- longer time
  - better initial layout
  - use schematic position
- support for pre-routed blocks/sub-blocks


### Tue, Sep 3, 2024

- indicate if there are no ports on connecter

### Tue, Aug 27, 2024

- rename all labels of same name
- display valid ports to connect to
- connector builder
- names of components need to be unique
- check names of nets and components to be valid python
- [x] generated net names should be unique

for connector builder
if superClasses include "PassiveConnecter"
when adjusting argParam "length"
add ports to match length number
ports have these props

  array: false
  idx: ?
  leftRightUpDown: "left"
  name: ?
  srcSinkBi: "bi"
  type: "Passive"

# TODO

if is_array == true and hint_array_direction == sink
  add new port
  link port to parent node
    parent: {
      name: "gpio",
    },

    {
      name: "gpio_port1",
      isArray: false,
      elementOf: "gpio"
    }

    when all connections removed it disappears

can't connect two array sinks
can't drag from sink

if is_array == true and hint_array_direction != sink
  treat as normal single element

- better search
- make errors visible
- clientside type checking on ports

-> board design

to svg pcb

MAYBE
- draw nets not direct edges
- pull wires from labels
- set view window
- delete labels with x
- delete multiple labels
- clear state on upload
- make label input nice
- center window on upload
- add update components button, to re-add same types from library
- add replace function
- how to add generic components

DONE
- save labels in downloaded state
- draw labels in scale view window
- remove
  - interalBlocks
- delete labels
- edit label name
- don't render in loop, do it on state change
- if label exists for src port use name of label, if not create name
- if label on dst port, clear label
- clear labels on node deletion
- use labels when generating net list
- make arg parameters editable
  - add value key in node data


# Notes

- types of arg parameters
  - string
  - integer (int)
  - boolean
  - float
  - range (range of floats)

test case
- control board
- replace connector
