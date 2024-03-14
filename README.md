# net-weaver

- types of arg parameters
  - string
  - integer
  - boolean
  - float
  - range (range of floats)

# TO-DO

- use labels when generating net list
- make arg parameters editable
  - add value key in node data
- better search

- make label input nice

- make errors visible
- clientside type checking on ports

-> board design

MAYBE
- draw nets not direct edges
- pull wires from labels
- set view window
- delete labels with x
- delete multiple labels
- clear state on upload

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
