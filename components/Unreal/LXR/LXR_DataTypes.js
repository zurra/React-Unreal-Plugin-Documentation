const Delegates = [
  {
    name: "On Query LXR Done",
    description: ["Delegate which provides query results."],
    parameters: [
      {
        name: "Targets LXR",
        dataType: "struct",
        containerType: "single",
        description: "",
      },
      {
        name: "Passed Data",
        dataType: "struct",
        containerType: "set",
        description: "",
      },
    ]
  }
];

const Structs = [
  {
    name: "Sense Trace Task Params Options",
    description: "Parameters to use for the Sense Cone Trace shape.",
    data: [
      {
        name: "Cone Traces",
        dataType: "int",
        description: "Amount of edges in cone.",
        defaultValue: "6",
      },
      {
        name: "Cone Angle",
        dataType: "int",
        description: "Field of view angle of cone.",
        defaultValue: "20",
      },
      {
        name: "Distance Per Segment",
        dataType: "int",
        description: "Distance per trace group in cone edge.",
        defaultValue: "250",
      },
      {
        name: "Sense Distance",
        dataType: "int",
        description: "Distance of the Cone",
        defaultValue: "1500",
      },
      {
        name: "Min Distance Per Target",
        dataType: "int",
        description: "Min between generated trace targets.",
        defaultValue: "50",
      },
    ]
  },
  {
    name: "Targets LXR",
    description: ["Contains the Final LXR for each Trace Target"],
    data: [
      {
      }
    ]
  },
  {
    name: "Passed Data",
    description: ["Contains lights, light components and targets which passed the checks.",
      "Data not visible to Blueprintable"],
    data: [
      {
      }
    ]
  },
  {
    name: "Cone Trace Task Params",
    description: "Parameters to use for the Cone Trace task.",
    data: [
      {
        name: "Cone Traces",
        dataType: "int",
        description: "Amount of edges in cone.",
        defaultValue: "6",
      },
      {
        name: "Cone Angle",
        dataType: "int",
        description: "Field of view angle of cone.",
        defaultValue: "20",
      },
      {
        name: "Distance Per Segment",
        dataType: "int",
        description: "Distance per trace group in cone edge.",
        defaultValue: "250",
      },
      {
        name: "Sense Distance",
        dataType: "int",
        description: "Distance of the Cone",
        defaultValue: "1500",
      },
      {
        name: "Min Distance Per Target",
        dataType: "int",
        description: "Min between generated trace targets.",
        defaultValue: "50",
      },
    ]
  },
  {
    name: "Silhouette Trace Task Params",
    description: "Parameters to use for the Silhouette Task.",
    data: [
      {
        name: "Silhouette Edges",
        dataType: "int",
        description: "Amount of edges in silhouette cylinder.",
        defaultValue: "6",
      },
      {
        name: "Silhouette Distance",
        dataType: "int",
        description: "Distance of Silhouette Trace .",
        defaultValue: "2000",
      },
      {
        name: "Distance Per Segment ",
        dataType: "int",
        description: "Distance per trace group in silhouette trace.",
        defaultValue: "300",
      },
    ]
  },
  {
    name: "Query LXR Debug Options",
    description: "Debug Options for LXR Query.",
    data: [
      {
        name: "Debug Relevancy",
        dataType: "bool",
        description: "Draw Debug Shapes for Relevancy check",
        defaultValue: "false",
      },
      {
        name: "Debug Visibility",
        dataType: "bool",
        description: "Draw Debug Shapes for Visibility (relevant) check",
        defaultValue: "false",
      },
      {
        name: "Debug LXR",
        dataType: "bool",
        description: "Draw Debug Shapes for Final LXR",
        defaultValue: "false",
      },
      {
        name: "Debug LXR Only Passed",
        dataType: "bool",
        description: "Only draw LXR for Passed points",
        defaultValue: "false",
      },
      {
        name: "Debug Relevancy DrawTime",
        dataType: "float",
        description: "Draw time for Relevancy Debug",
        defaultValue: "1.0",
      },
      {
        name: "Debug Visibility DrawTime",
        dataType: "float",
        description: "Draw time for Relevant Debug",
        defaultValue: "1.0",
      },
      {
        name: "Debug LXR DrawTime",
        dataType: "float",
        description: "Draw time for Final LXR Debug",
        defaultValue: "1.0",
      }
    ]
  },
];

const Enums = [
  {
    name: "Light State",
    description: "State of Light.",
    data: [
      {
        name: "Enabled",
        description: "Enabled State",
      },
      {
        name: "Disabled",
        description: "Disabled State",
      },
    ]
  },

  {
    name: "Sense Trace Transform",
    description: "Location and Direction to use for the Sense Cone",
    data: [
      {
        name: "Actor",
        description: "Actor Location and Actor Forward.",
      },
      {
        name: "ActorEyesViewPoint",
        description: "Use Pawn GetActorEyesViewPoint method, can be overriden in C++.",
      },
      {
        name: "Socket",
        description: "Use socket transform.",
      },
      {
        name: "Custom",
        description: "Implement ILXRSense GetLightSenseTraceLocationAndDirection.",
      },
      {
        name: "Method Object",
        description: "Use the LXRMethodObject implementable method.",
      }
    ]
  },
  {
    name: "Capture Type",
    description: "Capture dataType to use.",
    data: [
      {
        name: "Single",
        description: "Experimental single capture component, more performant.",
      },
      {
        name: "Dual",
        description: "Standard dual capture component, more accurate, not as performant.",
      },
    ]
  },
  {
    name: "Socket Preset",
    description: "Use preset or custom sockets.",
    data: [
      {
        name: "UE4_Mannequin",
        description: "Unreal Engine 4 Mannequin sockets.",
      },
      {
        name: "UE5_Mannequin",
        description: "Unreal Engine 5 Mannequin sockets.",
      },
      {
        name: "Custom",
        description: "Custom sockets.",
      },
    ]
  },
  {
    name: "Trace Target",
    description: "Target type to use",
    data: [
      {
        name: "Actor Location",
        description: "Owner Location",
      },
      {
        name: "Sockets",
        description: "Bones or sockets to use from skeletal mesh.",
      },
      {
        name: "VectorArray",
        infoType: "short",
        description: "TargetVectors property to use as targets.",
      },
      {
        name: "ActorBounds",
        description: "six vectors from actor bounds. (Approximate of actor size)",
      }
    ]
  },

  {
    name: "Task Process Type",
    description: "Process dataType, either sync or multithread.",
    data: [
      {
        name: "Sync",
        description: "Process task on gamethread.",
      },
      {
        name: "Multithread",
        description: "Process task on separate thread.",
      },
    ]
  },
];


export default {
  Structs, Delegates, Enums
};
