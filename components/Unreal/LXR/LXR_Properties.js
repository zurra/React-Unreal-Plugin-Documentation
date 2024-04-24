const ClassProperties = [
  {
    className: "Detection Component",
    classProperties: [
      {
        category: "Relevancy",
        image: "/lxr/relevancy2.png",
        onlyInPropertyImage: "false",
        categoryProperties:
          [
            ["Relevancy Check Quality"],
            "Relevancy Check Type",
            "Relevancy Light Batch Count",
            "Relevancy Target Type",
            "Passed Targets Required",
          ],
        subCategories:
          [
            {
              category: "Quality",
              onlyInPropertyImage: "true",
              categoryProperties:
                [
                  "Relevancy Smart Distance Min",
                  "Relevancy Smart Distance Max",
                  "Relevancy Smart Check Rate Divider",
                  "Relevancy Check Rate",
                  "Relevancy Octree Check Bounds Size",
                ],
                subCategories:
                [
                  {
                    category: "Test",
                    onlyInPropertyImage: "true",
                    categoryProperties:
                      [
                        "Relevancy Smart Distance Min",
                      ],
                  },        
                ]
            },
            {
              category: "Test2",
              onlyInPropertyImage: "false",
              categoryProperties:
                [
                  "Relevancy Check Rate"
                ],
            },  
          ]
      },
      {
        category: "Relevant",
        image: "/lxr/relevant.png",
        categoryProperties:
          [
            "Relevant Check Quality",
            "Relevant Check Type",
            "Relevant Target Type",
            "Relevant Light Batch Count",
            "Trace Channel",
            "Traces Required",
            "Max Consecutive Fails",
          ],
      },
      {
        category: "Miscellaneous",
        image: "/lxr/shared.png",
        categoryProperties:
          [
            "Socket Preset",
            "Target Sockets",
            "Target Vectors",
            "Add to Source when Detected",
            "Directional Light Trace Distance",
          ]
      },
      {
        category: "Debug",
        image: "/lxr/detection-debug.png",
        categoryProperties:
          [
            "Draw Debug",
            "Print Debug",
            "Debug Relevant and Passed",
            "Debug Octre Lighst",
            "Debug Draw Time",
            "Debug Vector Array"
          ]
      }
    ]
  },
  {
    className: "Source Component",
    classProperties: [
      {
        category: "Source",
        image: "/lxr/source/source.png",
        categoryProperties:
          [
            "Disable",
            "Always Relevant",
            "Add Detected",
            "Attenuation Multiplier to be Relevant",
            "LXRMultiplier",
            "LXRColor Multiplier",
            "LXRSense Multiplier",
            "LXRSilhouette Multiplier",
            "Light LXRMultipliers",
            "Light LXRColor Multipliers",
            "Excluded Lights",
            "Is Enabled Method to Use",
            "Get Source Actor State Method to Use",
            "Get Light Component State Method to Use",
            "Is Light Component Enabled Method to Use",
            "Get My Light Components Method To Use",
            "Ignore Visibility Actors Method to Use",
            "Method Object",
            "Ignore Visibility Actors"
          ]
      },
      {
        category: "Memory",
        image: "/lxr/source/memory.png",
        categoryProperties:
          [
            "Is Memorizable",
            "Broadcast State Changes"
          ]
      },
      {
        category: "Sense",
        image: "/lxr/source/sense.png",
        categoryProperties:
          [
            "Enable Light Sense",
          ]
      },

      {
        category: "Debug",
        image: "/lxr/source/debug.png",
        categoryProperties:
          [
            "Draw Debug",
            "Solo"
          ]
      },
    ]
  },
  {
    className: "Memory Component",
    classProperties: [
      {
        category: "Memory",
        image: "/lxr/memory-details.png",
        categoryProperties:
          [
            "Memory Check Class",
          ]
      },
      {
        category: "Debug",
        image: "/lxr/memory-details-debug.png",
        categoryProperties:
          [
            "Draw Debug",
            "Print Debug",
          ]
      }
    ]
  },
  {
    className: "Sense Component",
    classProperties: [
      {
        category: "Sense",
        image: "/lxr/sense/sense.png",
        categoryProperties:
          [
            "Sense Trace Transform",
            "Sense Calculation Type",
            "Sense Check Quality",
            "Check Rate",
            "Passed Targets Required ",
            "Trace Target Batch Count",
            "Trace Channel",
            "Method Object"
          ]
      },
      {
        category: "Debug",
        image: "/lxr/sense/debug.png",
        categoryProperties:
          [
            "Draw Debug",
            "Debug Options"
          ]
      },
    ]
  },
  {
    className: "Silhouette Component",
    classProperties: [
      {
        category: "Silhouette",
        image: "/lxr/silhouette/silhouette.png",
        categoryProperties:
          [
            "Silhouette Check Quality",
            "Passed Targets Required ",
            "Silhouette Calculation Type",
            "Octree Check Bounds Size",
            "Trace Target Batch Count",
            "Trace Transform",
            "Method Object"
          ]
      },
      {
        category: "Debug",
        image: "/lxr/silhouette/debug.png",
        categoryProperties:
          [
            "Print Debug",
            "Draw Debug",
            "Debug Options"
          ]
      },
    ]
  },
  {
    className: "Indirect Detection Component",
    classProperties: [
      {
        category: "Indirect",
        image: "/lxr/indirect/details.png",
        categoryProperties:
          [
            "Capture type to use.",
            "Capture Rate",
            "Render Texture Size",
            "Indirect Mesh",
            "Top RT",
            "Bot RT",
          ]
      },
    ]
  }
];

