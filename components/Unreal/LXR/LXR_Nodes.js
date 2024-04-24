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
    title: 'Unregister Light',
    comments: ["Removes light source from LXR"],
    inputs: [
      {
        name: "Target",
        dataTypes: "actor",
        containerType: "single",
        comments: ["LXRSubsystem Object Reference"],
        default: "{}"
      },
      {
        name: "Light Source",
        dataTypes: "Actor",
        containerType: "single",
        comments: ["Actor Object Reference."],
        default: "{}"
      },
    ],
    outputs: [
      {
        name: "On Query LXR Done",
        dataTypes: "delegate",
        containerType: "single",
        object: "OnQueryLXRDone",
        comments: ["Executes when query is Done"],
      },
    ],
  },
  {
    functionTypes: ["nonpure"],
    title: 'Register Light',
    comments: ["Registers new light source for LXR"],
    inputs: [
      {
        name: "Target",
        dataTypes: "actor",
        containerType: "single",
        comments: ["LXRSubsystem Object Reference"],
        default: "{}"
      },
      {
        name: "Light Source",
        dataTypes: "Actor",
        containerType: "single",
        comments: ["Actor Object Reference."],
        default: "{}"
      },
    ],
    outputs: [
      {
        name: "On Query LXR Done",
        dataTypes: "delegate",
        containerType: "single",
        object: "OnQueryLXRDone",
        comments: ["Executes when query is Done"],
      },
    ],
  },
  {
    functionTypes: ["nonpure", "latent"],
    title: 'Query Locations LXR Async',
    comments: ["Query any world location(s) for LXR.", "This is async multithreaded function."],
    inputs: [
      {
        name: "Points",
        dataTypes: "Vector",
        containerType: "Array",
        comments: ["Points to Query LXR"],
        default: "{}"
      },
      {
        name: "Lights",
        dataTypes: "Actor",
        containerType: "Array",
        comments: ["Relevant Lights for this query.",
          "Can be empty, then LXRSubsystem will fetch automatically relevant lights for this query."
        ],
        default: "{}"
      },
    ],
    outputs: [
      {
        name: "On Query LXR Done",
        dataTypes: "delegate",
        containerType: "single",
        object: "OnQueryLXRDone",
        comments: ["Executes when query is Done"],
      },
    ],
  },
  {
    functionTypes: ["nonpure"],
    title: 'Query Locations LXR',
    comments: ["Query any world location(s) for LXR.",
      "Check Multithreaded version <a href=/docs/LXR/Classes/Tasks/QueryLXRAsyncTask>here</a>"],

    inputs: [
      {
        name: "Points",
        dataTypes: "Vector",
        containerType: "set",
        comments: ["Points to Query LXR"],
        default: "{}"
      },
      {
        name: "Lights",
        dataTypes: ["Actor"],
        containerType: "Array",
        comments: ["Relevant Lights for this query.",
          "Can be empty, then LXRSubsystem will fetch automatically relevant lights for this query."
        ],
        default: "{}"
      },
      {
        name: "Query LXR Debug Options",
        dataTypes: "struct",
        containerType: "single",
        comments: ["Debug Options",
          "Optional."
        ],
        default: "{}"
      },
    ],
    outputs: [
      {
        name: "Targets LXR",
        dataTypes: "struct",
        containerType: "single",
        comments: ["fa"]
      },
      {
        name: "Passed Data",
        dataTypes: "struct",
        containerType: "set",
        comments: ["pesu"]
      },
    ],
  },
  {
    functionTypes: ["delegate"],
    title: "On Silhouette Spotted Actor",
    comments: [""],

    outputs:
      [
        {
          name: "Detector",
          dataTypes: "Actor",
          containerType: "object",
          comments: ["Detected Actor."],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["pure"],
    title: "Get Combined LXR Intensity",
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
          dataTypes: "float",
          containerType: "single",
          comments: ["Final combined LXR intensity from all Trace Targets."],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["pure"],
    title: "Get Combined LXR Color",
    comments: ["Combined LXR Color is light color from all targets combined to one value."],

    outputs:
      [
        {
          name: "Combined LXR Coloe",
          dataTypes: "linearcolor",
          containerType: "single",
          comments: ["Final combined LXR color from all Trace Targets."],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["pure"],
    title: "Get Relevant Trace Targets",
    comments: "",

    outputs:
      [
        {
          name: "Get Relevant Trace Targets",
          dataTypes: "vector",
          containerType: "array",
          comments: ["Get Relevant Trace Targets."],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["delegate"],
    title: "On Light State Changed",
    comments: ["Blueprint Assignable event", "Broadcasts when Source Component state changes.",],

    outputs:
      [
        {
          name: "Light Source Component",
          dataTypes: "component",
          containerType: "single",
          comments: ["State Changed Source Component"],
          default: "{}"
        },
        {
          name: "Old Light State",
          dataTypes: "enum",
          object: "LightState",
          comments: ["Old State of Source Component"],
          default: "{}"
        },
        {
          name: "New Light State",
          dataTypes: "enum",
          containerType: "single",
          object: "Light State",
          comments: ["New State of Source Component"],
          default: "{}"
        }
      ]
  },
  {
    functionTypes: ["delegate"],
    title: "On Light Component State Changed",
    comments: ["Blueprint Assignable event", "Broadcasts when any Light Component state changes."],

    outputs:
      [
        {
          name: "Light Source Component",
          dataTypes: "component",
          containerType: "single",
          comments: ["State Changed Source Component"],
          default: "{}"
        },
        {
          name: "Light Component",
          dataTypes: "component",
          containerType: "single",
          comments: ["State Changed Light Component"],
          default: "{}"
        },
        {
          name: "Old Light State",
          dataTypes: "enum",
          object: "LightState",
          comments: ["Old State of Light Component"],
          default: "{}"
        },
        {
          name: "New Light State",
          dataTypes: "enum",
          containerType: "single",
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

