const ClassNodes = [
  {
    className: "LXRFunctionLibrary",
    classNodes: [
      {
        category: "Sync",
        categoryNodes:
          [
            "Query Locations LXR"
          ]
      },
    ]
  },
  {
    className: "Query LXR Task",
    classNodes: [
      {
        category: "Multithread",
        categoryNodes:
          [
            "Query Locations LXR Async"
          ]
      },
    ]
  },
  {
    className: "Silhouette Component",
    classNodes: [
      {
        category: "Silhoutte",
        categoryNodes:
          [
            "On Silhouette Spotted Actor"
          ]
      },
    ]
  },
  {
    className: "Detection Component",
    classNodes: [
      {
        category: "Detection",
        categoryNodes:
          [
            "Get Combined LXR Intensity",
            "Get Relevant Trace Targets",
            "Get Passed Lights"
          ]
      },
    ]
  },
  {
    className: "Memory Component",
    classNodes: [
      {
        category: "Memory",
        categoryNodes:
          [
            "On Light Component State Changed",
            "On Light State Changed",
          ]
      },
    ]
  },
  {
    className: "LXRSubSystem",
    classNodes: [
      {
        category: "LXR",
        categoryNodes:
          [
            "Unregister Light",
            "Register Light",
          ]
      },
    ]
  }
]


const Nodes = [
  {
    functionTypes: ["nonpure"],
    name: 'Unregister Light',
    comments: ["Removes light source from LXR"],
    inputs: [
      {
        name: "Target",
        datatype: "actor",
        containertype: "single",
        comments: ["LXRSubsystem Object Reference"],
        default: "{}"
      },
      {
        name: "Light Source",
        datatype: "Actor",
        containertype: "single",
        comments: ["Actor Object Reference."],
        default: "{}"
      },
    ],
    outputs: [
      {
        name: "On Query LXR Done",
        datatype: "delegate",
        containertype: "single",
        object: "OnQueryLXRDone",
        comments: ["Executes when query is Done"],
      },
    ],
  },
  {
    functionTypes: ["nonpure"],
    name: 'Register Light',
    comments: ["Registers new light source for LXR"],
    inputs: [
      {
        name: "Target",
        datatype: "actor",
        containertype: "single",
        comments: ["LXRSubsystem Object Reference"],
        default: "{}"
      },
      {
        name: "Light Source",
        datatype: "Actor",
        containertype: "single",
        comments: ["Actor Object Reference."],
        default: "{}"
      },
    ],
    outputs: [
      {
        name: "On Query LXR Done",
        datatype: "delegate",
        containertype: "single",
        object: "OnQueryLXRDone",
        comments: ["Executes when query is Done"],
      },
    ],
  },
  {
    functionTypes: ["nonpure", "latent"],
    name: 'Query Locations LXR Async',
    comments: ["Query any world location(s) for LXR.", "This is async multithreaded function."],
    inputs: [
      {
        name: "Points",
        datatype: "Vector",
        containertype: "Array",
        comments: ["Points to Query LXR"],
        default: "{}"
      },
      {
        name: "Lights",
        datatype: "Actor",
        containertype: "Array",
        comments: ["Relevant Lights for this query.",
          "Can be empty, then LXRSubsystem will fetch automatically relevant lights for this query."
        ],
        default: "{}"
      },
    ],
    outputs: [
      {
        name: "On Query LXR Done",
        datatype: "delegate",
        containertype: "single",
        object: "OnQueryLXRDone",
        comments: ["Executes when query is Done"],
      },
    ],
  },
  {
    functionTypes: ["nonpure"],
    name: 'Query Locations LXR',
    comments: ["Query any world location(s) for LXR.",
      "Check Multithreaded version <a href=/docs/LXR/Classes/Tasks/QueryLXRAsyncTask>here</a>"],

    inputs: [
      {
        name: "Points",
        datatype: "Vector",
        containertype: "set",
        comments: ["Points to Query LXR"],
        default: "{}"
      },
      {
        name: "Lights",
        datatype: "Actor",
        containertype: "Array",
        comments: ["Relevant Lights for this query.",
          "Can be empty, then LXRSubsystem will fetch automatically relevant lights for this query."
        ],
        default: "{}"
      },
      {
        name: "Query LXR Debug Options",
        datatype: "struct",
        containertype: "single",
        comments: ["Debug Options",
          "Optional."
        ],
        default: "{}"
      },
    ],
    outputs: [
      {
        name: "Targets LXR",
        datatype: "struct",
        containertype: "single",
        comments: ["fa"]
      },
      {
        name: "Passed Data",
        datatype: "struct",
        containertype: "set",
        comments: ["pesu"]
      },
    ],
  },
  {
    functionTypes: ["delegate"],
    name: "On Silhouette Spotted Actor",
    comments: [""],

    outputs:
      [
        {
          name: "Detector",
          datatype: "Actor",
          containertype: "object",
          comments: ["Detected Actor."],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["pure"],
    name: "Get Combined LXR Intensity",
    comments: ["Combined LXR Intensity is light intensity from all targets combined to one value."],
    example:
    {
      url: "https://blueprintue.com/render/k1n8dpyc/",
      comments: ["Example Comment", "Multi-Line", "Comment"],
    },

    outputs:
      [
        {
          name: "Combined LXR Intensity",
          datatype: "float",
          containertype: "single",
          comments: ["Final combined LXR intensity from all Trace Targets."],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["pure"],
    name: "Get Combined LXR Color",
    comments: ["Combined LXR Color is light color from all targets combined to one value."],

    outputs:
      [
        {
          name: "Combined LXR Coloe",
          datatype: "linearcolor",
          containertype: "single",
          comments: ["Final combined LXR color from all Trace Targets."],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["pure"],
    name: "Get Relevant Trace Targets",
    comments: "",

    outputs:
      [
        {
          name: "Get Relevant Trace Targets",
          datatype: "vector",
          containertype: "array",
          comments: ["Get Relevant Trace Targets."],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["delegate"],
    name: "On Light State Changed",
    comments: ["Blueprint Assignable event", "Broadcasts when Source Component state changes.",],

    outputs:
      [
        {
          name: "Light Source Component",
          datatype: "component",
          containertype: "single",
          comments: ["State Changed Source Component"],
          default: "{}"
        },
        {
          name: "Old Light State",
          datatype: "enum",
          object: "LightState",
          comments: ["Old State of Source Component"],
          default: "{}"
        },
        {
          name: "New Light State",
          datatype: "enum",
          containertype: "single",
          object: "Light State",
          comments: ["New State of Source Component"],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["delegate"],
    name: "On Light Component State Changed",
    comments: ["Blueprint Assignable event", "Broadcasts when any Light Component state changes."],

    outputs:
      [
        {
          name: "Light Source Component",
          datatype: "component",
          containertype: "single",
          comments: ["State Changed Source Component"],
          default: "{}"
        },
        {
          name: "Light Component",
          datatype: "component",
          containertype: "single",
          comments: ["State Changed Light Component"],
          default: "{}"
        },
        {
          name: "Old Light State",
          datatype: "enum",
          object: "LightState",
          comments: ["Old State of Light Component"],
          default: "{}"
        },
        {
          name: "New Light State",
          datatype: "enum",
          containertype: "single",
          object: "Light State",
          comments: ["New State of Light Component"],
          default: "{}"
        }
      ]
  },
];

export default {
  Nodes, ClassNodes
};

