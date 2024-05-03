# net-weaver

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
