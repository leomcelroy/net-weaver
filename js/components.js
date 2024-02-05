export const components = [
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
        "defaultValue": null
      },
      {
        "name": "reverse_recovery_time",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "fet_rds",
        "type": "range",
        "defaultValue": [
          0.0,
          1.0
        ]
      },
      {
        "name": "gate_res",
        "type": "range",
        "defaultValue": [
          20.9,
          23.1
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "drive_current",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "PowerConditioner",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": 24
      },
      {
        "name": "tolerance",
        "type": "float",
        "defaultValue": 0.01
      },
      {
        "name": "footprint_spec",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "sense_resistance",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "voltage_drop",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "voltage_out",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "input_thresholds",
        "type": "range",
        "defaultValue": [
          NaN,
          NaN
        ]
      },
      {
        "name": "output_thresholds",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "pullup_capable",
        "type": "bool",
        "defaultValue": false
      },
      {
        "name": "pulldown_capable",
        "type": "bool",
        "defaultValue": false
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "reverse_recovery_time",
        "type": "range",
        "defaultValue": [
          0,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": Infinity
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "AnalogFilter",
    "superClasses": [
      "Filter"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": true
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
    "is_abstract": false
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
        "name": "name",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Lcd",
    "superClasses": [
      "Display"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "DefaultConnectionBlock",
    "superClasses": [
      "InternalBlock"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "Label",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "drain_current",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "gate_voltage",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "rds_on",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "gate_charge",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "power",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "channel",
        "type": "str",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "dc_resistance",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": false
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "PowerSwitch",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "EInk",
    "superClasses": [
      "Display"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "fet_rds_on",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
    "is_abstract": true
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
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Light",
    "superClasses": [
      "HumanInterface"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": [
          2.59,
          2.67
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "cutoff_freq",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Freenove_Esp32s3_Wroom",
    "superClasses": [
      "IoControllerUsbOut",
      "IoControllerPowerOut",
      "IoControllerSpiPeripheral",
      "IoControllerI2cTarget",
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "MotorDriver",
    "superClasses": [
      "PowerSwitch"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": [
          100000.0,
          1000000.0
        ]
      },
      {
        "name": "voltage_drop",
        "type": "range",
        "defaultValue": [
          0.0,
          1.0
        ]
      },
      {
        "name": "rds_on",
        "type": "range",
        "defaultValue": [
          0.0,
          1.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": ""
      },
      {
        "name": "manufacturer_spec",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "part_spec",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "cutoff_freq",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Interface",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "DistanceSensor",
    "superClasses": [
      "Sensor"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": true
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
        "defaultValue": 0
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "IoControllerUsb",
    "superClasses": [
      "BaseIoController"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "frequency",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": "0805"
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": ""
      },
      {
        "name": "manufacturer_spec",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "part_spec",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "kicad_refdes_prefix",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "kicad_footprint",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "kicad_part",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "kicad_value",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "kicad_datasheet",
        "type": "str",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "input_ripple_limit",
        "type": "float",
        "defaultValue": 0.075
      },
      {
        "name": "output_ripple_limit",
        "type": "float",
        "defaultValue": 0.025
      }
    ],
    "is_abstract": true
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
        "defaultValue": [
          8.0,
          8.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Memory",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "DiscreteSemiconductor",
    "superClasses": [
      "DiscreteComponent"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": true
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
        "defaultValue": [
          2.5,
          4.2
        ]
      },
      {
        "name": "actual_voltage",
        "type": "range",
        "defaultValue": [
          2.5,
          4.2
        ]
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "IoControllerBle",
    "superClasses": [
      "BaseIoController"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "NetBlock",
    "superClasses": [
      "InternalBlock"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "DuckLogo",
    "superClasses": [
      "Label"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": [
          0.2,
          0.5
        ]
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "DigitalToAnalog",
    "superClasses": [
      "Interface"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": ""
      }
    ],
    "is_abstract": true
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
        "defaultValue": ""
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": true
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
    "is_abstract": true
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          2.0,
          3.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "PowerSource",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "NetPackingBlock",
    "superClasses": [
      "InternalBlock"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          2.5,
          4.2
        ]
      },
      {
        "name": "actual_voltage",
        "type": "range",
        "defaultValue": [
          2.5,
          4.2
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "src_resistance",
        "type": "float",
        "defaultValue": null
      },
      {
        "name": "src_reactance",
        "type": "float",
        "defaultValue": null
      },
      {
        "name": "load_resistance",
        "type": "float",
        "defaultValue": null
      },
      {
        "name": "tolerance",
        "type": "float",
        "defaultValue": null
      },
      {
        "name": "voltage",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Er_Epd027_2_Outline",
    "superClasses": [
      "InternalSubcircuit"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "color",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.001,
          0.01
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "PassiveComponent",
    "superClasses": [
      "DiscreteComponent"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "CircuitPortBridge",
    "superClasses": [
      "PortBridge"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": false
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          1.3,
          1.7
        ]
      },
      {
        "name": "actual_voltage",
        "type": "range",
        "defaultValue": [
          1.3,
          1.7
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
        "type": "VoltageSink",
        "is_array": false,
        "hint_position": "up"
      },
      {
        "name": "switch_out",
        "type": "VoltageSource",
        "is_array": false,
        "hint_position": "right"
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
        "defaultValue": null
      },
      {
        "name": "output_voltage",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "frequency",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "output_current",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "inductor_current_ripple",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "efficiency",
        "type": "range",
        "defaultValue": [
          0.8,
          1.0
        ]
      },
      {
        "name": "input_voltage_ripple",
        "type": "float",
        "defaultValue": 0.075
      },
      {
        "name": "output_voltage_ripple",
        "type": "float",
        "defaultValue": 0.025
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "cutoff_freq",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Er_Oled028_1_Outline",
    "superClasses": [
      "InternalSubcircuit"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "capacitance",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "Gyroscope",
    "superClasses": [
      "Sensor"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "CircuitPortAdapter",
    "superClasses": [
      "PortAdapter"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "Display",
    "superClasses": [
      "HumanInterface"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": [
          4.75,
          5.25
        ]
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          0.0,
          0.5
        ]
      },
      {
        "name": "cc_pullup_capable",
        "type": "bool",
        "defaultValue": false
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "CustomBuckBoostConverter",
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
        "name": "buck_pwm",
        "type": "DigitalSink",
        "is_array": false,
        "hint_position": "left"
      },
      {
        "name": "boost_pwm",
        "type": "DigitalSink",
        "is_array": false,
        "hint_position": "left"
      }
    ],
    "argParams": [
      {
        "name": "frequency",
        "type": "range",
        "defaultValue": [
          100000.0,
          1000000.0
        ]
      },
      {
        "name": "voltage_drop",
        "type": "range",
        "defaultValue": [
          0.0,
          1.0
        ]
      },
      {
        "name": "rds_on",
        "type": "range",
        "defaultValue": [
          0.0,
          1.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "capacity",
        "type": "float",
        "defaultValue": 0.0
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "LemurLogo",
    "superClasses": [
      "Label"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "in_kicad_value",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "in_kicad_datasheet",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "in_lcsc_part",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "in_actual_basic_part",
        "type": "bool",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "signal_limit",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": [
          Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "collector_current",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "gain",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "power",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "channel",
        "type": "str",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
    "is_abstract": true
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
    "argParams": [],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "BldcDriver",
    "superClasses": [
      "MotorDriver"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": [
          10000.0,
          100000.0
        ]
      },
      {
        "name": "series",
        "type": "int",
        "defaultValue": 24
      },
      {
        "name": "tolerance",
        "type": "float",
        "defaultValue": 0.01
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "power",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "voltage",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "IdDots4",
    "superClasses": [
      "Label"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "time_constant",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "power",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "EnvironmentalSensor",
    "superClasses": [
      "Sensor"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": [
          4.75,
          5.25
        ]
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          0.0,
          0.5
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "name": "name",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": ""
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.001,
          0.01
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Magnetometer",
    "superClasses": [
      "Sensor"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": ""
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.001,
          0.01
        ]
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Mechanical",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "output_thresholds",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "pullup_capable",
        "type": "bool",
        "defaultValue": false
      },
      {
        "name": "pulldown_capable",
        "type": "bool",
        "defaultValue": false
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Filter",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "IoControllerBluetooth",
    "superClasses": [
      "BaseIoController"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "LightSensor",
    "superClasses": [
      "Sensor"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": 1.0
      },
      {
        "name": "frequency",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": 24
      },
      {
        "name": "tolerance",
        "type": "float",
        "defaultValue": 0.01
      },
      {
        "name": "footprint_spec",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Er_Oled_091_3_Outline",
    "superClasses": [
      "InternalSubcircuit"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "hold_current",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "voltage",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "drain_current",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "gate_voltage",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "rds_on",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "gate_charge",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "power",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "channel",
        "type": "str",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "InternalBlock",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "Protection",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "input_impedance",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "series",
        "type": "int",
        "defaultValue": 24
      },
      {
        "name": "tolerance",
        "type": "float",
        "defaultValue": 0.01
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "input_thresholds",
        "type": "range",
        "defaultValue": [
          NaN,
          NaN
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "series",
        "type": "int",
        "defaultValue": 24
      },
      {
        "name": "tolerance",
        "type": "float",
        "defaultValue": 0.01
      }
    ],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "DiscreteApplication",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "PortBridge",
    "superClasses": [
      "InternalBlock"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "Testing",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
  },
  {
    "name": "",
    "type": "Er_Oled_096_1_1_Outline",
    "superClasses": [
      "InternalSubcircuit"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "output_thresholds",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "pullup_capable",
        "type": "bool",
        "defaultValue": false
      },
      {
        "name": "pulldown_capable",
        "type": "bool",
        "defaultValue": false
      },
      {
        "name": "low_signal_driver",
        "type": "bool",
        "defaultValue": false
      },
      {
        "name": "high_signal_driver",
        "type": "bool",
        "defaultValue": false
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "output_voltage",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "frequency",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "output_current",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "inductor_current_ripple",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "efficiency",
        "type": "range",
        "defaultValue": [
          0.8,
          1.0
        ]
      },
      {
        "name": "input_voltage_ripple",
        "type": "float",
        "defaultValue": 0.075
      },
      {
        "name": "output_voltage_ripple",
        "type": "float",
        "defaultValue": 0.025
      },
      {
        "name": "dutycycle_limit",
        "type": "range",
        "defaultValue": [
          0.2,
          0.85
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "cutoff_freq",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "OpampApplication",
    "superClasses": [
      "Analog"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": ""
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.001,
          0.01
        ]
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Esp32_Base",
    "superClasses": [
      "IoControllerSpiPeripheral",
      "IoControllerI2cTarget",
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
    "is_abstract": true
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
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Accelerometer",
    "superClasses": [
      "Sensor"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "kicad_refdes_prefix",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "kicad_footprint",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "kicad_part",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "kicad_value",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "kicad_datasheet",
        "type": "str",
        "defaultValue": null
      },
      {
        "name": "kicad_jlcpcb_part",
        "type": "str",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "signal_limits",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": [
          Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          0.2,
          0.5
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": [
          0.001,
          0.01
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "TypedJumper",
    "superClasses": [
      "Testing"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "ratio",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "input_impedance",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "LeadFreeIndicator",
    "superClasses": [
      "Label"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "hold_current",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "voltage",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "assumed_input_voltage",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "first_xshut_fixed",
        "type": "bool",
        "defaultValue": false
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "DigitalFilter",
    "superClasses": [
      "Filter"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": 24
      },
      {
        "name": "tolerance",
        "type": "float",
        "defaultValue": 0.01
      },
      {
        "name": "footprint_spec",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "BrushedMotorDriver",
    "superClasses": [
      "MotorDriver"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": ""
      },
      {
        "name": "derating_coeff",
        "type": "float",
        "defaultValue": 1.0
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "sense_in_reqd",
        "type": "bool",
        "defaultValue": true
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "ProgrammableController",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "HumanInterface",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "type": "DigitalSource",
        "is_array": false,
        "hint_position": "right"
      }
    ],
    "argParams": [
      {
        "name": "pull_resistance",
        "type": "range",
        "defaultValue": [
          9900.0,
          10100.0
        ]
      },
      {
        "name": "max_rds",
        "type": "float",
        "defaultValue": 1.0
      },
      {
        "name": "frequency",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "signal_out",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": true
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "cols",
        "type": "int",
        "defaultValue": null
      },
      {
        "name": "color",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.001,
          0.01
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": false
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Microcontroller",
    "superClasses": [
      "ProgrammableController"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "capacitance",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Oled",
    "superClasses": [
      "Display"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "capacitance",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "series",
        "type": "int",
        "defaultValue": 6
      },
      {
        "name": "tolerance",
        "type": "float",
        "defaultValue": 0.05
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Er_Oled022_1_Outline",
    "superClasses": [
      "InternalSubcircuit"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": [
          0.2,
          0.5
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "voltage",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "voltage_rating_derating",
        "type": "float",
        "defaultValue": 0.5
      },
      {
        "name": "exact_capacitance",
        "type": "bool",
        "defaultValue": false
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Sensor",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
  },
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Er_Oled_096_1c_Outline",
    "superClasses": [
      "InternalSubcircuit"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
        "defaultValue": ""
      },
      {
        "name": "set_basic_part",
        "type": "bool",
        "defaultValue": false
      },
      {
        "name": "footprint",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "manufacturer",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "part_number",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "value",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "output_voltage",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "frequency",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "output_current",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "current_limits",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "inductor_current_ripple",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "input_voltage_ripple",
        "type": "float",
        "defaultValue": null
      },
      {
        "name": "output_voltage_ripple",
        "type": "float",
        "defaultValue": null
      },
      {
        "name": "efficiency",
        "type": "range",
        "defaultValue": [
          0.9,
          1.0
        ]
      },
      {
        "name": "dutycycle_limit",
        "type": "range",
        "defaultValue": [
          0.1,
          0.9
        ]
      },
      {
        "name": "inductor_scale",
        "type": "float",
        "defaultValue": 1.0
      }
    ],
    "is_abstract": false
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
        "defaultValue": ""
      },
      {
        "name": "manufacturer",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "part_number",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "value",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": [
          16.0,
          24.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "capacitance",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Fpga",
    "superClasses": [
      "ProgrammableController"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": true
  },
  {
    "name": "",
    "type": "TypedTestPoint",
    "superClasses": [
      "Testing"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "exact_capacitance",
        "type": "bool",
        "defaultValue": false
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "JlcToolingHole",
    "superClasses": [
      "Mechanical"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "RealtimeClock",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "drain_current",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "gate_voltage",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "rds_on",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "gate_charge",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "power",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "channel",
        "type": "str",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Connector",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "AnalogToDigital",
    "superClasses": [
      "Interface"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": true
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "PortAdapter",
    "superClasses": [
      "InternalBlock"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "InternalSubcircuit",
    "superClasses": [
      "InternalBlock"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": [
          0.2,
          0.5
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": false
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "fixed_resistance",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Radiofrequency",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "IoControllerWifi",
    "superClasses": [
      "BaseIoController"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
  },
  {
    "name": "",
    "type": "MicroSdSocket",
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
      }
    ],
    "argParams": [],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "DiscreteComponent",
    "superClasses": [
      "InternalSubcircuit"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
        "name": "name",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "frequency",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "inductance",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "in_capacitance",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "out_capacitance",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "resistance",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "diode_voltage_drop",
        "type": "range",
        "defaultValue": [
          0.0,
          0.5
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Freenove_Esp32_Wrover",
    "superClasses": [
      "IoControllerUsbOut",
      "IoControllerPowerOut",
      "IoControllerSpiPeripheral",
      "IoControllerI2cTarget",
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "voltage_drop",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "reverse_recovery_time",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "color",
        "type": "str",
        "defaultValue": ""
      },
      {
        "name": "current_draw",
        "type": "range",
        "defaultValue": [
          0.001,
          0.01
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": [
          0.2,
          0.5
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": [
          0.0,
          0.0
        ]
      },
      {
        "name": "hf_impedance",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      },
      {
        "name": "dc_resistance",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "ncols",
        "type": "int",
        "defaultValue": null
      },
      {
        "name": "voltage_drop",
        "type": "range",
        "defaultValue": [
          0.0,
          0.7
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Esp32s3_Base",
    "superClasses": [
      "IoControllerSpiPeripheral",
      "IoControllerI2cTarget",
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
    "is_abstract": true
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
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": [
          0.2,
          0.5
        ]
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": [
          0.2,
          0.5
        ]
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "impedance",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
  },
  {
    "name": "",
    "type": "DummyDevice",
    "superClasses": [
      "InternalBlock"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
        "name": "name",
        "type": "str",
        "defaultValue": ""
      }
    ],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      },
      {
        "name": "cutoff_freq",
        "type": "range",
        "defaultValue": null
      },
      {
        "name": "voltage",
        "type": "range",
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "frequency",
        "type": "range",
        "defaultValue": [
          -Infinity,
          Infinity
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": ""
      }
    ],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": true
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
    "is_abstract": true
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
        "defaultValue": null
      },
      {
        "name": "current",
        "type": "range",
        "defaultValue": [
          0.0,
          0.0
        ]
      }
    ],
    "is_abstract": false
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
        "defaultValue": null
      }
    ],
    "is_abstract": false
  },
  {
    "name": "",
    "type": "Analog",
    "superClasses": [],
    "ports": [],
    "argParams": [],
    "is_abstract": true
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
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
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
        "defaultValue": 0
      }
    ],
    "is_abstract": true
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
    "is_abstract": true
  },
  {
    "name": "",
    "type": "Outline_Pn1332",
    "superClasses": [
      "Mechanical"
    ],
    "ports": [],
    "argParams": [],
    "is_abstract": false
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
    "is_abstract": false
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
    "is_abstract": false
  }
]