const Properties = [
  {
    // Detection Component
    // ------------------
    name: "Relevancy Check Type",
    dataType: "enum",
    object: "ERelevancyCheckRate",
    description: "Method to use for checking light relevancy.",
    defaultValue: "Smart",
    comments: "There is three different methods for relevancy detection. Smart, Fixed and Octree ",
    info: [
      {
        infoName: "Smart",
        description: ["Light sources gets categorized by distance in either Far, Mid or Near categories.", "Categorizing uses ULXRDetectionComponent properties RelevancySmartDistanceMin and RelevancySmartDistanceMax."],
        infoType: "property",
        relevantProperties: [
          "Relevancy Smart Distance Min",
          "Relevancy Smart Distance Max",
          "Relevancy Smart Check Rate Divider",
        ]
      },
      {
        infoName: "Fixed",
        description: "Check all lights known lights for relevancy defined by RelevancyCheckRate property.",
        infoType: "property",
        relevantProperties: [
          "Relevancy Check Rate"
        ]
      },
      {
        infoName: "Octree",
        description: "Use octree to iterate nearby lights for relevancy defined by RelevancyCheckRate property.",
        infoType: "property",
        relevantProperties: [
          "Relevancy Check Rate", "Relevancy Octree Check Bounds Size"
        ]
      }
    ]
  },
  {
    name: "Relevancy Smart Distance Min",
    dataType: "int",
    description: "Min distance after which check rate will be reduced.",
    defaultValue: "1000",
  },
  {
    name: "Relevancy Smart Distance Max",
    dataType: "int",
    description: "Max distance after which check rate will be greatly reduced.",
    defaultValue: "2500",
  },
  {
    name: "Relevancy Smart Check Rate Divider",
    dataType: "float",
    description: "Divider for Smart check rate.",
    comments: [
      "Near: 5/RelevancySmartCheckRateDivider in second",
      "Mid: 2/RelevancySmartCheckRateDivider twice in second.",
      "Far: 1/RelevancySmartCheckRateDivider every second."
    ],
    defaultValue: "1",
  },
  {
    name: "Relevancy Check Rate",
    dataType: "float",
    description: "Rate for checking for light relevancy.",
    defaultValue: "0.1",
  },
  {
    name: "Relevancy Octree Check Bounds Size",
    dataType: "float",
    description: "Bounds size to check for near light sources when octree is enabled.",
    defaultValue: "2500",
  },
  {
    name: "Relevancy Target Type",
    dataType: "enum",
    object: "Trace Target",
    description: "Target type to use for relevancy detection.",
    defaultValue: "ActorLocation",
    comments: "",
    info: [
      {
        object: "Trace Target",
        infoType: "enum",
      },
    ]
  },
  {
    name: "Relevancy Light Batch Count",
    dataType: "int",
    description: "How many lights to iterate per check.",
    defaultValue: "100",
  },
  {
    name: "Passed Targets Required",
    dataType: "float",
    description: "Percentage (0 to 1) of how many targets needs to pass relevancy check for light to be relevant.",
    defaultValue: "1",
  },
  {
    name: "Add to Source when Detected",
    dataType: "bool",
    description: "This actor can be added to source component DetectedActors list.",
    defaultValue: "false",
  },
  {
    name: "Socket Preset",
    dataType: "enum",
    object: "Socket Preset",
    description: "What type of sockets to use.",
    defaultValue: "UE5_Mannequin",
    info: [
      {
        object: "Socket Preset",
        infoType: "enum",
      },
    ]
  },
  {
    name: "Target Sockets",
    dataType: "Name",
    containerType: "Array",
    description: "Bones or sockets to use as detection targets ",
    defaultValue: "{}",
    comments: "Can be modified if Socket Preset is set to Custom."

  },

  {
    name: "Relevancy Check Quality",
    dataType: "enum",
    object: "Check Quality",
    description: "Quality for Relevancy Check.",
    defaultValue: "Medium",
    comments: "Custom enables editability of Relevancy|Quality group."

  },
  {
    name: "Directional Light Trace Distance",
    dataType: "float",
    description: "Max distance to check if Directional Light sees owner.",
    defaultValue: "10000",
  },
  {
    name: "Relevant Check Quality",
    dataType: "enum",
    object: "Check Quality",
    description: "Quality for Relevant Check.",
    defaultValue: "Medium",
    comments: "Custom enables editability of Relevant|Quality group."
  },
  {
    name: "Relevant Check Type",
    dataType: "enum",
    object: "Task Process Type",
    description: "Method to use for tracing checks.",
    defaultValue: "Multithread",
    info:
      [
        {
          object: "Task Process Type",
          infoType: "enum"
        }
      ]
  },
  {
    name: "Relevant Target Type",
    dataType: "enum",
    object: "Trace Target",
    description: "Target type to use for relevant detection.",
    defaultValue: "ActorLocation",
    comments: "",
    info: [
      {
        object: "Trace Target",
        infoType: "enum",
      },
    ]
  },
  {
    name: "Relevant Light Check Rate",
    dataType: "float",
    description: "Rate for checking if relevant light illuminates Actor.",
    defaultValue: "0.05",
  },
  {
    name: "Relevant Light Batch Count",
    dataType: "int",
    description: "How many relevant lights we process per check.",
    defaultValue: "50",
  },
  {
    name: "Traces Required",
    dataType: "float",
    description: "Percentage (0 to 1) of how many traces needs to be passed (not hit) to be lit.",
    defaultValue: "0.5",
  },
  {
    name: "Max Consecutive Fails",
    dataType: "float",
    description: "How many  times in row relevant check must fail to remove light from relevant list",
    defaultValue: "5",
  },
  {
    name: "Trace Channel",
    dataType: "byte ",
    object: "Collision Channel",
    description: "Trace channel to use for traces.",
    defaultValue: "Visibility",
  },
  {
    name: "Draw Debug",
    dataType: "bool",
    description: "Draw Debug shapes",
    defaultValue: "false",
    comments: "Remember to also enable Draw Debug on Source Component."
  },
  {
    name: "Print Debug",
    dataType: "bool",
    description: "Print Debug messages",
    defaultValue: "false",
    comments: ""
  },
  {
    name: "Debug Relevant and Passed",
    dataType: "bool",
    description: "Draws debug shapes for all relevant and passed lights.",
    defaultValue: "false",
  },
  {
    name: "Debug Octre Lighst",
    dataType: "bool",
    description: "Draws debug lines to all octree lights.",
    defaultValue: "false",
  },
  {
    name: "Debug Draw Time",
    dataType: "float",
    description: "Draw time for debug shapes and lines.",
    defaultValue: "0.1",
  },
  {
    name: "Debug Vector Array",
    dataType: "bool",
    description: "Draws debug shapes for Target Vectors array.",
    defaultValue: "false",
  },
  {
    name: "Solo",
    dataType: "bool",
    description: "Disables detection from all other non-solo LXR Sources",
    comments: "Useful for debugging",
    defaultValue: "false",
  },
  // ------------------
  // SourceComponent
  // ------------------

  {
    name: "Disable",
    dataType: "bool",
    description: "Disable this Source Component",
    defaultValue: "false",

  },
  {
    name: "Always Relevant",
    dataType: "bool",
    description: "SourceComponent will always be relevant for all DetectionComponents.",
    defaultValue: "false",
    comments: ""

  },
  {
    name: "Add Detected",
    dataType: "bool",
    description: "Add detected DetectionComponent to DetectedActors array",
    defaultValue: "false",
    comments: "Requires DetectionComponent to enable property bAddToSourceWhenDetected",

  },
  {
    name: "Attenuation Multiplier to be Relevant",
    dataType: "float",
    description: "Attenuation multiplier to be relevant.",
    defaultValue: "1",
    comments: "Source Component is relevant if distance to Detection Component is less than \n Attenuation * AttenuationMultiplierToBeRelevant",

  },
  {
    name: "LXRMultiplier",
    dataType: "float",
    description: "Multiplier to add to final LXR intensity.",
    defaultValue: "1",
    comments: "Added to all LightComponents unless overriden with LightLXRMultipliers variable."

  },
  {
    name: "LXRColor Multiplier",
    dataType: "float",
    description: "Multiplier to add to final LXR color.",
    defaultValue: "1",
    comments: "Added to all LightComponents unless overriden with LightLXRColorMultipliers variable."
  },
  {
    name: "LXRSense Multiplier",
    dataType: "float",
    description: "Multiplier to add to Sense LXR.",
    defaultValue: "1",

  },
  {
    name: "LXRSilhouette Multiplier",
    dataType: "float",
    description: "Multiplier to add to Silhouette LXR.",
    defaultValue: "1",

  },
  {
    name: "Light LXRMultipliers",
    dataType: "struct",
    object: "Light Source Data",
    containerType: "Array",
    description: "LXR Intensity multiplier per LightComponent.",
    defaultValue: "{}",
    comments: "Overrides LXR Multiplier for light contained in array.",

  },
  {
    name: "Light LXRColor Multipliers",
    dataType: "struct",
    object: "Light Source Data",
    containerType: "Array",
    description: "LXR Intensity multiplier per LightComponent.",
    defaultValue: "{}",
    comments: "Overrides LXR Color Multiplier for light contained in array.",

  },
  {
    name: "Excluded Lights",
    dataType: "struct",
    object: "Component Reference",
    containerType: "Array",
    description: "List of LightComponents to exclude from LightDetection.",
    defaultValue: "",
    comments: "Only used when GetMyLightComponentsMethodToUse is set to Class."

  },
  {
    name: "Is Enabled Method to Use",
    dataType: "enum",
    object: "Method To Use",
    description: "Which implementation to use for checking is the SourceComponent enabled",
    defaultValue: "Class",
  },
  {
    name: "Get Source Actor State Method to Use",
    dataType: "enum",
    object: "Method To Use",
    description: "Method to use for actor light state",
    defaultValue: "Class",

  },
  {
    name: "Get Light Component State Method to Use",
    dataType: "enum",
    object: "Method To Use",
    description: "Method to use for light component state",
    defaultValue: "Class",

  },
  {
    name: "Is Light Component Enabled Method to Use",
    dataType: "enum",
    object: "Method To Use",
    description: "Method to use for is actor light enabled",
    defaultValue: "Class",

  },
  {
    name: "Get My Light Components Method To Use",
    dataType: "enum",
    object: "Method To Use",
    description: "Method to use for light component state",
    defaultValue: "Class",

  },
  {
    name: "Ignore Visibility Actors Method to Use",
    dataType: "enum",
    object: "Method To Use",
    description: "Method to use for ignore visibility actors.",
    defaultValue: "Class",

  },

  {
    name: "Method Object",
    dataType: "UObject",
    object: "LXRMethodObject",
    description: "Assign the LXRMethodObject and implement method to use.",
    defaultValue: "NULL",
    comments: ""
  },


  {
    name: "Ignore Visibility Actors",
    dataType: "Actor",
    containerType: "Array",
    description: "List of actors to ignore when checking visibility.",
    defaultValue: "{}",
  },

  {
    name: "Is Memorizable",
    dataType: "bool",
    description: "Can this actor be memorized by Memory Component",
    defaultValue: "false",
  },
  {
    name: "Broadcast State Changes",
    dataType: "bool",
    description: "SourceComponent will broadcast Light State changes.",
    defaultValue: "false",
    comments: "OnLightStateChanged event can be implemented in BP or C++"
  },
  {
    name: "Enable Light Sense",
    dataType: "bool",
    description: "This actor can be sensed by  Sense Component",
    defaultValue: "false",
  },

  // ------------------
  // Memory Component
  // ------------------
  {
    name: "",
    type: "",
    description: "",
    defaultValue: "",
  },

  {
    name: "Memory Check Class",
    dataType: "enum",
    object: "Memory Check Class",
    description: "Which class memory should use to check light states.",
    defaultValue: "Detection",
    comments: ["Detection: Use DetectionComponent to toggle memory state.",
      "Sense: Use SenseComponent to toggle memory state"]
  },
  // ------------------
  // Sense Component
  // ------------------

  {
    name: "Sense Trace Transform",
    dataType: "enum",
    object: "Sense Trace Transform",
    description: "Location and Direction to use for the Sense Cone",
    defaultValue: "None",
    comments: "Default value is None. NEEDS TO BE CHANGED to something else.",
    info: [
      {
        object: "Sense Trace Transform",
        infoType: "enum",
      },
    ]
  },
  {
    name: "Socket Name",
    dataType: "Name",
    description: "Socket to use for Sense trace Location and Direction.",
    defaultValue: "-",
  },
  {
    name: "Sense Calculation Type",
    dataType: "enum",
    object: "Task Process Type",
    description: "Method to use for Sense Check",
    defaultValue: "Multithread",
  },
  {
    name: "Sense Check Quality",
    dataType: "enum",
    object: "Check Quality",
    description: "Quality to use for Sense Check",
    defaultValue: "Medium",
    info: [
      {
        infoName: "Sense Quality",
        description: "Quality Params can be modified if Sense Quality is set to Custom",
        infoType: "struct",
        object: "Cone Trace Task Params",
      }
    ]
  },
  {
    name: "Check Rate",
    dataType: "float",
    description: "Check interval for Sense Check",
    defaultValue: "0.1",
  },
  {
    name: "Trace Target Batch Count",
    dataType: "int",
    description: "How many trace targets to iterate per check.",
    defaultValue: "30",
  },
  {
    name: "Passed Targets Required ",
    dataType: "int",
    description: "How many targets needs to pass for light to be sensed.",
    defaultValue: "5",
  },
  {
    name: "Sense Trace Task Params Options",
    dataType: "struct",
    object: "Cone Trace Task Params",
    description: "Parameters to use for the Sense Cone Trace shape.",
    defaultValue: "{}",
    comments: "Can be modified if SenseCheck Quality is set to Custom",
    info: [
      {
        infoName: "Sense Trace Task Params",
        infoType: "struct",
        object: "Cone Trace Task Params",

      }
    ]
  },


  // ------------------
  // Silhouette Component
  // ------------------

  {
    name: "Silhouette Check Quality",
    dataType: "enum",
    object: "Check Quality",
    description: "Quality to use for Silhouette Check",
    defaultValue: "Medium",
    info: [
      {
        infoName: "Silhouette Quality",
        infoType: "struct",
        object: "Silhouette Trace Task Params"
      }
    ]
  },


  {
    name: "Silhouette Calculation Type",
    dataType: "enum",
    object: "Task Process Type",
    description: "Method to use for Silhouette Check",
    defaultValue: "Multithread",
  },
  {
    name: "Octree Check Bounds Size",
    dataType: "int",
    description: "Bounds size to check for near light sources.",
    defaultValue: "2000",
  },

  // ------------------
  // Indirect Detection Component
  // ------------------

  {
    name: "Capture type to use.",
    dataType: "enum",
    object: "Capture Type",
    description: "Capture type to use.",
    defaultValue: "Single",
    info: [
      {
        object: "Capture Type",
        infoType: "enum",
      },
    ]
  },
  {
    name: "Capture Rate",
    dataType: "float",
    description: "Capture rate of the Scene Capture Components.",
    defaultValue: "0.05",
    comments: [
      "Most Accurate < 0.05.",
      "Accurate enough 0.075. ",
      "Might not be accurate enough 0.1.",
    ]
  },
  {
    name: "Render Texture Size",
    dataType: "int",
    description: "Size of the RenderTextures",
    defaultValue: "128",
  },
  {
    name: "Indirect Mesh",
    dataType: "Static Mesh asset",
    description: "Override default IndirectMesh",
    defaultValue: "/LXR/Assets/LXRIndirectMesh",
  },
  {
    name: "Top RT",
    dataType: "Render Texture Target 2D",
    description: "Override default Top Render Texture",
    defaultValue: "RTF_RGBA8",
  },
  {
    name: "Bot RT",
    dataType: "Render Texture Target 2D",
    description: "Override default Bot Render Texture",
    defaultValue: "RTF_RGBA8",
  },



  // ------------------
  // debug struct
  // ------------------
  {
    name: "Debug Options",
    dataType: "struct",
    object: "Query LXR Debug Options",
    description: "Debug Options for LXR Query.",
    defaultValue: "{}",
    comments: "Debug Options offers easy way to Debug specific check.",
    info: [
      {
        infoName: "Relevancy",
        description: "Debug Options for the Relevancy Check.",
        infoType: "struct",
        object: "Query LXR Debug Options",
        relevantProperties: [
          "Debug Relevancy",
          "Debug Relevancy DrawTime",
        ]
      },
      {
        infoName: "Relevant",
        description: "Debug Options for the Relevant Check.",
        infoType: "struct",
        object: "Query LXR Debug Options",
        relevantProperties: [

          "Debug Visibility",
          "Debug Visibility DrawTime",
        ]
      },
      {
        infoName: "LXR",
        description: "Debug the final LXR.",
        infoType: "struct",
        object: "Query LXR Debug Options",
        relevantProperties: [
          "Debug LXR",
          "Debug LXR Only Passed",
          "Debug LXR DrawTime",
        ]
      }
    ]
  },


]

export default {
  Properties, ClassProperties
};


