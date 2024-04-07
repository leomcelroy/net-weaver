export default {
  "blocks": [
    {
      "name": "",
      "type": "DigitalWrapperRotaryEncoderWithSwitch",
      "superClasses": [
        "DigitalRotaryEncoderSwitch",
        "DigitalWrapperRotaryEncoder"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "sw",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "DigitalRotaryEncoder mixin adding a switch pin."
    },
    {
      "name": "",
      "type": "PortAdapter",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Defines an adapter from one port type to another port type. This behaves as a normal block, and both the src and\ndst are connected with normal connect semantics. Should only be inferred on internal block ports."
    },
    {
      "name": "",
      "type": "Stm32f103_48",
      "superClasses": [
        "Stm32f103Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "Ft232EepromDriver",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "eeclk",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "eedata",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adapts the EECLK and EEDATA pins of the FT232 to the SPI of the EEPROM"
    },
    {
      "name": "",
      "type": "CurrentSenseResistor",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "sense_in",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "sense_out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "sense_in_reqd",
          "type": "bool",
          "default_value": 1.0
        }
      ],
      "is_abstract": false,
      "docstring": "Current sense resistor with a power passthrough resistor and positive and negative sense temrinals."
    },
    {
      "name": "",
      "type": "Lmv321",
      "superClasses": [
        "Opamp"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "RRO op-amp in SOT-23-5.\n  "
    },
    {
      "name": "",
      "type": "LedDriverSwitchingConverter",
      "superClasses": [
        "LedDriver"
      ],
      "ports": [],
      "argParams": [
        {
          "name": "ripple_limit",
          "type": "float",
          "default_value": Infinity
        }
      ],
      "is_abstract": true,
      "docstring": "LED driver mixin indicating that the LED driver is a switching converter and with a peak-peak ripple limit."
    },
    {
      "name": "",
      "type": "SpiMemory",
      "superClasses": [
        "Memory"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "size",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Base class for SPI memory, with acceptable sizes (in bits) as a range."
    },
    {
      "name": "",
      "type": "PiLowPassFilter",
      "superClasses": [
        "AnalogFilter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "output",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        },
        {
          "name": "src_resistance",
          "type": "float",
          "default_value": null
        },
        {
          "name": "src_reactance",
          "type": "float",
          "default_value": null
        },
        {
          "name": "load_resistance",
          "type": "float",
          "default_value": null
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": null
        },
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Passive-typed pi impedance matching network.\nBased on equations from https://www.silabs.com/documents/public/application-notes/an1275-imp-match-for-network-arch.pdf\nand also referencing https://www.electronicdesign.com/technologies/communications/article/21801154/back-to-basics-impedance-matching-part-3\nand https://www.qsl.net/zl1an/CH1.pdf\nFrequency defines the entire bandwidth this filter should work across.\n\nWORK IN PROGRESS. NON-STABLE API.\n\nTODO: use ranges and tolerances throughout"
    },
    {
      "name": "",
      "type": "Ap2204k",
      "superClasses": [
        "Resettable",
        "LinearRegulator",
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "AP2204K block providing the LinearRegulator interface and optional enable (tied high if not connected).\n  "
    },
    {
      "name": "",
      "type": "DefaultConnectionBlock",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "A utility block that takes in an input port that may be connected\nand an output port that is required, and if the input is not present, connects the\noutput to a default port.\nIf the input is present, the default port presents an 'ideal' port. - TODO can this be a true disconnect?\nIf the input is not present, the default port is connected to the output."
    },
    {
      "name": "",
      "type": "Ws2812b",
      "superClasses": [
        "Neopixel"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Abstract base class for Neopixel-type LEDs including the Vdd/Gnd/Din/Dout interface."
    },
    {
      "name": "",
      "type": "Fusb302b_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vbus",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vconn",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "cc",
          "type": "UsbCcPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "int_n",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "DigitalTvsDiode",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "io",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "working_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "capacitance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "TVS diode protecting a signal line"
    },
    {
      "name": "",
      "type": "Tps61040",
      "superClasses": [
        "Resettable",
        "DiscreteBoostConverter",
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "PFM (DCM, discontinuous mode) boost converter in SOT-23-5"
    },
    {
      "name": "",
      "type": "Waveshare_Epd",
      "superClasses": [
        "EInk"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "busy",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Multi-device-compatible driver circuitry based on the Waveshare E-Paper Driver HAT\nhttps://www.waveshare.com/wiki/E-Paper_Driver_HAT\nexcluding the \"clever\" reset circuit"
    },
    {
      "name": "",
      "type": "PowerConditioner",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Power conditioning circuits that provide a stable and/or safe power supply, eg voltage regulators"
    },
    {
      "name": "",
      "type": "Opa2333_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vp",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vn",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "inpa",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inna",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "outa",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "inpb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "innb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "outb",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "DigitalRotaryEncoderSwitch",
      "superClasses": [
        "DigitalRotaryEncoder"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "DigitalRotaryEncoder mixin adding a switch pin."
    },
    {
      "name": "",
      "type": "Stm32f103_48_Device",
      "superClasses": [
        "Stm32f103Base_Device"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "nrst",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "osc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Eventually, the USB device port will be an IoController mixin.\nFor now, it's part of base, since it's common enough and there isn't GUI support for mixins.\n\nThis class SHOULD BE mixed into IoController blocks, in preparation for the eventual move.\nThis WILL NOT WORK when used in .with_mixin, since this defines no fields."
    },
    {
      "name": "",
      "type": "IdDots4",
      "superClasses": [
        "Label"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonfunctional footprint, including copper and silkscreen labels."
    },
    {
      "name": "",
      "type": "Cstne",
      "superClasses": [
        "CeramicResonator"
      ],
      "ports": [
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Category for ceramic resonators"
    },
    {
      "name": "",
      "type": "SwdCortexTargetConnectorTdi",
      "superClasses": [
        "SwdCortexTargetConnector"
      ],
      "ports": [
        {
          "name": "tdi",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin for SWD connectors with adding the NONSTANDARD TDI pin (where pins are shared with JTAG)"
    },
    {
      "name": "",
      "type": "Opamp",
      "superClasses": [
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for opamps. Parameters need to be more restricted in subclasses.\n  "
    },
    {
      "name": "",
      "type": "Rp2040",
      "superClasses": [
        "Resettable",
        "IoControllerI2cTarget",
        "IoControllerUsb",
        "Microcontroller",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "Lp5907_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "en",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "VoltageSourceConnected",
      "superClasses": [
        "DefaultConnectionBlock"
      ],
      "ports": [
        {
          "name": "out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "in_connected",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "in_default",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "in_is_connected",
          "type": "bool",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "The template actually lives here"
    },
    {
      "name": "",
      "type": "Er_Oled_096_1_1_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcc",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "iref",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vcomh",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vbat",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "c1p",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c1n",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c2p",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c2n",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "bs0",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "bs1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "res",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "d0",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "d1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "d2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "30-pin FPC connector for the ER-OLED-0.96-1.1* device, configured to run off internal DC/DC"
    },
    {
      "name": "",
      "type": "CpuFan4Pin",
      "superClasses": [
        "CpuFanConnector",
        "CpuFanPwmControl"
      ],
      "ports": [
        {
          "name": "control",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "sense",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "3-pin fan controller"
    },
    {
      "name": "",
      "type": "VoltageSinkConnector",
      "superClasses": [
        "DummyDevice",
        "NetBlock"
      ],
      "ports": [
        {
          "name": "a",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "b",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": null
        },
        {
          "name": "a_current_limits",
          "type": "range",
          "default_value": null
        },
        {
          "name": "b_current_limits",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Connects two voltage sinks together (FET top sink to exterior source)."
    },
    {
      "name": "",
      "type": "Iso1050dub",
      "superClasses": [
        "IsolatedCanTransceiver"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "can_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "can_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Abstract CAN transceiver"
    },
    {
      "name": "",
      "type": "AnalogToDigital",
      "superClasses": [
        "Interface"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Interface devices, eg CAN transceiver (CAN <-> SPI / I2C interface),\nand including analog interfaces (ADCs, DACs)."
    },
    {
      "name": "",
      "type": "JlcCrystal",
      "superClasses": [
        "Crystal"
      ],
      "ports": [
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Discrete component that typically provides untyped ports (not to be be used directly), as a component to be used in an application circuit."
    },
    {
      "name": "",
      "type": "VoltageSinkBridge",
      "superClasses": [
        "CircuitPortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "inner_link",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "DirectionSwitch",
      "superClasses": [
        "DiscreteComponent"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "d",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Directional switch with a, b, c, d (clockwise) switches and common."
    },
    {
      "name": "",
      "type": "Stm32l432k_Device",
      "superClasses": [
        "Stm32l432Base_Device"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "nrst",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "\"STM32L432Kx in UFQFPN32 package."
    },
    {
      "name": "",
      "type": "Vl53l0xApplication",
      "superClasses": [
        "Vl53l0x"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "xshut",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gpio1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Board-mount laser ToF sensor"
    },
    {
      "name": "",
      "type": "SmdStandardPackage",
      "superClasses": [],
      "ports": [],
      "argParams": [
        {
          "name": "smd_min_package",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": true,
      "docstring": "A base mixin for any device that can generate into a standard SMT package, the 0402/0603/0805/etc series.\nThis provides a parameter that can be globally set to specify a minimum package size.\nDevices may generate into nonstandard packages, those are not affected.\nIf this parameter is empty, no minimums are applied.\n\nInheriting this class does not provide any behavior, it only adds the minimum parameter.\n\nFor non-generators classes that inherit this, the minimum size should be used as an assertion."
    },
    {
      "name": "",
      "type": "PinHeader254Vertical",
      "superClasses": [
        "PinHeader254",
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Generic 2.54mm pin header in vertical through-hole."
    },
    {
      "name": "",
      "type": "TestPoint",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "io",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract test point that can take a name as a string, used as the footprint value.\n  "
    },
    {
      "name": "",
      "type": "OpampCurrentSensor",
      "superClasses": [
        "Sensor"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "ref",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "ratio",
          "type": "range",
          "default_value": null
        },
        {
          "name": "input_impedance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Current sensor block using a resistive sense element and an opamp-based differential amplifier.\nFor a positive current (flowing from pwr_in -> pwr_out), this generates a positive voltage on the output.\nOutput reference can be floating (eg, at Vdd/2) to allow bidirectional current sensing."
    },
    {
      "name": "",
      "type": "Ice40up5k_Sg48",
      "superClasses": [
        "Ice40up"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "cdone",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Application circuit for the iCE40UP series FPGAs, pre-baked for 'common' applications\n(3.3v supply with 1.2v core not shared, external FLASH programming, no NVCM programming).\n\nTODO: generator support for CRAM (volatile) programming mode, diode 2v5 NVCM supply."
    },
    {
      "name": "",
      "type": "ResistiveDivider",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "top",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "center",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "bottom",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "ratio",
          "type": "range",
          "default_value": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "series",
          "type": "int",
          "default_value": 24
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.01
        }
      ],
      "is_abstract": false,
      "docstring": "Abstract, untyped (Passive) resistive divider, that takes in a ratio and parallel impedance spec."
    },
    {
      "name": "",
      "type": "L78l",
      "superClasses": [
        "LinearRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "L78Lxx high(er) input voltage linear regulator in SOT-89.\n  "
    },
    {
      "name": "",
      "type": "DigitalSourceConnected",
      "superClasses": [
        "DefaultConnectionBlock"
      ],
      "ports": [
        {
          "name": "out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "in_connected",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "in_default",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "in_is_connected",
          "type": "bool",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "The template actually lives here"
    },
    {
      "name": "",
      "type": "Mcp4921",
      "superClasses": [
        "DigitalToAnalog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "ref",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ldac",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP4921 12-bit 4.5uS DAC.\nOther chips in series:\nMCP4901 (8 bits), MCP4911 (10 bits), and others with 2 channels or internal Vref"
    },
    {
      "name": "",
      "type": "Fcr7350",
      "superClasses": [
        "BananaSafetyJack"
      ],
      "ports": [
        {
          "name": "port",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "FCR7350x PTH right-angle safety banana jack connector.\nx indicates the color code.\n\nPotentially footprint compatible with Pomona 73099 (~$9)?\n\nTODO: automatically support color code generation?"
    },
    {
      "name": "",
      "type": "VoltageIndicatorLed",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "color",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "LED connected to a voltage rail as an indicator that there is voltage present"
    },
    {
      "name": "",
      "type": "BootstrapVoltageAdder",
      "superClasses": [],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_pos",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_neg",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwm",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out_pos",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out_neg",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            250000.0,
            250000.0
          ]
        },
        {
          "name": "ripple_limit",
          "type": "float",
          "default_value": 0.025
        }
      ],
      "is_abstract": false,
      "docstring": "Bipolar (positive and negative) voltage adder using a switched cap circuit.\n    "
    },
    {
      "name": "",
      "type": "Mcp73831",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_bat",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "stat",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "charging_current",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Single-cell Li-ion / Li-poly charger, seemingly popular on Adafruit and Sparkfun boards."
    },
    {
      "name": "",
      "type": "Fpga",
      "superClasses": [
        "ProgrammableController"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "FPGA with its surrounding application circuit."
    },
    {
      "name": "",
      "type": "Skrtlae010",
      "superClasses": [
        "TactileSwitch"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Abstract class (category) for a tactile switch."
    },
    {
      "name": "",
      "type": "DigitalDirectionSwitch",
      "superClasses": [
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "c",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "d",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Wrapper around DirectionSwitch that provides digital ports that are pulled low (to GND) when pressed."
    },
    {
      "name": "",
      "type": "Cbmud1200l",
      "superClasses": [
        "DigitalIsolator"
      ],
      "ports": [
        {
          "name": "pwr_a",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd_a",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "in_a",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "out_a",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "pwr_b",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd_b",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "in_b",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "out_b",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Multichannel digital isolator, shifts logic signals between different logic voltages\nand isolation domains. Supports arbitrary channels in either direction, but it needs to\nmap down to a single chip (or be multipacked).\nin_a -> out_b, and in_b -> out_a must each have the same array elements, which is how\nchannels will be matched to pins."
    },
    {
      "name": "",
      "type": "BananaJack",
      "superClasses": [
        "Connector"
      ],
      "ports": [
        {
          "name": "port",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for a single terminal 4mm banana jack, such as used on test equipment."
    },
    {
      "name": "",
      "type": "PinHeader254Horizontal",
      "superClasses": [
        "PinHeader254",
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Generic 2.54mm pin header in horizontal (right-angle) through-hole."
    },
    {
      "name": "",
      "type": "IdealVoltageRegulator",
      "superClasses": [
        "Resettable",
        "DiscreteBuckBoostConverter",
        "IdealModel"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Ideal buck-boost / general DC-DC converter producing the spec output voltage\nand drawing input current from conversation of power"
    },
    {
      "name": "",
      "type": "VoltageReference",
      "superClasses": [
        "LinearRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Voltage reference, generally provides high accuracy but limited current"
    },
    {
      "name": "",
      "type": "Pcf8574_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "io",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Abstract base class for pin-mappable devices. Provides a named initializer argument for user-defined explicit\npin mapping refinements. Actual pin mapping functionality must be implemented by the subclass.\nThis may simply delegate the pin mapping to an inner block, for example for a microcontroller application circuit\nto delegate the pin mapping to the microcontroller chip block."
    },
    {
      "name": "",
      "type": "Resettable",
      "superClasses": [
        "Block"
      ],
      "ports": [
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "MicroSdSocket",
      "superClasses": [
        "SdCard"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "MicroSD socket"
    },
    {
      "name": "",
      "type": "NetPackingBlock",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Internal blocks that are primarily an implementation detail or automatically generated by the system,\nand not meant for system-level users to instantiate."
    },
    {
      "name": "",
      "type": "Pcf2129_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_bat",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "clkout",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "int",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "bbs",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "RTC with integrated crystal. SO-16 version"
    },
    {
      "name": "",
      "type": "IndicatorSinkRgbLed",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "signals",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Common anode indicator RGB LED"
    },
    {
      "name": "",
      "type": "Lpc1549_48_Device",
      "superClasses": [
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerDac",
        "IoControllerCan",
        "IoControllerUsb",
        "BaseIoController",
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "xtal",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "xtal_rtc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Eventually, the USB device port will be an IoController mixin.\nFor now, it's part of base, since it's common enough and there isn't GUI support for mixins.\n\nThis class SHOULD BE mixed into IoController blocks, in preparation for the eventual move.\nThis WILL NOT WORK when used in .with_mixin, since this defines no fields."
    },
    {
      "name": "",
      "type": "BrushedMotorDriver",
      "superClasses": [
        "MotorDriver"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "A brushed motor driver, or at least the power stage for one."
    },
    {
      "name": "",
      "type": "Max98357a_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sTargetReceiver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "out",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "SolidStateRelay",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "feta",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "fetb",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for solid state relays.\nLED pins are passive (like the abstract LED) and the enclosing class should provide\nthe circuitry to make it a DigitalSink port."
    },
    {
      "name": "",
      "type": "Ft232hl",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "mpsse",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "mpsse_cs",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "adbus",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "acbus",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "USB multiprotocol converter"
    },
    {
      "name": "",
      "type": "Opa2333",
      "superClasses": [],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Dual precision RRIO (including negative input) opamps.\n\nTODO infrastructure for packed opamps? Packed opamp abstract class?"
    },
    {
      "name": "",
      "type": "LedDriver",
      "superClasses": [
        "PowerConditioner",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "max_current",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract current-regulated high-power LED driver.\nLED ports are passive and should be directly connected to the LED (or LED string)."
    },
    {
      "name": "",
      "type": "SwitchingVoltageRegulator",
      "superClasses": [
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": null
        },
        {
          "name": "input_ripple_limit",
          "type": "float",
          "default_value": 0.075
        },
        {
          "name": "output_ripple_limit",
          "type": "float",
          "default_value": 0.025
        }
      ],
      "is_abstract": true,
      "docstring": "Structural abstract base class for DC-DC voltage regulators with shared ground (non-isolated).\nThis takes some input voltage and produces a stable voltage at output_voltage on its output.\n\nWhile this abstract class does not define any limitations on the output voltage, subclasses and concrete\nimplementations commonly have restrictions, for example linear regulators can only produce voltages lower\nthan the input voltage."
    },
    {
      "name": "",
      "type": "Freenove_Esp32s3_Wroom",
      "superClasses": [
        "IoControllerUsbOut",
        "IoControllerPowerOut",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerTouchDriver",
        "IoControllerCan",
        "IoControllerUsb",
        "IoControllerI2s",
        "IoControllerDvp8",
        "IoControllerWifi",
        "IoControllerBle",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Freenove ESP32S3 WROOM breakout breakout with camera.\n\nBoard pinning: https://github.com/Freenove/Freenove_ESP32_S3_WROOM_Board/blob/main/ESP32S3_Pinout.png\n\nTop left is pin 1, going down the left side then up the right side.\nUp is defined from the text orientation (antenna is on top)."
    },
    {
      "name": "",
      "type": "DummyVoltageSource",
      "superClasses": [
        "DummyDevice"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Ap2210_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "en",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "PackedPassive",
      "superClasses": [
        "NetPackingBlock"
      ],
      "ports": [
        {
          "name": "elts",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "merged",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or automatically generated by the system,\nand not meant for system-level users to instantiate."
    },
    {
      "name": "",
      "type": "Er_Oled_096_1_1",
      "superClasses": [
        "Oled"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1306-based 0.96\" 128x64 monochrome OLED, in either I2C or SPI mode."
    },
    {
      "name": "",
      "type": "DigitalToAnalog",
      "superClasses": [
        "Interface"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Interface devices, eg CAN transceiver (CAN <-> SPI / I2C interface),\nand including analog interfaces (ADCs, DACs)."
    },
    {
      "name": "",
      "type": "KiCadJlcBlackbox",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [
        {
          "name": "ports",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "kicad_pins",
          "type": "array",
          "default_value": null
        },
        {
          "name": "kicad_refdes_prefix",
          "type": "str",
          "default_value": null
        },
        {
          "name": "kicad_footprint",
          "type": "str",
          "default_value": null
        },
        {
          "name": "kicad_part",
          "type": "str",
          "default_value": null
        },
        {
          "name": "kicad_value",
          "type": "str",
          "default_value": null
        },
        {
          "name": "kicad_datasheet",
          "type": "str",
          "default_value": null
        },
        {
          "name": "kicad_jlcpcb_part",
          "type": "str",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Similar to KiCadBlackbox, but also supports the lcsc_part field using the symbol's 'JLCPCB Part #'.\nThis can't extend KiCadBlackbox because KiCadBlackbox.block_from_symbol is non-compositional"
    },
    {
      "name": "",
      "type": "IndicatorSinkPackedRgbLedElement",
      "superClasses": [
        "IndicatorSinkLed"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Abstract part for an low-side-driven (\"common anode\") indicator LED"
    },
    {
      "name": "",
      "type": "PriorityPowerOr",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr_hi",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_lo",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "diode_voltage_drop",
          "type": "range",
          "default_value": null
        },
        {
          "name": "fet_rds_on",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Power merge block for two power inputs, where the high priority input (e.g. USB) is higher voltage and\nthe low priority input is lower voltage (e.g. battery).\nThe higher priority input incurs a diode drop, while the lower priority input has a FET.\nAs a side effect, the FET power path also acts as reverse polarity protection."
    },
    {
      "name": "",
      "type": "W25q",
      "superClasses": [
        "SpiMemory",
        "SpiMemoryQspi"
      ],
      "ports": [
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io3",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Winbond W25Q series of SPI memory devices\n  "
    },
    {
      "name": "",
      "type": "Connector",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Connectors, including card sockets."
    },
    {
      "name": "",
      "type": "Tpa2005d1_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vo1",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vo2",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "VoltageSinkAdapterAnalogSource",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "dst",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "MergedDigitalSource",
      "superClasses": [
        "DummyDevice",
        "NetBlock"
      ],
      "ports": [
        {
          "name": "ins",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Nucleo_F303k8",
      "superClasses": [
        "IoControllerUsbOut",
        "IoControllerPowerOut",
        "IoController",
        "IoControllerI2cTarget",
        "IoControllerDac",
        "IoControllerCan",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nucleo32 F303K8 configured as power source from USB."
    },
    {
      "name": "",
      "type": "DuckLogo",
      "superClasses": [
        "Label"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonfunctional footprint, including copper and silkscreen labels."
    },
    {
      "name": "",
      "type": "PinHeader127DualShrouded",
      "superClasses": [
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Generic dual-row 1.27mm pin header in vertical through-hole pinned in zigzag."
    },
    {
      "name": "",
      "type": "OpampFollower",
      "superClasses": [
        "OpampApplication"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Opamp follower circuit, outputs the same signal as the input (but probably stronger)."
    },
    {
      "name": "",
      "type": "IoControllerI2s",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "An interface mixin, allowing additional interface elements (parameters, ports) to be added to\na block interface - e.g., IoController with HasI2s.\n\nThis class should be directly part of the superclass list for an implementing class\n(e.g. Nrf52840 which has I2S should extend HasI2s).\n\nThis class should only be directly instantiated when adding the mixin interfaces to an abstract\nclass, e.g. IoController.with(HasI2s()). Instances of this class are not really valid on their own.\n\nThis may define __init__ parameters as keyword arguments ONLY. Otherwise, this can mess up\nparameter propagation in super().__init__ calls in implementing classes.\n\nThis should only be used for defining interface mixins. Implementation mixins should be defined\nusing the standard Block class hierarchy, however this acts like any Block just with mixin capabilities.\nTODO: is this a good decision?\nTODO: what about cases where it's a bit mixed, e.g. HasI2s also needs to register the self.i2s port?"
    },
    {
      "name": "",
      "type": "Pcf8574",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "io",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "8 bit I2C IO expander with 'quasi-bidirectional IOs'"
    },
    {
      "name": "",
      "type": "Tps561201_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "fb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vbst",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "en",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Er_Oled_096_1c_Outline",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Footprint for OLED panel outline"
    },
    {
      "name": "",
      "type": "BldcDriver",
      "superClasses": [
        "MotorDriver"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "A brushless motor driver, or at least the power stage for one - may be as simple a 3 half-bridges."
    },
    {
      "name": "",
      "type": "GenericChipResistor",
      "superClasses": [
        "Resistor",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "series",
          "type": "int",
          "default_value": 24
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.01
        },
        {
          "name": "footprint_spec",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Default generator that automatically picks resistors from the E-series specified.\nPreferentially picks lower E-series (E1 before E3 before E6 ...) value meeting the needs\nat the specified tolerance.\nThen, picks the minimum (down to 0603, up to 2512) SMD size for the power requirement.\n\nA series of 0 means exact, but tolerance is still checked."
    },
    {
      "name": "",
      "type": "Diode",
      "superClasses": [
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "anode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cathode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "reverse_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "reverse_recovery_time",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Base class for untyped diodes\n\nTODO power? capacitance? leakage current?"
    },
    {
      "name": "",
      "type": "Apx803s_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "nreset",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "reset_threshold",
          "type": "range",
          "default_value": [
            2.59,
            2.67
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "L74Ahct1g125",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Single buffer, useful as a level shifter"
    },
    {
      "name": "",
      "type": "HumanInterface",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Devices for human interface, eg switches, displays, LEDs"
    },
    {
      "name": "",
      "type": "PinSocket254",
      "superClasses": [
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Generic 2.54mm pin socket in vertical through-hole."
    },
    {
      "name": "",
      "type": "DigitalBidirNotConnected",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [
        {
          "name": "port",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Not-connected dummy block for Digital bidir ports"
    },
    {
      "name": "",
      "type": "Fuse",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "trip_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "hold_current",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Stm32l432k",
      "superClasses": [
        "Stm32l432Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "MountingHole_M2_5",
      "superClasses": [
        "MountingHole"
      ],
      "ports": [
        {
          "name": "pad",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonelectrical footprint, including plated and NPTH mounting holes."
    },
    {
      "name": "",
      "type": "JstPhKVertical",
      "superClasses": [
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "JST B*B-PH-K series connector: 2.00mm shrouded and polarized, in vertical through-hole."
    },
    {
      "name": "",
      "type": "PackedVoltageSource",
      "superClasses": [
        "NetPackingBlock"
      ],
      "ports": [
        {
          "name": "pwr_ins",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Takes in several VoltageSink connections that are of the same net (asserted in netlister),\nand provides a single VoltageSource. Distributes the current draw from the VoltageSource\nequally among the inputs."
    },
    {
      "name": "",
      "type": "HighSideSwitch",
      "superClasses": [
        "PowerSwitch"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "pull_resistance",
          "type": "range",
          "default_value": [
            9500.0,
            10500.0
          ]
        },
        {
          "name": "max_rds",
          "type": "float",
          "default_value": 1.0
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "clamp_voltage",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "clamp_resistance_ratio",
          "type": "float",
          "default_value": 10
        }
      ],
      "is_abstract": false,
      "docstring": "A high-side FET switch, using a two switch architecture, a main pass PFET with a amplifier NFET to drive its gate.\nIf clamp_voltage is nonzero, a zener clamp is generated to limit the PFET gate voltage.\nThe clamp resistor is specified as a ratio from the pull resistance.\n\nTODO: clamp_voltage should be compared against the actual voltage so the clamp is automatically generated,\nbut generators don't support link terms (yet?)"
    },
    {
      "name": "",
      "type": "Pca9554_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "io",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Abstract base class for pin-mappable devices. Provides a named initializer argument for user-defined explicit\npin mapping refinements. Actual pin mapping functionality must be implemented by the subclass.\nThis may simply delegate the pin mapping to an inner block, for example for a microcontroller application circuit\nto delegate the pin mapping to the microcontroller chip block."
    },
    {
      "name": "",
      "type": "DigitalLowPassRcArray",
      "superClasses": [
        "DigitalFilter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Array of DigitalLowPassRc, currently takes its size from the output.\nTODO: properly size when either input or output is sized?"
    },
    {
      "name": "",
      "type": "SdCard",
      "superClasses": [
        "Memory"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Minimum connections for SD card, with IOs definitions set according to SD card spec"
    },
    {
      "name": "",
      "type": "NeopixelArray",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "count",
          "type": "int",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "An array of Neopixels"
    },
    {
      "name": "",
      "type": "PowerSource",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Power sources, including connectors that also supply power."
    },
    {
      "name": "",
      "type": "GenericAxialVerticalResistor",
      "superClasses": [
        "Resistor",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "series",
          "type": "int",
          "default_value": 24
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.01
        },
        {
          "name": "footprint_spec",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Default generator that automatically picks resistors from the E-series specified.\nPreferentially picks lower E-series (E1 before E3 before E6 ...) value meeting the needs\nat the specified tolerance.\nThen, picks the minimum (down to 0603, up to 2512) SMD size for the power requirement.\n\nA series of 0 means exact, but tolerance is still checked."
    },
    {
      "name": "",
      "type": "DigitalBidirBridge",
      "superClasses": [
        "CircuitPortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "inner_link",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "Lpc1549SwdPull",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "swd",
          "type": "SwdPullPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "LeadFreeIndicator",
      "superClasses": [
        "Label"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonfunctional footprint, including copper and silkscreen labels."
    },
    {
      "name": "",
      "type": "Display",
      "superClasses": [
        "HumanInterface"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Pixel displays."
    },
    {
      "name": "",
      "type": "Lmv321_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vinp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vinn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vout",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "DigitalSingleSourceBridge",
      "superClasses": [
        "CircuitPortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "inner_link",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "OscillatorReference",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Subcircuit around a single discrete (and usually passive) component."
    },
    {
      "name": "",
      "type": "AnalogMuxer",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "inputs",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around AnalogSwitch that provides muxing functionality - multiple sink ports, one source port.\n  "
    },
    {
      "name": "",
      "type": "Nrf52840_Base",
      "superClasses": [
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerUsb",
        "IoControllerI2s",
        "IoControllerBle",
        "BaseIoController",
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr_usb",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "xtal",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "xtal_rtc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "nreset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "nRF52840 IO mappings\nhttps://infocenter.nordicsemi.com/pdf/nRF52840_PS_v1.7.pdf"
    },
    {
      "name": "",
      "type": "JlcToolingHole",
      "superClasses": [
        "Mechanical"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonelectrical footprint, including plated and NPTH mounting holes."
    },
    {
      "name": "",
      "type": "PulldownResistorArray",
      "superClasses": [
        "TypedTestPoint"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": true,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Array of PulldownResistors, sized from the port array's connections."
    },
    {
      "name": "",
      "type": "JstPhSmVerticalJlc",
      "superClasses": [
        "JstPhSmVertical"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "JST PH connector in SMD, with JLC part numbers for what parts are stocked (JST or clones,\nsince JLC's inventory of PH SMD connectors is pretty spotty)."
    },
    {
      "name": "",
      "type": "VoltageTestPoint",
      "superClasses": [
        "TypedTestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Test point with a VoltageSink port."
    },
    {
      "name": "",
      "type": "GenericAxialResistor",
      "superClasses": [
        "Resistor",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "series",
          "type": "int",
          "default_value": 24
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.01
        },
        {
          "name": "footprint_spec",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Default generator that automatically picks resistors from the E-series specified.\nPreferentially picks lower E-series (E1 before E3 before E6 ...) value meeting the needs\nat the specified tolerance.\nThen, picks the minimum (down to 0603, up to 2512) SMD size for the power requirement.\n\nA series of 0 means exact, but tolerance is still checked."
    },
    {
      "name": "",
      "type": "JacdacMountingData1",
      "superClasses": [],
      "ports": [
        {
          "name": "jd_data",
          "type": "JacdacPassivePort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Jacdac mounting hole for data, with a passive-typed port so it doesn't count as a connection\nfor validation purposes."
    },
    {
      "name": "",
      "type": "SwdCortexTargetTagConnect",
      "superClasses": [
        "SwdCortexTargetConnector",
        "SwdCortexTargetConnectorReset",
        "SwdCortexTargetConnectorSwo"
      ],
      "ports": [
        {
          "name": "swo",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "reset",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "swd",
          "type": "SwdHostPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "OFFICIAL tag connect SWD header using the TC2030 series cables.\nhttps://www.tag-connect.com/wp-content/uploads/bsk-pdf-manager/TC2030-CTX_1.pdf"
    },
    {
      "name": "",
      "type": "Mcp3561",
      "superClasses": [
        "AnalogToDigital"
      ],
      "ports": [
        {
          "name": "pwra",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vref",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vins",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP3561R up-to-24-bit delta-sigma ADC with internal voltage reference.\n  "
    },
    {
      "name": "",
      "type": "Analog",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Analog blocks that don't fit into one of the other categories"
    },
    {
      "name": "",
      "type": "JlcResistorArray",
      "superClasses": [
        "ResistorArray"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "An n-element resistor array, where all resistors have the same resistance and power rating."
    },
    {
      "name": "",
      "type": "IndicatorSinkPackedRgbLed",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "red_sig",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "green_sig",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "blue_sig",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "red_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "green_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "blue_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Discrete lights."
    },
    {
      "name": "",
      "type": "Lpc1549_64_Device",
      "superClasses": [
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerDac",
        "IoControllerCan",
        "IoControllerUsb",
        "BaseIoController",
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "xtal",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "xtal_rtc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Eventually, the USB device port will be an IoController mixin.\nFor now, it's part of base, since it's common enough and there isn't GUI support for mixins.\n\nThis class SHOULD BE mixed into IoController blocks, in preparation for the eventual move.\nThis WILL NOT WORK when used in .with_mixin, since this defines no fields."
    },
    {
      "name": "",
      "type": "MountingHole_M3",
      "superClasses": [
        "MountingHole"
      ],
      "ports": [
        {
          "name": "pad",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonelectrical footprint, including plated and NPTH mounting holes."
    },
    {
      "name": "",
      "type": "Lcd",
      "superClasses": [
        "Display"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "LCD display, where pixels absorb / reflect light, but do not directly emit light (eg, use a backlight, or are transflective)."
    },
    {
      "name": "",
      "type": "Ec05e",
      "superClasses": [
        "RotaryEncoder"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Generic EC05E PTH rotary encoder with hollow shaft.\nDefault part is EC05E1220401, horizontal-mount part."
    },
    {
      "name": "",
      "type": "PassiveAdapterVoltageSink",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dst",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "voltage_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "MergedVoltageSource",
      "superClasses": [
        "DummyDevice",
        "NetBlock"
      ],
      "ports": [
        {
          "name": "pwr_ins",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Feather_Nrf52840",
      "superClasses": [
        "IoControllerUsbOut",
        "IoControllerPowerOut",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerUsb",
        "IoControllerI2s",
        "IoControllerBle",
        "IoController",
        "BaseIoController",
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Feather nRF52840 socketed dev board as either power source or sink"
    },
    {
      "name": "",
      "type": "L293dd",
      "superClasses": [
        "BrushedMotorDriver"
      ],
      "ports": [
        {
          "name": "vs",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "en1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "en2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "in1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "in2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "in3",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "in4",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out1",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out2",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out3",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out4",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A brushed motor driver, or at least the power stage for one."
    },
    {
      "name": "",
      "type": "Label",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Nonfunctional footprint, including copper and silkscreen labels."
    },
    {
      "name": "",
      "type": "MolexSl",
      "superClasses": [
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Molex SL series connector: 2.54mm shrouded and polarized, in vertical through-hole.\nBreadboard wire compatible - especially for debugging in a pinch."
    },
    {
      "name": "",
      "type": "DigitalTestPoint",
      "superClasses": [
        "TypedTestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Test point with a DigitalSink port."
    },
    {
      "name": "",
      "type": "JlcResistor",
      "superClasses": [
        "Resistor",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Passives components, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "Esp32c3",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "Resettable",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerI2s",
        "IoControllerWifi",
        "IoControllerBle",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32-C3 application circuit, bare chip + RF circuits.\nNOT RECOMMENDED - you will need to do your own RF layout, instead consider using the WROOM module."
    },
    {
      "name": "",
      "type": "JacdacEdgeConnector",
      "superClasses": [
        "Connector"
      ],
      "ports": [
        {
          "name": "gnd_src",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "jd_pwr_src",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd_sink",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "jd_pwr_sink",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "jd_data",
          "type": "JacdacDataPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "jd_status",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "is_power_provider",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": false,
      "docstring": "Jacdac edge connector, in power sink or source mode (both available, but both may not be connected simultaneously).\nThis includes the required per-port application circuitry, including status LEDs and ESD diodes.\nThis does NOT include device-wide application circuitry like EMI filters.\n\nRequires this KiCad footprint library to be available: https://github.com/mattoppenheim/jacdac"
    },
    {
      "name": "",
      "type": "SeriesPowerFerriteBead",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "hf_impedance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "dc_resistance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Series ferrite bead for power applications"
    },
    {
      "name": "",
      "type": "Ld1117",
      "superClasses": [
        "LinearRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Structural abstract base class for linear regulators, a voltage regulator that can produce some\noutput voltage lower than its input voltage (minus some dropout) by 'burning' the excess voltage as heat.\n\nCompared to switching converters like buck and boost converters, linear regulators usually have lower\ncomplexity, lower parts count, and higher stability. However, depending on the application, they are\ntypically less efficient, and at higher loads may require thermal design considerations."
    },
    {
      "name": "",
      "type": "Er_Oled_091_3_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vcomh",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vbat",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "res",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "iref",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c2p",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c2n",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c1p",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c1n",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "15-pin FPC connector for the ER-OLED-0.91-3* device, configured to run off\ninternal DC/DC"
    },
    {
      "name": "",
      "type": "GenericMlcc",
      "superClasses": [
        "Capacitor",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "pos",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "neg",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "footprint_spec",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "derating_coeff",
          "type": "float",
          "default_value": 1.0
        }
      ],
      "is_abstract": false,
      "docstring": "Generic SMT ceramic capacitor (MLCC) picker that chooses a common value (E-series) based on rules\nspecifying what capacitances / voltage ratings are available in what packages.\n\nChosen by a rough scan over available parts on Digikey\nat voltages 10v, 16v, 25v, 50v, 100v, 250v\nand capacitances 1.0, 2.2, 4.7\n\nFor Class-1 dielectric (C0G/NP0), 20% tolerance\n0402: 50v/1nF\n0603: 100v/1nF, 50v/2.2nF ?\n0805: 100v/2.2nF, 50v/10nF\n1206: 100v/10nF\n\nFor Class-2 dielectric (X**), 20% tolerance\n0402:                   50v /                0.1uF,     25v / 0.1uF,                      10v / 2.2uF\n0603:                   50v /                0.1uF,     25v /   1uF,     16v / 2.2uF,     10v /  10uF\n0805: 100v / 0.1uF,     50v / 0.1uF (maybe 0.22uF),     25v /  10uF\n1206: 100v / 0.1uF,     50v /                4.7uF,     25v /  10uF,                      10v /  22uF\n1210: 100v / 4.7uF,     50v /                 10uF,                      16v /  22uF,     10v /  47uF\n1812: 100v / 2.2uF,     50v /                  1uF,     25v /  10uF (though small sample size)\n\nDerating coefficients in terms of %capacitance / V over 3.6\n'Capacitor_SMD:C_0603_1608Metric'  # not supported, should not generate below 1uF"
    },
    {
      "name": "",
      "type": "Lpc1549Base",
      "superClasses": [
        "Resettable",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerDac",
        "IoControllerCan",
        "IoControllerUsb",
        "Microcontroller",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "Ucc27282",
      "superClasses": [
        "HalfBridgeDriver"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "low_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "high_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "low_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "high_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "high_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "high_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "has_boot_diode",
          "type": "bool",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "UCC27282 half-bridge driver supporting 100V offset, 5.5-16v input, internal boot diode,\nshoot through protect, no deadtime."
    },
    {
      "name": "",
      "type": "Sensor",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "JlcSwitch",
      "superClasses": [
        "TactileSwitch"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Abstract class (category) for a tactile switch."
    },
    {
      "name": "",
      "type": "PassiveAdapterDigitalSource",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dst",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "output_thresholds",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "pullup_capable",
          "type": "bool",
          "default_value": 0.0
        },
        {
          "name": "pulldown_capable",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "BoostConverterPowerPath",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "switch",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "input_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        },
        {
          "name": "output_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": null
        },
        {
          "name": "inductor_current_ripple",
          "type": "range",
          "default_value": null
        },
        {
          "name": "efficiency",
          "type": "range",
          "default_value": "(0.8, 1.0)"
        },
        {
          "name": "input_voltage_ripple",
          "type": "float",
          "default_value": 0.075
        },
        {
          "name": "output_voltage_ripple",
          "type": "float",
          "default_value": 0.025
        },
        {
          "name": "dutycycle_limit",
          "type": "range",
          "default_value": "(0.2, 0.85)"
        }
      ],
      "is_abstract": false,
      "docstring": "A helper block to generate the power path (inductors, capacitors) for a synchronous boost converter.\n\nMain assumptions in component sizing\n- Operating only in continuous mode, TODO: also consider boundary and discontinuous mode\n- TODO: account for capacitor ESR?\n\nUseful resources:\nhttps://www.ti.com/lit/an/slva372c/slva372c.pdf\n  Component sizing in continuous mode\n  Listed references go into more detail\nhttp://www.simonbramble.co.uk/dc_dc_converter_design/boost_converter/boost_converter_design.htm\n  Detailed analysis of converter with discrete FET and diode"
    },
    {
      "name": "",
      "type": "AnalogIsolatedSwitch",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "apull",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "ain",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "aout",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Digitally controlled solid state relay that switches an analog signal.\nIncludes a ballasting resistor.\n\nThe ports are not tagged with Input/Output/InOut, because of potential for confusion between\nthe digital side and the analog side.\n\nA separate output-side pull port allows modeling the output switch standoff voltage\nwhen the switch is off."
    },
    {
      "name": "",
      "type": "EspProgrammingTc2030",
      "superClasses": [
        "EspProgrammingAutoReset",
        "EspProgrammingHeader"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "en",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "boot",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "UNOFFICIAL tag connect header, based on a modification of the FT232 cable\n(https://www.tag-connect.com/product/tc2030-ftdi-ttl-232rg-vsw3v3)\nbut adding the auto-programming pins (and using DTR instead of CTS into the cable).\nPower pins compatible with the official SWD header.\n\nPer boot docs, EN is connected to RTS and boot is connected to DTR (CTS on the original pinning,\nsince it doesn't have a DTR pin)."
    },
    {
      "name": "",
      "type": "Drv8833_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vm",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vint",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vcp",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ain1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "ain2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "bin1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "bin2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "nsleep",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "aout1",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "aout2",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "bout1",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "bout2",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Fpc050",
      "superClasses": [
        "PassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract base class for 0.50mm pitch FPC connectors."
    },
    {
      "name": "",
      "type": "OscillatorCrystal",
      "superClasses": [
        "OscillatorReference"
      ],
      "ports": [
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Crystal and supporting circuitry to connect it to an oscillator driver.\nShould include load capacitors."
    },
    {
      "name": "",
      "type": "Rp2040Usb",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "usb_rp",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Supporting passives for USB for RP2040"
    },
    {
      "name": "",
      "type": "JacdacMountingPwr3",
      "superClasses": [],
      "ports": [
        {
          "name": "jd_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Block that represents a component that has part(s) and trace(s) on the PCB.\nProvides interfaces that define footprints and copper connections and generates to appropriate metadata."
    },
    {
      "name": "",
      "type": "HiroseDm3btDsfPejs",
      "superClasses": [
        "MicroSdSocket",
        "Connector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MicroSD socket"
    },
    {
      "name": "",
      "type": "Sk6812_Side_A",
      "superClasses": [
        "Neopixel"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SK6812-SIDE-A side-emitting Neopixel LED."
    },
    {
      "name": "",
      "type": "MotorDriver",
      "superClasses": [
        "PowerSwitch"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Power switching circuits, eg FET switches and motor drivers"
    },
    {
      "name": "",
      "type": "JlcCapacitor",
      "superClasses": [
        "Capacitor",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "pos",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "neg",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "capacitance_minimum_size",
          "type": "bool",
          "default_value": 1.0
        }
      ],
      "is_abstract": false,
      "docstring": "Abstract table-based capacitor with derating based on a part-part voltage coefficient."
    },
    {
      "name": "",
      "type": "VoltageSourceBridge",
      "superClasses": [
        "CircuitPortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "inner_link",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "ForcedAnalogSignal",
      "superClasses": [
        "DummyDevice",
        "NetBlock"
      ],
      "ports": [
        {
          "name": "signal_in",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "signal_out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "forced_signal",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "Supercap",
      "superClasses": [
        "DiscreteComponent"
      ],
      "ports": [
        {
          "name": "pos",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "neg",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Discrete component that typically provides untyped ports (not to be be used directly), as a component to be used in an application circuit."
    },
    {
      "name": "",
      "type": "L74Ahct1g125_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "a",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "y",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Accelerometer",
      "superClasses": [
        "Sensor"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "PinHeader254",
      "superClasses": [
        "PassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract base class for all 2.54mm pin headers."
    },
    {
      "name": "",
      "type": "PassiveAdapterDigitalSink",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dst",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "voltage_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "input_thresholds",
          "type": "range",
          "default_value": [
            NaN,
            NaN
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "IdealBoostConverter",
      "superClasses": [
        "Resettable",
        "DiscreteBoostConverter",
        "IdealModel"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Ideal boost converter producing the spec output voltage (buck-boost) limited by input voltage\nand drawing input current from conversation of power"
    },
    {
      "name": "",
      "type": "RotaryEncoder",
      "superClasses": [
        "DiscreteComponent"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Rotary encoder with discrete clicks and a quadrature signal (A/B/Common).\nIncludes shaft-type encoders as well as thumbwheels."
    },
    {
      "name": "",
      "type": "Stm32l432Base",
      "superClasses": [
        "Resettable",
        "IoControllerDac",
        "IoControllerCan",
        "IoControllerUsb",
        "IoControllerI2cTarget",
        "Microcontroller",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "Drv8313",
      "superClasses": [
        "BldcDriver"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "ens",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "ins",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "nreset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "nsleep",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "nfault",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "outs",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "pgnds",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A brushless motor driver, or at least the power stage for one - may be as simple a 3 half-bridges."
    },
    {
      "name": "",
      "type": "SeriesPowerResistor",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Series resistor for power applications"
    },
    {
      "name": "",
      "type": "Fpc050Top",
      "superClasses": [
        "Fpc050"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract base class for top-contact FPC connectors.\nIMPORTANT: the pin numbering scheme differs for top- and bottom-contact connectors."
    },
    {
      "name": "",
      "type": "Neopixel",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract base class for Neopixel-type LEDs including the Vdd/Gnd/Din/Dout interface."
    },
    {
      "name": "",
      "type": "AnalogTestPoint",
      "superClasses": [
        "TypedTestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Test point with a AnalogSink port."
    },
    {
      "name": "",
      "type": "IoControllerBluetooth",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin indicating this IoController has programmable Bluetooth Classic. Does not expose any ports."
    },
    {
      "name": "",
      "type": "Esp32c3_Base",
      "superClasses": [
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerI2s",
        "IoControllerWifi",
        "IoControllerBle",
        "InternalSubcircuit",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "en",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io8",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io9",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for ESP32-C3 series devices, with RISC-V core, 2.4GHz WiF,i, BLE5.\nPlatformIO: use board ID esp32-c3-devkitm-1\n\nChip datasheet: https://espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf"
    },
    {
      "name": "",
      "type": "LowPassRcDac",
      "superClasses": [
        "DigitalToAnalog"
      ],
      "ports": [
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Low-pass RC filter used as a simple DAC by filtering out a PWM signal.\nThe cutoff frequency of the filter should be sufficiently beneath the PWM frequency,\nbut enough above baseband to not distort the signal.\nLower frequencies will result in either higher impedance or larger caps.\nThis must be manually specified, since PWM frequency data is not part of the electronics model."
    },
    {
      "name": "",
      "type": "Lp5907",
      "superClasses": [
        "Resettable",
        "LinearRegulator",
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "High-PSRR LDO in SOT-23-5.\nOther pin-compatible high-PSRR LDOs:\n- LP5907\n- AP139\n- TCR2EF"
    },
    {
      "name": "",
      "type": "Qt096t_if09",
      "superClasses": [
        "Lcd"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "led",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ST7735S-based LCD module with a 8-pin 0.5mm-pitch FPC connector"
    },
    {
      "name": "",
      "type": "PowerSwitch",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Power switching circuits, eg FET switches and motor drivers"
    },
    {
      "name": "",
      "type": "JlcDummyCapacitor",
      "superClasses": [
        "DummyCapacitorFootprint"
      ],
      "ports": [
        {
          "name": "pos",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "neg",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "set_lcsc_part",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "set_basic_part",
          "type": "bool",
          "default_value": 0.0
        },
        {
          "name": "footprint",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "manufacturer",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "part_number",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "value",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Dummy capacitor that additionally has JLC part fields\n  "
    },
    {
      "name": "",
      "type": "VoltageSinkAdapterDigitalSource",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "dst",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "Bjt",
      "superClasses": [
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "base",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "collector",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "emitter",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "collector_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "collector_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "gain",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "power",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "channel",
          "type": "str",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Base class for untyped BJTs\n  "
    },
    {
      "name": "",
      "type": "Lpc1549_48",
      "superClasses": [
        "Lpc1549Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "Drv8313_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vm",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "v3p3",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vcp",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "ens",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "ins",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "outs",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "nreset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "nsleep",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "nfault",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pgnds",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up"
        },
        {
          "name": "cpl",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cph",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Gyroscope",
      "superClasses": [
        "Sensor"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "Lm4871_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "inm",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vo1",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vo2",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "byp",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "PassiveAdapterDigitalBidir",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dst",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "input_thresholds",
          "type": "range",
          "default_value": [
            NaN,
            NaN
          ]
        },
        {
          "name": "output_thresholds",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "pullup_capable",
          "type": "bool",
          "default_value": 0.0
        },
        {
          "name": "pulldown_capable",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "DigitalArrayTestPoint",
      "superClasses": [
        "TypedTestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Creates an array of Digital test points, sized from the port array's connections."
    },
    {
      "name": "",
      "type": "RotaryEncoderSwitch",
      "superClasses": [
        "RotaryEncoder"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Rotary encoder mixin adding a switch pin (sharing a common with the encoder),\nwith ratings assumed to be the same between the switch and encoder."
    },
    {
      "name": "",
      "type": "UsbDpPullUp",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "usb",
          "type": "UsbPassivePort",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Imu_Lsm6ds3trc_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "int1",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "int2",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "ResistorArrayElement",
      "superClasses": [
        "Resistor"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Passives components, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "Fpc050Bottom",
      "superClasses": [
        "Fpc050"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract base class for bottom-contact FPC connectors.\nIMPORTANT: the pin numbering scheme differs for top- and bottom-contact connectors."
    },
    {
      "name": "",
      "type": "Mcp3561_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "avdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "dvdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vrefp",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "ch",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "SpiTestPoint",
      "superClasses": [
        "TypedTestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Test points for SPI"
    },
    {
      "name": "",
      "type": "I2cPullup",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "i2c",
          "type": "I2cPullupPort",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Interface devices, eg CAN transceiver (CAN <-> SPI / I2C interface),\nand including analog interfaces (ADCs, DACs)."
    },
    {
      "name": "",
      "type": "Ap7215_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Er_Oled_096_1c_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "iref",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vcomh",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vsl",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vp",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "bs0",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "bs1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "res",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "d0",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "d1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "d2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "31-pin FPC connector for the ER-OLED0.96-1C device"
    },
    {
      "name": "",
      "type": "JlcInductor",
      "superClasses": [
        "Inductor",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Passives components, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "AnalogClampZenerDiode",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "signal_in",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "signal_out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Analog overvoltage protection diode to clamp the input voltage"
    },
    {
      "name": "",
      "type": "Lpc1549_64",
      "superClasses": [
        "Lpc1549Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "Ov2640_Fpc24",
      "superClasses": [
        "Sensor"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_analog",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_digital",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "dvp8",
          "type": "Dvp8Camera",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "sio",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "pwdn",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "OV2640 camera as a 24-pin FPC bottom contact connector, as seems to be common on ESP32 with camera boards.\nElectrical parameters from https://www.uctronics.com/download/OV2640_DS.pdf\nPinning and interface circuit from https://github.com/Freenove/Freenove_ESP32_WROVER_Board/blob/f710fd6976e76ab76c29c2ee3042cd7bac22c3d6/Datasheet/ESP32_Schematic.pdf\n  and https://www.waveshare.com/w/upload/9/99/OV2640-Camera-Board-Schematic.pdf\nOn many boards, Y0 and Y1 (LSBs) are left unconnected to save IOs."
    },
    {
      "name": "",
      "type": "LightSensor",
      "superClasses": [
        "Sensor"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "Skrh",
      "superClasses": [
        "DirectionSwitchCenter",
        "DirectionSwitch"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "d",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "center",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Generic SKRH directional switch with pushbutton.\nDefault part is SKRHABE010, but footprint should be compatible with the entire SKRH series."
    },
    {
      "name": "",
      "type": "PassiveAdapterDigitalSingleSource",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dst",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "output_thresholds",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "pullup_capable",
          "type": "bool",
          "default_value": 0.0
        },
        {
          "name": "pulldown_capable",
          "type": "bool",
          "default_value": 0.0
        },
        {
          "name": "low_signal_driver",
          "type": "bool",
          "default_value": 0.0
        },
        {
          "name": "high_signal_driver",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "I2cTestPoint",
      "superClasses": [
        "TypedTestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Two test points for I2C SDA and SCL"
    },
    {
      "name": "",
      "type": "DigitalRotaryEncoder",
      "superClasses": [
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Wrapper around RotaryEncoder that provides digital ports that are pulled low (to GND) when pressed."
    },
    {
      "name": "",
      "type": "Stm32g031Base_Device",
      "superClasses": [
        "IoControllerI2cTarget",
        "IoControllerCan",
        "IoControllerUsb",
        "InternalSubcircuit",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "nrst",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Eventually, the USB device port will be an IoController mixin.\nFor now, it's part of base, since it's common enough and there isn't GUI support for mixins.\n\nThis class SHOULD BE mixed into IoController blocks, in preparation for the eventual move.\nThis WILL NOT WORK when used in .with_mixin, since this defines no fields."
    },
    {
      "name": "",
      "type": "Shtc3_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "PullupResistorArray",
      "superClasses": [
        "TypedTestPoint"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": true,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Array of PullupResistors, sized from the port array's connections."
    },
    {
      "name": "",
      "type": "HiroseFh12sh",
      "superClasses": [
        "Fpc050Bottom",
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Hirose FH12 SH FFC/FPC connector, 0.50mm pitch horizontal bottom contacts.\nMostly footprint-compatible with TE 1775333-8, which is cheaper."
    },
    {
      "name": "",
      "type": "Er_Oled_091_3",
      "superClasses": [
        "Oled"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1306-based 0.91\" 128x32 monochrome OLED.\nTODO (maybe?) add the power gating circuit in the reference schematic"
    },
    {
      "name": "",
      "type": "Jumper",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "A two-ported passive-typed jumper (a disconnect-able connection), though is treated\nas always connected for model purposes.\n\nWrapping blocks can add typed port and parameter propagation semantics."
    },
    {
      "name": "",
      "type": "IoControllerDac",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "An interface mixin, allowing additional interface elements (parameters, ports) to be added to\na block interface - e.g., IoController with HasI2s.\n\nThis class should be directly part of the superclass list for an implementing class\n(e.g. Nrf52840 which has I2S should extend HasI2s).\n\nThis class should only be directly instantiated when adding the mixin interfaces to an abstract\nclass, e.g. IoController.with(HasI2s()). Instances of this class are not really valid on their own.\n\nThis may define __init__ parameters as keyword arguments ONLY. Otherwise, this can mess up\nparameter propagation in super().__init__ calls in implementing classes.\n\nThis should only be used for defining interface mixins. Implementation mixins should be defined\nusing the standard Block class hierarchy, however this acts like any Block just with mixin capabilities.\nTODO: is this a good decision?\nTODO: what about cases where it's a bit mixed, e.g. HasI2s also needs to register the self.i2s port?"
    },
    {
      "name": "",
      "type": "Ice40up",
      "superClasses": [
        "Fpga",
        "IoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "cdone",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Application circuit for the iCE40UP series FPGAs, pre-baked for 'common' applications\n(3.3v supply with 1.2v core not shared, external FLASH programming, no NVCM programming).\n\nTODO: generator support for CRAM (volatile) programming mode, diode 2v5 NVCM supply."
    },
    {
      "name": "",
      "type": "VoltageSenseDivider",
      "superClasses": [
        "Analog"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "input",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "full_scale_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Voltage divider that takes in an output voltage and parallel impedance spec, and produces an output analog signal\nof the appropriate magnitude (as a fraction of the input voltage).\nUnlike the normal VoltageDivider, the output is defined in terms of full scale voltage - that is, the voltage\noutput at the maximum input voltage, which makes the tolerance specification more useful for sensing applications\nwith variable input voltage.\n\nTODO: can this be unified with VoltageDivider?"
    },
    {
      "name": "",
      "type": "L78l_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Er_Oled_096_1_1_Outline",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Footprint for OLED panel outline"
    },
    {
      "name": "",
      "type": "SmtLed",
      "superClasses": [
        "Led"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "color",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Discrete semiconductor product, eg diodes and FETs, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "TableBjt",
      "superClasses": [
        "Bjt"
      ],
      "ports": [
        {
          "name": "base",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "collector",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "emitter",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base class for untyped BJTs\n  "
    },
    {
      "name": "",
      "type": "Stm32f103Base_Device",
      "superClasses": [
        "IoControllerI2cTarget",
        "IoControllerCan",
        "IoControllerUsb",
        "InternalSubcircuit",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "nrst",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "osc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Eventually, the USB device port will be an IoController mixin.\nFor now, it's part of base, since it's common enough and there isn't GUI support for mixins.\n\nThis class SHOULD BE mixed into IoController blocks, in preparation for the eventual move.\nThis WILL NOT WORK when used in .with_mixin, since this defines no fields."
    },
    {
      "name": "",
      "type": "LemurLogo",
      "superClasses": [
        "Label"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonfunctional footprint, including copper and silkscreen labels."
    },
    {
      "name": "",
      "type": "DistanceSensor",
      "superClasses": [
        "Sensor"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "JlcOscillator_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "in_kicad_part",
          "type": "str",
          "default_value": null
        },
        {
          "name": "in_kicad_value",
          "type": "str",
          "default_value": null
        },
        {
          "name": "in_kicad_datasheet",
          "type": "str",
          "default_value": null
        },
        {
          "name": "in_lcsc_part",
          "type": "str",
          "default_value": null
        },
        {
          "name": "in_actual_basic_part",
          "type": "bool",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Base oscillator device definition, that takes in the part data from the containing part table.\nDefines a standard interface, and specifies the footprint here."
    },
    {
      "name": "",
      "type": "PassiveAdapterAnalogSource",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dst",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "signal_out",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "CanControllerTestPoint",
      "superClasses": [
        "TypedTestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "CanPassivePort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Two test points for CAN controller-side TXD and RXD"
    },
    {
      "name": "",
      "type": "DigitalWrapperDirectionSwitch",
      "superClasses": [
        "DigitalDirectionSwitch"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "c",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "d",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Basic implementation for DigitalDirectionSwitch as a wrapper around a passive-typed DirectionSwitch."
    },
    {
      "name": "",
      "type": "Holyiot_18010",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "Resettable",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerUsb",
        "IoControllerI2s",
        "IoControllerBle",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "pwr_usb",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around the Holyiot 18010 that includes supporting components (programming port)"
    },
    {
      "name": "",
      "type": "Shtc3",
      "superClasses": [
        "EnvironmentalSensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "PinHeader254DualShroudedInline",
      "superClasses": [
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Generic 2.54mm dual-row pin header in edge-inline."
    },
    {
      "name": "",
      "type": "Mcp3201",
      "superClasses": [
        "AnalogToDigital"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "ref",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vin",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP3201 12-bit 100kSPS ADC configured in single-ended mode, since the IN- pin can't do much anyways.\n\nSome drop-in electrically compatible chips:\n- ADS7822 (12 bit, 200kSPS)\n- MCP3551 (22 bit, low sample rate, delta-sigma)\n  - SLIGHTLY DIFFERENT PINNING! SCK and CS swapped!"
    },
    {
      "name": "",
      "type": "DigitalJumper",
      "superClasses": [
        "TypedJumper"
      ],
      "ports": [
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Jumper with typed ports (eg, VoltageSource-VoltageSink, instead of Passive)."
    },
    {
      "name": "",
      "type": "JlcFerriteBead",
      "superClasses": [
        "FerriteBead",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Passives components, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "Pca9554",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "io",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "8 bit I2C IO expander"
    },
    {
      "name": "",
      "type": "DigitalLowPassRc",
      "superClasses": [
        "DigitalFilter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Low-pass RC filter attached to a digital line.\nDoes not change the signal, only performs filtering"
    },
    {
      "name": "",
      "type": "Xc6206p_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Er_Oled_096_1c",
      "superClasses": [
        "Oled"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1357-based 0.96\" 128x64 RGB OLED, in either I2C or SPI mode."
    },
    {
      "name": "",
      "type": "ThtLed",
      "superClasses": [
        "Led"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "color",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Discrete semiconductor product, eg diodes and FETs, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "AnalogSourceBridge",
      "superClasses": [
        "CircuitPortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "inner_link",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "DiodePowerMerge",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_in2",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": null
        },
        {
          "name": "reverse_recovery_time",
          "type": "range",
          "default_value": "(0, inf)"
        }
      ],
      "is_abstract": false,
      "docstring": "Diode power merge block for two voltage sources.\n  "
    },
    {
      "name": "",
      "type": "W25q_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "wp",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "hold",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "size",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Magnetometer",
      "superClasses": [
        "Sensor"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "Tpa2005d1",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "sig",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spk",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "gain",
          "type": "range",
          "default_value": [
            16.0,
            24.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "TPA2005D1 configured in single-ended input mode.\nPossible semi-pin-compatible with PAM8302AASCR (C113367), but which has internal resistor."
    },
    {
      "name": "",
      "type": "AnalogSwitch",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "inputs",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for a n-ported analog switch with passive-typed ports."
    },
    {
      "name": "",
      "type": "Mdbt50q_1mv2_Device",
      "superClasses": [
        "Nrf52840_Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr_usb",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "xtal",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "xtal_rtc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "nreset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "nRF52840 IO mappings\nhttps://infocenter.nordicsemi.com/pdf/nRF52840_PS_v1.7.pdf"
    },
    {
      "name": "",
      "type": "Imu_Lsm6ds3trc",
      "superClasses": [
        "Accelerometer",
        "Gyroscope"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "int1",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "int2",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "JstPhKHorizontal",
      "superClasses": [
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "PassiveConnector that is a footprint and provides some base functionality for generation."
    },
    {
      "name": "",
      "type": "Mcp4728_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vout0",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vout1",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vout2",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vout3",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "ldac",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rdy",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "PassiveConnector",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "A base Block that is an elastic n-ported connector with passive type.\nInterface only, no implementation.\n\nIntended as an infrastructural block where a particular connector series is not fixed,\nbut can be selected through the refinements system.\nAn optional length argument can be specified, which forces total number of pins. This must be larger\nthan the maximum pin index (but can be smaller, unassigned pins are NC).\nThe allocated pin names correlate with the footprint pin, 1-indexed (per electronics convention).\nIt is up to the instantiating layer to set the pinmap (or allow the user to set it by refinements)."
    },
    {
      "name": "",
      "type": "IoControllerSpiPeripheral",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "An interface mixin, allowing additional interface elements (parameters, ports) to be added to\na block interface - e.g., IoController with HasI2s.\n\nThis class should be directly part of the superclass list for an implementing class\n(e.g. Nrf52840 which has I2S should extend HasI2s).\n\nThis class should only be directly instantiated when adding the mixin interfaces to an abstract\nclass, e.g. IoController.with(HasI2s()). Instances of this class are not really valid on their own.\n\nThis may define __init__ parameters as keyword arguments ONLY. Otherwise, this can mess up\nparameter propagation in super().__init__ calls in implementing classes.\n\nThis should only be used for defining interface mixins. Implementation mixins should be defined\nusing the standard Block class hierarchy, however this acts like any Block just with mixin capabilities.\nTODO: is this a good decision?\nTODO: what about cases where it's a bit mixed, e.g. HasI2s also needs to register the self.i2s port?"
    },
    {
      "name": "",
      "type": "Ice40up_Device",
      "superClasses": [
        "BaseIoController",
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vccio_1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vccio_0",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vccio_2",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vpp_2v5",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcc_pll",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "creset_b",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cdone",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "spi_config",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "spi_config_cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for iCE40 UltraPlus FPGAs, 2.8k-5.2k logic cells."
    },
    {
      "name": "",
      "type": "DummyVoltageSink",
      "superClasses": [
        "DummyDevice"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "voltage_limit",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Ref30xx",
      "superClasses": [
        "VoltageReference"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Voltage reference, generally provides high accuracy but limited current"
    },
    {
      "name": "",
      "type": "Er_Oled022_1_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "iref",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vcomh",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "bs1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "bs2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "d0",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "d1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "d2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "res",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "24-pin FPC connector for the ER-OLED022-1* device, based on the interfacing example\nhttps://www.buydisplay.com/download/interfacing/ER-OLED022-1_Interfacing.pdf"
    },
    {
      "name": "",
      "type": "Filter",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Signal conditioning subcircuit."
    },
    {
      "name": "",
      "type": "Smt0404RgbLed",
      "superClasses": [
        "RgbLedCommonAnode"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_red",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_green",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_blue",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Discrete semiconductor product, eg diodes and FETs, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "ProtectionTvsDiode",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "working_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "TVS diode across a power rail"
    },
    {
      "name": "",
      "type": "Xc9142",
      "superClasses": [
        "Resettable",
        "DiscreteBoostConverter"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Low-input-voltage boost converter (starts as low as 0.9V) with fixed output.\nXC9142 has PWM/PFM functionality, compared to PWM only for XC9141.\nSemi pin compatible with XC9140, LTC3525, MAX1724."
    },
    {
      "name": "",
      "type": "Vl53l0xConnector",
      "superClasses": [
        "Vl53l0x"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "xshut",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gpio1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Connector to an external VL53L0X breakout board.\nUses the pinout from the Adafruit product: https://www.adafruit.com/product/3317\nThis has an onboard 2.8v regulator, but thankfully the IO tolerance is not referenced to Vdd"
    },
    {
      "name": "",
      "type": "Protection",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Circuit protection elements, eg TVS diodes, fuses"
    },
    {
      "name": "",
      "type": "Sd18ob261",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "clk",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "lr",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "data",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SD18OB261-060 PDM microphone, probably footprint-compatible with similar Knowles devices.\nApplication circuit is not specified in the datasheet, this uses the one from SPH0655LM4H\n(single 0.1uF decap)."
    },
    {
      "name": "",
      "type": "PassiveAdapterVoltageSource",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dst",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "FetHalfBridge",
      "superClasses": [
        "HalfBridge"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "low_ctl",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "high_ctl",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        },
        {
          "name": "fet_rds",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ]
        },
        {
          "name": "gate_res",
          "type": "range",
          "default_value": [
            20.9,
            23.1
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Implementation of a half-bridge with two NFETs and a gate driver."
    },
    {
      "name": "",
      "type": "DigitalDirectionSwitchCenter",
      "superClasses": [
        "DigitalDirectionSwitch"
      ],
      "ports": [
        {
          "name": "center",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "DigitalRotaryEncoder mixin adding a switch pin."
    },
    {
      "name": "",
      "type": "Mdbt50q_1mv2",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "Resettable",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerUsb",
        "IoControllerI2s",
        "IoControllerBle",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "pwr_usb",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around the Mdbt50q_1mv2 that includes the reference schematic"
    },
    {
      "name": "",
      "type": "Hdc1080_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Capacitor",
      "superClasses": [
        "UnpolarizedCapacitor"
      ],
      "ports": [
        {
          "name": "pos",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "neg",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Polarized capacitor, which we assume will be the default"
    },
    {
      "name": "",
      "type": "Fpc030",
      "superClasses": [
        "PassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract base class for 0.30mm pitch (dual row, staggered)) FPC connectors."
    },
    {
      "name": "",
      "type": "Er_Oled022_1_Outline",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "FootprintPassiveConnector",
      "superClasses": [
        "PassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "PassiveConnector that is a footprint and provides some base functionality for generation."
    },
    {
      "name": "",
      "type": "Smt0606RgbLed",
      "superClasses": [
        "RgbLedCommonAnode"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_red",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_green",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_blue",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Discrete semiconductor product, eg diodes and FETs, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "PowerBarrelJack",
      "superClasses": [
        "Connector",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Barrel jack that models a configurable voltage / max current power supply."
    },
    {
      "name": "",
      "type": "VoltageDivider",
      "superClasses": [
        "Analog"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "input",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Voltage divider that takes in an output voltage and parallel impedance spec, and produces an output analog signal\nof the appropriate magnitude (as a fraction of the input voltage)"
    },
    {
      "name": "",
      "type": "SwdCortexTargetHeader",
      "superClasses": [
        "SwdCortexTargetConnector",
        "SwdCortexTargetConnectorReset",
        "SwdCortexTargetConnectorSwo",
        "SwdCortexTargetConnectorTdi"
      ],
      "ports": [
        {
          "name": "tdi",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swo",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "reset",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "swd",
          "type": "SwdHostPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Programming header with power and SWD (SWCLK/SWDIO/RESET) pins."
    },
    {
      "name": "",
      "type": "Er_Oled022_1",
      "superClasses": [
        "Oled"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1305-based 2.2\" 128x32 monochrome OLED in SPI or I2C mode."
    },
    {
      "name": "",
      "type": "ThtRgbLed",
      "superClasses": [
        "RgbLedCommonAnode"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_red",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_green",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_blue",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Discrete semiconductor product, eg diodes and FETs, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "RgbLedCommonAnode",
      "superClasses": [
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_red",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_green",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k_blue",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Discrete semiconductor product, eg diodes and FETs, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "CustomSyncBuckBoostConverter",
      "superClasses": [
        "DiscreteBoostConverter"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "buck_pwm_low",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "buck_pwm_high",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "boost_pwm_low",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "boost_pwm_high",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            100000.0,
            1000000.0
          ]
        },
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ]
        },
        {
          "name": "rds_on",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Custom synchronous buck-boost with four PWMs for the switches.\nBecause of the MOSFET body diode, will probably be fine-ish if the buck low-side FET and the boost high-side FET\nare not driven"
    },
    {
      "name": "",
      "type": "Cbmud1200l_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "via",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vib",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gnd2",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd2",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "voa",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vob",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "EInk",
      "superClasses": [
        "Display"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "E-ink display, which retains the image after power is removed."
    },
    {
      "name": "",
      "type": "Mcp6001_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vinp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vinn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vout",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "PassiveBridge",
      "superClasses": [
        "CircuitPortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "inner_link",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "PptcFuse",
      "superClasses": [
        "Fuse"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "trip_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "hold_current",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "PPTC self-resetting fuse"
    },
    {
      "name": "",
      "type": "DigitalSwitch",
      "superClasses": [
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "out",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around Switch that provides a digital port which is pulled low (to GND) when pressed."
    },
    {
      "name": "",
      "type": "Stm32g031Base",
      "superClasses": [
        "Resettable",
        "IoControllerI2cTarget",
        "Microcontroller",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "As7341_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Fpc030Bottom",
      "superClasses": [
        "Fpc030"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract base class for bottom-contact FPC connectors.\nIMPORTANT: the pin numbering scheme differs for top- and bottom-contact connectors."
    },
    {
      "name": "",
      "type": "Xbee_S3b",
      "superClasses": [
        "Interface",
        "Radiofrequency"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "data",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "rssi",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "associate",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "XBee-PRO 900HP, product numbers XBP9B-*"
    },
    {
      "name": "",
      "type": "Pj_102ah",
      "superClasses": [
        "PowerBarrelJack"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Barrel jack for 2.1mm ID and 5.5mm OD"
    },
    {
      "name": "",
      "type": "DummyDigitalSink",
      "superClasses": [
        "DummyDevice"
      ],
      "ports": [
        {
          "name": "io",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "voltage_limit",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Ap2204k_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "en",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Er_Oled028_1_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcomh",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vdd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vci",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "bs0",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "res",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "iref",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vsl",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "30-pin FPC connector for the ER-OLED028-1* device, based on the interfacing example\nhttps://www.buydisplay.com/download/interfacing/ER-OLED028-1_Interfacing.pdf"
    },
    {
      "name": "",
      "type": "DiscreteApplication",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Subcircuit around a single discrete (and usually passive) component."
    },
    {
      "name": "",
      "type": "JlcLed",
      "superClasses": [
        "Led",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Discrete semiconductor product, eg diodes and FETs, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "PassiveAdapterAnalogSink",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dst",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "voltage_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "signal_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": [
            Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "Vl53l0x",
      "superClasses": [
        "DistanceSensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "xshut",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gpio1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract base class for VL53L0x application circuits"
    },
    {
      "name": "",
      "type": "EnvironmentalSensor",
      "superClasses": [
        "Sensor"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "Pec11s",
      "superClasses": [
        "RotaryEncoderSwitch",
        "RotaryEncoder"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Bourns PEC11S SMD rotary with pushbutton switch.\nDefault part is PEC11S-929K-S0015, but entire series is footprint-compatible.\nWhile the copper pattern is compatible with the EC11J15, there is a different mounting boss."
    },
    {
      "name": "",
      "type": "BoostConverter",
      "superClasses": [
        "SwitchingVoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)"
        }
      ],
      "is_abstract": true,
      "docstring": "Step-up switching converter"
    },
    {
      "name": "",
      "type": "DigitalWrapperDirectionSwitchWithCenter",
      "superClasses": [
        "DigitalDirectionSwitchCenter",
        "DigitalWrapperDirectionSwitch"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "c",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "d",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "center",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "DigitalRotaryEncoder mixin adding a switch pin."
    },
    {
      "name": "",
      "type": "Stm32l432Base_Device",
      "superClasses": [
        "IoControllerI2cTarget",
        "IoControllerDac",
        "IoControllerCan",
        "IoControllerUsb",
        "InternalSubcircuit",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "nrst",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Eventually, the USB device port will be an IoController mixin.\nFor now, it's part of base, since it's common enough and there isn't GUI support for mixins.\n\nThis class SHOULD BE mixed into IoController blocks, in preparation for the eventual move.\nThis WILL NOT WORK when used in .with_mixin, since this defines no fields."
    },
    {
      "name": "",
      "type": "Mag_Qmc5883l_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "drdy",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "setp",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "setc",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "c1",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "IdealModel",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [],
      "argParams": [
        {
          "name": "allow_ideal",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": true,
      "docstring": "Ideal model device that can be used as a placeholder to get a design compiling\nbut has no physical implementation."
    },
    {
      "name": "",
      "type": "Fpc030TopBottom",
      "superClasses": [
        "Fpc030Bottom"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract base class for top and bottom-contact FPC connectors. Bottom entry pin numbering is treated as canonical.\nTo use in place of a top-contact connector, a flip is needed.\nIMPORTANT: the pin numbering scheme differs for top- and bottom-contact connectors."
    },
    {
      "name": "",
      "type": "Er_Oled028_1_Outline",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "UsbDeviceConnector",
      "superClasses": [
        "Connector",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "usb",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract base class for a USB 2.0 device-side port connector"
    },
    {
      "name": "",
      "type": "IoControllerI2cTarget",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "An interface mixin, allowing additional interface elements (parameters, ports) to be added to\na block interface - e.g., IoController with HasI2s.\n\nThis class should be directly part of the superclass list for an implementing class\n(e.g. Nrf52840 which has I2S should extend HasI2s).\n\nThis class should only be directly instantiated when adding the mixin interfaces to an abstract\nclass, e.g. IoController.with(HasI2s()). Instances of this class are not really valid on their own.\n\nThis may define __init__ parameters as keyword arguments ONLY. Otherwise, this can mess up\nparameter propagation in super().__init__ calls in implementing classes.\n\nThis should only be used for defining interface mixins. Implementation mixins should be defined\nusing the standard Block class hierarchy, however this acts like any Block just with mixin capabilities.\nTODO: is this a good decision?\nTODO: what about cases where it's a bit mixed, e.g. HasI2s also needs to register the self.i2s port?"
    },
    {
      "name": "",
      "type": "LipoConnector",
      "superClasses": [
        "Connector",
        "Battery"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "chg",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            2.5,
            4.2
          ]
        },
        {
          "name": "actual_voltage",
          "type": "range",
          "default_value": [
            2.5,
            4.2
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "PassiveConnector (abstract connector) that is expected to have a LiPo on one end.\nBoth the voltage specification and the actual voltage can be specified as parameters.\nTHERE IS NO STANDARD LIPO PINNING OR CONNECTOR - MAKE SURE TO VERIFY THIS!\nBE PREPARED FOR REVERSE POLARITY CONNECTIONS.\nDefault pinning has ground being pin 1, and power being pin 2.\n\nConnector type not specified, up to the user through a refinement."
    },
    {
      "name": "",
      "type": "AnalogLowPassRc",
      "superClasses": [
        "DigitalFilter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Low-pass RC filter attached to an analog line.\n  "
    },
    {
      "name": "",
      "type": "Ldl1117",
      "superClasses": [
        "LinearRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "A series of fixed-output, general-purpose, low-dropout linear regulators in SOT-223 and\nsupporting up to 18V input and 1.2A draw."
    },
    {
      "name": "",
      "type": "Er_Oled028_1",
      "superClasses": [
        "Oled"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1322-based 2.8\" 256x64 monochrome OLED."
    },
    {
      "name": "",
      "type": "JlcDiode",
      "superClasses": [
        "Diode",
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "anode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cathode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base class for untyped diodes\n\nTODO power? capacitance? leakage current?"
    },
    {
      "name": "",
      "type": "IndicatorSinkLedResistor",
      "superClasses": [
        "IndicatorSinkLed"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "TODO: should the resistor sided-ness be configurable, eg as a generator? Similar for IndicatorLed"
    },
    {
      "name": "",
      "type": "Tps61040_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "fb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vin",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "en",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Cp2102_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "regin",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vbus",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rst",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "suspend",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "nsuspend",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ri",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dcd",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dtr",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "dsr",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rts",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "cts",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Testing",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Blocks for testing (eg, test points) and programming (eg, programming headers)."
    },
    {
      "name": "",
      "type": "Ec11j15WithSwitch",
      "superClasses": [
        "RotaryEncoderSwitch",
        "RotaryEncoder"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Generic EC11J15 SMD rotary with pushbutton switch.\nDefault part is EC11J1525402, with 1.5mm pushbutton travel, 30 detents (finest),\nbut footprint should be compatible with other parts in the EC11J15 w/ switch series"
    },
    {
      "name": "",
      "type": "SwdCortexTargetConnector",
      "superClasses": [
        "ProgrammingConnector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "swd",
          "type": "SwdHostPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Programming header with power and SWD (SWCLK/SWDIO/RESET) pins."
    },
    {
      "name": "",
      "type": "DirectionSwitchCenter",
      "superClasses": [
        "DirectionSwitch"
      ],
      "ports": [
        {
          "name": "center",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "DirectionSwitch mixin adding center switch pin (sharing a common with the encoder),\nwith ratings assumed to be the same between the switch and encoder."
    },
    {
      "name": "",
      "type": "EspProgrammingHeader",
      "superClasses": [
        "ProgrammingConnector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract programming header for ESP series micros, defining a UART connection.\nCircuitry to reset / enter programming mode must be external."
    },
    {
      "name": "",
      "type": "Mag_Qmc5883l",
      "superClasses": [
        "Magnetometer"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "drdy",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "QMC5883L 3-axis magnetometer in single supply configuration.\nThis part seems to be a licensed semi-copy of the HMC5883L which is no longer in production.\nIt might be hardware drop-in compatible though the firmware protocol differs."
    },
    {
      "name": "",
      "type": "Afc01",
      "superClasses": [
        "Fpc050Bottom",
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Jushuo AFC01 series bottom-contact 0.5mm-pitch FPC connectors, with partial JLC numbers for some parts\nand re-using the probably-compatible but not-purpose-designed FH12 footprint."
    },
    {
      "name": "",
      "type": "UsbDeviceBridge",
      "superClasses": [
        "PortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inner_link",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "Xbee_S3b_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "data",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "rssi",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "associate",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "UsbEsdDiode",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "usb",
          "type": "UsbPassivePort",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Circuit protection elements, eg TVS diodes, fuses"
    },
    {
      "name": "",
      "type": "CpuFan3Pin",
      "superClasses": [
        "CpuFanConnector"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "sense",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "3-pin fan controller"
    },
    {
      "name": "",
      "type": "JacdacDataInterface",
      "superClasses": [],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "signal",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "jd_data",
          "type": "JacdacDataPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Interface from a Jacdac data bus to a device, including protection and EMI filtering.\nDoes NOT include per-port circuitry like ESD diodes and status LEDs."
    },
    {
      "name": "",
      "type": "LowPassRc",
      "superClasses": [
        "AnalogFilter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "output",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null
        },
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Passive-typed low-pass RC specified by the resistor value (impedance) and -3dB (~70%) cutoff frequency."
    },
    {
      "name": "",
      "type": "Tps561201",
      "superClasses": [
        "Resettable",
        "DiscreteBuckConverter",
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adjustable synchronous buck converter in SOT-23-6 with integrated switch"
    },
    {
      "name": "",
      "type": "Nhd_312_25664uc",
      "superClasses": [
        "Oled"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "256x64 3.12\" passive-matrix OLED"
    },
    {
      "name": "",
      "type": "JlcZenerDiode",
      "superClasses": [
        "ZenerDiode",
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "anode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cathode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base class for untyped zeners\n\nTODO power? capacitance? leakage current?"
    },
    {
      "name": "",
      "type": "DigitalBidirAdapterOpenDrain",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dst",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adapter where a DigitalBidir is run as an open-drain (low-side single source) port."
    },
    {
      "name": "",
      "type": "TvsDiode",
      "superClasses": [
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "anode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cathode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "working_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "capacitance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Base class for TVS diodes with TVS specific parameters\nCathode should be connected to the signal, and anode to ground.\n\nWorking and breakdown voltages are the total working voltage - typically from zero to +V for\nunidirectional diodes, or -V to +V for bidirectional diodes.\nWorking voltage is user-specified and may not account for tolerances,\nwhile breakdown voltage should be checked against the actual operating voltages.\nTODO: does this model make sense?\n\nTODO: model capacitance frequency? model breakdown and clamping voltage?\nTODO: how does this differ from Zener diodes?"
    },
    {
      "name": "",
      "type": "Ap3012",
      "superClasses": [
        "Resettable",
        "DiscreteBoostConverter",
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adjustable boost converter in SOT-23-5 with integrated switch"
    },
    {
      "name": "",
      "type": "Ov2640_Fpc24_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "dgnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "agnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "dovdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "dvdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "avdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "y",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "pclk",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "xclk",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "href",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwdn",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vsync",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "sio",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "TypedTestPoint",
      "superClasses": [
        "Testing"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Test point with a typed port (eg, VoltageSink, instead of Passive)."
    },
    {
      "name": "",
      "type": "JlcAntenna",
      "superClasses": [
        "Antenna"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "PartsTableFootprint that includes the parts selection framework logic and footprint generator,\nincluding rows by a footprint spec.\nSubclasses must additionally define the fields required by StandardPinningFootprint, which defines the\nfootprint name to pin mapping."
    },
    {
      "name": "",
      "type": "BuckConverterPowerPath",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "switch",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "input_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        },
        {
          "name": "output_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": null
        },
        {
          "name": "inductor_current_ripple",
          "type": "range",
          "default_value": null
        },
        {
          "name": "input_voltage_ripple",
          "type": "float",
          "default_value": null
        },
        {
          "name": "output_voltage_ripple",
          "type": "float",
          "default_value": null
        },
        {
          "name": "efficiency",
          "type": "range",
          "default_value": "(0.9, 1.0)"
        },
        {
          "name": "dutycycle_limit",
          "type": "range",
          "default_value": "(0.1, 0.9)"
        },
        {
          "name": "inductor_scale",
          "type": "float",
          "default_value": 1.0
        }
      ],
      "is_abstract": false,
      "docstring": "A helper block to generate the power path (inductors, capacitors) for a switching buck converter.\n\nMain assumptions in component sizing:\n- Operating only in continuous mode, TODO: also consider boundary and discontinuous mode\n- TODO: account for capacitor ESR?\n\nUseful resources:\nhttps://www.ti.com/lit/an/slva477b/slva477b.pdf\n  Component sizing in continuous mode\n  Listed references go into more detail\nhttp://www.onmyphd.com/?p=voltage.regulators.buck.step.down.converter\n  Very detailed analysis including component sizing, operating modes, calculating losses"
    },
    {
      "name": "",
      "type": "SpiMemoryQspi",
      "superClasses": [
        "SpiMemory"
      ],
      "ports": [
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io3",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "SPI memory that also supports QSPI mode (4-line SPI).\nVanilla SPI SDI maps to IO0, and SDO maps to IO1.\nEXPERIMENTAL - interface subject to change.\nMay prevent the use of some chip functions that conflict with QSPI lines."
    },
    {
      "name": "",
      "type": "EspProgrammingAutoReset",
      "superClasses": [
        "EspProgrammingHeader"
      ],
      "ports": [
        {
          "name": "en",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "boot",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin for ESP programming header with auto-reset and auto-boot pins"
    },
    {
      "name": "",
      "type": "Bme680",
      "superClasses": [
        "EnvironmentalSensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "UnpolarizedCapacitor",
      "superClasses": [
        "PassiveComponent"
      ],
      "ports": [],
      "argParams": [
        {
          "name": "capacitance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "voltage_rating_derating",
          "type": "float",
          "default_value": 0.5
        },
        {
          "name": "exact_capacitance",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": true,
      "docstring": "Base type for a capacitor, that defines its parameters and without ports (since capacitors can be polarized)"
    },
    {
      "name": "",
      "type": "Fpc030Top",
      "superClasses": [
        "Fpc030"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract base class for top-contact FPC connectors.\nIMPORTANT: the pin numbering scheme differs for top- and bottom-contact connectors."
    },
    {
      "name": "",
      "type": "Nhd_312_25664uc_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "sclk",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "sdin",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "nres",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "ncs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "CanEsdDiode",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Circuit protection elements, eg TVS diodes, fuses"
    },
    {
      "name": "",
      "type": "IoControllerPowerOut",
      "superClasses": [
        "IoControllerGroundOut"
      ],
      "ports": [
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "IO controller mixin that provides an output of the IO controller's VddIO rail, commonly 3.3v."
    },
    {
      "name": "",
      "type": "Ct3151",
      "superClasses": [
        "BananaSafetyJack"
      ],
      "ports": [
        {
          "name": "port",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "CT3151-x PTH right-angle safety banana jack connector.\nx indicates the color code.\n\nTODO: automatically support color code generation?"
    },
    {
      "name": "",
      "type": "Rclamp0521p",
      "superClasses": [
        "TvsDiode"
      ],
      "ports": [
        {
          "name": "anode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cathode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "working_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "capacitance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "RCLAMP0521P-N TVS diode in 0402 package, recommended in the Jacdac DDK."
    },
    {
      "name": "",
      "type": "DummyPassive",
      "superClasses": [
        "DummyDevice"
      ],
      "ports": [
        {
          "name": "io",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "SolderJumperTriangular",
      "superClasses": [
        "Jumper"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A two-ported passive-typed jumper (a disconnect-able connection), though is treated\nas always connected for model purposes.\n\nWrapping blocks can add typed port and parameter propagation semantics."
    },
    {
      "name": "",
      "type": "E2154fs091_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "busy",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gdr",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "rese",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vslr",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vdhr",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vddd",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vdh",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vgh",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vdl",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vgl",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vcom",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "AnalogFilter",
      "superClasses": [
        "Filter"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Analog signal conditioning subcircuit."
    },
    {
      "name": "",
      "type": "JlcBjt",
      "superClasses": [
        "TableBjt"
      ],
      "ports": [
        {
          "name": "base",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "collector",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "emitter",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base class for untyped BJTs\n  "
    },
    {
      "name": "",
      "type": "CircuitPortBridge",
      "superClasses": [
        "PortBridge"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "BaseTableFet",
      "superClasses": [
        "Fet"
      ],
      "ports": [
        {
          "name": "source",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "drain",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gate",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "drain_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "drain_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "gate_voltage",
          "type": "range",
          "default_value": "(0, 0)"
        },
        {
          "name": "rds_on",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "gate_charge",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "power",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "channel",
          "type": "str",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Shared table columns for both TableFet and TableSwitchFet"
    },
    {
      "name": "",
      "type": "CustomSyncBuckConverter",
      "superClasses": [
        "DiscreteBoostConverter"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwm_low",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "pwm_high",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            100000.0,
            1000000.0
          ]
        },
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ]
        },
        {
          "name": "rds_on",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Custom synchronous buck with two PWM inputs for the high and low side gate drivers.\nBecause of the MOSFET body diode, will probably be fine-ish if the low side FET is not driven."
    },
    {
      "name": "",
      "type": "Ucc27282_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "li",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "hi",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "lo",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "hs",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "hb",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "ho",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Mechanical",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Nonelectrical footprint, including plated and NPTH mounting holes."
    },
    {
      "name": "",
      "type": "Pam8302a",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "sig",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spk",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "PAM8302A configured in single-ended input mode."
    },
    {
      "name": "",
      "type": "FootprintToucbPad",
      "superClasses": [],
      "ports": [
        {
          "name": "pad",
          "type": "TouchPadPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "touch_footprint",
          "type": "str",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Block that represents a component that has part(s) and trace(s) on the PCB.\nProvides interfaces that define footprints and copper connections and generates to appropriate metadata."
    },
    {
      "name": "",
      "type": "BuckBoostConverter",
      "superClasses": [
        "SwitchingVoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)"
        }
      ],
      "is_abstract": true,
      "docstring": "Step-up or switch-down switching converter"
    },
    {
      "name": "",
      "type": "BuckConverter",
      "superClasses": [
        "SwitchingVoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)"
        }
      ],
      "is_abstract": true,
      "docstring": "Step-down switching converter"
    },
    {
      "name": "",
      "type": "EspProgrammingPinHeader254",
      "superClasses": [
        "EspProgrammingHeader"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Programming header for ESP series micros using 2.54mm headers, matching the pinning in the reference schematics."
    },
    {
      "name": "",
      "type": "As7341",
      "superClasses": [
        "LightSensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "DummyCapacitorFootprint",
      "superClasses": [
        "DummyDevice",
        "Capacitor"
      ],
      "ports": [
        {
          "name": "pos",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "neg",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "footprint",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "manufacturer",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "part_number",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "value",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Dummy capacitor that takes in all its parameters (footprint, value, etc) and does not do any computation.\nUsed as the leaf block for generating parallel capacitors.\n\nTODO: use footprint table?"
    },
    {
      "name": "",
      "type": "Fpc050BottomFlip",
      "superClasses": [
        "Fpc050Bottom"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Flipped FPC connector - bottom entry connector is top entry on the opposite board side.\nReverses the pin ordering to reflect the mirroring."
    },
    {
      "name": "",
      "type": "Mcp4728",
      "superClasses": [
        "DigitalToAnalog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "out0",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out1",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out2",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out3",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "ldac",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rdy",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP4728 quad 12-bit I2C DAC, with selectable internal or external Vref=Vdd\n  "
    },
    {
      "name": "",
      "type": "UsbBitBang",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dp",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dm",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "dp_pull",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Bit-bang circuit for USB, from the UPduino3.0 circuit and for 3.3v.\nPresumably generalizes to any digital pin that can be driven fast enough.\n\nTODO: a more formal analysis of tolerances"
    },
    {
      "name": "",
      "type": "IoControllerCan",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "An interface mixin, allowing additional interface elements (parameters, ports) to be added to\na block interface - e.g., IoController with HasI2s.\n\nThis class should be directly part of the superclass list for an implementing class\n(e.g. Nrf52840 which has I2S should extend HasI2s).\n\nThis class should only be directly instantiated when adding the mixin interfaces to an abstract\nclass, e.g. IoController.with(HasI2s()). Instances of this class are not really valid on their own.\n\nThis may define __init__ parameters as keyword arguments ONLY. Otherwise, this can mess up\nparameter propagation in super().__init__ calls in implementing classes.\n\nThis should only be used for defining interface mixins. Implementation mixins should be defined\nusing the standard Block class hierarchy, however this acts like any Block just with mixin capabilities.\nTODO: is this a good decision?\nTODO: what about cases where it's a bit mixed, e.g. HasI2s also needs to register the self.i2s port?"
    },
    {
      "name": "",
      "type": "Pgb102st23",
      "superClasses": [
        "UsbEsdDiode"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "usb",
          "type": "UsbPassivePort",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESD suppressor, suitable for high speed protocols including USB2.0, 0.12pF typ"
    },
    {
      "name": "",
      "type": "FeedbackVoltageDivider",
      "superClasses": [
        "Analog"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "input",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "assumed_input_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Voltage divider that takes in a ratio and parallel impedance spec, and produces an output analog signal\nof the appropriate magnitude (as a fraction of the input voltage)"
    },
    {
      "name": "",
      "type": "Xc6206p",
      "superClasses": [
        "LinearRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "XC6206P LDOs in SOT-23 which seem popular in some open-source designs and some are JLC basic parts."
    },
    {
      "name": "",
      "type": "Er_Epd027_2_Outline",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "DigitalFilter",
      "superClasses": [
        "Filter"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Digital signal conditioning block."
    },
    {
      "name": "",
      "type": "JlcBaseFet",
      "superClasses": [
        "BaseTableFet"
      ],
      "ports": [
        {
          "name": "source",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "drain",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gate",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "drain_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "drain_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "gate_voltage",
          "type": "range",
          "default_value": "(0, 0)"
        },
        {
          "name": "rds_on",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "gate_charge",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "power",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "channel",
          "type": "str",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Shared table columns for both TableFet and TableSwitchFet"
    },
    {
      "name": "",
      "type": "DigitalSinkBridge",
      "superClasses": [
        "CircuitPortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inner_link",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "IndicatorSinkLed",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "color",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract part for an low-side-driven (\"common anode\") indicator LED"
    },
    {
      "name": "",
      "type": "BufferedSupply",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "sc_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "charging_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "sense_resistance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Implements a current limiting source with an opamp for charging a supercap, and a Vf-limited diode\nfor discharging\n\nSee https://electronics.stackexchange.com/questions/178605/op-amp-mosfet-constant-current-power-source"
    },
    {
      "name": "",
      "type": "Ft232hl_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vregin",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vccd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vcccore",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vcca",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vphy",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vpll",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vccio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "osc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ref",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "nreset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "eecs",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "eeclk",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "eedata",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "adbus",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "acbus",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "TypedJumper",
      "superClasses": [
        "Testing"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Jumper with typed ports (eg, VoltageSource-VoltageSink, instead of Passive)."
    },
    {
      "name": "",
      "type": "Max98357a",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sTargetReceiver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "out",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MAX98357A I2S speaker driver with default gain."
    },
    {
      "name": "",
      "type": "DiscreteBoostConverter",
      "superClasses": [
        "BoostConverter"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)"
        }
      ],
      "is_abstract": true,
      "docstring": "Category for discrete boost converter subcircuits (as opposed to integrated components)"
    },
    {
      "name": "",
      "type": "LinearRegulator",
      "superClasses": [
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Structural abstract base class for linear regulators, a voltage regulator that can produce some\noutput voltage lower than its input voltage (minus some dropout) by 'burning' the excess voltage as heat.\n\nCompared to switching converters like buck and boost converters, linear regulators usually have lower\ncomplexity, lower parts count, and higher stability. However, depending on the application, they are\ntypically less efficient, and at higher loads may require thermal design considerations."
    },
    {
      "name": "",
      "type": "EspAutoProgram",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "dtr",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rts",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "en",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "boot",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Auto-programming circuit for the ESP series, to drive the target EN (reset) and BOOT (e.g., IO0) pins."
    },
    {
      "name": "",
      "type": "SwitchMatrix",
      "superClasses": [
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "rows",
          "type": "DigitalSingleSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "cols",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "nrows",
          "type": "int",
          "default_value": null
        },
        {
          "name": "ncols",
          "type": "int",
          "default_value": null
        },
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": [
            0.0,
            0.7
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "A switch matrix, such as for a keyboard, that generates (nrows * ncols) switches while only\nusing max(nrows, ncols) IOs.\n\nInternally, the switches are in a matrix, with the driver driving one col low at a time while\nreading which rows are low (with the other cols weakly pulled high).\nThis uses the Switch abstract class, which can be refined into e.g. a tactile switch or mechanical keyswitch.\n\nThis generates per-switch diodes which allows multiple keys to be pressed simultaneously.\nDiode anodes are attached to the rows, while cathodes go through each switch to the cols."
    },
    {
      "name": "",
      "type": "DecouplingCapacitor",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "capacitance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "exact_capacitance",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": false,
      "docstring": "Optionally polarized capacitor used for DC decoupling, with VoltageSink connections with voltage inference.\nImplemented as a shim block."
    },
    {
      "name": "",
      "type": "JstPhSmVertical",
      "superClasses": [
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "JST B*B-PH-SM4 series connector: 2.00mm shrouded and polarized, in vertical surface-mount."
    },
    {
      "name": "",
      "type": "E2154fs091",
      "superClasses": [
        "EInk"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "busy",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "1.54\" 152x152px red/black/white e-ink display with 24-pin FPC connector, 0.5mm pitch"
    },
    {
      "name": "",
      "type": "UsbCReceptacle_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "usb",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "shield",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cc",
          "type": "UsbCcPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": [
            4.75,
            5.25
          ]
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            0.0,
            0.5
          ]
        },
        {
          "name": "cc_pullup_capable",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": false,
      "docstring": "Raw USB Type-C Receptacle\nPullup capable indicates whether this port (or more accurately, the device on the other side) can pull\nup the signal. In UFP (upstream-facing, device) mode the power source should pull up CC."
    },
    {
      "name": "",
      "type": "DummyAnalogSink",
      "superClasses": [
        "DummyDevice"
      ],
      "ports": [
        {
          "name": "io",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "voltage_limit",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "signal_limit",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": [
            Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Tps54202h_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "fb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "boot",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "en",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Waveshare_Epd_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd1v8",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gdr",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "rese",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vgl",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vgh",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vsh",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vsl",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "prevgh",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "prevgl",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "bs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "busy",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rst",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "csb",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vcom",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "24-pin FPC connector compatible across multiple EPDs"
    },
    {
      "name": "",
      "type": "ProgrammableController",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "General programmable controller."
    },
    {
      "name": "",
      "type": "JlcSwitchFet",
      "superClasses": [
        "JlcBaseFet",
        "SwitchFet",
        "BaseTableFet",
        "Fet"
      ],
      "ports": [
        {
          "name": "source",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "drain",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gate",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "manual_gate_charge",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "FET that switches between an off state and on state, not operating in the linear region except for rise/fall time.\nPorts remain untyped. TODO: are these limitations enough to type the ports? maybe except for the output?\nModels static and switching power dissipation. Gate charge and power parameters are optional, they will be the\nstricter of the explicit input or model-derived parameters."
    },
    {
      "name": "",
      "type": "Al8861_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vin",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "lx",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "isense",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vset_pwm",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "peak_output_current",
          "type": "float",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "L293dd_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vs",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "en1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "en2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "in1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "in2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "in3",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "in4",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out1",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out2",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out3",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out4",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "InternalSubcircuit",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Sg8101cg_Device",
      "superClasses": [
        "JlcOscillator_Device"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base oscillator device definition, that takes in the part data from the containing part table.\nDefines a standard interface, and specifies the footprint here."
    },
    {
      "name": "",
      "type": "LedDriverPwm",
      "superClasses": [
        "LedDriver"
      ],
      "ports": [
        {
          "name": "pwm",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "LED driver mixin with PWM input for dimming control."
    },
    {
      "name": "",
      "type": "DiscreteBuckConverter",
      "superClasses": [
        "BuckConverter"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)"
        }
      ],
      "is_abstract": true,
      "docstring": "Category for discrete buck converter subcircuits (as opposed to integrated components)"
    },
    {
      "name": "",
      "type": "Tmp1075n_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "alert",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "PulldownResistor",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Pull-down resistor with an VoltageSink for automatic implicit connect to a Ground line."
    },
    {
      "name": "",
      "type": "Afc07Top",
      "superClasses": [
        "Fpc050Top",
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Jushuo AFC07 series slide-lock top-contact 0.5mm-pitch FPC connectors, with partial JLC numbers for some parts\nand re-using the probably-compatible but not-purpose-designed FH12 footprint."
    },
    {
      "name": "",
      "type": "Sk6805_Ec15",
      "superClasses": [
        "Neopixel"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SK6805-EC15 Neopixel RGB LED in 1.5x1.5 (0606)."
    },
    {
      "name": "",
      "type": "Pesd5v0x1bt",
      "superClasses": [
        "UsbEsdDiode"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "usb",
          "type": "UsbPassivePort",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Ultra low capacitance ESD protection diode (0.9pF typ), suitable for USB and GbE"
    },
    {
      "name": "",
      "type": "ForcedVoltageCurrentDraw",
      "superClasses": [
        "DummyDevice",
        "NetBlock"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "forced_current_draw",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Forces some input current draw regardless of the output's actual current draw value"
    },
    {
      "name": "",
      "type": "Tps54202h",
      "superClasses": [
        "Resettable",
        "DiscreteBuckConverter"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adjustable synchronous buck converter in SOT-23-6 with integrated switch, 4.5-24v capable\nNote: TPS54202 has frequency spread-spectrum operation and internal pull-up on EN\nTPS54202H has no internal EN pull-up but a Zener diode clamp to limit voltage."
    },
    {
      "name": "",
      "type": "G3VM_61GR2",
      "superClasses": [
        "SolidStateRelay"
      ],
      "ports": [
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "feta",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "fetb",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base class for solid state relays.\nLED pins are passive (like the abstract LED) and the enclosing class should provide\nthe circuitry to make it a DigitalSink port."
    },
    {
      "name": "",
      "type": "Microcontroller",
      "superClasses": [
        "ProgrammableController"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Microcontroller (with embedded-class processor) with its surrounding application circuit."
    },
    {
      "name": "",
      "type": "CustomDiode",
      "superClasses": [
        "Diode",
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "anode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cathode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "footprint_spec",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "manufacturer_spec",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "part_spec",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Base class for untyped diodes\n\nTODO power? capacitance? leakage current?"
    },
    {
      "name": "",
      "type": "Led",
      "superClasses": [
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "k",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "color",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": true,
      "docstring": "Discrete semiconductor product, eg diodes and FETs, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "Mdbt50q_UsbSeriesResistor",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "usb_inner",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "usb_outer",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Drv8833",
      "superClasses": [
        "BrushedMotorDriver"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "sleep",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "ain1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "ain2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "bin1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "bin2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "aout1",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "aout2",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "bout1",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "bout2",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A brushed motor driver, or at least the power stage for one."
    },
    {
      "name": "",
      "type": "PassiveComponent",
      "superClasses": [
        "DiscreteComponent"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Passives components, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "Pam8302a_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vop",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "von",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "BuckBoostConverterPowerPath",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "switch_in",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "switch_out",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "input_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        },
        {
          "name": "output_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": null
        },
        {
          "name": "inductor_current_ripple",
          "type": "range",
          "default_value": null
        },
        {
          "name": "efficiency",
          "type": "range",
          "default_value": "(0.8, 1.0)"
        },
        {
          "name": "input_voltage_ripple",
          "type": "float",
          "default_value": 0.075
        },
        {
          "name": "output_voltage_ripple",
          "type": "float",
          "default_value": 0.025
        }
      ],
      "is_abstract": false,
      "docstring": "A helper block to generate the power path (inductors, capacitors) for a 4-switch buck-boost converter.\n\nMain assumptions in component sizing\n- Operating only in continuous mode, TODO: also consider boundary and discontinuous mode\n- TODO: account for capacitor ESR?\n\nUseful resources:\nhttps://www.ti.com/lit/an/slva535b/slva535b.pdf\n  Largely based on this document, the tl;dr of which is combine the buck and boost equations"
    },
    {
      "name": "",
      "type": "OpampElement",
      "superClasses": [
        "Opamp"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Packed opamp element"
    },
    {
      "name": "",
      "type": "Esp32_Wroom_32_Device",
      "superClasses": [
        "Esp32_Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "chip_pu",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io0",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32-WROOM-32 module\n\nModule datasheet: https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32e_esp32-wroom-32ue_datasheet_en.pdf"
    },
    {
      "name": "",
      "type": "Bh1750_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "dvi",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "HiroseFh35cshw",
      "superClasses": [
        "Fpc030TopBottom",
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Hirose FH35C SHW FFC/FPC connector, 0.30mm pitch horizontal top/bottom contacts."
    },
    {
      "name": "",
      "type": "Qt096t_if09_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "DigitalIsolator",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr_a",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd_a",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "in_a",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "out_a",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "pwr_b",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd_b",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "in_b",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "out_b",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Multichannel digital isolator, shifts logic signals between different logic voltages\nand isolation domains. Supports arbitrary channels in either direction, but it needs to\nmap down to a single chip (or be multipacked).\nin_a -> out_b, and in_b -> out_a must each have the same array elements, which is how\nchannels will be matched to pins."
    },
    {
      "name": "",
      "type": "Fusb302b",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vbus",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "cc",
          "type": "UsbCcPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "int",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Interface devices, eg CAN transceiver (CAN <-> SPI / I2C interface),\nand including analog interfaces (ADCs, DACs)."
    },
    {
      "name": "",
      "type": "ForcedVoltage",
      "superClasses": [
        "DummyDevice",
        "NetBlock"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "forced_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Forces some voltage on the output regardless of the input's actual voltage.\nCurrent draw is passed through unchanged."
    },
    {
      "name": "",
      "type": "Ap3012_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "sw",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "fb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "nshdn",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Tlp3545a",
      "superClasses": [
        "SolidStateRelay"
      ],
      "ports": [
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "feta",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "fetb",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base class for solid state relays.\nLED pins are passive (like the abstract LED) and the enclosing class should provide\nthe circuitry to make it a DigitalSink port."
    },
    {
      "name": "",
      "type": "CustomFet",
      "superClasses": [
        "Fet"
      ],
      "ports": [
        {
          "name": "source",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "drain",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gate",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "footprint_spec",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "manufacturer_spec",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "part_spec",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Base class for untyped MOSFETs\nDrain voltage, drain current, and gate voltages are positive (absolute).\n\nMOSFET equations\n- https://inst.eecs.berkeley.edu/~ee105/fa05/handouts/discussions/Discussion5.pdf (cutoff/linear/saturation regions)\n\nPotentially useful references for selecting FETs:\n- Toshiba application_note_en_20180726, Power MOSFET Selecting MOSFFETs and Consideration for Circuit Design\n- https://www.vishay.com/docs/71933/71933.pdf, MOSFET figures of merit (which don't help in choosing devices), Rds,on * Qg\n- https://www.allaboutcircuits.com/technical-articles/choosing-the-right-transistor-understanding-low-frequency-mosfet-parameters/\n- https://www.allaboutcircuits.com/technical-articles/choosing-the-right-transistor-understanding-dynamic-mosfet-parameters/"
    },
    {
      "name": "",
      "type": "SwitchFet",
      "superClasses": [
        "Fet"
      ],
      "ports": [
        {
          "name": "source",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "drain",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gate",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        },
        {
          "name": "drive_current",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "FET that switches between an off state and on state, not operating in the linear region except for rise/fall time.\nPorts remain untyped. TODO: are these limitations enough to type the ports? maybe except for the output?\nModels static and switching power dissipation. Gate charge and power parameters are optional, they will be the\nstricter of the explicit input or model-derived parameters."
    },
    {
      "name": "",
      "type": "Esp32_Base",
      "superClasses": [
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerTouchDriver",
        "IoControllerDac",
        "IoControllerCan",
        "IoControllerDvp8",
        "IoControllerI2s",
        "IoControllerWifi",
        "IoControllerBle",
        "IoControllerBluetooth",
        "BaseIoController",
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "chip_pu",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io0",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for ESP32 series microcontrollers with WiFi and Bluetooth (classic and LE)\n\nChip datasheet: https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf"
    },
    {
      "name": "",
      "type": "Ir2301_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "com",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "lin",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "hin",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "lo",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vs",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vb",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "ho",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Light",
      "superClasses": [
        "HumanInterface"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Discrete lights."
    },
    {
      "name": "",
      "type": "ConnectorSpeaker",
      "superClasses": [
        "Speaker"
      ],
      "ports": [
        {
          "name": "input",
          "type": "SpeakerPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": [
            8.0,
            8.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Speaker that delegates to a PassiveConnector and with configurable impedance."
    },
    {
      "name": "",
      "type": "HalfBridgeDriver",
      "superClasses": [
        "PowerSwitch"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "low_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "high_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "low_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "high_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "high_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "high_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "has_boot_diode",
          "type": "bool",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Half-bridge driver with independent low / high control for driving two NMOS devices,\nwith a high-side driver that allows a voltage offset from the main gnd.\n\nA parameter controls whether a boot diode is required (chip-internal or generated component) or disallowed.\nDevices with an internal boot diode must require has_boot_diode=False.\nDevices without an internal boot diode may generate an external one.\n\nThis device:\n- may or may not have shoot-through protection\n- may or may not have an internal bootstrap diode or controller\n- may or may not support non-half-bridge topologies (eg, high-side ground required to be the FET common node)\n\nTODO: auto-generate parameters based on switching frequencies and FET parameters?"
    },
    {
      "name": "",
      "type": "ConnectorResistiveSensor",
      "superClasses": [
        "Analog"
      ],
      "ports": [
        {
          "name": "input",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "resistance_range",
          "type": "range",
          "default_value": null
        },
        {
          "name": "fixed_resistance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Senses the resistance of an external resistor (through an abstract connector\nthat is part of this block) using a simple voltage divider circuit.\nThe external resistor is on the bottom (which makes this of a classic Wheatstone Bridge\nas drawn on Wikipedia)."
    },
    {
      "name": "",
      "type": "ResistorArray",
      "superClasses": [
        "PassiveComponent"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "count",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "An n-element resistor array, where all resistors have the same resistance and power rating."
    },
    {
      "name": "",
      "type": "Te1734839",
      "superClasses": [
        "Fpc050Top",
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "TE x-1734839 FFC/FPC connector, 0.50mm pitch horizontal top contacts."
    },
    {
      "name": "",
      "type": "CompactKeystone5015",
      "superClasses": [
        "TestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Keystone 5015 / 5017 but with an experimental compact footprint"
    },
    {
      "name": "",
      "type": "IsolatedCanTransceiver",
      "superClasses": [
        "CanTransceiver"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "can_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "can_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract CAN transceiver"
    },
    {
      "name": "",
      "type": "IoController",
      "superClasses": [
        "ProgrammableController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Structural abstract base class for a programmable controller chip (including microcontrollers that take firmware,\nand FPGAs that take gateware).\n\nThis provides the model of a grab bag of IOs on its structural interface, and supports common peripherals as\nVectors of GPIO, ADC, I2C, and SPI. The pin_assigns argument can be used to specify how to map Vector elements\nto physical (by footprint pin number) or logical pins (by pin name).\nLess common peripheral types like CAN and DAC can be added with mixins.\n\nThis defines a power input port that powers the device, though the IoControllerPowerOut mixin can be used\nfor a controller that provides power, for example a development board powered from onboard USB."
    },
    {
      "name": "",
      "type": "Keystone5015",
      "superClasses": [
        "TestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Keystone 5015 / 5017 (difference in p/n is only from packaging) SMD test point"
    },
    {
      "name": "",
      "type": "IndicatorLedArray",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "signals",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "count",
          "type": "int",
          "default_value": null
        },
        {
          "name": "color",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "An array of IndicatorLed, just a convenience wrapper."
    },
    {
      "name": "",
      "type": "Ap7215",
      "superClasses": [
        "LinearRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "AP7215 fixed 3.3v LDO in SOT-89 providing the LinearRegulator interface.\n  "
    },
    {
      "name": "",
      "type": "Nlas4157_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "s",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b1",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b0",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "RealtimeClock",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Realtime clock device."
    },
    {
      "name": "",
      "type": "Li18650",
      "superClasses": [
        "Battery"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            2.5,
            4.2
          ]
        },
        {
          "name": "actual_voltage",
          "type": "range",
          "default_value": [
            2.5,
            4.2
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Power sources, including connectors that also supply power."
    },
    {
      "name": "",
      "type": "Fet",
      "superClasses": [
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "source",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "drain",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gate",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "drain_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "drain_current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "gate_voltage",
          "type": "range",
          "default_value": "(0, 0)"
        },
        {
          "name": "rds_on",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "gate_charge",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "power",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "channel",
          "type": "str",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Base class for untyped MOSFETs\nDrain voltage, drain current, and gate voltages are positive (absolute).\n\nMOSFET equations\n- https://inst.eecs.berkeley.edu/~ee105/fa05/handouts/discussions/Discussion5.pdf (cutoff/linear/saturation regions)\n\nPotentially useful references for selecting FETs:\n- Toshiba application_note_en_20180726, Power MOSFET Selecting MOSFFETs and Consideration for Circuit Design\n- https://www.vishay.com/docs/71933/71933.pdf, MOSFET figures of merit (which don't help in choosing devices), Rds,on * Qg\n- https://www.allaboutcircuits.com/technical-articles/choosing-the-right-transistor-understanding-low-frequency-mosfet-parameters/\n- https://www.allaboutcircuits.com/technical-articles/choosing-the-right-transistor-understanding-dynamic-mosfet-parameters/"
    },
    {
      "name": "",
      "type": "Freenove_Esp32_Wrover",
      "superClasses": [
        "IoControllerUsbOut",
        "IoControllerPowerOut",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerTouchDriver",
        "IoControllerDac",
        "IoControllerCan",
        "IoControllerDvp8",
        "IoControllerI2s",
        "IoControllerWifi",
        "IoControllerBle",
        "IoControllerBluetooth",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32-WROVER-DEV breakout with camera.\n\nModule datasheet: https://www.espressif.com/sites/default/files/documentation/esp32-wrover-e_esp32-wrover-ie_datasheet_en.pdf\nBoard used: https://amazon.com/ESP32-WROVER-Contained-Compatible-Bluetooth-Tutorials/dp/B09BC1N9LL\nBoard internal schematic: https://github.com/Freenove/Freenove_ESP32_WROVER_Board/blob/f710fd6976e76ab76c29c2ee3042cd7bac22c3d6/Datasheet/ESP32_Schematic.pdf\n\nTop left is pin 1, going down the left side then up the right side.\nUp is defined from the text orientation (antenna is on top)."
    },
    {
      "name": "",
      "type": "Cp2102",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "suspend",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "nsuspend",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ri",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dcd",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dtr",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "dsr",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rts",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "cts",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "USB-UART converter"
    },
    {
      "name": "",
      "type": "Oled",
      "superClasses": [
        "Display"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "OLED display, with the pixel density of an LCD but with infinite contrast and no backlight."
    },
    {
      "name": "",
      "type": "Sd18ob261_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "clk",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "lr",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "data",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "IdealBuckConverter",
      "superClasses": [
        "Resettable",
        "DiscreteBuckConverter",
        "IdealModel"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Ideal buck converter producing the spec output voltage (buck-boost) limited by input voltage\nand drawing input current from conversation of power"
    },
    {
      "name": "",
      "type": "Esp32s3_Wroom_1_Device",
      "superClasses": [
        "Esp32s3_Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "chip_pu",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io0",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base class for ESP32-S3 series microcontrollers with WiFi and Bluetooth (classic and LE)\nand AI acceleration\n\nChip datasheet: https://www.espressif.com/documentation/esp32-s3_datasheet_en.pdf"
    },
    {
      "name": "",
      "type": "TagConnect",
      "superClasses": [
        "FootprintPassiveConnector"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract block for tag-connect pogo pin pads."
    },
    {
      "name": "",
      "type": "TeRc",
      "superClasses": [
        "TestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "size",
          "type": "str",
          "default_value": "0805"
        }
      ],
      "is_abstract": false,
      "docstring": "TE Type RC 0603/0805/1206 SMD test point"
    },
    {
      "name": "",
      "type": "CpuFanConnector",
      "superClasses": [
        "Connector"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "sense",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract block for a 3-pin CPU fan connector."
    },
    {
      "name": "",
      "type": "ForcedAnalogVoltage",
      "superClasses": [
        "DummyDevice",
        "NetBlock"
      ],
      "ports": [
        {
          "name": "signal_in",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "signal_out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "forced_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Xc6209_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "ce",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Nlas4157",
      "superClasses": [
        "AnalogSwitch"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "inputs",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "NLAS4157 2:1 analog switch, 1ohm Ron, in SOT-363.\nPin compatible with:\n- TS5A3159: 5v tolerant, 1 ohm\n- TS5A3160: 5v tolerant, 1 ohm"
    },
    {
      "name": "",
      "type": "Memory",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Memory device (including sockets and card sockets) with its surrounding application circuit."
    },
    {
      "name": "",
      "type": "AABattery",
      "superClasses": [
        "Battery"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            1.3,
            1.7
          ]
        },
        {
          "name": "actual_voltage",
          "type": "range",
          "default_value": [
            1.3,
            1.7
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "AA Alkaline battery"
    },
    {
      "name": "",
      "type": "NetBlock",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Internal blocks that are primarily an implementation detail or automatically generated by the system,\nand not meant for system-level users to instantiate."
    },
    {
      "name": "",
      "type": "MergedAnalogSource",
      "superClasses": [
        "DummyDevice",
        "NetBlock"
      ],
      "ports": [
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "inputs",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "Outline_Pn1332",
      "superClasses": [
        "Mechanical"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonelectrical footprint, including plated and NPTH mounting holes."
    },
    {
      "name": "",
      "type": "ProgrammingConnector",
      "superClasses": [
        "Connector",
        "Testing"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Programming / debug / JTAG connectors."
    },
    {
      "name": "",
      "type": "Mcp6001",
      "superClasses": [
        "Opamp"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP6001 RRO op-amp in SOT-23-5\n  "
    },
    {
      "name": "",
      "type": "HalfBridge",
      "superClasses": [],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "low_ctl",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "high_ctl",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Half bridge circuit with logic-level inputs and current draw calculated from the output node.\nTwo power rails: logic power (which can be used to power gate drivers), and the power rail."
    },
    {
      "name": "",
      "type": "Esp32c3_Wroom02",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "Resettable",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerI2s",
        "IoControllerWifi",
        "IoControllerBle",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around Esp32c3_Wroom02 with external capacitors and UART programming header."
    },
    {
      "name": "",
      "type": "Hdc1080",
      "superClasses": [
        "EnvironmentalSensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "BananaSafetyJack",
      "superClasses": [
        "BananaJack"
      ],
      "ports": [
        {
          "name": "port",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for a single terminal 4mm banana jack supporting a safety sheath,\nsuch as on multimeter leads."
    },
    {
      "name": "",
      "type": "TagConnectLegged",
      "superClasses": [
        "TagConnect"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Tag-connect pogo pin pad for the legged version. Compatible with non-legged versions."
    },
    {
      "name": "",
      "type": "Mcp4921_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vref",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vout",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "ldac",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "IoControllerTouchDriver",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "An interface mixin, allowing additional interface elements (parameters, ports) to be added to\na block interface - e.g., IoController with HasI2s.\n\nThis class should be directly part of the superclass list for an implementing class\n(e.g. Nrf52840 which has I2S should extend HasI2s).\n\nThis class should only be directly instantiated when adding the mixin interfaces to an abstract\nclass, e.g. IoController.with(HasI2s()). Instances of this class are not really valid on their own.\n\nThis may define __init__ parameters as keyword arguments ONLY. Otherwise, this can mess up\nparameter propagation in super().__init__ calls in implementing classes.\n\nThis should only be used for defining interface mixins. Implementation mixins should be defined\nusing the standard Block class hierarchy, however this acts like any Block just with mixin capabilities.\nTODO: is this a good decision?\nTODO: what about cases where it's a bit mixed, e.g. HasI2s also needs to register the self.i2s port?"
    },
    {
      "name": "",
      "type": "CpuFanPwmControl",
      "superClasses": [
        "CpuFanConnector"
      ],
      "ports": [
        {
          "name": "control",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin that adds an PWM control pin (open-collector input) to a CpuFanConnector."
    },
    {
      "name": "",
      "type": "Ref30xx_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Er_Epd027_2_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd1v8",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gdr",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "rese",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vshr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vsh",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vsl",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vgh",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vgl",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "bs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "busy",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rst",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "csb",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vcom",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "24-pin FPC connector for the ER-EPD-27-2 device"
    },
    {
      "name": "",
      "type": "OpampApplication",
      "superClasses": [
        "Analog"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Opamp-based circuits, typically one that perform some function on signals"
    },
    {
      "name": "",
      "type": "SmtSwitchRa",
      "superClasses": [
        "TactileSwitch"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Abstract class (category) for a tactile switch."
    },
    {
      "name": "",
      "type": "MergedSpiController",
      "superClasses": [
        "DummyDevice"
      ],
      "ports": [
        {
          "name": "ins",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Stm32g031_G_Device",
      "superClasses": [
        "Stm32g031Base_Device"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "nrst",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "\"STM32G031 GxU in UFQFPN28 package."
    },
    {
      "name": "",
      "type": "MountingHole_NoPad_M2_5",
      "superClasses": [
        "MountingHole"
      ],
      "ports": [
        {
          "name": "pad",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonelectrical footprint, including plated and NPTH mounting holes."
    },
    {
      "name": "",
      "type": "DiscreteComponent",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Discrete component that typically provides untyped ports (not to be be used directly), as a component to be used in an application circuit."
    },
    {
      "name": "",
      "type": "Tlv9061_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vinp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vinn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vout",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Oscillator",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Device that generates a digital clock signal given power."
    },
    {
      "name": "",
      "type": "Amplifier",
      "superClasses": [
        "OpampApplication"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "reference",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "amplification",
          "type": "range",
          "default_value": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": [
            10000.0,
            100000.0
          ]
        },
        {
          "name": "series",
          "type": "int",
          "default_value": 24
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.01
        }
      ],
      "is_abstract": false,
      "docstring": "Opamp non-inverting amplifier, outputs a scaled-up version of the input signal.\n\nFrom https://en.wikipedia.org/wiki/Operational_amplifier_applications#Non-inverting_amplifier:\nVout = Vin (1 + R1/R2)\n\nThe input and output impedances given are a bit more complex, so this simplifies it to\nthe opamp's specified pin impedances - TODO: is this correct(ish)?"
    },
    {
      "name": "",
      "type": "Esp32c3_Device",
      "superClasses": [
        "Esp32c3_Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "en",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io8",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io9",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "lna_in",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "vdd3p3",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd3p3_rtc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd3p3_cpu",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd_spi",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "xtal",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32C3 with 4MB integrated flash\nTODO: support other part numbers, including without integrated flash"
    },
    {
      "name": "",
      "type": "Bh1750",
      "superClasses": [
        "LightSensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "Battery",
      "superClasses": [
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "capacity",
          "type": "float",
          "default_value": 0.0
        }
      ],
      "is_abstract": true,
      "docstring": "Power sources, including connectors that also supply power."
    },
    {
      "name": "",
      "type": "TagConnectNonLegged",
      "superClasses": [
        "TagConnect"
      ],
      "ports": [
        {
          "name": "pins",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "length",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Tag-connect pogo pin pad for the non-legged version. NOT compatible with legged versions."
    },
    {
      "name": "",
      "type": "BlueSmirf",
      "superClasses": [
        "Interface",
        "Radiofrequency"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "data",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cts",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "rts",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SlueSMiRF Gold/Silver"
    },
    {
      "name": "",
      "type": "IoControllerGroundOut",
      "superClasses": [
        "IoController"
      ],
      "ports": [
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for an IO controller that can act as a power output (e.g. dev boards),\n this only provides the ground source pin. Subclasses can define output power pins.\nMultiple power pin mixins can be used on the same class, but only one gnd_out can be connected."
    },
    {
      "name": "",
      "type": "Pesd1can",
      "superClasses": [
        "CanEsdDiode"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Circuit protection elements, eg TVS diodes, fuses"
    },
    {
      "name": "",
      "type": "ProtectionZenerDiode",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Zener diode reversed across a power rail to provide transient overvoltage protection (and become an incandescent\nindicator on a reverse voltage)"
    },
    {
      "name": "",
      "type": "Xc6209",
      "superClasses": [
        "Resettable",
        "LinearRegulator",
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "XC6209F (F: 300mA version, no pull-down resistor; 2: +/-2% accuracy)\nLow-ESR ceramic cap compatible"
    },
    {
      "name": "",
      "type": "Iso1050dub_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcc2",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd2",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Interface",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Interface devices, eg CAN transceiver (CAN <-> SPI / I2C interface),\nand including analog interfaces (ADCs, DACs)."
    },
    {
      "name": "",
      "type": "JlcFet",
      "superClasses": [
        "JlcBaseFet",
        "BaseTableFet",
        "Fet"
      ],
      "ports": [
        {
          "name": "source",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "drain",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gate",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Shared table columns for both TableFet and TableSwitchFet"
    },
    {
      "name": "",
      "type": "AnalogSinkBridge",
      "superClasses": [
        "CircuitPortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inner_link",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "AnalogSwitchTree",
      "superClasses": [
        "AnalogSwitch"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "inputs",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "switch_size",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Generates an n-ported analog switch by creating a tree of individual, smaller switches.\nParameterized by the size of the element switches."
    },
    {
      "name": "",
      "type": "Stm32g031_G",
      "superClasses": [
        "Stm32g031Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "Vl53l0x_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "xshut",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gpio1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Shared common definitions for VL53L0x devices"
    },
    {
      "name": "",
      "type": "DummyDevice",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Tlv9061",
      "superClasses": [
        "Opamp"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "RRIO op-amp in SOT-23-6.\n  "
    },
    {
      "name": "",
      "type": "DiscreteBuckBoostConverter",
      "superClasses": [
        "BuckBoostConverter"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)"
        }
      ],
      "is_abstract": true,
      "docstring": "Category for discrete buck-boost converter subcircuits (as opposed to integrated components)"
    },
    {
      "name": "",
      "type": "DifferentialAmplifier",
      "superClasses": [
        "OpampApplication"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "input_positive",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "input_negative",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output_reference",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "ratio",
          "type": "range",
          "default_value": null
        },
        {
          "name": "input_impedance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "series",
          "type": "int",
          "default_value": 24
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.01
        }
      ],
      "is_abstract": false,
      "docstring": "Opamp differential amplifier, outputs the difference between the input nodes, scaled by some factor,\nand offset from some reference node.\nThis implementation uses the same resistance for the two input resistors (R1, R2),\nand the same resistance for the feedback and reference resistors (Rf, Rg).\nFrom https://en.wikipedia.org/wiki/Operational_amplifier_applications#Differential_amplifier_(difference_amplifier):\nVout = Rf/R1 * (Vp - Vn)\n\nImpedance equations from https://e2e.ti.com/blogs_/archives/b/precisionhub/posts/overlooking-the-obvious-the-input-impedance-of-a-difference-amplifier\n  (ignoring the opamp input impedances, which we assume are >> the resistors)\nRin,n = R1 / (1 - (Rg / (R2+Rg)) * (Vin,n / Vin,p))\nRin,p = R2 + Rg\nRout = opamp output impedance - TODO: is this correct?\n\nratio specifies Rf/R1, the amplification ratio."
    },
    {
      "name": "",
      "type": "Xiao_Esp32c3",
      "superClasses": [
        "IoControllerUsbOut",
        "IoControllerPowerOut",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerI2s",
        "IoControllerWifi",
        "IoControllerBle",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32-C3 development board, a tiny development (21x17.5mm) daughterboard with a RISC-V microcontroller\nsupporting WiFi and BLE. Has an onboard USB connector, so this can also source power.\n\nLimited pins (only 11 for IOs, of which 6 are usable as the other 5 have boot requirements).\n\nRequires Seeed Studio's KiCad library for the footprint: https://github.com/Seeed-Studio/OPL_Kicad_Library\nThe 'Seeed Studio XIAO Series Library' must have been added as a footprint library of the same name.\n\nPinning data: https://www.seeedstudio.com/blog/wp-content/uploads/2022/08/Seeed-Studio-XIAO-Series-Package-and-PCB-Design.pdf"
    },
    {
      "name": "",
      "type": "PullupResistor",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Pull-up resistor with an VoltageSink for automatic implicit connect to a Power line."
    },
    {
      "name": "",
      "type": "Molex1040310811",
      "superClasses": [
        "MicroSdSocket",
        "Connector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MicroSD socket"
    },
    {
      "name": "",
      "type": "Keystone5000",
      "superClasses": [
        "TestPoint"
      ],
      "ports": [
        {
          "name": "io",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": ""
        }
      ],
      "is_abstract": false,
      "docstring": "Keystone 5000-5004 series PTH test mini points"
    },
    {
      "name": "",
      "type": "BaseIoController",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "An abstract IO controller block, that takes power input and provides a grab-bag of common IOs.\nA base interface for microcontrollers and microcontroller-like devices (eg, FPGAs).\nPin assignments are handled via refinements and can be assigned to pins' allocated names.\n\nThis should not be instantiated as a generic block."
    },
    {
      "name": "",
      "type": "Pj_036ah",
      "superClasses": [
        "PowerBarrelJack"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "SMT Barrel jack for 2.1mm ID and 5.5mm OD"
    },
    {
      "name": "",
      "type": "Antenna",
      "superClasses": [],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "power",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Part with a statically-defined subcircuit.\nRelations between contained parameters may only be expressed in the given constraint language."
    },
    {
      "name": "",
      "type": "Ap3418",
      "superClasses": [
        "Resettable",
        "DiscreteBuckConverter",
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adjustable synchronous buck converter in SOT-23-5 with integrated switch"
    },
    {
      "name": "",
      "type": "Sn65hvd230_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "KailhSocket",
      "superClasses": [
        "MechanicalKeyswitch"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Kailh mechanical keyboard hotswap socket.\nRequires an external library, Keyswitch Kicad Library, can be installed from the\nKiCad Plugin and Content Manager, or from GitHub https://github.com/perigoso/keyswitch-kicad-library\nEven after the content manager install, it must also be manually added to the footprint table:\nName: Switch_Keyboard_Hotswap_Kailh\nLocation: ${KICAD6_3RD_PARTY}/footprints/com_github_perigoso_keyswitch-kicad-library/Switch_Keyboard_Hotswap_Kailh.pretty"
    },
    {
      "name": "",
      "type": "AnalogDemuxer",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "outputs",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around AnalogSwitch that provides demuxing functionality - multiple source ports, one sink port.\n  "
    },
    {
      "name": "",
      "type": "MountingHole",
      "superClasses": [
        "Mechanical"
      ],
      "ports": [
        {
          "name": "pad",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Nonelectrical footprint, including plated and NPTH mounting holes."
    },
    {
      "name": "",
      "type": "DiscreteSemiconductor",
      "superClasses": [
        "DiscreteComponent"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Discrete semiconductor product, eg diodes and FETs, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "Speaker",
      "superClasses": [
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "input",
          "type": "SpeakerPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract speaker part with speaker input port."
    },
    {
      "name": "",
      "type": "SeriesPowerPptcFuse",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "trip_current",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Series fuse for power applications"
    },
    {
      "name": "",
      "type": "VoltageRegulator",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Structural abstract base class for DC-DC voltage regulators with shared ground (non-isolated).\nThis takes some input voltage and produces a stable voltage at output_voltage on its output.\n\nWhile this abstract class does not define any limitations on the output voltage, subclasses and concrete\nimplementations commonly have restrictions, for example linear regulators can only produce voltages lower\nthan the input voltage."
    },
    {
      "name": "",
      "type": "Ice40TargetHeader",
      "superClasses": [
        "ProgrammingConnector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "cs",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "reset",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Custom programming header for iCE40 loosely based on the SWD pinning"
    },
    {
      "name": "",
      "type": "Tmp1075n",
      "superClasses": [
        "EnvironmentalSensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "alert",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": 0
        }
      ],
      "is_abstract": false,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "CombinedCapacitorElement",
      "superClasses": [
        "Capacitor"
      ],
      "ports": [
        {
          "name": "pos",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "neg",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Polarized capacitor, which we assume will be the default"
    },
    {
      "name": "",
      "type": "Ap3418_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "fb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "en",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Mcp47f_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vref0",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vref1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vout0",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vout1",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vout2",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vout3",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "lat0",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "lat1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "IoControllerUsbOut",
      "superClasses": [
        "IoControllerGroundOut"
      ],
      "ports": [
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "IO controller mixin that provides an output of the IO controller's USB Vbus.\nFor devices without PD support, this should be 5v. For devices with PD support, this is whatever\nVbus can be."
    },
    {
      "name": "",
      "type": "UsbAPlugPads",
      "superClasses": [
        "UsbDeviceConnector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "usb",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Abstract base class for a USB 2.0 device-side port connector"
    },
    {
      "name": "",
      "type": "JacdacMountingGnd2",
      "superClasses": [],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Block that represents a component that has part(s) and trace(s) on the PCB.\nProvides interfaces that define footprints and copper connections and generates to appropriate metadata."
    },
    {
      "name": "",
      "type": "ForcedDigitalSinkCurrentDraw",
      "superClasses": [
        "DummyDevice",
        "NetBlock"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "pwr_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "forced_current_draw",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Non-physical \"device\" used to affect parameters."
    },
    {
      "name": "",
      "type": "Xc9142_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vin",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "ce",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "sw",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vout",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "EInkBoostPowerPath",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pos_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "neg_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gate",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "isense",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": null
        },
        {
          "name": "inductance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "in_capacitance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "out_capacitance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "diode_voltage_drop",
          "type": "range",
          "default_value": [
            0.0,
            0.5
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Boost converter power path for e-ink displays with negative voltage generation through\na bootstrap switched-cap circuit.\nCurrent is the peak current through the FET and diodes."
    },
    {
      "name": "",
      "type": "Cr2032",
      "superClasses": [
        "Battery"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            2.0,
            3.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Power sources, including connectors that also supply power."
    },
    {
      "name": "",
      "type": "VoltageIsolatedSwitch",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Digitally controlled solid state relay that switches a voltage signal.\nIncludes a ballasting resistor.\n\nThe ports are not tagged with Input/Output/InOut, because of potential for confusion between\nthe digital side and the analog side."
    },
    {
      "name": "",
      "type": "E93Lc_B",
      "superClasses": [
        "SpiMemory"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "size",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "93LCxxB series of SPI EEPROMs. The E prefix is because Python identifiers can't start with numbers\nNote, A variant is 8-bit word, B variant is 16-bit word"
    },
    {
      "name": "",
      "type": "Opa197_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vinp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vinn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vout",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "I2cTargetBridge",
      "superClasses": [
        "PortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inner_link",
          "type": "I2cController",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "Crystal",
      "superClasses": [
        "DiscreteComponent"
      ],
      "ports": [
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Discrete component that typically provides untyped ports (not to be be used directly), as a component to be used in an application circuit."
    },
    {
      "name": "",
      "type": "Ice40up5k_Sg48_Device",
      "superClasses": [
        "Ice40up_Device"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "vccio_1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vccio_0",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vccio_2",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vpp_2v5",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vcc_pll",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "creset_b",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cdone",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "spi_config",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "spi_config_cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base class for iCE40 UltraPlus FPGAs, 2.8k-5.2k logic cells."
    },
    {
      "name": "",
      "type": "Bme680_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Inductor",
      "superClasses": [
        "PassiveComponent"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "inductance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Passives components, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "Ldl1117_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Mcp47f",
      "superClasses": [
        "DigitalToAnalog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "ref0",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "ref1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "out0",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out1",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out2",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "out3",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "lat0",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "lat1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP47FxBx4/8 quad / octal 8/10/12-bit I2C DAC, with selectable internal or external Vref\n  "
    },
    {
      "name": "",
      "type": "UsbCcPulldownResistor",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "cc",
          "type": "UsbCcPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Pull-down resistors on the CC lines for a device to request power from a type-C UFP port,\nwithout needing a USB PD IC."
    },
    {
      "name": "",
      "type": "JacdacMountingGnd4",
      "superClasses": [],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Block that represents a component that has part(s) and trace(s) on the PCB.\nProvides interfaces that define footprints and copper connections and generates to appropriate metadata."
    },
    {
      "name": "",
      "type": "SingleDiodePowerMerge",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_in_diode",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": null
        },
        {
          "name": "reverse_recovery_time",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Single-diode power merge block for two voltage sources, where the lower voltage one is diode-gated and less\npreferred if both are connected."
    },
    {
      "name": "",
      "type": "Sn65hvd230",
      "superClasses": [
        "CanTransceiver"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Abstract CAN transceiver"
    },
    {
      "name": "",
      "type": "SmtSwitch",
      "superClasses": [
        "TactileSwitch"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "Abstract class (category) for a tactile switch."
    },
    {
      "name": "",
      "type": "CircuitPortAdapter",
      "superClasses": [
        "PortAdapter"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "Switch",
      "superClasses": [
        "DiscreteComponent"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Two-ported device that closes a circuit when pressed."
    },
    {
      "name": "",
      "type": "Holyiot_18010_Device",
      "superClasses": [
        "Nrf52840_Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr_usb",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "xtal",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "xtal_rtc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "nreset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "nRF52840 IO mappings\nhttps://infocenter.nordicsemi.com/pdf/nRF52840_PS_v1.7.pdf"
    },
    {
      "name": "",
      "type": "MountingHole_M4",
      "superClasses": [
        "MountingHole"
      ],
      "ports": [
        {
          "name": "pad",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nonelectrical footprint, including plated and NPTH mounting holes."
    },
    {
      "name": "",
      "type": "CombinedCapacitor",
      "superClasses": [
        "PassiveComponent"
      ],
      "ports": [
        {
          "name": "pos",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "neg",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "extend_upper",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": false,
      "docstring": "A packed capacitor that combines multiple individual capacitors into a single component,\nwith the sum of or taking the max of the constituent capacitances."
    },
    {
      "name": "",
      "type": "JlcOscillator",
      "superClasses": [
        "Oscillator"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Provides basic part table matching functionality for oscillators, by frequency only.\nUnlike other table-based passive components, this should generate the full application circuit.\nNo default footprints are provided since these may be non-standard."
    },
    {
      "name": "",
      "type": "OpenDrainDriver",
      "superClasses": [
        "PowerSwitch"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "max_rds",
          "type": "float",
          "default_value": 1.0
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "NFET configured as an open-drain driver. Potentially useful for voltage translation applications."
    },
    {
      "name": "",
      "type": "Esp32s3_Wroom_1",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "Resettable",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerTouchDriver",
        "IoControllerCan",
        "IoControllerUsb",
        "IoControllerI2s",
        "IoControllerDvp8",
        "IoControllerWifi",
        "IoControllerBle",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32-S3-WROOM-1 module\n  "
    },
    {
      "name": "",
      "type": "SdSocket",
      "superClasses": [
        "SdCard",
        "Connector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cd",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "wp",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Full-sized SD card socket"
    },
    {
      "name": "",
      "type": "CanDiffBridge",
      "superClasses": [
        "PortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "inner_link",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "Mcp3201_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vref",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "IoControllerBle",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin indicating this IoController has programmable Bluetooth LE. Does not expose any ports."
    },
    {
      "name": "",
      "type": "Tpd2e009",
      "superClasses": [
        "UsbEsdDiode"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "usb",
          "type": "UsbPassivePort",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Circuit protection elements, eg TVS diodes, fuses"
    },
    {
      "name": "",
      "type": "ZenerDiode",
      "superClasses": [
        "DiscreteSemiconductor"
      ],
      "ports": [
        {
          "name": "anode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "cathode",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "zener_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": true,
      "docstring": "Base class for untyped zeners\n\nTODO power? capacitance? leakage current?"
    },
    {
      "name": "",
      "type": "Al8861",
      "superClasses": [
        "LedDriverPwm",
        "LedDriverSwitchingConverter",
        "LedDriver"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "pwm",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "diode_voltage_drop",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "AL8861 buck LED driver."
    },
    {
      "name": "",
      "type": "BatteryProtector_S8261A_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vm",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "do",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "co",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "TactileSwitch",
      "superClasses": [
        "Switch"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract class (category) for a tactile switch."
    },
    {
      "name": "",
      "type": "Esp32_Wroom_32",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "Resettable",
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerTouchDriver",
        "IoControllerDac",
        "IoControllerCan",
        "IoControllerDvp8",
        "IoControllerI2s",
        "IoControllerWifi",
        "IoControllerBle",
        "IoControllerBluetooth",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around Esp32c3_Wroom02 with external capacitors and UART programming header.\nNOT COMPATIBLE WITH QSPI PSRAM VARIANTS - for those, GPIO16 needs to be pulled up."
    },
    {
      "name": "",
      "type": "E93Lc_B_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "size",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Opa197",
      "superClasses": [
        "Opamp"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "High voltage opamp (4.5-36V) in SOIC-8.\n(part also available in SOT-23-5)"
    },
    {
      "name": "",
      "type": "SwdCortexTargetConnectorReset",
      "superClasses": [
        "SwdCortexTargetConnector"
      ],
      "ports": [
        {
          "name": "reset",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin for SWD connectors with adding the optional reset pin"
    },
    {
      "name": "",
      "type": "IdealLinearRegulator",
      "superClasses": [
        "Resettable",
        "LinearRegulator",
        "IdealModel"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Ideal linear regulator, draws the output current and produces spec output voltage limited by input voltage"
    },
    {
      "name": "",
      "type": "InternalBlock",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Internal blocks that are primarily an implementation detail or automatically generated by the system,\nand not meant for system-level users to instantiate."
    },
    {
      "name": "",
      "type": "Rp2040_Device",
      "superClasses": [
        "IoControllerI2cTarget",
        "IoControllerUsb",
        "BaseIoController",
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "dvdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vreg_vout",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vreg_vin",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "usb_vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "adc_avdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "qspi",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "qspi_cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "qspi_sd2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "qspi_sd3",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "xosc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "run",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Eventually, the USB device port will be an IoController mixin.\nFor now, it's part of base, since it's common enough and there isn't GUI support for mixins.\n\nThis class SHOULD BE mixed into IoController blocks, in preparation for the eventual move.\nThis WILL NOT WORK when used in .with_mixin, since this defines no fields."
    },
    {
      "name": "",
      "type": "CharlieplexedLedMatrix",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "ios",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "rows",
          "type": "int",
          "default_value": null
        },
        {
          "name": "cols",
          "type": "int",
          "default_value": null
        },
        {
          "name": "color",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "A LED matrix that saves on IO pins by charlieplexing, only requiring max(rows + 1, cols) GPIOs to control.\nRequires IOs that can tri-state, and requires scanning through rows (so not all LEDs are simultaneously on).\n\nAnodes (columns) are directly connected to the IO line, while the cathodes (rows) are connected through a resistor.\nA generalization of https://en.wikipedia.org/wiki/Charlieplexing#/media/File:3-pin_Charlieplexing_matrix_with_common_resistors.svg"
    },
    {
      "name": "",
      "type": "SeriesPowerInductor",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "inductance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "VoltageSource/Sink-typed series inductor for power filtering"
    },
    {
      "name": "",
      "type": "SwdCortexTargetTc2050",
      "superClasses": [
        "SwdCortexTargetConnector",
        "SwdCortexTargetConnectorReset",
        "SwdCortexTargetConnectorSwo",
        "SwdCortexTargetConnectorTdi"
      ],
      "ports": [
        {
          "name": "tdi",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "swo",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "reset",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "swd",
          "type": "SwdHostPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "UNOFFICIAL tag connect SWD header, maintaining physical pin compatibility with the 2x05 1.27mm header."
    },
    {
      "name": "",
      "type": "Sk6812Mini_E",
      "superClasses": [
        "Neopixel"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SK6812MINI-E reverse-mount Neopixel RGB LED, commonly used for keyboard lighting.\nNote: while listed as JLC C5149201, it seems non-stocked and is standard assembly only."
    },
    {
      "name": "",
      "type": "IoControllerUsb",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Eventually, the USB device port will be an IoController mixin.\nFor now, it's part of base, since it's common enough and there isn't GUI support for mixins.\n\nThis class SHOULD BE mixed into IoController blocks, in preparation for the eventual move.\nThis WILL NOT WORK when used in .with_mixin, since this defines no fields."
    },
    {
      "name": "",
      "type": "UsbAReceptacle",
      "superClasses": [
        "UsbHostConnector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Abstract base class for a USB 2.0 device-side port connector"
    },
    {
      "name": "",
      "type": "IndicatorSinkLedArray",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "signals",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [
        {
          "name": "count",
          "type": "int",
          "default_value": null
        },
        {
          "name": "color",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "An array of IndicatorSinkLed, just a convenience wrapper."
    },
    {
      "name": "",
      "type": "Apx803s",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "nreset",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "reset_threshold",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Interface devices, eg CAN transceiver (CAN <-> SPI / I2C interface),\nand including analog interfaces (ADCs, DACs)."
    },
    {
      "name": "",
      "type": "BatteryProtector_S8261A",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Power conditioning circuits that provide a stable and/or safe power supply, eg voltage regulators"
    },
    {
      "name": "",
      "type": "Ec11eWithSwitch",
      "superClasses": [
        "RotaryEncoderSwitch",
        "RotaryEncoder"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Generic EC11E PTH rotary with pushbutton switch.\nDefault part is EC11E18244A5, with 1.5mm pushbutton travel, 36 detents (finest),\nbut footprint should be compatible with other parts in the EC11E w/ switch series"
    },
    {
      "name": "",
      "type": "DigitalSourceBridge",
      "superClasses": [
        "CircuitPortBridge"
      ],
      "ports": [
        {
          "name": "outer_port",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "inner_link",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "MechanicalKeyswitch",
      "superClasses": [
        "Switch"
      ],
      "ports": [
        {
          "name": "sw",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract class (category) for a mechanical keyboard switch, including sockets."
    },
    {
      "name": "",
      "type": "Ir2301",
      "superClasses": [
        "HalfBridgeDriver"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "low_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "high_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "low_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "high_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "high_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "high_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "has_boot_diode",
          "type": "bool",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "IR2301 half-bridge driver supporting 600V offset, 5-20v input, external boot diode,\nno shoot through protect, no deadtime."
    },
    {
      "name": "",
      "type": "Resistor",
      "superClasses": [
        "PassiveComponent"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "power",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Passives components, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "Lm4871",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "sig",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spk",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Interface devices, eg CAN transceiver (CAN <-> SPI / I2C interface),\nand including analog interfaces (ADCs, DACs)."
    },
    {
      "name": "",
      "type": "SwdCortexTargetConnectorSwo",
      "superClasses": [
        "SwdCortexTargetConnector"
      ],
      "ports": [
        {
          "name": "swo",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin for SWD connectors with adding the optional SWO pin"
    },
    {
      "name": "",
      "type": "IntegratorInverting",
      "superClasses": [
        "OpampApplication"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "reference",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "factor",
          "type": "range",
          "default_value": null
        },
        {
          "name": "capacitance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "series",
          "type": "int",
          "default_value": 6
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.05
        }
      ],
      "is_abstract": false,
      "docstring": "Opamp integrator, outputs the negative integral of the input signal, relative to some reference signal.\nWill clip to the input voltage rails.\n\nFrom https://en.wikipedia.org/wiki/Operational_amplifier_applications#Inverting_integrator:\nVout = - 1/RC * int(Vin) (integrating over time)\n\nSeries is lower and tolerance is higher because there's a cap involved\nTODO - separate series for cap, and series and tolerance by decade?"
    },
    {
      "name": "",
      "type": "PortBridge",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Defines rules for connecting the internal port of a hierarchy block to a link.\nOnly needed if the internal port connects to an internal link and is NOT a one-to-one forwarding port.\n\nNote: this is a regular block in the IR, but is conceptually different and inferred in the frontend for ease-of-use.\n\nExample: a power sink internal port can connect to one power sink port on an internal block without a port bridge,\nbut requires a port bridge to connect to a power link that serves multiple power sinks on internal blocks."
    },
    {
      "name": "",
      "type": "Esp32s3_Base",
      "superClasses": [
        "IoControllerSpiPeripheral",
        "IoControllerI2cTarget",
        "IoControllerTouchDriver",
        "IoControllerCan",
        "IoControllerUsb",
        "IoControllerI2s",
        "IoControllerDvp8",
        "IoControllerWifi",
        "IoControllerBle",
        "BaseIoController",
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "chip_pu",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io0",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for ESP32-S3 series microcontrollers with WiFi and Bluetooth (classic and LE)\nand AI acceleration\n\nChip datasheet: https://www.espressif.com/documentation/esp32-s3_datasheet_en.pdf"
    },
    {
      "name": "",
      "type": "JacdacEdgeConnectorBare",
      "superClasses": [],
      "ports": [
        {
          "name": "gnd_src",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "jd_pwr_src",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd_sink",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "jd_pwr_sink",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "jd_data",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "is_power_provider",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": false,
      "docstring": "Jacdac connector, in power sink or source mode (both available, but both may not be connected simultaneously).\nThis is the bare connector, you should use the non-bare one with the recommended interface circuitry in most cases!\nUses the recessed connector, which is the default used by the device outline generator.\n\nRequires this KiCad footprint library to be available: https://github.com/mattoppenheim/jacdac\n\nAll specs from from https://microsoft.github.io/jacdac-docs/reference/electrical-spec\n\nIf the power sink (power is sunk into the port and off-board) is connected, is_power_provider\nindicates whether this port should model the maximum downstream current draw"
    },
    {
      "name": "",
      "type": "SignalDivider",
      "superClasses": [
        "Analog"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [
        {
          "name": "ratio",
          "type": "range",
          "default_value": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Specialization of ResistiveDivider for Analog signals"
    },
    {
      "name": "",
      "type": "Ld1117_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Er_Oled_091_3_Outline",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Footprint for OLED panel outline"
    },
    {
      "name": "",
      "type": "CanTransceiver",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract CAN transceiver"
    },
    {
      "name": "",
      "type": "IoControllerDvp8",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "An interface mixin, allowing additional interface elements (parameters, ports) to be added to\na block interface - e.g., IoController with HasI2s.\n\nThis class should be directly part of the superclass list for an implementing class\n(e.g. Nrf52840 which has I2S should extend HasI2s).\n\nThis class should only be directly instantiated when adding the mixin interfaces to an abstract\nclass, e.g. IoController.with(HasI2s()). Instances of this class are not really valid on their own.\n\nThis may define __init__ parameters as keyword arguments ONLY. Otherwise, this can mess up\nparameter propagation in super().__init__ calls in implementing classes.\n\nThis should only be used for defining interface mixins. Implementation mixins should be defined\nusing the standard Block class hierarchy, however this acts like any Block just with mixin capabilities.\nTODO: is this a good decision?\nTODO: what about cases where it's a bit mixed, e.g. HasI2s also needs to register the self.i2s port?"
    },
    {
      "name": "",
      "type": "UsbCReceptacle",
      "superClasses": [
        "UsbDeviceConnector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "usb",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "cc",
          "type": "UsbCcPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": [
            4.75,
            5.25
          ]
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            0.0,
            0.5
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "USB Type-C Receptacle that automatically generates the CC resistors if CC is not connected."
    },
    {
      "name": "",
      "type": "IndicatorLed",
      "superClasses": [
        "Light"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "color",
          "type": "str",
          "default_value": ""
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ]
        }
      ],
      "is_abstract": false,
      "docstring": "High-side-driven (default, \"common cathode\") indicator LED"
    },
    {
      "name": "",
      "type": "Ltc3429_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vin",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "sw",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "fb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "vout",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "nshdn",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Er_Epd027_2",
      "superClasses": [
        "EInk"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "busy",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "EK79651AB-based white/black/red 2.7\" 176x264 e-paper display.\n(Probably) compatible with https://www.waveshare.com/w/upload/b/ba/2.7inch_e-Paper_V2_Specification.pdf,\nand https://www.waveshare.com/w/upload/7/7b/2.7inch-e-paper-b-v2-specification.pdf"
    },
    {
      "name": "",
      "type": "JlcPptcFuse",
      "superClasses": [
        "PptcFuse",
        "Fuse",
        "SmdStandardPackage"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "PPTC self-resetting fuse"
    },
    {
      "name": "",
      "type": "DigitalSourceAdapterVoltageSource",
      "superClasses": [
        "CircuitPortAdapter"
      ],
      "ports": [
        {
          "name": "src",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "dst",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A mixin for a Block that also defines a pin mapping for KiCad symbol(s),\nallowing this to be used in a schematic.\nThe Block still must be instantiated via HDL, but the connectivity can be defined by a schematic."
    },
    {
      "name": "",
      "type": "DigitalWrapperRotaryEncoder",
      "superClasses": [
        "DigitalRotaryEncoder"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Basic implementation for DigitalRotaryEncoder as a wrapper around a passive-typed RotaryEncoder."
    },
    {
      "name": "",
      "type": "Stm32f103Base",
      "superClasses": [
        "Resettable",
        "IoControllerI2cTarget",
        "IoControllerCan",
        "IoControllerUsb",
        "Microcontroller",
        "IoController",
        "BaseIoController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin for all devices that specifies a digital reset pin (active-low reset / active-high enable).\n\nTHIS IS AN ADVANCED FEATURE - BE SURE TO UNDERSTAND THE RESET REQUIREMENTS OF DEVICES.\nWhen disconnected (mixin not used or port not connected), reset circuitry is automatically generated if needed.\nWhen connected, no additional reset circuitry is generated and the system designer is responsible for providing\nappropriate reset signals.\nNote that some chips have built-in pull-ups on their reset lines, these are not affected, but no external reset\ncircuitry will be generated.\n\nDevices may optionally require the reset pin where a power-on reset pulse is required and tying / pulling the\npin high is insufficient.\n\nMicrocontrollers may generate internal programming connectors that drive this signal, and system designers must\nconnect microcontroller resets with this in mind - for example, only driving them in open-drain mode."
    },
    {
      "name": "",
      "type": "Vl53l0xArray",
      "superClasses": [
        "DistanceSensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "xshut",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "gpio1",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "count",
          "type": "int",
          "default_value": null
        },
        {
          "name": "first_xshut_fixed",
          "type": "bool",
          "default_value": 0.0
        }
      ],
      "is_abstract": false,
      "docstring": "Array of Vl53l0x with common I2C but individually exposed XSHUT pins and optionally GPIO1 (interrupt)."
    },
    {
      "name": "",
      "type": "FerriteBead",
      "superClasses": [
        "PassiveComponent"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "b",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ]
        },
        {
          "name": "hf_impedance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        },
        {
          "name": "dc_resistance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ]
        }
      ],
      "is_abstract": true,
      "docstring": "Passives components, typically used as part of an application circuit."
    },
    {
      "name": "",
      "type": "Opa2197",
      "superClasses": [],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "down"
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Dual precision RRO opamps.\n\nTODO infrastructure for packed opamps? Packed opamp abstract class? - shared w/ OPAx333"
    },
    {
      "name": "",
      "type": "CeramicResonator",
      "superClasses": [
        "OscillatorReference"
      ],
      "ports": [
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Category for ceramic resonators"
    },
    {
      "name": "",
      "type": "Esp32c3_Wroom02_Device",
      "superClasses": [
        "Esp32c3_Base"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right"
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left"
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "en",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io8",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "io9",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32C module\n\nModule datasheet: https://www.espressif.com/sites/default/files/documentation/esp32-c3-wroom-02_datasheet_en.pdf"
    },
    {
      "name": "",
      "type": "PullupDelayRc",
      "superClasses": [
        "DigitalFilter"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null
        },
        {
          "name": "time_constant",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Pull-up resistor with capacitor for delay.\n  "
    },
    {
      "name": "",
      "type": "Ap2210",
      "superClasses": [
        "Resettable",
        "LinearRegulator",
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "AP2210 RF ULDO in SOT-23-5 with high PSRR and high(er) voltage tolerant.\n  "
    },
    {
      "name": "",
      "type": "Pcf2129",
      "superClasses": [
        "RealtimeClock"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_bat",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "clkout",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "int",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "RTC with integrated crystal. SO-16 version"
    },
    {
      "name": "",
      "type": "UsbHostConnector",
      "superClasses": [
        "Connector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract base class for a USB 2.0 device-side port connector"
    },
    {
      "name": "",
      "type": "IoControllerWifi",
      "superClasses": [
        "BaseIoController"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Mixin indicating this IoController has programmable WiFi. Does not expose any ports."
    },
    {
      "name": "",
      "type": "UsbMicroBReceptacle",
      "superClasses": [
        "UsbDeviceConnector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "usb",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Abstract base class for a USB 2.0 device-side port connector"
    },
    {
      "name": "",
      "type": "Ltc3429",
      "superClasses": [
        "Resettable",
        "DiscreteBoostConverter",
        "VoltageRegulator"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down"
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Low-input-voltage boost converter (starts as low as 0.85V).\nPin-compatible with the less-expensive UM3429S"
    },
    {
      "name": "",
      "type": "KiCadBlackbox",
      "superClasses": [
        "InternalBlock"
      ],
      "ports": [
        {
          "name": "ports",
          "type": "Passive",
          "is_array": true,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "kicad_pins",
          "type": "array",
          "default_value": null
        },
        {
          "name": "kicad_refdes_prefix",
          "type": "str",
          "default_value": null
        },
        {
          "name": "kicad_footprint",
          "type": "str",
          "default_value": null
        },
        {
          "name": "kicad_part",
          "type": "str",
          "default_value": null
        },
        {
          "name": "kicad_value",
          "type": "str",
          "default_value": null
        },
        {
          "name": "kicad_datasheet",
          "type": "str",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "A footprint block that is fully defined (both value fields and structural pins) by its argument parameters\nand has all passive ports."
    },
    {
      "name": "",
      "type": "Mcp73831_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "stat",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "vbat",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "prog",
          "type": "Passive",
          "is_array": false,
          "hint_position": null
        }
      ],
      "argParams": [
        {
          "name": "actual_charging_current",
          "type": "range",
          "default_value": null
        }
      ],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    },
    {
      "name": "",
      "type": "Radiofrequency",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Radiofrequency devices."
    },
    {
      "name": "",
      "type": "Opa2197_Device",
      "superClasses": [
        "InternalSubcircuit"
      ],
      "ports": [
        {
          "name": "vp",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "vn",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up"
        },
        {
          "name": "inpa",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "inna",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "outa",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        },
        {
          "name": "inpb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "innb",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left"
        },
        {
          "name": "outb",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right"
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Internal blocks that are primarily an implementation detail or not re-usable"
    }
  ],
  "typeHierarchyTree": {
    "name": "",
    "children": [
      {
        "name": "Analog",
        "children": [
          {
            "name": "ConnectorResistiveSensor",
            "children": []
          },
          {
            "name": "FeedbackVoltageDivider",
            "children": []
          },
          {
            "name": "Opamp",
            "children": [
              {
                "name": "Lmv321",
                "children": []
              },
              {
                "name": "Mcp6001",
                "children": []
              },
              {
                "name": "Opa197",
                "children": []
              },
              {
                "name": "OpampElement",
                "children": []
              },
              {
                "name": "Tlv9061",
                "children": []
              }
            ]
          },
          {
            "name": "OpampApplication",
            "children": [
              {
                "name": "Amplifier",
                "children": []
              },
              {
                "name": "DifferentialAmplifier",
                "children": []
              },
              {
                "name": "IntegratorInverting",
                "children": []
              },
              {
                "name": "OpampFollower",
                "children": []
              }
            ]
          },
          {
            "name": "SignalDivider",
            "children": []
          },
          {
            "name": "VoltageDivider",
            "children": []
          },
          {
            "name": "VoltageSenseDivider",
            "children": []
          }
        ]
      },
      {
        "name": "Antenna",
        "children": [
          {
            "name": "JlcAntenna",
            "children": []
          }
        ]
      },
      {
        "name": "BootstrapVoltageAdder",
        "children": []
      },
      {
        "name": "Connector",
        "children": [
          {
            "name": "BananaJack",
            "children": [
              {
                "name": "BananaSafetyJack",
                "children": [
                  {
                    "name": "Ct3151",
                    "children": []
                  },
                  {
                    "name": "Fcr7350",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "CpuFanConnector",
            "children": [
              {
                "name": "CpuFan3Pin",
                "children": []
              },
              {
                "name": "CpuFan4Pin",
                "children": []
              },
              {
                "name": "CpuFanPwmControl",
                "children": [
                  {
                    "name": "CpuFan4Pin",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "HiroseDm3btDsfPejs",
            "children": []
          },
          {
            "name": "JacdacEdgeConnector",
            "children": []
          },
          {
            "name": "LipoConnector",
            "children": []
          },
          {
            "name": "Molex1040310811",
            "children": []
          },
          {
            "name": "PowerBarrelJack",
            "children": [
              {
                "name": "Pj_036ah",
                "children": []
              },
              {
                "name": "Pj_102ah",
                "children": []
              }
            ]
          },
          {
            "name": "ProgrammingConnector",
            "children": [
              {
                "name": "EspProgrammingHeader",
                "children": [
                  {
                    "name": "EspProgrammingAutoReset",
                    "children": [
                      {
                        "name": "EspProgrammingTc2030",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "EspProgrammingPinHeader254",
                    "children": []
                  },
                  {
                    "name": "EspProgrammingTc2030",
                    "children": []
                  }
                ]
              },
              {
                "name": "Ice40TargetHeader",
                "children": []
              },
              {
                "name": "SwdCortexTargetConnector",
                "children": [
                  {
                    "name": "SwdCortexTargetConnectorReset",
                    "children": [
                      {
                        "name": "SwdCortexTargetHeader",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTagConnect",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTc2050",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "SwdCortexTargetConnectorSwo",
                    "children": [
                      {
                        "name": "SwdCortexTargetHeader",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTagConnect",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTc2050",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "SwdCortexTargetConnectorTdi",
                    "children": [
                      {
                        "name": "SwdCortexTargetHeader",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTc2050",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "SwdCortexTargetHeader",
                    "children": []
                  },
                  {
                    "name": "SwdCortexTargetTagConnect",
                    "children": []
                  },
                  {
                    "name": "SwdCortexTargetTc2050",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "SdSocket",
            "children": []
          },
          {
            "name": "UsbDeviceConnector",
            "children": [
              {
                "name": "UsbAPlugPads",
                "children": []
              },
              {
                "name": "UsbCReceptacle",
                "children": []
              },
              {
                "name": "UsbMicroBReceptacle",
                "children": []
              }
            ]
          },
          {
            "name": "UsbHostConnector",
            "children": [
              {
                "name": "UsbAReceptacle",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "DiscreteApplication",
        "children": [
          {
            "name": "CurrentSenseResistor",
            "children": []
          },
          {
            "name": "DecouplingCapacitor",
            "children": []
          },
          {
            "name": "Oscillator",
            "children": [
              {
                "name": "JlcOscillator",
                "children": []
              }
            ]
          },
          {
            "name": "OscillatorReference",
            "children": [
              {
                "name": "CeramicResonator",
                "children": [
                  {
                    "name": "Cstne",
                    "children": []
                  }
                ]
              },
              {
                "name": "OscillatorCrystal",
                "children": []
              }
            ]
          },
          {
            "name": "PulldownResistor",
            "children": []
          },
          {
            "name": "PullupResistor",
            "children": []
          },
          {
            "name": "SeriesPowerFerriteBead",
            "children": []
          },
          {
            "name": "SeriesPowerInductor",
            "children": []
          },
          {
            "name": "SeriesPowerResistor",
            "children": []
          }
        ]
      },
      {
        "name": "Filter",
        "children": [
          {
            "name": "AnalogFilter",
            "children": [
              {
                "name": "LowPassRc",
                "children": []
              },
              {
                "name": "PiLowPassFilter",
                "children": []
              }
            ]
          },
          {
            "name": "DigitalFilter",
            "children": [
              {
                "name": "AnalogLowPassRc",
                "children": []
              },
              {
                "name": "DigitalLowPassRc",
                "children": []
              },
              {
                "name": "DigitalLowPassRcArray",
                "children": []
              },
              {
                "name": "PullupDelayRc",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "FootprintToucbPad",
        "children": []
      },
      {
        "name": "HalfBridge",
        "children": [
          {
            "name": "FetHalfBridge",
            "children": []
          }
        ]
      },
      {
        "name": "HumanInterface",
        "children": [
          {
            "name": "DigitalDirectionSwitch",
            "children": [
              {
                "name": "DigitalDirectionSwitchCenter",
                "children": [
                  {
                    "name": "DigitalWrapperDirectionSwitchWithCenter",
                    "children": []
                  }
                ]
              },
              {
                "name": "DigitalWrapperDirectionSwitch",
                "children": [
                  {
                    "name": "DigitalWrapperDirectionSwitchWithCenter",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "DigitalRotaryEncoder",
            "children": [
              {
                "name": "DigitalRotaryEncoderSwitch",
                "children": [
                  {
                    "name": "DigitalWrapperRotaryEncoderWithSwitch",
                    "children": []
                  }
                ]
              },
              {
                "name": "DigitalWrapperRotaryEncoder",
                "children": [
                  {
                    "name": "DigitalWrapperRotaryEncoderWithSwitch",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "DigitalSwitch",
            "children": []
          },
          {
            "name": "Display",
            "children": [
              {
                "name": "EInk",
                "children": [
                  {
                    "name": "E2154fs091",
                    "children": []
                  },
                  {
                    "name": "Er_Epd027_2",
                    "children": []
                  },
                  {
                    "name": "Waveshare_Epd",
                    "children": []
                  }
                ]
              },
              {
                "name": "Lcd",
                "children": [
                  {
                    "name": "Qt096t_if09",
                    "children": []
                  }
                ]
              },
              {
                "name": "Oled",
                "children": [
                  {
                    "name": "Er_Oled022_1",
                    "children": []
                  },
                  {
                    "name": "Er_Oled028_1",
                    "children": []
                  },
                  {
                    "name": "Er_Oled_091_3",
                    "children": []
                  },
                  {
                    "name": "Er_Oled_096_1_1",
                    "children": []
                  },
                  {
                    "name": "Er_Oled_096_1c",
                    "children": []
                  },
                  {
                    "name": "Nhd_312_25664uc",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "Light",
            "children": [
              {
                "name": "CharlieplexedLedMatrix",
                "children": []
              },
              {
                "name": "IndicatorLed",
                "children": []
              },
              {
                "name": "IndicatorLedArray",
                "children": []
              },
              {
                "name": "IndicatorSinkLed",
                "children": [
                  {
                    "name": "IndicatorSinkLedResistor",
                    "children": []
                  },
                  {
                    "name": "IndicatorSinkPackedRgbLedElement",
                    "children": []
                  }
                ]
              },
              {
                "name": "IndicatorSinkLedArray",
                "children": []
              },
              {
                "name": "IndicatorSinkPackedRgbLed",
                "children": []
              },
              {
                "name": "IndicatorSinkRgbLed",
                "children": []
              },
              {
                "name": "Neopixel",
                "children": [
                  {
                    "name": "Sk6805_Ec15",
                    "children": []
                  },
                  {
                    "name": "Sk6812Mini_E",
                    "children": []
                  },
                  {
                    "name": "Sk6812_Side_A",
                    "children": []
                  },
                  {
                    "name": "Ws2812b",
                    "children": []
                  }
                ]
              },
              {
                "name": "NeopixelArray",
                "children": []
              },
              {
                "name": "VoltageIndicatorLed",
                "children": []
              }
            ]
          },
          {
            "name": "Speaker",
            "children": [
              {
                "name": "ConnectorSpeaker",
                "children": []
              }
            ]
          },
          {
            "name": "SwitchMatrix",
            "children": []
          }
        ]
      },
      {
        "name": "Interface",
        "children": [
          {
            "name": "AnalogDemuxer",
            "children": []
          },
          {
            "name": "AnalogIsolatedSwitch",
            "children": []
          },
          {
            "name": "AnalogMuxer",
            "children": []
          },
          {
            "name": "AnalogSwitch",
            "children": [
              {
                "name": "AnalogSwitchTree",
                "children": []
              },
              {
                "name": "Nlas4157",
                "children": []
              }
            ]
          },
          {
            "name": "AnalogToDigital",
            "children": [
              {
                "name": "Mcp3201",
                "children": []
              },
              {
                "name": "Mcp3561",
                "children": []
              }
            ]
          },
          {
            "name": "Apx803s",
            "children": []
          },
          {
            "name": "BlueSmirf",
            "children": []
          },
          {
            "name": "CanTransceiver",
            "children": [
              {
                "name": "IsolatedCanTransceiver",
                "children": [
                  {
                    "name": "Iso1050dub",
                    "children": []
                  }
                ]
              },
              {
                "name": "Sn65hvd230",
                "children": []
              }
            ]
          },
          {
            "name": "Cp2102",
            "children": []
          },
          {
            "name": "DigitalIsolator",
            "children": [
              {
                "name": "Cbmud1200l",
                "children": []
              }
            ]
          },
          {
            "name": "DigitalToAnalog",
            "children": [
              {
                "name": "LowPassRcDac",
                "children": []
              },
              {
                "name": "Mcp4728",
                "children": []
              },
              {
                "name": "Mcp47f",
                "children": []
              },
              {
                "name": "Mcp4921",
                "children": []
              }
            ]
          },
          {
            "name": "EInkBoostPowerPath",
            "children": []
          },
          {
            "name": "EspAutoProgram",
            "children": []
          },
          {
            "name": "Ft232hl",
            "children": []
          },
          {
            "name": "Fusb302b",
            "children": []
          },
          {
            "name": "I2cPullup",
            "children": []
          },
          {
            "name": "L74Ahct1g125",
            "children": []
          },
          {
            "name": "LedDriver",
            "children": [
              {
                "name": "Al8861",
                "children": []
              },
              {
                "name": "LedDriverPwm",
                "children": [
                  {
                    "name": "Al8861",
                    "children": []
                  }
                ]
              },
              {
                "name": "LedDriverSwitchingConverter",
                "children": [
                  {
                    "name": "Al8861",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "Lm4871",
            "children": []
          },
          {
            "name": "Max98357a",
            "children": []
          },
          {
            "name": "Pam8302a",
            "children": []
          },
          {
            "name": "Pca9554",
            "children": []
          },
          {
            "name": "Pcf8574",
            "children": []
          },
          {
            "name": "Sd18ob261",
            "children": []
          },
          {
            "name": "SolidStateRelay",
            "children": [
              {
                "name": "G3VM_61GR2",
                "children": []
              },
              {
                "name": "Tlp3545a",
                "children": []
              }
            ]
          },
          {
            "name": "Tpa2005d1",
            "children": []
          },
          {
            "name": "UsbBitBang",
            "children": []
          },
          {
            "name": "VoltageIsolatedSwitch",
            "children": []
          },
          {
            "name": "Xbee_S3b",
            "children": []
          }
        ]
      },
      {
        "name": "InternalBlock",
        "children": [
          {
            "name": "BaseIoController",
            "children": [
              {
                "name": "Esp32_Base",
                "children": [
                  {
                    "name": "Esp32_Wroom_32_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Esp32_Wroom_32",
                "children": []
              },
              {
                "name": "Esp32c3",
                "children": []
              },
              {
                "name": "Esp32c3_Base",
                "children": [
                  {
                    "name": "Esp32c3_Device",
                    "children": []
                  },
                  {
                    "name": "Esp32c3_Wroom02_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Esp32c3_Wroom02",
                "children": []
              },
              {
                "name": "Esp32s3_Base",
                "children": [
                  {
                    "name": "Esp32s3_Wroom_1_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Esp32s3_Wroom_1",
                "children": []
              },
              {
                "name": "Feather_Nrf52840",
                "children": []
              },
              {
                "name": "Freenove_Esp32_Wrover",
                "children": []
              },
              {
                "name": "Freenove_Esp32s3_Wroom",
                "children": []
              },
              {
                "name": "Holyiot_18010",
                "children": []
              },
              {
                "name": "Ice40up_Device",
                "children": [
                  {
                    "name": "Ice40up5k_Sg48_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoController",
                "children": [
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Esp32c3",
                    "children": []
                  },
                  {
                    "name": "Esp32c3_Wroom02",
                    "children": []
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Feather_Nrf52840",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  },
                  {
                    "name": "Holyiot_18010",
                    "children": []
                  },
                  {
                    "name": "Ice40up",
                    "children": [
                      {
                        "name": "Ice40up5k_Sg48",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "IoControllerGroundOut",
                    "children": [
                      {
                        "name": "IoControllerPowerOut",
                        "children": [
                          {
                            "name": "Feather_Nrf52840",
                            "children": []
                          },
                          {
                            "name": "Freenove_Esp32_Wrover",
                            "children": []
                          },
                          {
                            "name": "Freenove_Esp32s3_Wroom",
                            "children": []
                          },
                          {
                            "name": "Nucleo_F303k8",
                            "children": []
                          },
                          {
                            "name": "Xiao_Esp32c3",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "IoControllerUsbOut",
                        "children": [
                          {
                            "name": "Feather_Nrf52840",
                            "children": []
                          },
                          {
                            "name": "Freenove_Esp32_Wrover",
                            "children": []
                          },
                          {
                            "name": "Freenove_Esp32s3_Wroom",
                            "children": []
                          },
                          {
                            "name": "Nucleo_F303k8",
                            "children": []
                          },
                          {
                            "name": "Xiao_Esp32c3",
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Lpc1549Base",
                    "children": [
                      {
                        "name": "Lpc1549_48",
                        "children": []
                      },
                      {
                        "name": "Lpc1549_64",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Mdbt50q_1mv2",
                    "children": []
                  },
                  {
                    "name": "Nucleo_F303k8",
                    "children": []
                  },
                  {
                    "name": "Rp2040",
                    "children": []
                  },
                  {
                    "name": "Stm32f103Base",
                    "children": [
                      {
                        "name": "Stm32f103_48",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32g031Base",
                    "children": [
                      {
                        "name": "Stm32g031_G",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32l432Base",
                    "children": [
                      {
                        "name": "Stm32l432k",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Xiao_Esp32c3",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoControllerBle",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Esp32c3",
                    "children": []
                  },
                  {
                    "name": "Esp32c3_Base",
                    "children": [
                      {
                        "name": "Esp32c3_Device",
                        "children": []
                      },
                      {
                        "name": "Esp32c3_Wroom02_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32c3_Wroom02",
                    "children": []
                  },
                  {
                    "name": "Esp32s3_Base",
                    "children": [
                      {
                        "name": "Esp32s3_Wroom_1_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Feather_Nrf52840",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  },
                  {
                    "name": "Holyiot_18010",
                    "children": []
                  },
                  {
                    "name": "Mdbt50q_1mv2",
                    "children": []
                  },
                  {
                    "name": "Nrf52840_Base",
                    "children": [
                      {
                        "name": "Holyiot_18010_Device",
                        "children": []
                      },
                      {
                        "name": "Mdbt50q_1mv2_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Xiao_Esp32c3",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoControllerBluetooth",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoControllerCan",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Esp32s3_Base",
                    "children": [
                      {
                        "name": "Esp32s3_Wroom_1_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  },
                  {
                    "name": "Lpc1549Base",
                    "children": [
                      {
                        "name": "Lpc1549_48",
                        "children": []
                      },
                      {
                        "name": "Lpc1549_64",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Lpc1549_48_Device",
                    "children": []
                  },
                  {
                    "name": "Lpc1549_64_Device",
                    "children": []
                  },
                  {
                    "name": "Nucleo_F303k8",
                    "children": []
                  },
                  {
                    "name": "Stm32f103Base",
                    "children": [
                      {
                        "name": "Stm32f103_48",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32f103Base_Device",
                    "children": [
                      {
                        "name": "Stm32f103_48_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32g031Base_Device",
                    "children": [
                      {
                        "name": "Stm32g031_G_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32l432Base",
                    "children": [
                      {
                        "name": "Stm32l432k",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32l432Base_Device",
                    "children": [
                      {
                        "name": "Stm32l432k_Device",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "name": "IoControllerDac",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Lpc1549Base",
                    "children": [
                      {
                        "name": "Lpc1549_48",
                        "children": []
                      },
                      {
                        "name": "Lpc1549_64",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Lpc1549_48_Device",
                    "children": []
                  },
                  {
                    "name": "Lpc1549_64_Device",
                    "children": []
                  },
                  {
                    "name": "Nucleo_F303k8",
                    "children": []
                  },
                  {
                    "name": "Stm32l432Base",
                    "children": [
                      {
                        "name": "Stm32l432k",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32l432Base_Device",
                    "children": [
                      {
                        "name": "Stm32l432k_Device",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "name": "IoControllerDvp8",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Esp32s3_Base",
                    "children": [
                      {
                        "name": "Esp32s3_Wroom_1_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoControllerI2cTarget",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Esp32c3",
                    "children": []
                  },
                  {
                    "name": "Esp32c3_Base",
                    "children": [
                      {
                        "name": "Esp32c3_Device",
                        "children": []
                      },
                      {
                        "name": "Esp32c3_Wroom02_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32c3_Wroom02",
                    "children": []
                  },
                  {
                    "name": "Esp32s3_Base",
                    "children": [
                      {
                        "name": "Esp32s3_Wroom_1_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Feather_Nrf52840",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  },
                  {
                    "name": "Holyiot_18010",
                    "children": []
                  },
                  {
                    "name": "Lpc1549Base",
                    "children": [
                      {
                        "name": "Lpc1549_48",
                        "children": []
                      },
                      {
                        "name": "Lpc1549_64",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Lpc1549_48_Device",
                    "children": []
                  },
                  {
                    "name": "Lpc1549_64_Device",
                    "children": []
                  },
                  {
                    "name": "Mdbt50q_1mv2",
                    "children": []
                  },
                  {
                    "name": "Nrf52840_Base",
                    "children": [
                      {
                        "name": "Holyiot_18010_Device",
                        "children": []
                      },
                      {
                        "name": "Mdbt50q_1mv2_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Nucleo_F303k8",
                    "children": []
                  },
                  {
                    "name": "Rp2040",
                    "children": []
                  },
                  {
                    "name": "Rp2040_Device",
                    "children": []
                  },
                  {
                    "name": "Stm32f103Base",
                    "children": [
                      {
                        "name": "Stm32f103_48",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32f103Base_Device",
                    "children": [
                      {
                        "name": "Stm32f103_48_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32g031Base",
                    "children": [
                      {
                        "name": "Stm32g031_G",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32g031Base_Device",
                    "children": [
                      {
                        "name": "Stm32g031_G_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32l432Base",
                    "children": [
                      {
                        "name": "Stm32l432k",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32l432Base_Device",
                    "children": [
                      {
                        "name": "Stm32l432k_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Xiao_Esp32c3",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoControllerI2s",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Esp32c3",
                    "children": []
                  },
                  {
                    "name": "Esp32c3_Base",
                    "children": [
                      {
                        "name": "Esp32c3_Device",
                        "children": []
                      },
                      {
                        "name": "Esp32c3_Wroom02_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32c3_Wroom02",
                    "children": []
                  },
                  {
                    "name": "Esp32s3_Base",
                    "children": [
                      {
                        "name": "Esp32s3_Wroom_1_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Feather_Nrf52840",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  },
                  {
                    "name": "Holyiot_18010",
                    "children": []
                  },
                  {
                    "name": "Mdbt50q_1mv2",
                    "children": []
                  },
                  {
                    "name": "Nrf52840_Base",
                    "children": [
                      {
                        "name": "Holyiot_18010_Device",
                        "children": []
                      },
                      {
                        "name": "Mdbt50q_1mv2_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Xiao_Esp32c3",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoControllerSpiPeripheral",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Esp32c3",
                    "children": []
                  },
                  {
                    "name": "Esp32c3_Base",
                    "children": [
                      {
                        "name": "Esp32c3_Device",
                        "children": []
                      },
                      {
                        "name": "Esp32c3_Wroom02_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32c3_Wroom02",
                    "children": []
                  },
                  {
                    "name": "Esp32s3_Base",
                    "children": [
                      {
                        "name": "Esp32s3_Wroom_1_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Feather_Nrf52840",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  },
                  {
                    "name": "Holyiot_18010",
                    "children": []
                  },
                  {
                    "name": "Lpc1549Base",
                    "children": [
                      {
                        "name": "Lpc1549_48",
                        "children": []
                      },
                      {
                        "name": "Lpc1549_64",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Lpc1549_48_Device",
                    "children": []
                  },
                  {
                    "name": "Lpc1549_64_Device",
                    "children": []
                  },
                  {
                    "name": "Mdbt50q_1mv2",
                    "children": []
                  },
                  {
                    "name": "Nrf52840_Base",
                    "children": [
                      {
                        "name": "Holyiot_18010_Device",
                        "children": []
                      },
                      {
                        "name": "Mdbt50q_1mv2_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Xiao_Esp32c3",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoControllerTouchDriver",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Esp32s3_Base",
                    "children": [
                      {
                        "name": "Esp32s3_Wroom_1_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoControllerUsb",
                "children": [
                  {
                    "name": "Esp32s3_Base",
                    "children": [
                      {
                        "name": "Esp32s3_Wroom_1_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Feather_Nrf52840",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  },
                  {
                    "name": "Holyiot_18010",
                    "children": []
                  },
                  {
                    "name": "Lpc1549Base",
                    "children": [
                      {
                        "name": "Lpc1549_48",
                        "children": []
                      },
                      {
                        "name": "Lpc1549_64",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Lpc1549_48_Device",
                    "children": []
                  },
                  {
                    "name": "Lpc1549_64_Device",
                    "children": []
                  },
                  {
                    "name": "Mdbt50q_1mv2",
                    "children": []
                  },
                  {
                    "name": "Nrf52840_Base",
                    "children": [
                      {
                        "name": "Holyiot_18010_Device",
                        "children": []
                      },
                      {
                        "name": "Mdbt50q_1mv2_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Rp2040",
                    "children": []
                  },
                  {
                    "name": "Rp2040_Device",
                    "children": []
                  },
                  {
                    "name": "Stm32f103Base",
                    "children": [
                      {
                        "name": "Stm32f103_48",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32f103Base_Device",
                    "children": [
                      {
                        "name": "Stm32f103_48_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32g031Base_Device",
                    "children": [
                      {
                        "name": "Stm32g031_G_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32l432Base",
                    "children": [
                      {
                        "name": "Stm32l432k",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Stm32l432Base_Device",
                    "children": [
                      {
                        "name": "Stm32l432k_Device",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "name": "IoControllerWifi",
                "children": [
                  {
                    "name": "Esp32_Base",
                    "children": [
                      {
                        "name": "Esp32_Wroom_32_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32_Wroom_32",
                    "children": []
                  },
                  {
                    "name": "Esp32c3",
                    "children": []
                  },
                  {
                    "name": "Esp32c3_Base",
                    "children": [
                      {
                        "name": "Esp32c3_Device",
                        "children": []
                      },
                      {
                        "name": "Esp32c3_Wroom02_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32c3_Wroom02",
                    "children": []
                  },
                  {
                    "name": "Esp32s3_Base",
                    "children": [
                      {
                        "name": "Esp32s3_Wroom_1_Device",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Esp32s3_Wroom_1",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32_Wrover",
                    "children": []
                  },
                  {
                    "name": "Freenove_Esp32s3_Wroom",
                    "children": []
                  },
                  {
                    "name": "Xiao_Esp32c3",
                    "children": []
                  }
                ]
              },
              {
                "name": "Lpc1549Base",
                "children": [
                  {
                    "name": "Lpc1549_48",
                    "children": []
                  },
                  {
                    "name": "Lpc1549_64",
                    "children": []
                  }
                ]
              },
              {
                "name": "Lpc1549_48_Device",
                "children": []
              },
              {
                "name": "Lpc1549_64_Device",
                "children": []
              },
              {
                "name": "Mdbt50q_1mv2",
                "children": []
              },
              {
                "name": "Nrf52840_Base",
                "children": [
                  {
                    "name": "Holyiot_18010_Device",
                    "children": []
                  },
                  {
                    "name": "Mdbt50q_1mv2_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Nucleo_F303k8",
                "children": []
              },
              {
                "name": "Rp2040",
                "children": []
              },
              {
                "name": "Rp2040_Device",
                "children": []
              },
              {
                "name": "Stm32f103Base",
                "children": [
                  {
                    "name": "Stm32f103_48",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32f103Base_Device",
                "children": [
                  {
                    "name": "Stm32f103_48_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32g031Base",
                "children": [
                  {
                    "name": "Stm32g031_G",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32g031Base_Device",
                "children": [
                  {
                    "name": "Stm32g031_G_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32l432Base",
                "children": [
                  {
                    "name": "Stm32l432k",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32l432Base_Device",
                "children": [
                  {
                    "name": "Stm32l432k_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Xiao_Esp32c3",
                "children": []
              }
            ]
          },
          {
            "name": "DefaultConnectionBlock",
            "children": [
              {
                "name": "DigitalSourceConnected",
                "children": []
              },
              {
                "name": "VoltageSourceConnected",
                "children": []
              }
            ]
          },
          {
            "name": "DigitalBidirNotConnected",
            "children": []
          },
          {
            "name": "DummyDevice",
            "children": [
              {
                "name": "DummyAnalogSink",
                "children": []
              },
              {
                "name": "DummyCapacitorFootprint",
                "children": [
                  {
                    "name": "JlcDummyCapacitor",
                    "children": []
                  }
                ]
              },
              {
                "name": "DummyDigitalSink",
                "children": []
              },
              {
                "name": "DummyPassive",
                "children": []
              },
              {
                "name": "DummyVoltageSink",
                "children": []
              },
              {
                "name": "DummyVoltageSource",
                "children": []
              },
              {
                "name": "ForcedAnalogSignal",
                "children": []
              },
              {
                "name": "ForcedAnalogVoltage",
                "children": []
              },
              {
                "name": "ForcedDigitalSinkCurrentDraw",
                "children": []
              },
              {
                "name": "ForcedVoltage",
                "children": []
              },
              {
                "name": "ForcedVoltageCurrentDraw",
                "children": []
              },
              {
                "name": "MergedAnalogSource",
                "children": []
              },
              {
                "name": "MergedDigitalSource",
                "children": []
              },
              {
                "name": "MergedSpiController",
                "children": []
              },
              {
                "name": "MergedVoltageSource",
                "children": []
              },
              {
                "name": "VoltageSinkConnector",
                "children": []
              }
            ]
          },
          {
            "name": "IdealModel",
            "children": [
              {
                "name": "IdealBoostConverter",
                "children": []
              },
              {
                "name": "IdealBuckConverter",
                "children": []
              },
              {
                "name": "IdealLinearRegulator",
                "children": []
              },
              {
                "name": "IdealVoltageRegulator",
                "children": []
              }
            ]
          },
          {
            "name": "InternalSubcircuit",
            "children": [
              {
                "name": "Al8861_Device",
                "children": []
              },
              {
                "name": "Ap2204k_Device",
                "children": []
              },
              {
                "name": "Ap2210_Device",
                "children": []
              },
              {
                "name": "Ap3012_Device",
                "children": []
              },
              {
                "name": "Ap3418_Device",
                "children": []
              },
              {
                "name": "Ap7215_Device",
                "children": []
              },
              {
                "name": "Apx803s_Device",
                "children": []
              },
              {
                "name": "As7341_Device",
                "children": []
              },
              {
                "name": "BatteryProtector_S8261A_Device",
                "children": []
              },
              {
                "name": "Bh1750_Device",
                "children": []
              },
              {
                "name": "Bme680_Device",
                "children": []
              },
              {
                "name": "BoostConverterPowerPath",
                "children": []
              },
              {
                "name": "BuckBoostConverterPowerPath",
                "children": []
              },
              {
                "name": "BuckConverterPowerPath",
                "children": []
              },
              {
                "name": "Cbmud1200l_Device",
                "children": []
              },
              {
                "name": "Cp2102_Device",
                "children": []
              },
              {
                "name": "DiscreteComponent",
                "children": [
                  {
                    "name": "Crystal",
                    "children": [
                      {
                        "name": "JlcCrystal",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "DirectionSwitch",
                    "children": [
                      {
                        "name": "DirectionSwitchCenter",
                        "children": [
                          {
                            "name": "Skrh",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "Skrh",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "DiscreteSemiconductor",
                    "children": [
                      {
                        "name": "Bjt",
                        "children": [
                          {
                            "name": "TableBjt",
                            "children": [
                              {
                                "name": "JlcBjt",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "CustomDiode",
                        "children": []
                      },
                      {
                        "name": "Diode",
                        "children": [
                          {
                            "name": "CustomDiode",
                            "children": []
                          },
                          {
                            "name": "JlcDiode",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "Fet",
                        "children": [
                          {
                            "name": "BaseTableFet",
                            "children": [
                              {
                                "name": "JlcBaseFet",
                                "children": [
                                  {
                                    "name": "JlcFet",
                                    "children": []
                                  },
                                  {
                                    "name": "JlcSwitchFet",
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "name": "JlcFet",
                                "children": []
                              },
                              {
                                "name": "JlcSwitchFet",
                                "children": []
                              }
                            ]
                          },
                          {
                            "name": "CustomFet",
                            "children": []
                          },
                          {
                            "name": "JlcFet",
                            "children": []
                          },
                          {
                            "name": "JlcSwitchFet",
                            "children": []
                          },
                          {
                            "name": "SwitchFet",
                            "children": [
                              {
                                "name": "JlcSwitchFet",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "JlcDiode",
                        "children": []
                      },
                      {
                        "name": "JlcZenerDiode",
                        "children": []
                      },
                      {
                        "name": "Led",
                        "children": [
                          {
                            "name": "JlcLed",
                            "children": []
                          },
                          {
                            "name": "SmtLed",
                            "children": []
                          },
                          {
                            "name": "ThtLed",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "RgbLedCommonAnode",
                        "children": [
                          {
                            "name": "Smt0404RgbLed",
                            "children": []
                          },
                          {
                            "name": "Smt0606RgbLed",
                            "children": []
                          },
                          {
                            "name": "ThtRgbLed",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "TvsDiode",
                        "children": [
                          {
                            "name": "Rclamp0521p",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "ZenerDiode",
                        "children": [
                          {
                            "name": "JlcZenerDiode",
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "PassiveComponent",
                    "children": [
                      {
                        "name": "CombinedCapacitor",
                        "children": []
                      },
                      {
                        "name": "FerriteBead",
                        "children": [
                          {
                            "name": "JlcFerriteBead",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "Inductor",
                        "children": [
                          {
                            "name": "JlcInductor",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "Resistor",
                        "children": [
                          {
                            "name": "GenericAxialResistor",
                            "children": []
                          },
                          {
                            "name": "GenericAxialVerticalResistor",
                            "children": []
                          },
                          {
                            "name": "GenericChipResistor",
                            "children": []
                          },
                          {
                            "name": "JlcResistor",
                            "children": []
                          },
                          {
                            "name": "ResistorArrayElement",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "ResistorArray",
                        "children": [
                          {
                            "name": "JlcResistorArray",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "UnpolarizedCapacitor",
                        "children": [
                          {
                            "name": "Capacitor",
                            "children": [
                              {
                                "name": "CombinedCapacitorElement",
                                "children": []
                              },
                              {
                                "name": "DummyCapacitorFootprint",
                                "children": [
                                  {
                                    "name": "JlcDummyCapacitor",
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "name": "GenericMlcc",
                                "children": []
                              },
                              {
                                "name": "JlcCapacitor",
                                "children": []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "RotaryEncoder",
                    "children": [
                      {
                        "name": "Ec05e",
                        "children": []
                      },
                      {
                        "name": "Ec11eWithSwitch",
                        "children": []
                      },
                      {
                        "name": "Ec11j15WithSwitch",
                        "children": []
                      },
                      {
                        "name": "Pec11s",
                        "children": []
                      },
                      {
                        "name": "RotaryEncoderSwitch",
                        "children": [
                          {
                            "name": "Ec11eWithSwitch",
                            "children": []
                          },
                          {
                            "name": "Ec11j15WithSwitch",
                            "children": []
                          },
                          {
                            "name": "Pec11s",
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Supercap",
                    "children": []
                  },
                  {
                    "name": "Switch",
                    "children": [
                      {
                        "name": "MechanicalKeyswitch",
                        "children": [
                          {
                            "name": "KailhSocket",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "TactileSwitch",
                        "children": [
                          {
                            "name": "JlcSwitch",
                            "children": []
                          },
                          {
                            "name": "Skrtlae010",
                            "children": []
                          },
                          {
                            "name": "SmtSwitch",
                            "children": []
                          },
                          {
                            "name": "SmtSwitchRa",
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Drv8313_Device",
                "children": []
              },
              {
                "name": "Drv8833_Device",
                "children": []
              },
              {
                "name": "E2154fs091_Device",
                "children": []
              },
              {
                "name": "E93Lc_B_Device",
                "children": []
              },
              {
                "name": "Er_Epd027_2_Device",
                "children": []
              },
              {
                "name": "Er_Epd027_2_Outline",
                "children": []
              },
              {
                "name": "Er_Oled022_1_Device",
                "children": []
              },
              {
                "name": "Er_Oled022_1_Outline",
                "children": []
              },
              {
                "name": "Er_Oled028_1_Device",
                "children": []
              },
              {
                "name": "Er_Oled028_1_Outline",
                "children": []
              },
              {
                "name": "Er_Oled_091_3_Device",
                "children": []
              },
              {
                "name": "Er_Oled_091_3_Outline",
                "children": []
              },
              {
                "name": "Er_Oled_096_1_1_Device",
                "children": []
              },
              {
                "name": "Er_Oled_096_1_1_Outline",
                "children": []
              },
              {
                "name": "Er_Oled_096_1c_Device",
                "children": []
              },
              {
                "name": "Er_Oled_096_1c_Outline",
                "children": []
              },
              {
                "name": "Esp32_Base",
                "children": [
                  {
                    "name": "Esp32_Wroom_32_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Esp32c3_Base",
                "children": [
                  {
                    "name": "Esp32c3_Device",
                    "children": []
                  },
                  {
                    "name": "Esp32c3_Wroom02_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Esp32s3_Base",
                "children": [
                  {
                    "name": "Esp32s3_Wroom_1_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Feather_Nrf52840",
                "children": []
              },
              {
                "name": "Ft232EepromDriver",
                "children": []
              },
              {
                "name": "Ft232hl_Device",
                "children": []
              },
              {
                "name": "Fusb302b_Device",
                "children": []
              },
              {
                "name": "Fuse",
                "children": [
                  {
                    "name": "JlcPptcFuse",
                    "children": []
                  },
                  {
                    "name": "PptcFuse",
                    "children": [
                      {
                        "name": "JlcPptcFuse",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Hdc1080_Device",
                "children": []
              },
              {
                "name": "Ice40up_Device",
                "children": [
                  {
                    "name": "Ice40up5k_Sg48_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Imu_Lsm6ds3trc_Device",
                "children": []
              },
              {
                "name": "Ir2301_Device",
                "children": []
              },
              {
                "name": "Iso1050dub_Device",
                "children": []
              },
              {
                "name": "JlcOscillator_Device",
                "children": [
                  {
                    "name": "Sg8101cg_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Jumper",
                "children": [
                  {
                    "name": "SolderJumperTriangular",
                    "children": []
                  }
                ]
              },
              {
                "name": "L293dd_Device",
                "children": []
              },
              {
                "name": "L74Ahct1g125_Device",
                "children": []
              },
              {
                "name": "L78l_Device",
                "children": []
              },
              {
                "name": "Ld1117_Device",
                "children": []
              },
              {
                "name": "Ldl1117_Device",
                "children": []
              },
              {
                "name": "Lm4871_Device",
                "children": []
              },
              {
                "name": "Lmv321_Device",
                "children": []
              },
              {
                "name": "Lp5907_Device",
                "children": []
              },
              {
                "name": "Lpc1549SwdPull",
                "children": []
              },
              {
                "name": "Lpc1549_48_Device",
                "children": []
              },
              {
                "name": "Lpc1549_64_Device",
                "children": []
              },
              {
                "name": "Ltc3429_Device",
                "children": []
              },
              {
                "name": "Mag_Qmc5883l_Device",
                "children": []
              },
              {
                "name": "Max98357a_Device",
                "children": []
              },
              {
                "name": "Mcp3201_Device",
                "children": []
              },
              {
                "name": "Mcp3561_Device",
                "children": []
              },
              {
                "name": "Mcp4728_Device",
                "children": []
              },
              {
                "name": "Mcp47f_Device",
                "children": []
              },
              {
                "name": "Mcp4921_Device",
                "children": []
              },
              {
                "name": "Mcp6001_Device",
                "children": []
              },
              {
                "name": "Mcp73831_Device",
                "children": []
              },
              {
                "name": "Mdbt50q_UsbSeriesResistor",
                "children": []
              },
              {
                "name": "Nhd_312_25664uc_Device",
                "children": []
              },
              {
                "name": "Nlas4157_Device",
                "children": []
              },
              {
                "name": "Nrf52840_Base",
                "children": [
                  {
                    "name": "Holyiot_18010_Device",
                    "children": []
                  },
                  {
                    "name": "Mdbt50q_1mv2_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Opa197_Device",
                "children": []
              },
              {
                "name": "Opa2197_Device",
                "children": []
              },
              {
                "name": "Opa2333_Device",
                "children": []
              },
              {
                "name": "Ov2640_Fpc24_Device",
                "children": []
              },
              {
                "name": "Pam8302a_Device",
                "children": []
              },
              {
                "name": "PassiveConnector",
                "children": [
                  {
                    "name": "FootprintPassiveConnector",
                    "children": [
                      {
                        "name": "Afc01",
                        "children": []
                      },
                      {
                        "name": "Afc07Top",
                        "children": []
                      },
                      {
                        "name": "HiroseFh12sh",
                        "children": []
                      },
                      {
                        "name": "HiroseFh35cshw",
                        "children": []
                      },
                      {
                        "name": "JstPhKHorizontal",
                        "children": []
                      },
                      {
                        "name": "JstPhKVertical",
                        "children": []
                      },
                      {
                        "name": "JstPhSmVertical",
                        "children": [
                          {
                            "name": "JstPhSmVerticalJlc",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "MolexSl",
                        "children": []
                      },
                      {
                        "name": "PinHeader127DualShrouded",
                        "children": []
                      },
                      {
                        "name": "PinHeader254DualShroudedInline",
                        "children": []
                      },
                      {
                        "name": "PinHeader254Horizontal",
                        "children": []
                      },
                      {
                        "name": "PinHeader254Vertical",
                        "children": []
                      },
                      {
                        "name": "PinSocket254",
                        "children": []
                      },
                      {
                        "name": "TagConnect",
                        "children": [
                          {
                            "name": "TagConnectLegged",
                            "children": []
                          },
                          {
                            "name": "TagConnectNonLegged",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "Te1734839",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Fpc030",
                    "children": [
                      {
                        "name": "Fpc030Bottom",
                        "children": [
                          {
                            "name": "Fpc030TopBottom",
                            "children": [
                              {
                                "name": "HiroseFh35cshw",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Fpc030Top",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Fpc050",
                    "children": [
                      {
                        "name": "Fpc050Bottom",
                        "children": [
                          {
                            "name": "Afc01",
                            "children": []
                          },
                          {
                            "name": "Fpc050BottomFlip",
                            "children": []
                          },
                          {
                            "name": "HiroseFh12sh",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "Fpc050Top",
                        "children": [
                          {
                            "name": "Afc07Top",
                            "children": []
                          },
                          {
                            "name": "Te1734839",
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "PinHeader254",
                    "children": [
                      {
                        "name": "PinHeader254Horizontal",
                        "children": []
                      },
                      {
                        "name": "PinHeader254Vertical",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Pca9554_Device",
                "children": []
              },
              {
                "name": "Pcf2129_Device",
                "children": []
              },
              {
                "name": "Pcf8574_Device",
                "children": []
              },
              {
                "name": "Qt096t_if09_Device",
                "children": []
              },
              {
                "name": "Ref30xx_Device",
                "children": []
              },
              {
                "name": "ResistiveDivider",
                "children": []
              },
              {
                "name": "Rp2040Usb",
                "children": []
              },
              {
                "name": "Rp2040_Device",
                "children": []
              },
              {
                "name": "Sd18ob261_Device",
                "children": []
              },
              {
                "name": "Shtc3_Device",
                "children": []
              },
              {
                "name": "Sn65hvd230_Device",
                "children": []
              },
              {
                "name": "Stm32f103Base_Device",
                "children": [
                  {
                    "name": "Stm32f103_48_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32g031Base_Device",
                "children": [
                  {
                    "name": "Stm32g031_G_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32l432Base_Device",
                "children": [
                  {
                    "name": "Stm32l432k_Device",
                    "children": []
                  }
                ]
              },
              {
                "name": "TestPoint",
                "children": [
                  {
                    "name": "CompactKeystone5015",
                    "children": []
                  },
                  {
                    "name": "Keystone5000",
                    "children": []
                  },
                  {
                    "name": "Keystone5015",
                    "children": []
                  },
                  {
                    "name": "TeRc",
                    "children": []
                  }
                ]
              },
              {
                "name": "Tlv9061_Device",
                "children": []
              },
              {
                "name": "Tmp1075n_Device",
                "children": []
              },
              {
                "name": "Tpa2005d1_Device",
                "children": []
              },
              {
                "name": "Tps54202h_Device",
                "children": []
              },
              {
                "name": "Tps561201_Device",
                "children": []
              },
              {
                "name": "Tps61040_Device",
                "children": []
              },
              {
                "name": "Ucc27282_Device",
                "children": []
              },
              {
                "name": "UsbCReceptacle_Device",
                "children": []
              },
              {
                "name": "UsbCcPulldownResistor",
                "children": []
              },
              {
                "name": "UsbDpPullUp",
                "children": []
              },
              {
                "name": "Vl53l0x_Device",
                "children": []
              },
              {
                "name": "W25q_Device",
                "children": []
              },
              {
                "name": "Waveshare_Epd_Device",
                "children": []
              },
              {
                "name": "Xbee_S3b_Device",
                "children": []
              },
              {
                "name": "Xc6206p_Device",
                "children": []
              },
              {
                "name": "Xc6209_Device",
                "children": []
              },
              {
                "name": "Xc9142_Device",
                "children": []
              }
            ]
          },
          {
            "name": "KiCadBlackbox",
            "children": []
          },
          {
            "name": "KiCadJlcBlackbox",
            "children": []
          },
          {
            "name": "NetBlock",
            "children": [
              {
                "name": "ForcedAnalogSignal",
                "children": []
              },
              {
                "name": "ForcedAnalogVoltage",
                "children": []
              },
              {
                "name": "ForcedDigitalSinkCurrentDraw",
                "children": []
              },
              {
                "name": "ForcedVoltage",
                "children": []
              },
              {
                "name": "ForcedVoltageCurrentDraw",
                "children": []
              },
              {
                "name": "MergedAnalogSource",
                "children": []
              },
              {
                "name": "MergedDigitalSource",
                "children": []
              },
              {
                "name": "MergedVoltageSource",
                "children": []
              },
              {
                "name": "VoltageSinkConnector",
                "children": []
              }
            ]
          },
          {
            "name": "NetPackingBlock",
            "children": [
              {
                "name": "PackedPassive",
                "children": []
              },
              {
                "name": "PackedVoltageSource",
                "children": []
              }
            ]
          },
          {
            "name": "PortAdapter",
            "children": [
              {
                "name": "CircuitPortAdapter",
                "children": [
                  {
                    "name": "DigitalBidirAdapterOpenDrain",
                    "children": []
                  },
                  {
                    "name": "DigitalSourceAdapterVoltageSource",
                    "children": []
                  },
                  {
                    "name": "PassiveAdapterAnalogSink",
                    "children": []
                  },
                  {
                    "name": "PassiveAdapterAnalogSource",
                    "children": []
                  },
                  {
                    "name": "PassiveAdapterDigitalBidir",
                    "children": []
                  },
                  {
                    "name": "PassiveAdapterDigitalSingleSource",
                    "children": []
                  },
                  {
                    "name": "PassiveAdapterDigitalSink",
                    "children": []
                  },
                  {
                    "name": "PassiveAdapterDigitalSource",
                    "children": []
                  },
                  {
                    "name": "PassiveAdapterVoltageSink",
                    "children": []
                  },
                  {
                    "name": "PassiveAdapterVoltageSource",
                    "children": []
                  },
                  {
                    "name": "VoltageSinkAdapterAnalogSource",
                    "children": []
                  },
                  {
                    "name": "VoltageSinkAdapterDigitalSource",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "PortBridge",
            "children": [
              {
                "name": "CanDiffBridge",
                "children": []
              },
              {
                "name": "CircuitPortBridge",
                "children": [
                  {
                    "name": "AnalogSinkBridge",
                    "children": []
                  },
                  {
                    "name": "AnalogSourceBridge",
                    "children": []
                  },
                  {
                    "name": "DigitalBidirBridge",
                    "children": []
                  },
                  {
                    "name": "DigitalSingleSourceBridge",
                    "children": []
                  },
                  {
                    "name": "DigitalSinkBridge",
                    "children": []
                  },
                  {
                    "name": "DigitalSourceBridge",
                    "children": []
                  },
                  {
                    "name": "PassiveBridge",
                    "children": []
                  },
                  {
                    "name": "VoltageSinkBridge",
                    "children": []
                  },
                  {
                    "name": "VoltageSourceBridge",
                    "children": []
                  }
                ]
              },
              {
                "name": "I2cTargetBridge",
                "children": []
              },
              {
                "name": "UsbDeviceBridge",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "JacdacDataInterface",
        "children": []
      },
      {
        "name": "JacdacEdgeConnectorBare",
        "children": []
      },
      {
        "name": "JacdacMountingData1",
        "children": []
      },
      {
        "name": "JacdacMountingGnd2",
        "children": []
      },
      {
        "name": "JacdacMountingGnd4",
        "children": []
      },
      {
        "name": "JacdacMountingPwr3",
        "children": []
      },
      {
        "name": "Label",
        "children": [
          {
            "name": "DuckLogo",
            "children": []
          },
          {
            "name": "IdDots4",
            "children": []
          },
          {
            "name": "LeadFreeIndicator",
            "children": []
          },
          {
            "name": "LemurLogo",
            "children": []
          }
        ]
      },
      {
        "name": "Mechanical",
        "children": [
          {
            "name": "JlcToolingHole",
            "children": []
          },
          {
            "name": "MountingHole",
            "children": [
              {
                "name": "MountingHole_M2_5",
                "children": []
              },
              {
                "name": "MountingHole_M3",
                "children": []
              },
              {
                "name": "MountingHole_M4",
                "children": []
              },
              {
                "name": "MountingHole_NoPad_M2_5",
                "children": []
              }
            ]
          },
          {
            "name": "Outline_Pn1332",
            "children": []
          }
        ]
      },
      {
        "name": "Memory",
        "children": [
          {
            "name": "SdCard",
            "children": [
              {
                "name": "MicroSdSocket",
                "children": [
                  {
                    "name": "HiroseDm3btDsfPejs",
                    "children": []
                  },
                  {
                    "name": "Molex1040310811",
                    "children": []
                  }
                ]
              },
              {
                "name": "SdSocket",
                "children": []
              }
            ]
          },
          {
            "name": "SpiMemory",
            "children": [
              {
                "name": "E93Lc_B",
                "children": []
              },
              {
                "name": "SpiMemoryQspi",
                "children": [
                  {
                    "name": "W25q",
                    "children": []
                  }
                ]
              },
              {
                "name": "W25q",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "Opa2197",
        "children": []
      },
      {
        "name": "Opa2333",
        "children": []
      },
      {
        "name": "PowerConditioner",
        "children": [
          {
            "name": "BatteryProtector_S8261A",
            "children": []
          },
          {
            "name": "BufferedSupply",
            "children": []
          },
          {
            "name": "DiodePowerMerge",
            "children": []
          },
          {
            "name": "LedDriver",
            "children": [
              {
                "name": "Al8861",
                "children": []
              },
              {
                "name": "LedDriverPwm",
                "children": [
                  {
                    "name": "Al8861",
                    "children": []
                  }
                ]
              },
              {
                "name": "LedDriverSwitchingConverter",
                "children": [
                  {
                    "name": "Al8861",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "Mcp73831",
            "children": []
          },
          {
            "name": "PriorityPowerOr",
            "children": []
          },
          {
            "name": "SingleDiodePowerMerge",
            "children": []
          },
          {
            "name": "VoltageRegulator",
            "children": [
              {
                "name": "Ap2204k",
                "children": []
              },
              {
                "name": "Ap2210",
                "children": []
              },
              {
                "name": "Ap3012",
                "children": []
              },
              {
                "name": "Ap3418",
                "children": []
              },
              {
                "name": "LinearRegulator",
                "children": [
                  {
                    "name": "Ap2204k",
                    "children": []
                  },
                  {
                    "name": "Ap2210",
                    "children": []
                  },
                  {
                    "name": "Ap7215",
                    "children": []
                  },
                  {
                    "name": "IdealLinearRegulator",
                    "children": []
                  },
                  {
                    "name": "L78l",
                    "children": []
                  },
                  {
                    "name": "Ld1117",
                    "children": []
                  },
                  {
                    "name": "Ldl1117",
                    "children": []
                  },
                  {
                    "name": "Lp5907",
                    "children": []
                  },
                  {
                    "name": "VoltageReference",
                    "children": [
                      {
                        "name": "Ref30xx",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "Xc6206p",
                    "children": []
                  },
                  {
                    "name": "Xc6209",
                    "children": []
                  }
                ]
              },
              {
                "name": "Lp5907",
                "children": []
              },
              {
                "name": "Ltc3429",
                "children": []
              },
              {
                "name": "SwitchingVoltageRegulator",
                "children": [
                  {
                    "name": "BoostConverter",
                    "children": [
                      {
                        "name": "DiscreteBoostConverter",
                        "children": [
                          {
                            "name": "Ap3012",
                            "children": []
                          },
                          {
                            "name": "CustomSyncBuckBoostConverter",
                            "children": []
                          },
                          {
                            "name": "CustomSyncBuckConverter",
                            "children": []
                          },
                          {
                            "name": "IdealBoostConverter",
                            "children": []
                          },
                          {
                            "name": "Ltc3429",
                            "children": []
                          },
                          {
                            "name": "Tps61040",
                            "children": []
                          },
                          {
                            "name": "Xc9142",
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "BuckBoostConverter",
                    "children": [
                      {
                        "name": "DiscreteBuckBoostConverter",
                        "children": [
                          {
                            "name": "IdealVoltageRegulator",
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "BuckConverter",
                    "children": [
                      {
                        "name": "DiscreteBuckConverter",
                        "children": [
                          {
                            "name": "Ap3418",
                            "children": []
                          },
                          {
                            "name": "IdealBuckConverter",
                            "children": []
                          },
                          {
                            "name": "Tps54202h",
                            "children": []
                          },
                          {
                            "name": "Tps561201",
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Tps561201",
                "children": []
              },
              {
                "name": "Tps61040",
                "children": []
              },
              {
                "name": "Xc6209",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "PowerSource",
        "children": [
          {
            "name": "Battery",
            "children": [
              {
                "name": "AABattery",
                "children": []
              },
              {
                "name": "Cr2032",
                "children": []
              },
              {
                "name": "Li18650",
                "children": []
              },
              {
                "name": "LipoConnector",
                "children": []
              }
            ]
          },
          {
            "name": "PowerBarrelJack",
            "children": [
              {
                "name": "Pj_036ah",
                "children": []
              },
              {
                "name": "Pj_102ah",
                "children": []
              }
            ]
          },
          {
            "name": "UsbDeviceConnector",
            "children": [
              {
                "name": "UsbAPlugPads",
                "children": []
              },
              {
                "name": "UsbCReceptacle",
                "children": []
              },
              {
                "name": "UsbMicroBReceptacle",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "PowerSwitch",
        "children": [
          {
            "name": "HalfBridgeDriver",
            "children": [
              {
                "name": "Ir2301",
                "children": []
              },
              {
                "name": "Ucc27282",
                "children": []
              }
            ]
          },
          {
            "name": "HighSideSwitch",
            "children": []
          },
          {
            "name": "MotorDriver",
            "children": [
              {
                "name": "BldcDriver",
                "children": [
                  {
                    "name": "Drv8313",
                    "children": []
                  }
                ]
              },
              {
                "name": "BrushedMotorDriver",
                "children": [
                  {
                    "name": "Drv8833",
                    "children": []
                  },
                  {
                    "name": "L293dd",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "OpenDrainDriver",
            "children": []
          }
        ]
      },
      {
        "name": "ProgrammableController",
        "children": [
          {
            "name": "Fpga",
            "children": [
              {
                "name": "Ice40up",
                "children": [
                  {
                    "name": "Ice40up5k_Sg48",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "IoController",
            "children": [
              {
                "name": "Esp32_Wroom_32",
                "children": []
              },
              {
                "name": "Esp32c3",
                "children": []
              },
              {
                "name": "Esp32c3_Wroom02",
                "children": []
              },
              {
                "name": "Esp32s3_Wroom_1",
                "children": []
              },
              {
                "name": "Feather_Nrf52840",
                "children": []
              },
              {
                "name": "Freenove_Esp32_Wrover",
                "children": []
              },
              {
                "name": "Freenove_Esp32s3_Wroom",
                "children": []
              },
              {
                "name": "Holyiot_18010",
                "children": []
              },
              {
                "name": "Ice40up",
                "children": [
                  {
                    "name": "Ice40up5k_Sg48",
                    "children": []
                  }
                ]
              },
              {
                "name": "IoControllerGroundOut",
                "children": [
                  {
                    "name": "IoControllerPowerOut",
                    "children": [
                      {
                        "name": "Feather_Nrf52840",
                        "children": []
                      },
                      {
                        "name": "Freenove_Esp32_Wrover",
                        "children": []
                      },
                      {
                        "name": "Freenove_Esp32s3_Wroom",
                        "children": []
                      },
                      {
                        "name": "Nucleo_F303k8",
                        "children": []
                      },
                      {
                        "name": "Xiao_Esp32c3",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "IoControllerUsbOut",
                    "children": [
                      {
                        "name": "Feather_Nrf52840",
                        "children": []
                      },
                      {
                        "name": "Freenove_Esp32_Wrover",
                        "children": []
                      },
                      {
                        "name": "Freenove_Esp32s3_Wroom",
                        "children": []
                      },
                      {
                        "name": "Nucleo_F303k8",
                        "children": []
                      },
                      {
                        "name": "Xiao_Esp32c3",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Lpc1549Base",
                "children": [
                  {
                    "name": "Lpc1549_48",
                    "children": []
                  },
                  {
                    "name": "Lpc1549_64",
                    "children": []
                  }
                ]
              },
              {
                "name": "Mdbt50q_1mv2",
                "children": []
              },
              {
                "name": "Nucleo_F303k8",
                "children": []
              },
              {
                "name": "Rp2040",
                "children": []
              },
              {
                "name": "Stm32f103Base",
                "children": [
                  {
                    "name": "Stm32f103_48",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32g031Base",
                "children": [
                  {
                    "name": "Stm32g031_G",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32l432Base",
                "children": [
                  {
                    "name": "Stm32l432k",
                    "children": []
                  }
                ]
              },
              {
                "name": "Xiao_Esp32c3",
                "children": []
              }
            ]
          },
          {
            "name": "Microcontroller",
            "children": [
              {
                "name": "Esp32_Wroom_32",
                "children": []
              },
              {
                "name": "Esp32c3",
                "children": []
              },
              {
                "name": "Esp32c3_Wroom02",
                "children": []
              },
              {
                "name": "Esp32s3_Wroom_1",
                "children": []
              },
              {
                "name": "Holyiot_18010",
                "children": []
              },
              {
                "name": "Lpc1549Base",
                "children": [
                  {
                    "name": "Lpc1549_48",
                    "children": []
                  },
                  {
                    "name": "Lpc1549_64",
                    "children": []
                  }
                ]
              },
              {
                "name": "Mdbt50q_1mv2",
                "children": []
              },
              {
                "name": "Rp2040",
                "children": []
              },
              {
                "name": "Stm32f103Base",
                "children": [
                  {
                    "name": "Stm32f103_48",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32g031Base",
                "children": [
                  {
                    "name": "Stm32g031_G",
                    "children": []
                  }
                ]
              },
              {
                "name": "Stm32l432Base",
                "children": [
                  {
                    "name": "Stm32l432k",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Protection",
        "children": [
          {
            "name": "AnalogClampZenerDiode",
            "children": []
          },
          {
            "name": "CanEsdDiode",
            "children": [
              {
                "name": "Pesd1can",
                "children": []
              }
            ]
          },
          {
            "name": "DigitalTvsDiode",
            "children": []
          },
          {
            "name": "ProtectionTvsDiode",
            "children": []
          },
          {
            "name": "ProtectionZenerDiode",
            "children": []
          },
          {
            "name": "SeriesPowerPptcFuse",
            "children": []
          },
          {
            "name": "UsbEsdDiode",
            "children": [
              {
                "name": "Pesd5v0x1bt",
                "children": []
              },
              {
                "name": "Pgb102st23",
                "children": []
              },
              {
                "name": "Tpd2e009",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "Radiofrequency",
        "children": [
          {
            "name": "BlueSmirf",
            "children": []
          },
          {
            "name": "Esp32_Wroom_32",
            "children": []
          },
          {
            "name": "Esp32c3",
            "children": []
          },
          {
            "name": "Esp32c3_Wroom02",
            "children": []
          },
          {
            "name": "Esp32s3_Wroom_1",
            "children": []
          },
          {
            "name": "Holyiot_18010",
            "children": []
          },
          {
            "name": "Mdbt50q_1mv2",
            "children": []
          },
          {
            "name": "Xbee_S3b",
            "children": []
          }
        ]
      },
      {
        "name": "RealtimeClock",
        "children": [
          {
            "name": "Pcf2129",
            "children": []
          }
        ]
      },
      {
        "name": "Sensor",
        "children": [
          {
            "name": "Accelerometer",
            "children": [
              {
                "name": "Imu_Lsm6ds3trc",
                "children": []
              }
            ]
          },
          {
            "name": "DistanceSensor",
            "children": [
              {
                "name": "Vl53l0x",
                "children": [
                  {
                    "name": "Vl53l0xApplication",
                    "children": []
                  },
                  {
                    "name": "Vl53l0xConnector",
                    "children": []
                  }
                ]
              },
              {
                "name": "Vl53l0xArray",
                "children": []
              }
            ]
          },
          {
            "name": "EnvironmentalSensor",
            "children": [
              {
                "name": "Bme680",
                "children": []
              },
              {
                "name": "Hdc1080",
                "children": []
              },
              {
                "name": "Shtc3",
                "children": []
              },
              {
                "name": "Tmp1075n",
                "children": []
              }
            ]
          },
          {
            "name": "Gyroscope",
            "children": [
              {
                "name": "Imu_Lsm6ds3trc",
                "children": []
              }
            ]
          },
          {
            "name": "LightSensor",
            "children": [
              {
                "name": "As7341",
                "children": []
              },
              {
                "name": "Bh1750",
                "children": []
              }
            ]
          },
          {
            "name": "Magnetometer",
            "children": [
              {
                "name": "Mag_Qmc5883l",
                "children": []
              }
            ]
          },
          {
            "name": "OpampCurrentSensor",
            "children": []
          },
          {
            "name": "Ov2640_Fpc24",
            "children": []
          }
        ]
      },
      {
        "name": "SmdStandardPackage",
        "children": [
          {
            "name": "GenericAxialResistor",
            "children": []
          },
          {
            "name": "GenericAxialVerticalResistor",
            "children": []
          },
          {
            "name": "GenericChipResistor",
            "children": []
          },
          {
            "name": "GenericMlcc",
            "children": []
          },
          {
            "name": "JlcCapacitor",
            "children": []
          },
          {
            "name": "JlcFerriteBead",
            "children": []
          },
          {
            "name": "JlcInductor",
            "children": []
          },
          {
            "name": "JlcLed",
            "children": []
          },
          {
            "name": "JlcPptcFuse",
            "children": []
          },
          {
            "name": "JlcResistor",
            "children": []
          }
        ]
      },
      {
        "name": "Testing",
        "children": [
          {
            "name": "ProgrammingConnector",
            "children": [
              {
                "name": "EspProgrammingHeader",
                "children": [
                  {
                    "name": "EspProgrammingAutoReset",
                    "children": [
                      {
                        "name": "EspProgrammingTc2030",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "EspProgrammingPinHeader254",
                    "children": []
                  },
                  {
                    "name": "EspProgrammingTc2030",
                    "children": []
                  }
                ]
              },
              {
                "name": "Ice40TargetHeader",
                "children": []
              },
              {
                "name": "SwdCortexTargetConnector",
                "children": [
                  {
                    "name": "SwdCortexTargetConnectorReset",
                    "children": [
                      {
                        "name": "SwdCortexTargetHeader",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTagConnect",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTc2050",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "SwdCortexTargetConnectorSwo",
                    "children": [
                      {
                        "name": "SwdCortexTargetHeader",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTagConnect",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTc2050",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "SwdCortexTargetConnectorTdi",
                    "children": [
                      {
                        "name": "SwdCortexTargetHeader",
                        "children": []
                      },
                      {
                        "name": "SwdCortexTargetTc2050",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "SwdCortexTargetHeader",
                    "children": []
                  },
                  {
                    "name": "SwdCortexTargetTagConnect",
                    "children": []
                  },
                  {
                    "name": "SwdCortexTargetTc2050",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "TypedJumper",
            "children": [
              {
                "name": "DigitalJumper",
                "children": []
              }
            ]
          },
          {
            "name": "TypedTestPoint",
            "children": [
              {
                "name": "AnalogTestPoint",
                "children": []
              },
              {
                "name": "CanControllerTestPoint",
                "children": []
              },
              {
                "name": "DigitalArrayTestPoint",
                "children": []
              },
              {
                "name": "DigitalTestPoint",
                "children": []
              },
              {
                "name": "I2cTestPoint",
                "children": []
              },
              {
                "name": "PulldownResistorArray",
                "children": []
              },
              {
                "name": "PullupResistorArray",
                "children": []
              },
              {
                "name": "SpiTestPoint",
                "children": []
              },
              {
                "name": "VoltageTestPoint",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
}