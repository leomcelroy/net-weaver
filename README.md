# NetWeaver: block-based PCB design in the browser

NetWeaver is a web-based tool for generating circuit schematics (and layouts)
using libraries of components and sub-circuits.

<img width="100%" alt="Screenshot 2024-05-03 at 1 59 11 AM" src="https://github.com/leomcelroy/net-weaver/assets/27078897/61301af8-b58e-4458-8900-6e06d25fb24b">

It is built on top of [Polymorphic Blocks](https://github.com/BerkeleyHCI/PolymorphicBlocks) for creating netlists and [SVG-PCB](https://leomcelroy.com/svg-pcb/) for describing board layouts.

In NetWeaver instead of having to specify which physical pins of components are connected to each other
you can connect ports which represent high level electrical interfaces (digital GPIO, I2C bundle, etc...).
You can think of NetWeaver as embedding information you would typically have to find by digging through a datasheet
into part descriptions.

These nets are then compiled into a netlist using a backend hardware description language (HDL) that verifies the boards
viability with interface and electrical checks.

The compiler also generates start layouts which can be viewed, editted, and routed in our online circuit design tool.

# Examples

### [Charlieplexing LED Matrix](https://www.leomcelroy.com/net-weaver/?src=examples/CharlieMatrix.json)

<img width="554" alt="Screenshot 2024-05-03 at 2 02 44 AM" src="https://github.com/leomcelroy/net-weaver/assets/27078897/30029f49-c041-4732-a64d-d481e44ce6f5">

Contains:

- ESP32-C3 dev board w/ WiFi
- Many LEDs with GPIOs 
- Parameterized circuit generator
- Parameterized layout template

### [LED Neopixel Array](https://www.leomcelroy.com/net-weaver/?src=examples/NeopixelArray.json)

<img width="454" alt="Screenshot 2024-05-03 at 2 03 38 AM" src="https://github.com/leomcelroy/net-weaver/assets/27078897/36438c05-0786-4bb6-98e0-50ca98120090">

Contains:

- ESP32-C3 dev board w/ WiFi
- Parameterized layout template

### [IoT Sensor Thing](https://www.leomcelroy.com/net-weaver/?src=examples/IotSensorThing.json)

<img width="756" alt="Screenshot 2024-05-03 at 2 04 32 AM" src="https://github.com/leomcelroy/net-weaver/assets/27078897/de551591-2e8e-4411-b4c9-5941a8981315">

Contains:

- Discrete ESP32 module
- USB-C powered
- Many I2C sensors





