export default {
  "blocks": [
    {
      "name": "",
      "type": "L293dd",
      "superClasses": [
        "BrushedMotorDriver",
        "MotorDriver",
        "PowerSwitch"
      ],
      "ports": [
        {
          "name": "vs",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "vss",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "en1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "en2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "in1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "in2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "in3",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "in4",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out1",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out2",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out3",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out4",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sig",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spk",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "SpiTestPoint",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "io",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": "",
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Test points for SPI"
    },
    {
      "name": "",
      "type": "Oled",
      "superClasses": [
        "Display",
        "HumanInterface"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "OLED display, with the pixel density of an LCD but with infinite contrast and no backlight."
    },
    {
      "name": "",
      "type": "Ltc3429",
      "superClasses": [
        "DiscreteBoostConverter",
        "VoltageRegulator",
        "BoostConverter",
        "SwitchingVoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Low-input-voltage boost converter (starts as low as 0.85V).\nPin-compatible with the less-expensive UM3429S"
    },
    {
      "name": "",
      "type": "CustomSyncBuckConverterIndependent",
      "superClasses": [
        "DiscreteBoostConverter",
        "BoostConverter",
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwm_low",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwm_high",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            100000.0,
            1000000.0
          ],
          "docstring": null
        },
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ],
          "docstring": null
        },
        {
          "name": "rds_on",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Custom synchronous buck with two PWM inputs for the high and low side gate drivers.\nBecause of the MOSFET body diode, will probably be fine-ish if the low side FET is not driven."
    },
    {
      "name": "",
      "type": "Ice40up5k_Sg48",
      "superClasses": [
        "Ice40up",
        "Fpga",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "cdone",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "IntegratorInverting",
      "superClasses": [
        "OpampApplication",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reference",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "factor",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "capacitance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "series",
          "type": "int",
          "default_value": 6,
          "docstring": null
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.05,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Opamp integrator, outputs the negative integral of the input signal, relative to some reference signal.\nWill clip to the input voltage rails.\n\nFrom https://en.wikipedia.org/wiki/Operational_amplifier_applications#Inverting_integrator:\nVout = - 1/RC * int(Vin) (integrating over time)\n\nSeries is lower and tolerance is higher because there's a cap involved\nTODO - separate series for cap, and series and tolerance by decade?"
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "ratio",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Specialization of ResistiveDivider for Analog signals"
    },
    {
      "name": "",
      "type": "DigitalJumper",
      "superClasses": [
        "TypedJumper",
        "Testing"
      ],
      "ports": [
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "QwiicTarget",
      "superClasses": [
        "Connector"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A Qwiic (https://www.sparkfun.com/qwiic) connector to a I2C target.\nThis would be on a board with a host controller."
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
      "type": "MicroSdSocket",
      "superClasses": [
        "SdCard",
        "Memory"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "MicroSD socket"
    },
    {
      "name": "",
      "type": "Er_Oled022_1",
      "superClasses": [
        "Oled",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1305-based 2.2\" 128x32 monochrome OLED in SPI or I2C mode."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in_diode",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "reverse_recovery_time",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Single-diode power merge block for two voltage sources, where the lower voltage one is diode-gated and less\npreferred if both are connected."
    },
    {
      "name": "",
      "type": "Stm32f103_48",
      "superClasses": [
        "Stm32f103Base",
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Ad8418a",
      "superClasses": [
        "CurrentSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "sense_pos",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sense_neg",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ref",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "in_diff_range",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Xiao_Rp2040",
      "superClasses": [
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "RP2040 development board, a tiny development (21x17.5mm) daughterboard.\nHas an onboard USB connector, so this can also source power.\n\nLimited pins (only 11 for IOs, of which 6 are usable as the other 5 have boot requirements).\n\nRequires Seeed Studio's KiCad library for the footprint: https://github.com/Seeed-Studio/OPL_Kicad_Library\nThe 'Seeed Studio XIAO Series Library' must have been added as a footprint library of the same name.\n\nPinning data: https://www.seeedstudio.com/blog/wp-content/uploads/2022/08/Seeed-Studio-XIAO-Series-Package-and-PCB-Design.pdf"
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Voltage divider that takes in an output voltage and parallel impedance spec, and produces an output analog signal\nof the appropriate magnitude (as a fraction of the input voltage)"
    },
    {
      "name": "",
      "type": "JlcOscillator",
      "superClasses": [
        "Oscillator",
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "UsbAReceptacle",
      "superClasses": [
        "UsbHostConnector",
        "Connector"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
      "type": "Ld1117",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": "Target output voltage"
        }
      ],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Er_Oled_096_1c",
      "superClasses": [
        "Oled",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1357-based 0.96\" 128x64 RGB OLED, in either I2C or SPI mode."
    },
    {
      "name": "",
      "type": "UflConnector",
      "superClasses": [
        "RfConnector",
        "Connector"
      ],
      "ports": [
        {
          "name": "sig",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base class for a U.FL / IPEX / UMCC connector, miniature RF connector."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "nreset",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "reset_threshold",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Stm32l432k",
      "superClasses": [
        "Stm32l432Base",
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "stat",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "charging_current",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Single-cell Li-ion / Li-poly charger, seemingly popular on Adafruit and Sparkfun boards."
    },
    {
      "name": "",
      "type": "DigitalWrapperDirectionSwitchWithCenter",
      "superClasses": [
        "DigitalWrapperDirectionSwitch",
        "DigitalDirectionSwitch",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "c",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "d",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "center",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "JacdacMountingPwr3",
      "superClasses": [
        "JacdacSubcircuit",
        "Interface"
      ],
      "ports": [
        {
          "name": "jd_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "PiLowPassFilter",
      "superClasses": [
        "AnalogFilter",
        "Filter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "src_resistance",
          "type": "float",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "src_reactance",
          "type": "float",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "load_resistance",
          "type": "float",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Passive-typed pi impedance matching network.\nBased on equations from https://www.silabs.com/documents/public/application-notes/an1275-imp-match-for-network-arch.pdf\nand also referencing https://www.electronicdesign.com/technologies/communications/article/21801154/back-to-basics-impedance-matching-part-3\nand https://www.qsl.net/zl1an/CH1.pdf\nFrequency defines the entire bandwidth this filter should work across.\n\nWORK IN PROGRESS. NON-STABLE API.\n\nTODO: use ranges and tolerances throughout"
    },
    {
      "name": "",
      "type": "Lsm6ds3trc",
      "superClasses": [
        "Accelerometer",
        "Gyroscope",
        "Sensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "int1",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "int2",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "VoltageTestPoint",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "io",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Test point with a VoltageSink port."
    },
    {
      "name": "",
      "type": "Pj_036ah",
      "superClasses": [
        "PowerBarrelJack",
        "Connector",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "SMT Barrel jack for 2.1mm ID and 5.5mm OD"
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
      "type": "Ap2210",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "AP2210 RF ULDO in SOT-23-5 with high PSRR and high(er) voltage tolerant.\n  "
    },
    {
      "name": "",
      "type": "CustomSyncBuckBoostConverterPwm",
      "superClasses": [
        "DiscreteBoostConverter",
        "BoostConverter",
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "buck_pwm",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "boost_pwm",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            100000.0,
            1000000.0
          ],
          "docstring": null
        },
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ],
          "docstring": null
        },
        {
          "name": "rds_on",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Custom synchronous buck-boost with four PWMs for the switches.\nBecause of the MOSFET body diode, will probably be fine-ish if the buck low-side FET and the boost high-side FET\nare not driven"
    },
    {
      "name": "",
      "type": "Vl53l0xArray",
      "superClasses": [
        "DistanceSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "xshut",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "gpio1",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "count",
          "type": "int",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "first_xshut_fixed",
          "type": "bool",
          "default_value": 0.0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Array of Vl53l0x with common I2C but individually exposed XSHUT pins and optionally GPIO1 (interrupt)."
    },
    {
      "name": "",
      "type": "CeramicResonator",
      "superClasses": [
        "OscillatorReference",
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Category for ceramic resonators"
    },
    {
      "name": "",
      "type": "DifferentialAmplifier",
      "superClasses": [
        "OpampApplication",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input_positive",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input_negative",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output_reference",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "ratio",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "input_impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "series",
          "type": "int",
          "default_value": 24,
          "docstring": null
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.01,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Opamp differential amplifier, outputs the difference between the input nodes, scaled by some factor,\nand offset from some reference node.\nThis implementation uses the same resistance for the two input resistors (R1, R2),\nand the same resistance for the feedback and reference resistors (Rf, Rg).\nFrom https://en.wikipedia.org/wiki/Operational_amplifier_applications#Differential_amplifier_(difference_amplifier):\nVout = Rf/R1 * (Vp - Vn)\n\nImpedance equations from https://e2e.ti.com/blogs_/archives/b/precisionhub/posts/overlooking-the-obvious-the-input-impedance-of-a-difference-amplifier\n  (ignoring the opamp input impedances, which we assume are >> the resistors)\nRin,n = R1 / (1 - (Rg / (R2+Rg)) * (Vin,n / Vin,p))\nRin,p = R2 + Rg\nRout = opamp output impedance - TODO: is this correct?\n\nratio specifies Rf/R1, the amplification ratio."
    },
    {
      "name": "",
      "type": "Bh1750",
      "superClasses": [
        "LightSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cPullupPort",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract base class for a USB 2.0 device-side port connector"
    },
    {
      "name": "",
      "type": "UsbMicroBReceptacle",
      "superClasses": [
        "UsbDeviceConnector",
        "Connector",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
      "type": "SdSocket",
      "superClasses": [
        "SdCard",
        "Connector",
        "Memory"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cd",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "wp",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Full-sized SD card socket"
    },
    {
      "name": "",
      "type": "Vl53l0xBase",
      "superClasses": [
        "DistanceSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "xshut",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gpio1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract base class for VL53L0x application circuits"
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
      "type": "Lm2733",
      "superClasses": [
        "DiscreteBoostConverter",
        "VoltageRegulator",
        "BoostConverter",
        "SwitchingVoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adjustable boost converter in SOT-23-5 with integrated switch"
    },
    {
      "name": "",
      "type": "Ir2301",
      "superClasses": [
        "HalfBridgeDriver",
        "PowerSwitch"
      ],
      "ports": [
        {
          "name": "low_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "low_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "high_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "has_boot_diode",
          "type": "bool",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "IR2301 half-bridge driver supporting 600V offset, 5-20v input, external boot diode,\nno shoot through protect, no deadtime."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "size",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Base class for SPI memory, with acceptable sizes (in bits) as a range."
    },
    {
      "name": "",
      "type": "JacdacSubcircuit",
      "superClasses": [
        "Interface"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Category for Jacdac subcircuits"
    },
    {
      "name": "",
      "type": "JlcAntenna",
      "superClasses": [
        "Antenna",
        "Interface"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "hf_impedance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ],
          "docstring": null
        },
        {
          "name": "dc_resistance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Series ferrite bead for power applications"
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": null
    },
    {
      "name": "",
      "type": "Tpd2e009",
      "superClasses": [
        "UsbEsdDiode",
        "Protection"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbPassivePort",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
      "type": "Molex1040310811",
      "superClasses": [
        "MicroSdSocket",
        "Connector",
        "SdCard",
        "Memory"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sc_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "charging_current",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "sense_resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Implements a current limiting source with an opamp for charging a supercap, and a Vf-limited diode\nfor discharging\n\nSee https://electronics.stackexchange.com/questions/178605/op-amp-mosfet-constant-current-power-source"
    },
    {
      "name": "",
      "type": "Stm32g031_G",
      "superClasses": [
        "Stm32g031Base",
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "CanControllerTestPoint",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "io",
          "type": "CanPassivePort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": "",
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Two test points for CAN controller-side TXD and RXD"
    },
    {
      "name": "",
      "type": "OpampFollower",
      "superClasses": [
        "OpampApplication",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Opamp follower circuit, outputs the same signal as the input (but probably stronger)."
    },
    {
      "name": "",
      "type": "As7341",
      "superClasses": [
        "LightSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Shtc3",
      "superClasses": [
        "EnvironmentalSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "PullupDelayRc",
      "superClasses": [
        "DigitalFilter",
        "Filter"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "time_constant",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Pull-up resistor with capacitor for delay.\n  "
    },
    {
      "name": "",
      "type": "Pesd5v0x1bt",
      "superClasses": [
        "UsbEsdDiode",
        "Protection"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbPassivePort",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Ultra low capacitance ESD protection diode (0.9pF typ), suitable for USB and GbE"
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
      "type": "Ldl1117",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": "Target output voltage"
        }
      ],
      "is_abstract": false,
      "docstring": "A series of fixed-output, general-purpose, low-dropout linear regulators in SOT-223 and\nsupporting up to 18V input and 1.2A draw."
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
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "signal_out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Analog overvoltage protection diode to clamp the input voltage"
    },
    {
      "name": "",
      "type": "Er_Oled028_1",
      "superClasses": [
        "Oled",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "vcc",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1322-based 2.8\" 256x64 monochrome OLED."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inputs",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around AnalogSwitch that provides muxing functionality - multiple sink ports, one source port.\n  "
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": 0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "8 bit I2C IO expander with 'quasi-bidirectional IOs'"
    },
    {
      "name": "",
      "type": "IsolatedCanTransceiver",
      "superClasses": [
        "CanTransceiver",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": null
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
      "type": "ProtectionTvsDiode",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "working_voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "TVS diode across a power rail"
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in2",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "reverse_recovery_time",
          "type": "range",
          "default_value": "(0, inf)",
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Diode power merge block for two voltage sources.\n  "
    },
    {
      "name": "",
      "type": "E93Lc_B",
      "superClasses": [
        "SpiMemory",
        "Memory"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "size",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "93LCxxB series of SPI EEPROMs. The E prefix is because Python identifiers can't start with numbers\nNote, A variant is 8-bit word, B variant is 16-bit word"
    },
    {
      "name": "",
      "type": "OpampCurrentSensor",
      "superClasses": [
        "CurrentSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ref",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "ratio",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "input_impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Current sensor block using a resistive sense element and an opamp-based differential amplifier.\nFor a positive current (flowing from pwr_in -> pwr_out), this generates a positive voltage on the output.\nOutput reference can be floating (eg, at Vdd/2) to allow bidirectional current sensing.\n\nDiscrete diffamp circuits generally have poor accuracy as a result of resistor tolerances, including\nvery poor common-mode rejection."
    },
    {
      "name": "",
      "type": "Tmp1075n",
      "superClasses": [
        "EnvironmentalSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "alert",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": 0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Bme680",
      "superClasses": [
        "EnvironmentalSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "vddio",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd_a",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "in_a",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out_a",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_b",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd_b",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "in_b",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out_b",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Multichannel digital isolator, shifts logic signals between different logic voltages\nand isolation domains. Supports arbitrary channels in either direction, but it needs to\nmap down to a single chip (or be multipacked).\nin_a -> out_b, and in_b -> out_a must each have the same array elements, which is how\nchannels will be matched to pins."
    },
    {
      "name": "",
      "type": "Mcp3201",
      "superClasses": [
        "AnalogToDigital",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ref",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "vin",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP3201 12-bit 100kSPS ADC configured in single-ended mode, since the IN- pin can't do much anyways.\n\nSome drop-in electrically compatible chips:\n- ADS7822 (12 bit, 200kSPS)\n- MCP3551 (22 bit, low sample rate, delta-sigma)\n  - SLIGHTLY DIFFERENT PINNING! SCK and CS swapped!"
    },
    {
      "name": "",
      "type": "Lcd",
      "superClasses": [
        "Display",
        "HumanInterface"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "LCD display, where pixels absorb / reflect light, but do not directly emit light (eg, use a backlight, or are transflective)."
    },
    {
      "name": "",
      "type": "Lp5907",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "High-PSRR LDO in SOT-23-5.\nOther pin-compatible high-PSRR LDOs:\n- LP5907\n- AP139\n- TCR2EF"
    },
    {
      "name": "",
      "type": "Er_Epd027_2",
      "superClasses": [
        "EInk",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "busy",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "EK79651AB-based white/black/red 2.7\" 176x264 e-paper display.\n(Probably) compatible with https://www.waveshare.com/w/upload/b/ba/2.7inch_e-Paper_V2_Specification.pdf,\nand https://www.waveshare.com/w/upload/7/7b/2.7inch-e-paper-b-v2-specification.pdf"
    },
    {
      "name": "",
      "type": "Al8861",
      "superClasses": [
        "LedDriver",
        "PowerConditioner",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwm",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "diode_voltage_drop",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "AL8861 buck LED driver."
    },
    {
      "name": "",
      "type": "Mdbt50q_1mv2",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_usb",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around the Mdbt50q_1mv2 that includes the reference schematic"
    },
    {
      "name": "",
      "type": "IndicatorSinkRgbLed",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "signals",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Common anode indicator RGB LED"
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "suspend",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "nsuspend",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "ri",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "dcd",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "dtr",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "dsr",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "rts",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "cts",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "USB-UART converter"
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "max_rds",
          "type": "float",
          "default_value": 1.0,
          "docstring": null
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "NFET configured as an open-drain driver. Potentially useful for voltage translation applications."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sig",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spk",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "gain",
          "type": "range",
          "default_value": [
            16.0,
            24.0
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "TPA2005D1 configured in single-ended input mode.\nPossible semi-pin-compatible with PAM8302AASCR (C113367), but which has internal resistor."
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
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dp",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dm",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dp_pull",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Bit-bang circuit for USB, from the UPduino3.0 circuit and for 3.3v.\nPresumably generalizes to any digital pin that can be driven fast enough.\n\nTODO: a more formal analysis of tolerances"
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
      "type": "DigitalTvsDiode",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "io",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "working_voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "capacitance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "TVS diode protecting a signal line"
    },
    {
      "name": "",
      "type": "Vl53l0xConnector",
      "superClasses": [
        "Vl53l0xBase",
        "DistanceSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "xshut",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gpio1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Connector to an external VL53L0X breakout board.\nUses the pinout from the Adafruit product: https://www.adafruit.com/product/3317\nThis has an onboard 2.8v regulator, but thankfully the IO tolerance is not referenced to Vdd"
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "max_current",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract current-regulated high-power LED driver.\nLED ports are passive and should be directly connected to the LED (or LED string)."
    },
    {
      "name": "",
      "type": "CharlieplexedLedMatrix",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "ios",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "rows",
          "type": "int",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "cols",
          "type": "int",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "color",
          "type": "str",
          "default_value": "",
          "docstring": null
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "A LED matrix that saves on IO pins by charlieplexing, only requiring max(rows + 1, cols) GPIOs to control.\nRequires IOs that can tri-state, and requires scanning through rows (so not all LEDs are simultaneously on).\n\nAnodes (columns) are directly connected to the IO line, while the cathodes (rows) are connected through a resistor.\nA generalization of https://en.wikipedia.org/wiki/Charlieplexing#/media/File:3-pin_Charlieplexing_matrix_with_common_resistors.svg"
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sig",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spk",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "PAM8302A configured in single-ended input mode."
    },
    {
      "name": "",
      "type": "FootprintToucbPad",
      "superClasses": [
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "pad",
          "type": "TouchPadPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "touch_footprint",
          "type": "str",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Mcp4921",
      "superClasses": [
        "DigitalToAnalog",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ref",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ldac",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP4921 12-bit 4.5uS DAC.\nOther chips in series:\nMCP4901 (8 bits), MCP4911 (10 bits), and others with 2 channels or internal Vref"
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
      "docstring": null
    },
    {
      "name": "",
      "type": "Xc6206p",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": "Target output voltage"
        }
      ],
      "is_abstract": false,
      "docstring": "XC6206P LDOs in SOT-23 which seem popular in some open-source designs and some are JLC basic parts."
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
          "default_value": "",
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "A base mixin for any device that can generate into a standard SMT package, the 0402/0603/0805/etc series.\nThis provides a parameter that can be globally set to specify a minimum package size.\nDevices may generate into nonstandard packages, those are not affected.\nIf this parameter is empty, no minimums are applied.\n\nInheriting this class does not provide any behavior, it only adds the minimum parameter.\n\nFor non-generators classes that inherit this, the minimum size should be used as an assertion."
    },
    {
      "name": "",
      "type": "Vl53l0x",
      "superClasses": [
        "Vl53l0xBase",
        "DistanceSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "xshut",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gpio1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Board-mount laser ToF sensor"
    },
    {
      "name": "",
      "type": "Pj_102ah",
      "superClasses": [
        "PowerBarrelJack",
        "Connector",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Barrel jack for 2.1mm ID and 5.5mm OD"
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": "Target output voltage"
        }
      ],
      "is_abstract": true,
      "docstring": "Structural abstract base class for DC-DC voltage regulators with shared ground (non-isolated).\nThis takes some input voltage and produces a stable voltage at output_voltage on its output.\n\nWhile this abstract class does not define any limitations on the output voltage, subclasses and concrete\nimplementations commonly have restrictions, for example linear regulators can only produce voltages lower\nthan the input voltage."
    },
    {
      "name": "",
      "type": "JacdacEdgeConnectorBare",
      "superClasses": [
        "JacdacSubcircuit",
        "Interface"
      ],
      "ports": [
        {
          "name": "gnd_src",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "jd_pwr_src",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd_sink",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "jd_pwr_sink",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "jd_data",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "is_power_provider",
          "type": "bool",
          "default_value": 0.0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Jacdac connector, in power sink or source mode (both available, but both may not be connected simultaneously).\nThis is the bare connector, you should use the non-bare one with the recommended interface circuitry in most cases!\nUses the recessed connector, which is the default used by the device outline generator.\n\nRequires this KiCad footprint library to be available: https://github.com/mattoppenheim/jacdac\n\nAll specs from from https://microsoft.github.io/jacdac-docs/reference/electrical-spec\n\nIf the power sink (power is sunk into the port and off-board) is connected, is_power_provider\nindicates whether this port should model the maximum downstream current draw"
    },
    {
      "name": "",
      "type": "Hdc1080",
      "superClasses": [
        "EnvironmentalSensor",
        "Sensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "DigitalLowPassRcArray",
      "superClasses": [
        "DigitalFilter",
        "Filter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "output",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Array of DigitalLowPassRc, currently takes its size from the output.\nTODO: properly size when either input or output is sized?"
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract base class for a USB 2.0 device-side port connector"
    },
    {
      "name": "",
      "type": "Mcp47f",
      "superClasses": [
        "DigitalToAnalog",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ref0",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ref1",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out0",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out1",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out2",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out3",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "lat0",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "lat1",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP47FxBx4/8 quad / octal 8/10/12-bit I2C DAC, with selectable internal or external Vref\n  "
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
      "type": "ProtectionZenerDiode",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Zener diode reversed across a power rail to provide transient overvoltage protection (and become an incandescent\nindicator on a reverse voltage)"
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pos_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "neg_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gate",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "isense",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "inductance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "in_capacitance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "out_capacitance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "diode_voltage_drop",
          "type": "range",
          "default_value": [
            0.0,
            0.5
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Boost converter power path for e-ink displays with negative voltage generation through\na bootstrap switched-cap circuit.\nCurrent is the peak current through the FET and diodes."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "outputs",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around AnalogSwitch that provides demuxing functionality - multiple source ports, one sink port.\n  "
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "low_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "high_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "has_boot_diode",
          "type": "bool",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Half-bridge driver with independent low / high control for driving two NMOS devices,\nwith a high-side driver that allows a voltage offset from the main gnd.\n\nA parameter controls whether a boot diode is required (chip-internal or generated component) or disallowed.\nDevices with an internal boot diode must require has_boot_diode=False.\nDevices without an internal boot diode may generate an external one.\n\nThis device:\n- may or may not have shoot-through protection\n- may or may not have an internal bootstrap diode or controller\n- may or may not support non-half-bridge topologies (eg, high-side ground required to be the FET common node)\n\nTODO: auto-generate parameters based on switching frequencies and FET parameters?"
    },
    {
      "name": "",
      "type": "UsbCReceptacle",
      "superClasses": [
        "UsbDeviceConnector",
        "Connector",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "cc",
          "type": "UsbCcPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": [
            4.75,
            5.25
          ],
          "docstring": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            0.0,
            0.5
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "USB Type-C Receptacle that automatically generates the CC resistors if CC is not connected."
    },
    {
      "name": "",
      "type": "LowPassRcDac",
      "superClasses": [
        "DigitalToAnalog",
        "Interface"
      ],
      "ports": [
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Low-pass RC filter used as a simple DAC by filtering out a PWM signal.\nThe cutoff frequency of the filter should be sufficiently beneath the PWM frequency,\nbut enough above baseband to not distort the signal.\nLower frequencies will result in either higher impedance or larger caps.\nThis must be manually specified, since PWM frequency data is not part of the electronics model."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sTargetReceiver",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MAX98357A I2S speaker driver with default gain."
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
      "type": "PullupResistor",
      "superClasses": [
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Pull-up resistor with an VoltageSink for automatic implicit connect to a Power line."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "pull_resistance",
          "type": "range",
          "default_value": [
            9500.0,
            10500.0
          ],
          "docstring": null
        },
        {
          "name": "max_rds",
          "type": "float",
          "default_value": 1.0,
          "docstring": null
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ],
          "docstring": null
        },
        {
          "name": "clamp_voltage",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ],
          "docstring": null
        },
        {
          "name": "clamp_resistance_ratio",
          "type": "float",
          "default_value": 10,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "A high-side FET switch, using a two switch architecture, a main pass PFET with a amplifier NFET to drive its gate.\nIf clamp_voltage is nonzero, a zener clamp is generated to limit the PFET gate voltage.\nThe clamp resistor is specified as a ratio from the pull resistance.\n\nTODO: clamp_voltage should be compared against the actual voltage so the clamp is automatically generated,\nbut generators don't support link terms (yet?)"
    },
    {
      "name": "",
      "type": "LowPassRc",
      "superClasses": [
        "AnalogFilter",
        "Filter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Passive-typed low-pass RC specified by the resistor value (impedance) and -3dB (~70%) cutoff frequency."
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbPassivePort",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": null
    },
    {
      "name": "",
      "type": "Mcp3561",
      "superClasses": [
        "AnalogToDigital",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwra",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "vref",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "vins",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP3561R up-to-24-bit delta-sigma ADC with internal voltage reference.\nIMPORTANT - an antialias filter is REQUIRED at the inputs. The reference design uses a RC with 1k and 0.1uF (fc=10kHz)\nwith the general recommendation being low R and high C and with low time constant to provide high rejection at DMCLK.\nTODO: assert that an antialias filter is connected"
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
      "type": "Ap2204k",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "AP2204K block providing the LinearRegulator interface and optional enable (tied high if not connected).\n  "
    },
    {
      "name": "",
      "type": "E2154fs091",
      "superClasses": [
        "EInk",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "busy",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "1.54\" 152x152px red/black/white e-ink display with 24-pin FPC connector, 0.5mm pitch"
    },
    {
      "name": "",
      "type": "Lpc1549_64",
      "superClasses": [
        "Lpc1549Base",
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Stm32l432Base",
      "superClasses": [
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": null
    },
    {
      "name": "",
      "type": "Li18650",
      "superClasses": [
        "Battery",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            2.5,
            4.2
          ],
          "docstring": null
        },
        {
          "name": "actual_voltage",
          "type": "range",
          "default_value": [
            2.5,
            4.2
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "mpsse",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "mpsse_cs",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "adbus",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "acbus",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "USB multiprotocol converter"
    },
    {
      "name": "",
      "type": "FetHalfBridge",
      "superClasses": [
        "HalfBridge",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "fet_rds",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ],
          "docstring": null
        },
        {
          "name": "gate_res",
          "type": "range",
          "default_value": [
            20.9,
            23.1
          ],
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Implementation of a half-bridge with two NFETs and a gate driver."
    },
    {
      "name": "",
      "type": "Ct3151",
      "superClasses": [
        "BananaSafetyJack",
        "BananaJack",
        "Connector"
      ],
      "ports": [
        {
          "name": "port",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "CT3151-x PTH right-angle safety banana jack connector.\nx indicates the color code.\n\nTODO: automatically support color code generation?"
    },
    {
      "name": "",
      "type": "LinearRegulator",
      "superClasses": [
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": "Target output voltage"
        }
      ],
      "is_abstract": true,
      "docstring": "Structural abstract base class for linear regulators, a voltage regulator that can produce some\noutput voltage lower than its input voltage (minus some dropout) by 'burning' the excess voltage as heat.\n\nCompared to switching converters like buck and boost converters, linear regulators usually have lower\ncomplexity, lower parts count, and higher stability. However, depending on the application, they are\ntypically less efficient, and at higher loads may require thermal design considerations."
    },
    {
      "name": "",
      "type": "Mcp6001",
      "superClasses": [
        "Opamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "MCP6001 RRO op-amp in SOT-23-5\n  "
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract CAN transceiver"
    },
    {
      "name": "",
      "type": "Mcp4728",
      "superClasses": [
        "DigitalToAnalog",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out0",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out1",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out2",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "out3",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ldac",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "rdy",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_caps",
          "type": "bool",
          "default_value": 1.0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "MCP4728 quad 12-bit I2C DAC, with selectable internal or external Vref=Vdd.\nNote, MCP47F seems to be a similar architecture but the example application has an optional\n0.1uF capacitor on the VoutN lines to reduce noise, which is generated by default here."
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
      "type": "Dm3btDsfPejs",
      "superClasses": [
        "MicroSdSocket",
        "Connector",
        "SdCard",
        "Memory"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Nucleo_F303k8",
      "superClasses": [
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Nucleo32 F303K8 configured as power source from USB."
    },
    {
      "name": "",
      "type": "Nhd_312_25664uc",
      "superClasses": [
        "Oled",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "256x64 3.12\" passive-matrix OLED"
    },
    {
      "name": "",
      "type": "Holyiot_18010",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_usb",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around the Holyiot 18010 that includes supporting components (programming port)"
    },
    {
      "name": "",
      "type": "IndicatorSinkPackedRgbLedElement",
      "superClasses": [
        "IndicatorSinkLed",
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Ucc27282",
      "superClasses": [
        "HalfBridgeDriver",
        "PowerSwitch"
      ],
      "ports": [
        {
          "name": "low_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "low_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "high_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "has_boot_diode",
          "type": "bool",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "UCC27282 half-bridge driver supporting 100V offset, 5.5-16v input, internal boot diode,\nshoot through protect, no deadtime."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "clk",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "lr",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "data",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SD18OB261-060 PDM microphone, probably footprint-compatible with similar Knowles devices.\nApplication circuit is not specified in the datasheet, this uses the one from SPH0655LM4H\n(single 0.1uF decap)."
    },
    {
      "name": "",
      "type": "BuckBoostConverter",
      "superClasses": [
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)",
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Step-up or switch-down switching converter"
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "addr_lsb",
          "type": "int",
          "default_value": 0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "8 bit I2C IO expander"
    },
    {
      "name": "",
      "type": "JacdacMountingGnd2",
      "superClasses": [
        "JacdacSubcircuit",
        "Interface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Drv8833",
      "superClasses": [
        "BrushedMotorDriver",
        "MotorDriver",
        "PowerSwitch"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sleep",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ain1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "ain2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "bin1",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "bin2",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "aout1",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "aout2",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "bout1",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "bout2",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "assumed_input_voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Voltage divider that takes in a ratio and parallel impedance spec, and produces an output analog signal\nof the appropriate magnitude (as a fraction of the input voltage)"
    },
    {
      "name": "",
      "type": "EInk",
      "superClasses": [
        "Display",
        "HumanInterface"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "E-ink display, which retains the image after power is removed."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Minimum connections for SD card, with IOs definitions set according to SD card spec"
    },
    {
      "name": "",
      "type": "IndicatorLed",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "color",
          "type": "str",
          "default_value": "",
          "docstring": null
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "High-side-driven (default, \"common cathode\") indicator LED"
    },
    {
      "name": "",
      "type": "SwdCortexTargetHeader",
      "superClasses": [
        "SwdCortexTargetConnector",
        "ProgrammingConnector",
        "Connector",
        "Testing"
      ],
      "ports": [
        {
          "name": "tdi",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "swo",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "swd",
          "type": "SwdHostPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Nrf52840_Base",
      "superClasses": [],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_usb",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "xtal",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "xtal_rtc",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "swd",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "nreset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": null
    },
    {
      "name": "",
      "type": "Waveshare_Epd",
      "superClasses": [
        "EInk",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "busy",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Multi-device-compatible driver circuitry based on the Waveshare E-Paper Driver HAT\nhttps://www.waveshare.com/wiki/E-Paper_Driver_HAT\nexcluding the \"clever\" reset circuit"
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
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ],
          "docstring": null
        },
        {
          "name": "capacity",
          "type": "float",
          "default_value": 0.0,
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": null
    },
    {
      "name": "",
      "type": "Tps61040",
      "superClasses": [
        "DiscreteBoostConverter",
        "VoltageRegulator",
        "BoostConverter",
        "SwitchingVoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "PFM (DCM, discontinuous mode) boost converter in SOT-23-5"
    },
    {
      "name": "",
      "type": "EspProgrammingPinHeader254",
      "superClasses": [
        "EspProgrammingHeader",
        "ProgrammingConnector",
        "Connector",
        "Testing"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Programming header for ESP series micros using 2.54mm headers, matching the pinning in the reference schematics."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Single buffer, useful as a level shifter"
    },
    {
      "name": "",
      "type": "Tlv9061",
      "superClasses": [
        "Opamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "RRIO op-amp in SOT-23-6.\n  "
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "vbus",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cc",
          "type": "UsbCcPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "int",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
      "type": "Sensor",
      "superClasses": [],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Any kind of sensor with any interface. Multi-packed sensors may inherit from multiple categories"
    },
    {
      "name": "",
      "type": "SwdCortexTargetTagConnect",
      "superClasses": [
        "SwdCortexTargetConnector",
        "ProgrammingConnector",
        "Connector",
        "Testing"
      ],
      "ports": [
        {
          "name": "swo",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "swd",
          "type": "SwdHostPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "OFFICIAL tag connect SWD header using the TC2030 series cables.\nhttps://www.tag-connect.com/wp-content/uploads/bsk-pdf-manager/TC2030-CTX_1.pdf"
    },
    {
      "name": "",
      "type": "Feather_Nrf52840",
      "superClasses": [
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Feather nRF52840 socketed dev board as either power source or sink"
    },
    {
      "name": "",
      "type": "Nlas4157",
      "superClasses": [
        "AnalogSwitch",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inputs",
          "type": "Passive",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "NLAS4157 2:1 analog switch, 1ohm Ron, in SOT-363.\nPin compatible with:\n- TS5A3159: 5v tolerant, 1 ohm\n- TS5A3160: 5v tolerant, 1 ohm"
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
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for a single terminal 4mm banana jack, such as used on test equipment."
    },
    {
      "name": "",
      "type": "Lpc1549_48",
      "superClasses": [
        "Lpc1549Base",
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "IndicatorSinkPackedRgbLed",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "red_sig",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "green_sig",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "blue_sig",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "red_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "green_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "blue_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Pgb102st23",
      "superClasses": [
        "UsbEsdDiode",
        "Protection"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbPassivePort",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESD suppressor, suitable for high speed protocols including USB2.0, 0.12pF typ"
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
      "type": "VoltageSenseDivider",
      "superClasses": [
        "Analog"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "full_scale_voltage",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Voltage divider that takes in an output voltage and parallel impedance spec, and produces an output analog signal\nof the appropriate magnitude (as a fraction of the input voltage).\nUnlike the normal VoltageDivider, the output is defined in terms of full scale voltage - that is, the voltage\noutput at the maximum input voltage, which makes the tolerance specification more useful for sensing applications\nwith variable input voltage.\n\nTODO: can this be unified with VoltageDivider?"
    },
    {
      "name": "",
      "type": "Opa2171",
      "superClasses": [
        "MultipackOpamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Dual precision general purpose RRO opamp.\n  "
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "data",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "rssi",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "associate",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "XBee-PRO 900HP, product numbers XBP9B-*"
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
      "type": "EspProgrammingTc2030",
      "superClasses": [
        "EspProgrammingHeader",
        "ProgrammingConnector",
        "Connector",
        "Testing"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "en",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "boot",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "UNOFFICIAL tag connect header, based on a modification of the FT232 cable\n(https://www.tag-connect.com/product/tc2030-ftdi-ttl-232rg-vsw3v3)\nbut adding the auto-programming pins (and using DTR instead of CTS into the cable).\nPower pins compatible with the official SWD header.\n\nPer boot docs, EN is connected to RTS and boot is connected to DTR (CTS on the original pinning,\nsince it doesn't have a DTR pin)."
    },
    {
      "name": "",
      "type": "Lmv331",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "General purpose comparator\n\nTODO: should extend an abstract comparator interface, note output is open-drain"
    },
    {
      "name": "",
      "type": "Fcr7350",
      "superClasses": [
        "BananaSafetyJack",
        "BananaJack",
        "Connector"
      ],
      "ports": [
        {
          "name": "port",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "FCR7350x PTH right-angle safety banana jack connector.\nx indicates the color code.\n\nPotentially footprint compatible with Pomona 73099 (~$9)?\n\nTODO: automatically support color code generation?"
    },
    {
      "name": "",
      "type": "BuckConverter",
      "superClasses": [
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)",
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Step-down switching converter"
    },
    {
      "name": "",
      "type": "Neopixel",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract base class for Neopixel-type LEDs including the Vdd/Gnd/Din/Dout interface."
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
      "docstring": null
    },
    {
      "name": "",
      "type": "L78l",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": "Target output voltage"
        }
      ],
      "is_abstract": false,
      "docstring": "L78Lxx high(er) input voltage linear regulator in SOT-89.\n  "
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
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "rts",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "en",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "boot",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Auto-programming circuit for the ESP series, to drive the target EN (reset) and BOOT (e.g., IO0) pins."
    },
    {
      "name": "",
      "type": "BananaSafetyJack",
      "superClasses": [
        "BananaJack",
        "Connector"
      ],
      "ports": [
        {
          "name": "port",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for a single terminal 4mm banana jack supporting a safety sheath,\nsuch as on multimeter leads."
    },
    {
      "name": "",
      "type": "Lm2664",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_resistance_limit",
          "type": "float",
          "default_value": 25.0,
          "docstring": null
        },
        {
          "name": "output_ripple_limit",
          "type": "float",
          "default_value": 0.025,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Switched capacitor inverter"
    },
    {
      "name": "",
      "type": "Antenna",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "a",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ],
          "docstring": null
        },
        {
          "name": "power",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": null
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
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "trip_current",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Series fuse for power applications"
    },
    {
      "name": "",
      "type": "LipoConnector",
      "superClasses": [
        "Connector",
        "Battery",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "chg",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            2.5,
            4.2
          ],
          "docstring": null
        },
        {
          "name": "actual_voltage",
          "type": "range",
          "default_value": [
            2.5,
            4.2
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "PassiveConnector (abstract connector) that is expected to have a LiPo on one end.\nBoth the voltage specification and the actual voltage can be specified as parameters.\nTHERE IS NO STANDARD LIPO PINNING OR CONNECTOR - MAKE SURE TO VERIFY THIS!\nBE PREPARED FOR REVERSE POLARITY CONNECTIONS.\nDefault pinning has ground being pin 1, and power being pin 2.\n\nConnector type not specified, up to the user through a refinement."
    },
    {
      "name": "",
      "type": "BoostConverter",
      "superClasses": [
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)",
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Step-up switching converter"
    },
    {
      "name": "",
      "type": "Drv8313",
      "superClasses": [
        "BldcDriver",
        "MotorDriver",
        "PowerSwitch"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ens",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "ins",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "nreset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "nsleep",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "nfault",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "outs",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "pgnds",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Opa197",
      "superClasses": [
        "Opamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "High voltage opamp (4.5-36V) in SOIC-8.\n(part also available in SOT-23-5)"
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
      "docstring": null
    },
    {
      "name": "",
      "type": "Ref30xx",
      "superClasses": [
        "VoltageReference",
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": "Target output voltage"
        }
      ],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "IndicatorLedArray",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "signals",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "count",
          "type": "int",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "color",
          "type": "str",
          "default_value": "",
          "docstring": null
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "An array of IndicatorLed, just a convenience wrapper."
    },
    {
      "name": "",
      "type": "SwdCortexTargetTc2050",
      "superClasses": [
        "SwdCortexTargetConnector",
        "ProgrammingConnector",
        "Connector",
        "Testing"
      ],
      "ports": [
        {
          "name": "tdi",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "swo",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "swd",
          "type": "SwdHostPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "UNOFFICIAL tag connect SWD header, maintaining physical pin compatibility with the 2x05 1.27mm header."
    },
    {
      "name": "",
      "type": "Sn65hvd230",
      "superClasses": [
        "CanTransceiver",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "RfConnector",
      "superClasses": [
        "Connector"
      ],
      "ports": [
        {
          "name": "sig",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for a RF connector, with a signal and ground. Signal is passive-typed."
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_hi",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_lo",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "diode_voltage_drop",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "fet_rds_on",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Power merge block for two power inputs, where the high priority input (e.g. USB) is higher voltage and\nthe low priority input is lower voltage (e.g. battery).\nThe higher priority input incurs a diode drop, while the lower priority input has a FET.\nAs a side effect, the FET power path also acts as reverse polarity protection."
    },
    {
      "name": "",
      "type": "Freenove_Esp32_Wrover",
      "superClasses": [
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32-WROVER-DEV breakout with camera.\n\nModule datasheet: https://www.espressif.com/sites/default/files/documentation/esp32-wrover-e_esp32-wrover-ie_datasheet_en.pdf\nBoard used: https://amazon.com/ESP32-WROVER-Contained-Compatible-Bluetooth-Tutorials/dp/B09BC1N9LL\nBoard internal schematic: https://github.com/Freenove/Freenove_ESP32_WROVER_Board/blob/f710fd6976e76ab76c29c2ee3042cd7bac22c3d6/Datasheet/ESP32_Schematic.pdf\n\nTop left is pin 1, going down the left side then up the right side.\nUp is defined from the text orientation (antenna is on top)."
    },
    {
      "name": "",
      "type": "Ncp3420",
      "superClasses": [
        "HalfBridgeDriver",
        "PowerSwitch"
      ],
      "ports": [
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwm_in",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "low_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "high_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Half-bridge driver supporting 35V offset, 4.6-13.2v input, external boot diode, auto-deadtime."
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Device that generates a digital clock signal given power."
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sense",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract block for a 3-pin CPU fan connector."
    },
    {
      "name": "",
      "type": "Opa189",
      "superClasses": [
        "Opamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "High voltage (4.5-36V), low-noise opamp in SOIC-8.\n  "
    },
    {
      "name": "",
      "type": "Ws2812b",
      "superClasses": [
        "Neopixel",
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Camera",
      "superClasses": [
        "Sensor"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Imaging sensors, including visible / RGB, IR, and thermal."
    },
    {
      "name": "",
      "type": "Ap7215",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": "Target output voltage"
        }
      ],
      "is_abstract": false,
      "docstring": "AP7215 fixed 3.3v LDO in SOT-89 providing the LinearRegulator interface.\n  "
    },
    {
      "name": "",
      "type": "IndicatorSinkLed",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "color",
          "type": "str",
          "default_value": "",
          "docstring": null
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ],
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Abstract part for an low-side-driven (\"common anode\") indicator LED"
    },
    {
      "name": "",
      "type": "Esp32_Wroom_32",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around Esp32c3_Wroom02 with external capacitors and UART programming header.\nNOT COMPATIBLE WITH QSPI PSRAM VARIANTS - for those, GPIO16 needs to be pulled up."
    },
    {
      "name": "",
      "type": "S8261A",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "1-cell LiIon/LiPo Battery protection IC protecting against overcharge, overdischarge, over current.\n  "
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "resistance_range",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "fixed_resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Senses the resistance of an external resistor (through an abstract connector\nthat is part of this block) using a simple voltage divider circuit.\nThe external resistor is on the bottom (which makes this of a classic Wheatstone Bridge\nas drawn on Wikipedia)."
    },
    {
      "name": "",
      "type": "ConnectorSpeaker",
      "superClasses": [
        "Speaker",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "input",
          "type": "SpeakerPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": [
            8.0,
            8.0
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Speaker that delegates to a PassiveConnector and with configurable impedance."
    },
    {
      "name": "",
      "type": "UsbAPlugPads",
      "superClasses": [
        "UsbDeviceConnector",
        "Connector",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "DiscreteBoostConverter",
      "superClasses": [
        "BoostConverter",
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)",
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Category for discrete boost converter subcircuits (as opposed to integrated components)"
    },
    {
      "name": "",
      "type": "AnalogLowPassRc",
      "superClasses": [
        "DigitalFilter",
        "Filter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Low-pass RC filter attached to an analog line.\n  "
    },
    {
      "name": "",
      "type": "Opa2189",
      "superClasses": [
        "MultipackOpamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Dual precision RRO opamps.\n  "
    },
    {
      "name": "",
      "type": "Sk6812Mini_E",
      "superClasses": [
        "Neopixel",
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SK6812MINI-E reverse-mount Neopixel RGB LED, commonly used for keyboard lighting.\nNote: while listed as JLC C5149201, it seems non-stocked and is standard assembly only."
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
      "docstring": null
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Pull-down resistor with an VoltageSink for automatic implicit connect to a Ground line."
    },
    {
      "name": "",
      "type": "BootstrapVoltageAdder",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_pos",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_neg",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwm",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out_pos",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out_neg",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            250000.0,
            250000.0
          ],
          "docstring": null
        },
        {
          "name": "ripple_limit",
          "type": "float",
          "default_value": 0.025,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Bipolar (positive and negative) voltage adder using a switched cap circuit.\n    "
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inputs",
          "type": "Passive",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for a n-ported analog switch with passive-typed ports."
    },
    {
      "name": "",
      "type": "CpuFan3Pin",
      "superClasses": [
        "CpuFanConnector",
        "Connector"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sense",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "3-pin fan controller"
    },
    {
      "name": "",
      "type": "DiscreteBuckConverter",
      "superClasses": [
        "BuckConverter",
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)",
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Category for discrete buck converter subcircuits (as opposed to integrated components)"
    },
    {
      "name": "",
      "type": "Sk6805_Ec15",
      "superClasses": [
        "Neopixel",
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SK6805-EC15 Neopixel RGB LED in 1.5x1.5 (0606)."
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
      "type": "Tps561201",
      "superClasses": [
        "DiscreteBuckConverter",
        "VoltageRegulator",
        "BuckConverter",
        "SwitchingVoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adjustable synchronous buck converter in SOT-23-6 with integrated switch"
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
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "feta",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "fetb",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for solid state relays.\nLED pins are passive (like the abstract LED) and the enclosing class should provide\nthe circuitry to make it a DigitalSink port."
    },
    {
      "name": "",
      "type": "EspProgrammingHeader",
      "superClasses": [
        "ProgrammingConnector",
        "Connector",
        "Testing"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract programming header for ESP series micros, defining a UART connection.\nCircuitry to reset / enter programming mode must be external."
    },
    {
      "name": "",
      "type": "Esp32s3_Wroom_1",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32-S3-WROOM-1 module\n  "
    },
    {
      "name": "",
      "type": "Lpc1549Base",
      "superClasses": [
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": null
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
      "type": "Sk6812_Side_A",
      "superClasses": [
        "Neopixel",
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SK6812-SIDE-A side-emitting Neopixel LED."
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
      "type": "VoltageIndicatorLed",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "color",
          "type": "str",
          "default_value": "",
          "docstring": null
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "LED connected to a voltage rail as an indicator that there is voltage present"
    },
    {
      "name": "",
      "type": "Esp32s3_Base",
      "superClasses": [],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "chip_pu",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io0",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for ESP32-S3 series microcontrollers with WiFi and Bluetooth (classic and LE)\nand AI acceleration\n\nChip datasheet: https://www.espressif.com/documentation/esp32-s3_datasheet_en.pdf"
    },
    {
      "name": "",
      "type": "Ice40up",
      "superClasses": [
        "Fpga",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "cdone",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Application circuit for the iCE40UP series FPGAs, pre-baked for 'common' applications\n(3.3v supply with 1.2v core not shared, external FLASH programming, no NVCM programming).\n\nTODO: generator support for CRAM (volatile) programming mode, diode 2v5 NVCM supply."
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around Switch that provides a digital port which is pulled low (to GND) when pressed."
    },
    {
      "name": "",
      "type": "W25q",
      "superClasses": [
        "SpiMemory",
        "Memory"
      ],
      "ports": [
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "io3",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Winbond W25Q series of SPI memory devices\n  "
    },
    {
      "name": "",
      "type": "SwitchingVoltageRegulator",
      "superClasses": [
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "input_ripple_limit",
          "type": "float",
          "default_value": 0.075,
          "docstring": null
        },
        {
          "name": "output_ripple_limit",
          "type": "float",
          "default_value": 0.025,
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": null
    },
    {
      "name": "",
      "type": "Opa2333",
      "superClasses": [
        "MultipackOpamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Dual precision RRIO (including negative input) opamps.\n  "
    },
    {
      "name": "",
      "type": "NeopixelArray",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "din",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dout",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "count",
          "type": "int",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "An array of Neopixels"
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
      "docstring": null
    },
    {
      "name": "",
      "type": "Tps54202h",
      "superClasses": [
        "DiscreteBuckConverter",
        "BuckConverter",
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adjustable synchronous buck converter in SOT-23-6 with integrated switch, 4.5-24v capable\nNote: TPS54202 has frequency spread-spectrum operation and internal pull-up on EN\nTPS54202H has no internal EN pull-up but a Zener diode clamp to limit voltage."
    },
    {
      "name": "",
      "type": "Freenove_Esp32s3_Wroom",
      "superClasses": [
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Freenove ESP32S3 WROOM breakout breakout with camera.\n\nBoard pinning: https://github.com/Freenove/Freenove_ESP32_S3_WROOM_Board/blob/main/ESP32S3_Pinout.png\n\nTop left is pin 1, going down the left side then up the right side.\nUp is defined from the text orientation (antenna is on top)."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sense_in",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "sense_out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "sense_in_reqd",
          "type": "bool",
          "default_value": 1.0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Current sense resistor with a power passthrough resistor and positive and negative sense temrinals."
    },
    {
      "name": "",
      "type": "SwdCortexTargetConnector",
      "superClasses": [
        "ProgrammingConnector",
        "Connector",
        "Testing"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "swd",
          "type": "SwdHostPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Programming header with power and SWD (SWCLK/SWDIO/RESET) pins."
    },
    {
      "name": "",
      "type": "DigitalWrapperRotaryEncoder",
      "superClasses": [
        "DigitalRotaryEncoder",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Basic implementation for DigitalRotaryEncoder as a wrapper around a passive-typed RotaryEncoder."
    },
    {
      "name": "",
      "type": "Sn74lvc1g74",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "clk",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "d",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "nset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "nclr",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "q",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "nq",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "D flip-flop with clear and preset\n\nTODO: should extend an abstract flip-lop interface, with async (n)set and (n)clear mixins"
    },
    {
      "name": "",
      "type": "Tlv9152",
      "superClasses": [
        "MultipackOpamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Dual RRIO opamps.\n  "
    },
    {
      "name": "",
      "type": "VoltageReference",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "output_voltage",
          "type": "range",
          "default_value": null,
          "docstring": "Target output voltage"
        }
      ],
      "is_abstract": true,
      "docstring": "Voltage reference, generally provides high accuracy but limited current"
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
      "docstring": null
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Wrapper around RotaryEncoder that provides digital ports that are pulled low (to GND) when pressed."
    },
    {
      "name": "",
      "type": "Stm32f103Base",
      "superClasses": [
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": null
    },
    {
      "name": "",
      "type": "HalfBridge",
      "superClasses": [
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Half bridge circuit with logic-level inputs and current draw calculated from the output node.\nTwo power rails: logic power (which can be used to power gate drivers), and the power rail."
    },
    {
      "name": "",
      "type": "Esp32c3_Base",
      "superClasses": [],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "en",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io8",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io9",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for ESP32-C3 series devices, with RISC-V core, 2.4GHz WiF,i, BLE5.\nPlatformIO: use board ID esp32-c3-devkitm-1\n\nChip datasheet: https://espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf"
    },
    {
      "name": "",
      "type": "Bwipx_1_001e",
      "superClasses": [
        "UflConnector",
        "RfConnector",
        "Connector"
      ],
      "ports": [
        {
          "name": "sig",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "name",
          "type": "str",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "BAT WIRELESS IPEX connector"
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
      "docstring": null
    },
    {
      "name": "",
      "type": "Lmv321",
      "superClasses": [
        "Opamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "RRO op-amp in SOT-23-5.\n  "
    },
    {
      "name": "",
      "type": "DigitalLowPassRc",
      "superClasses": [
        "DigitalFilter",
        "Filter"
      ],
      "ports": [
        {
          "name": "input",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "impedance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "cutoff_freq",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Low-pass RC filter attached to a digital line.\nDoes not change the signal, only performs filtering"
    },
    {
      "name": "",
      "type": "Qt096t_if09",
      "superClasses": [
        "Lcd",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "rs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "led",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ST7735S-based LCD module with a 8-pin 0.5mm-pitch FPC connector"
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
      "type": "VoltageIsolatedSwitch",
      "superClasses": [
        "Interface"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Digitally controlled solid state relay that switches a voltage signal.\nIncludes a ballasting resistor.\n\nThe ports are not tagged with Input/Output/InOut, because of potential for confusion between\nthe digital side and the analog side."
    },
    {
      "name": "",
      "type": "G3VM_61GR2",
      "superClasses": [
        "SolidStateRelay",
        "Interface"
      ],
      "ports": [
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "feta",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "fetb",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "PulldownResistorArray",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Array of PulldownResistors, sized from the port array's connections."
    },
    {
      "name": "",
      "type": "Esp32c3_Wroom02",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Wrapper around Esp32c3_Wroom02 with external capacitors and UART programming header."
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "c",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "d",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Wrapper around DirectionSwitch that provides digital ports that are pulled low (to GND) when pressed."
    },
    {
      "name": "",
      "type": "JacdacMountingGnd4",
      "superClasses": [
        "JacdacSubcircuit",
        "Interface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Cr2032",
      "superClasses": [
        "Battery",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            2.0,
            3.0
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "DigitalTestPoint",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "io",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Test point with a DigitalSink port."
    },
    {
      "name": "",
      "type": "CurrentSensor",
      "superClasses": [
        "Sensor"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": null
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
      "type": "DigitalWrapperRotaryEncoderWithSwitch",
      "superClasses": [
        "DigitalWrapperRotaryEncoder",
        "DigitalRotaryEncoder",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sw",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Iso1050dub",
      "superClasses": [
        "IsolatedCanTransceiver",
        "CanTransceiver",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "controller",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can_pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can_gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "AnalogClampResistor",
      "superClasses": [
        "Protection"
      ],
      "ports": [
        {
          "name": "signal_in",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "signal_out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "clamp_target",
          "type": "range",
          "default_value": [
            0.0,
            3.0
          ],
          "docstring": null
        },
        {
          "name": "clamp_current",
          "type": "range",
          "default_value": [
            0.00025,
            0.0025
          ],
          "docstring": null
        },
        {
          "name": "protection_voltage",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ],
          "docstring": null
        },
        {
          "name": "zero_out",
          "type": "bool",
          "default_value": 0.0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Inline resistor that limits the current (to a parameterized amount) which works in concert\nwith ESD diodes in the downstream device to clamp the signal voltage to allowable levels.\n\nThe protection voltage can be extended beyond the modeled range from the input signal,\nand can also be specified to allow zero output voltage (for when the downstream device\nis powered down)\n\nTODO: clamp_target should be inferred from the target voltage_limits,\nbut voltage_limits doesn't always get propagated"
    },
    {
      "name": "",
      "type": "Xiao_Esp32c3",
      "superClasses": [
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "vusb_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32-C3 development board, a tiny development (21x17.5mm) daughterboard with a RISC-V microcontroller\nsupporting WiFi and BLE. Has an onboard USB connector, so this can also source power.\n\nLimited pins (only 11 for IOs, of which 6 are usable as the other 5 have boot requirements).\n\nRequires Seeed Studio's KiCad library for the footprint: https://github.com/Seeed-Studio/OPL_Kicad_Library\nThe 'Seeed Studio XIAO Series Library' must have been added as a footprint library of the same name.\n\nPinning data: https://www.seeedstudio.com/blog/wp-content/uploads/2022/08/Seeed-Studio-XIAO-Series-Package-and-PCB-Design.pdf"
    },
    {
      "name": "",
      "type": "JacdacEdgeConnector",
      "superClasses": [
        "Connector",
        "JacdacSubcircuit",
        "Interface"
      ],
      "ports": [
        {
          "name": "gnd_src",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "jd_pwr_src",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd_sink",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "jd_pwr_sink",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "jd_data",
          "type": "JacdacDataPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "jd_status",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "is_power_provider",
          "type": "bool",
          "default_value": 0.0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Jacdac edge connector, in power sink or source mode (both available, but both may not be connected simultaneously).\nThis includes the required per-port application circuitry, including status LEDs and ESD diodes.\nThis does NOT include device-wide application circuitry like EMI filters.\n\nRequires this KiCad footprint library to be available: https://github.com/mattoppenheim/jacdac"
    },
    {
      "name": "",
      "type": "DigitalArrayTestPoint",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "io",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": "",
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Creates an array of Digital test points, sized from the port array's connections."
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
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage_out",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "current_limits",
          "type": "range",
          "default_value": [
            -Infinity,
            Infinity
          ],
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Barrel jack that models a configurable voltage / max current power supply."
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
      "docstring": null
    },
    {
      "name": "",
      "type": "IoController",
      "superClasses": [
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Structural abstract base class for a programmable controller chip (including microcontrollers that take firmware,\nand FPGAs that take gateware).\n\nThis provides the model of a grab bag of IOs on its structural interface, and supports common peripherals as\nVectors of GPIO, ADC, I2C, and SPI. The pin_assigns argument can be used to specify how to map Vector elements\nto physical (by footprint pin number) or logical pins (by pin name).\nLess common peripheral types like CAN and DAC can be added with mixins.\n\nThis defines a power input port that powers the device, though the IoControllerPowerOut mixin can be used\nfor a controller that provides power, for example a development board powered from onboard USB."
    },
    {
      "name": "",
      "type": "Er_Oled_091_3",
      "superClasses": [
        "Oled",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1306-based 0.91\" 128x32 monochrome OLED.\nTODO (maybe?) add the power gating circuit in the reference schematic"
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
      "type": "Tlp3545a",
      "superClasses": [
        "SolidStateRelay",
        "Interface"
      ],
      "ports": [
        {
          "name": "leda",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ledk",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "feta",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "fetb",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "PullupResistorArray",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io",
          "type": "DigitalSingleSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Array of PullupResistors, sized from the port array's connections."
    },
    {
      "name": "",
      "type": "DiscreteBuckBoostConverter",
      "superClasses": [
        "BuckBoostConverter",
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "ripple_current_factor",
          "type": "range",
          "default_value": "(0.2, 0.5)",
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": "Category for discrete buck-boost converter subcircuits (as opposed to integrated components)"
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for opamps. Parameters need to be more restricted in subclasses.\n  "
    },
    {
      "name": "",
      "type": "JacdacMountingData1",
      "superClasses": [
        "JacdacSubcircuit",
        "Interface"
      ],
      "ports": [
        {
          "name": "jd_data",
          "type": "JacdacPassivePort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Jacdac mounting hole for data, with a passive-typed port so it doesn't count as a connection\nfor validation purposes."
    },
    {
      "name": "",
      "type": "Ov2640",
      "superClasses": [
        "Camera",
        "Sensor"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_analog",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_digital",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Camera",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sio",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwdn",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "OV2640 digital camera with DVP interface, commonly used with ESP32 devices"
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
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "inductance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "current",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ],
          "docstring": null
        },
        {
          "name": "frequency",
          "type": "range",
          "default_value": [
            0.0,
            0.0
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "VoltageSource/Sink-typed series inductor for power filtering"
    },
    {
      "name": "",
      "type": "AnalogTestPoint",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "io",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Test point with a AnalogSink port"
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
      "type": "Ap3012",
      "superClasses": [
        "DiscreteBoostConverter",
        "VoltageRegulator",
        "BoostConverter",
        "SwitchingVoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adjustable boost converter in SOT-23-5 with integrated switch"
    },
    {
      "name": "",
      "type": "IndicatorSinkLedResistor",
      "superClasses": [
        "IndicatorSinkLed",
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "signal",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "TODO: should the resistor sided-ness be configurable, eg as a generator? Similar for IndicatorLed"
    },
    {
      "name": "",
      "type": "Stm32g031Base",
      "superClasses": [
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": null
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
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "resistance",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Series resistor for power applications"
    },
    {
      "name": "",
      "type": "Esp32c3",
      "superClasses": [
        "Microcontroller",
        "Radiofrequency",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "ESP32-C3 application circuit, bare chip + RF circuits.\nNOT RECOMMENDED - you will need to do your own RF layout, instead consider using the WROOM module."
    },
    {
      "name": "",
      "type": "DigitalWrapperDirectionSwitch",
      "superClasses": [
        "DigitalDirectionSwitch",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "a",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "b",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "c",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "d",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Basic implementation for DigitalDirectionSwitch as a wrapper around a passive-typed DirectionSwitch."
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
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "capacitance",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "exact_capacitance",
          "type": "bool",
          "default_value": 0.0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Optionally polarized capacitor used for DC decoupling, with VoltageSink connections with voltage inference.\nImplemented as a shim block."
    },
    {
      "name": "",
      "type": "AnalogRfTestPoint",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Test point with a AnalogSink port and 50-ohm matching resistor."
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "data",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cts",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "rts",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "BlueSMiRF Gold/Silver"
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
      "type": "Er_Oled_096_1_1",
      "superClasses": [
        "Oled",
        "Display",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "dc",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "SSD1306-based 0.96\" 128x64 monochrome OLED, in either I2C or SPI mode."
    },
    {
      "name": "",
      "type": "Xc9142",
      "superClasses": [
        "DiscreteBoostConverter",
        "BoostConverter",
        "SwitchingVoltageRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Low-input-voltage boost converter (starts as low as 0.9V) with fixed output.\nXC9142 has PWM/PFM functionality, compared to PWM only for XC9141.\nSemi pin compatible with XC9140, LTC3525, MAX1724."
    },
    {
      "name": "",
      "type": "Esp32_Base",
      "superClasses": [],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2s",
          "type": "I2sController",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Host",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanControllerPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "dac",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "touch",
          "type": "TouchDriver",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi_peripheral",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "chip_pu",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "io0",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "io2",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "uart0",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for ESP32 series microcontrollers with WiFi and Bluetooth (classic and LE)\n\nChip datasheet: https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf"
    },
    {
      "name": "",
      "type": "IndicatorSinkLedArray",
      "superClasses": [
        "Light",
        "HumanInterface"
      ],
      "ports": [
        {
          "name": "signals",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "count",
          "type": "int",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "color",
          "type": "str",
          "default_value": "",
          "docstring": null
        },
        {
          "name": "current_draw",
          "type": "range",
          "default_value": [
            0.001,
            0.01
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "An array of IndicatorSinkLed, just a convenience wrapper."
    },
    {
      "name": "",
      "type": "Ov2640_Fpc24",
      "superClasses": [
        "Ov2640",
        "Camera",
        "Sensor"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_analog",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_digital",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "dvp8",
          "type": "Dvp8Camera",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sio",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwdn",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "OV2640 camera as a 24-pin FPC bottom contact connector, as seems to be common on ESP32 with camera boards.\nElectrical parameters from https://www.uctronics.com/download/OV2640_DS.pdf\nPinning and interface circuit from https://github.com/Freenove/Freenove_ESP32_WROVER_Board/blob/f710fd6976e76ab76c29c2ee3042cd7bac22c3d6/Datasheet/ESP32_Schematic.pdf\n  and https://www.waveshare.com/w/upload/9/99/OV2640-Camera-Board-Schematic.pdf\nOn many boards, Y0 and Y1 (LSBs) are left unconnected to save IOs."
    },
    {
      "name": "",
      "type": "FetHalfBridgePwmReset",
      "superClasses": [
        "FetHalfBridge",
        "HalfBridge",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "pwm_ctl",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "Rp2040",
      "superClasses": [
        "Microcontroller",
        "IoController",
        "ProgrammableController"
      ],
      "ports": [
        {
          "name": "gpio",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "adc",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cController",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "uart",
          "type": "UartPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "usb",
          "type": "UsbDevicePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "i2c_target",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "sink",
          "required": false,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "OpampElement",
      "superClasses": [
        "Opamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Packed opamp element"
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
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_bat",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiPeripheral",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "clkout",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "int",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "RTC with integrated crystal. SO-16 version"
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
      "type": "AnalogSwitchTree",
      "superClasses": [
        "AnalogSwitch",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inputs",
          "type": "Passive",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "switch_size",
          "type": "int",
          "default_value": 0,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Generates an n-ported analog switch by creating a tree of individual, smaller switches.\nParameterized by the size of the element switches."
    },
    {
      "name": "",
      "type": "Cbmud1200l",
      "superClasses": [
        "DigitalIsolator",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr_a",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd_a",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "in_a",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out_a",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "pwr_b",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd_b",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "in_b",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out_b",
          "type": "DigitalSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
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
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": true,
      "docstring": null
    },
    {
      "name": "",
      "type": "Ice40TargetHeader",
      "superClasses": [
        "ProgrammingConnector",
        "Connector",
        "Testing"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "spi",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cs",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Custom programming header for iCE40 loosely based on the SWD pinning"
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
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "cols",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "nrows",
          "type": "int",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "ncols",
          "type": "int",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "voltage_drop",
          "type": "range",
          "default_value": [
            0.0,
            0.7
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "A switch matrix, such as for a keyboard, that generates (nrows * ncols) switches while only\nusing max(nrows, ncols) IOs.\n\nInternally, the switches are in a matrix, with the driver driving one col low at a time while\nreading which rows are low (with the other cols weakly pulled high).\nThis uses the Switch abstract class, which can be refined into e.g. a tactile switch or mechanical keyswitch.\n\nThis generates per-switch diodes which allows multiple keys to be pressed simultaneously.\nDiode anodes are attached to the rows, while cathodes go through each switch to the cols."
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
      "docstring": null
    },
    {
      "name": "",
      "type": "Xc6209",
      "superClasses": [
        "LinearRegulator",
        "VoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "XC6209F (F: 300mA version, no pull-down resistor; 2: +/-2% accuracy)\nLow-ESR ceramic cap compatible"
    },
    {
      "name": "",
      "type": "Dg468",
      "superClasses": [
        "AnalogSwitch",
        "Interface"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "control",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "com",
          "type": "Passive",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "inputs",
          "type": "Passive",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "DG468 36V 10ohm SPST switch in normally-open configuration\n  "
    },
    {
      "name": "",
      "type": "OscillatorCrystal",
      "superClasses": [
        "OscillatorReference",
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Crystal and supporting circuitry to connect it to an oscillator driver.\nShould include load capacitors."
    },
    {
      "name": "",
      "type": "Amplifier",
      "superClasses": [
        "OpampApplication",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "input",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "output",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reference",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "amplification",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "impedance",
          "type": "range",
          "default_value": [
            10000.0,
            100000.0
          ],
          "docstring": null
        },
        {
          "name": "series",
          "type": "int",
          "default_value": 24,
          "docstring": null
        },
        {
          "name": "tolerance",
          "type": "float",
          "default_value": 0.01,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Opamp non-inverting amplifier, outputs a scaled-up version of the input signal.\n\nFrom https://en.wikipedia.org/wiki/Operational_amplifier_applications#Non-inverting_amplifier:\nVout = Vin (1 + R1/R2)\n\nThe input and output impedances given are a bit more complex, so this simplifies it to\nthe opamp's specified pin impedances - TODO: is this correct(ish)?"
    },
    {
      "name": "",
      "type": "JacdacDataInterface",
      "superClasses": [
        "JacdacSubcircuit",
        "Interface"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "signal",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "jd_data",
          "type": "JacdacDataPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Interface from a Jacdac data bus to a device, including protection and EMI filtering.\nDoes NOT include per-port circuitry like ESD diodes and status LEDs."
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
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Abstract speaker part with speaker input port."
    },
    {
      "name": "",
      "type": "Qmc5883l",
      "superClasses": [
        "Magnetometer",
        "Sensor"
      ],
      "ports": [
        {
          "name": "vdd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "i2c",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "drdy",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "QMC5883L 3-axis magnetometer in single supply configuration.\nThis part seems to be a licensed semi-copy of the HMC5883L which is no longer in production.\nIt might be hardware drop-in compatible though the firmware protocol differs."
    },
    {
      "name": "",
      "type": "CpuFan4Pin",
      "superClasses": [
        "CpuFanConnector",
        "Connector"
      ],
      "ports": [
        {
          "name": "control",
          "type": "DigitalBidir",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sense",
          "type": "DigitalSingleSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "3-pin fan controller"
    },
    {
      "name": "",
      "type": "BrushedMotorDriver",
      "superClasses": [
        "MotorDriver",
        "PowerSwitch"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "A brushed motor driver, or at least the power stage for one."
    },
    {
      "name": "",
      "type": "Ap3418",
      "superClasses": [
        "DiscreteBuckConverter",
        "VoltageRegulator",
        "BuckConverter",
        "SwitchingVoltageRegulator",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "pwr_in",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Power input"
        },
        {
          "name": "pwr_out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": "Regulated voltage output"
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "reset",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Adjustable synchronous buck converter in SOT-23-5 with integrated switch"
    },
    {
      "name": "",
      "type": "Opa2197",
      "superClasses": [
        "MultipackOpamp",
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Dual precision RRO opamps.\n  "
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
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "apull",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "ain",
          "type": "AnalogSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "aout",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Digitally controlled solid state relay that switches an analog signal.\nIncludes a ballasting resistor.\n\nThe ports are not tagged with Input/Output/InOut, because of potential for confusion between\nthe digital side and the analog side.\n\nA separate output-side pull port allows modeling the output switch standoff voltage\nwhen the switch is off."
    },
    {
      "name": "",
      "type": "AABattery",
      "superClasses": [
        "Battery",
        "PowerSource"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "voltage",
          "type": "range",
          "default_value": [
            1.3,
            1.7
          ],
          "docstring": null
        },
        {
          "name": "actual_voltage",
          "type": "range",
          "default_value": [
            1.3,
            1.7
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "AA Alkaline battery"
    },
    {
      "name": "",
      "type": "I2cTestPoint",
      "superClasses": [
        "TypedTestPoint",
        "Testing"
      ],
      "ports": [
        {
          "name": "io",
          "type": "I2cTarget",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "tp_name",
          "type": "str",
          "default_value": "",
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": "Two test points for I2C SDA and SCL"
    },
    {
      "name": "",
      "type": "Pesd1can",
      "superClasses": [
        "CanEsdDiode",
        "Protection"
      ],
      "ports": [
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "can",
          "type": "CanDiffPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "BldcDriver",
      "superClasses": [
        "MotorDriver",
        "PowerSwitch"
      ],
      "ports": [],
      "argParams": [],
      "is_abstract": true,
      "docstring": "A brushless motor driver, or at least the power stage for one - may be as simple a 3 half-bridges."
    },
    {
      "name": "",
      "type": "Cstne",
      "superClasses": [
        "CeramicResonator",
        "OscillatorReference",
        "DiscreteApplication"
      ],
      "ports": [
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null,
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "FetHalfBridgeIndependent",
      "superClasses": [
        "FetHalfBridge",
        "HalfBridge",
        "PowerConditioner"
      ],
      "ports": [
        {
          "name": "low_ctl",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "high_ctl",
          "type": "DigitalSink",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "out",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pwr_logic",
          "type": "VoltageSink",
          "is_array": false,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [
        {
          "name": "frequency",
          "type": "range",
          "default_value": null,
          "docstring": null
        },
        {
          "name": "fet_rds",
          "type": "range",
          "default_value": [
            0.0,
            1.0
          ],
          "docstring": null
        },
        {
          "name": "gate_res",
          "type": "range",
          "default_value": [
            20.9,
            23.1
          ],
          "docstring": null
        }
      ],
      "is_abstract": false,
      "docstring": null
    },
    {
      "name": "",
      "type": "MultipackOpamp",
      "superClasses": [
        "Analog"
      ],
      "ports": [
        {
          "name": "pwr",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "gnd",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "down",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inp",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "inn",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "out",
          "type": "AnalogSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": true,
      "docstring": "Base class for packed opamps - devices that have multiple opamps in a single package,\nwith shared power and ground connections. Typically used with the multipack feature to\nfit individual opamps across the design hierarchy into one of these."
    }
  ],
  "links": [
    {
      "name": "",
      "type": "JacdacDataLink",
      "superClasses": [],
      "ports": [
        {
          "name": "nodes",
          "type": "JacdacDataPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "passives",
          "type": "JacdacPassivePort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Link for the JD_DATA line"
    },
    {
      "name": "",
      "type": "SpiLink",
      "superClasses": [],
      "ports": [
        {
          "name": "controller",
          "type": "SpiController",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "peripherals",
          "type": "SpiPeripheral",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Controller/peripheral naming conventions follow https://www.oshwa.org/a-resolution-to-redefine-spi-signal-names/,\nthough SPI naming in general is a mess.\nUnlike I2C, there is not an authoritative SPI specification.\nOther names exist, including main/subnode (Wikipedia) and controller/target (NXP, following their I2C convention).\n\nInternal link signal names are not considered part of the stable public API and may change\nwithout a deprecation phase and backwards compatibility."
    },
    {
      "name": "",
      "type": "AnalogLink",
      "superClasses": [],
      "ports": [
        {
          "name": "source",
          "type": "AnalogSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sinks",
          "type": "AnalogSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Analog signal, a signal that carries information by varying voltage"
    },
    {
      "name": "",
      "type": "CanDiffLink",
      "superClasses": [],
      "ports": [
        {
          "name": "nodes",
          "type": "CanDiffPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Differential CAN link, CANH and CANL signals"
    },
    {
      "name": "",
      "type": "PassiveLink",
      "superClasses": [],
      "ports": [
        {
          "name": "passives",
          "type": "Passive",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Copper-only connection"
    },
    {
      "name": "",
      "type": "SwdLink",
      "superClasses": [],
      "ports": [
        {
          "name": "host",
          "type": "SwdHostPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "device",
          "type": "SwdTargetPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pull",
          "type": "SwdPullPort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base block that has ports (IOs), parameters, and constraints between them.\n  "
    },
    {
      "name": "",
      "type": "UsbLink",
      "superClasses": [],
      "ports": [
        {
          "name": "host",
          "type": "UsbHostPort",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "device",
          "type": "UsbDevicePort",
          "is_array": false,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "passive",
          "type": "UsbPassivePort",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "passive",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base block that has ports (IOs), parameters, and constraints between them.\n  "
    },
    {
      "name": "",
      "type": "TouchLink",
      "superClasses": [],
      "ports": [
        {
          "name": "driver",
          "type": "TouchDriver",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "pad",
          "type": "TouchPadPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Touch sensor link, consisting of one sensor (typically a PCB copper pattern) and one driver.\nThese contain no modeling."
    },
    {
      "name": "",
      "type": "Dvp8Link",
      "superClasses": [],
      "ports": [
        {
          "name": "host",
          "type": "Dvp8Host",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "cam",
          "type": "Dvp8Camera",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "DVP (Digital Video Port) camera link with 8-wide data connection.\nTODO: ideally this would be width-parameterized, but that core logic doesn't exist yet."
    },
    {
      "name": "",
      "type": "I2sLink",
      "superClasses": [],
      "ports": [
        {
          "name": "controller",
          "type": "I2sController",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "target_receiver",
          "type": "I2sTargetReceiver",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base block that has ports (IOs), parameters, and constraints between them.\n  "
    },
    {
      "name": "",
      "type": "VoltageLink",
      "superClasses": [],
      "ports": [
        {
          "name": "source",
          "type": "VoltageSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sinks",
          "type": "VoltageSink",
          "is_array": true,
          "hint_position": "up",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base block that has ports (IOs), parameters, and constraints between them.\n  "
    },
    {
      "name": "",
      "type": "I2cLink",
      "superClasses": [],
      "ports": [
        {
          "name": "pull",
          "type": "I2cPullupPort",
          "is_array": false,
          "hint_position": "down",
          "hint_signal_direction": "passive",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "controller",
          "type": "I2cController",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "targets",
          "type": "I2cTarget",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "I2C connection, using terminology from the auhtoritative NXP specification at\nhttps://www.nxp.com/docs/en/user-guide/UM10204.pdf."
    },
    {
      "name": "",
      "type": "SpeakerLink",
      "superClasses": [],
      "ports": [
        {
          "name": "source",
          "type": "SpeakerDriverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "sink",
          "type": "SpeakerPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base block that has ports (IOs), parameters, and constraints between them.\n  "
    },
    {
      "name": "",
      "type": "CrystalLink",
      "superClasses": [],
      "ports": [
        {
          "name": "driver",
          "type": "CrystalDriver",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "crystal",
          "type": "CrystalPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base block that has ports (IOs), parameters, and constraints between them.\n  "
    },
    {
      "name": "",
      "type": "DigitalLink",
      "superClasses": [],
      "ports": [
        {
          "name": "source",
          "type": "DigitalSource",
          "is_array": false,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": false,
          "docstring": null
        },
        {
          "name": "single_sources",
          "type": "DigitalSingleSource",
          "is_array": true,
          "hint_position": "right",
          "hint_signal_direction": "source",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "sinks",
          "type": "DigitalSink",
          "is_array": true,
          "hint_position": "left",
          "hint_signal_direction": "sink",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        },
        {
          "name": "bidirs",
          "type": "DigitalBidir",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "A link for digital IOs. Because of the wide variations on digital IOs, this is kind of a beast.\n\nOverall, this means a port that deals with signals that can be driven to two levels, high or low.\nThe types of ports are:\n- Source: can drive both high or low, but not read.\n- Single source: can drive either high or low, but not the other, and cannot read.\n  Example: open-drain outputs, pull-up resistors.\n- Sink: cannot drive, but can read.\n- Bidir: can drive both high and low, and can read.\n\nSingle sources are complex, since they require a complementary weak signal driver (pull-up).\nPull-ups can either be explicit (discrete resistor) or part of a Bidir (configurable pull-ups\nare common on many microcontroller pins).\n\nWeak signal drivers (pull up resistors) do not need a complementary single source, since they\nmay simply be used to provide a default."
    },
    {
      "name": "",
      "type": "UsbCcLink",
      "superClasses": [],
      "ports": [
        {
          "name": "a",
          "type": "UsbCcPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "b",
          "type": "UsbCcPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base block that has ports (IOs), parameters, and constraints between them.\n  "
    },
    {
      "name": "",
      "type": "UartLink",
      "superClasses": [],
      "ports": [
        {
          "name": "a",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "b",
          "type": "UartPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "bidir",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Base block that has ports (IOs), parameters, and constraints between them.\n  "
    },
    {
      "name": "",
      "type": "CanLogicLink",
      "superClasses": [],
      "ports": [
        {
          "name": "controller",
          "type": "CanControllerPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "source",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "transceiver",
          "type": "CanTransceiverPort",
          "is_array": false,
          "hint_position": null,
          "hint_signal_direction": "sink",
          "hint_array_direction": null,
          "required": true,
          "docstring": null
        },
        {
          "name": "passive",
          "type": "CanPassivePort",
          "is_array": true,
          "hint_position": null,
          "hint_signal_direction": "passive",
          "hint_array_direction": "source",
          "required": false,
          "docstring": null
        }
      ],
      "argParams": [],
      "is_abstract": false,
      "docstring": "Logic level CAN link, RXD and TXD signals"
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
            "name": "MultipackOpamp",
            "children": [
              {
                "name": "Opa2171",
                "children": []
              },
              {
                "name": "Opa2189",
                "children": []
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
                "name": "Tlv9152",
                "children": []
              }
            ]
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
                "name": "Opa189",
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
              }
            ]
          },
          {
            "name": "Dm3btDsfPejs",
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
            "name": "QwiicTarget",
            "children": []
          },
          {
            "name": "RfConnector",
            "children": [
              {
                "name": "UflConnector",
                "children": [
                  {
                    "name": "Bwipx_1_001e",
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
        "name": "HumanInterface",
        "children": [
          {
            "name": "DigitalDirectionSwitch",
            "children": [
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
            "name": "FootprintToucbPad",
            "children": []
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
                "name": "Dg468",
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
            "name": "Antenna",
            "children": [
              {
                "name": "JlcAntenna",
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
            "name": "JacdacSubcircuit",
            "children": [
              {
                "name": "JacdacDataInterface",
                "children": []
              },
              {
                "name": "JacdacEdgeConnector",
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
              }
            ]
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
              }
            ]
          },
          {
            "name": "Lm4871",
            "children": []
          },
          {
            "name": "Lmv331",
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
            "name": "Sn74lvc1g74",
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
        "name": "Memory",
        "children": [
          {
            "name": "SdCard",
            "children": [
              {
                "name": "MicroSdSocket",
                "children": [
                  {
                    "name": "Dm3btDsfPejs",
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
                "name": "W25q",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "PowerConditioner",
        "children": [
          {
            "name": "BootstrapVoltageAdder",
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
            "name": "HalfBridge",
            "children": [
              {
                "name": "FetHalfBridge",
                "children": [
                  {
                    "name": "FetHalfBridgeIndependent",
                    "children": []
                  },
                  {
                    "name": "FetHalfBridgePwmReset",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "LedDriver",
            "children": [
              {
                "name": "Al8861",
                "children": []
              }
            ]
          },
          {
            "name": "Lm2664",
            "children": []
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
            "name": "S8261A",
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
                "name": "Lm2733",
                "children": []
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
                            "name": "CustomSyncBuckBoostConverterPwm",
                            "children": []
                          },
                          {
                            "name": "CustomSyncBuckConverterIndependent",
                            "children": []
                          },
                          {
                            "name": "Lm2733",
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
                        "children": []
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
                "name": "Ncp3420",
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
              },
              {
                "name": "Xiao_Rp2040",
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
            "name": "AnalogClampResistor",
            "children": []
          },
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
                "name": "Lsm6ds3trc",
                "children": []
              }
            ]
          },
          {
            "name": "Camera",
            "children": [
              {
                "name": "Ov2640",
                "children": [
                  {
                    "name": "Ov2640_Fpc24",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "CurrentSensor",
            "children": [
              {
                "name": "Ad8418a",
                "children": []
              },
              {
                "name": "OpampCurrentSensor",
                "children": []
              }
            ]
          },
          {
            "name": "DistanceSensor",
            "children": [
              {
                "name": "Vl53l0xArray",
                "children": []
              },
              {
                "name": "Vl53l0xBase",
                "children": [
                  {
                    "name": "Vl53l0x",
                    "children": []
                  },
                  {
                    "name": "Vl53l0xConnector",
                    "children": []
                  }
                ]
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
                "name": "Lsm6ds3trc",
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
                "name": "Qmc5883l",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "SmdStandardPackage",
        "children": []
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
                "name": "AnalogRfTestPoint",
                "children": []
              },
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