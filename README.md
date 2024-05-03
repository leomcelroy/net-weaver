# NetWeaver: block-based PCB design in the browser

NetWeaver is a web-based tool for generating circuit schematics (and layouts)
using libraries of components and sub-circuits.

![NetWeaver interface]()

It is built on top of [Polymorphic Blocks](https://github.com/BerkeleyHCI/PolymorphicBlocks) for creating netlists and [SVG-PCB](https://leomcelroy.com/svg-pcb/) for describing board layouts.

In NetWeaver instead of having to specify which physical pins of components are connected to each other
you can connect ports which represent high level electrical interfaces (digital GPIO, I2C bundle, etc...).
You can think of NetWeaver as embedding information you would typically have to find by digging through a datasheet
into part descriptions.

These nets are then compiled into a netlist using a backend hardware description language (HDL) that verifies the boards
viability with interface and electrical checks.

You can then use 

# Examples

