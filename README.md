# React-Unreal-Plugin-Documentation
JSON data to beautiful documentation utilizing react and css.


# ReactUnreal Docs

ReactUnreal Docs is a powerful tool that transforms JSON data into beautiful documentation, leveraging the flexibility and interactivity of React components and CSS styling. With ReactUnreal Docs, you can effortlessly create and customize documentation for your Unreal Engine projects.

## Features

- **JSON to Documentation**: Convert JSON data into well-structured and visually appealing documentation.
- **React Components**: Utilize React components to create dynamic and interactive documentation pages.
- **Custom Styling**: Customize the look and feel of your documentation with CSS styling.

## Usage

1. Install ReactUnreal Docs package.
2. Import the necessary components into your project.
3. Pass your JSON data to ReactUnreal Docs components to generate documentation.


```javascript
// Example usage
import Property from '../Plugins/Unreal/Inspector/Property';
import RenderNodes from '../Plugins/Unreal/Plugins/Unreal/BP/BP';
import LXR_Nodes from '../Plugins/Unreal/Plugins/Unreal/LXR/LXR_Nodes';
import LXR_Properties from '../Plugins/UnrealPlugins/Unreal/LXR/LXR_Properties';
import LXR_DataTypes from '../Plugins/UnrealPlugins/Unreal/LXR/LXR_DataTypes';


<Property className="Detection Component" properties={LXR_Properties} dataTypes={LXR_DataTypes}/>
<RenderNodes className="Detection Component" nodes={LXR_Nodes} dataTypes={LXR_DataTypes}/>
};


```

### Example
#### Node Render

With JSON data: 
```javascript
LXR_Nodes:
const ClassNodes = [
  {
    className: "Detection Component",
    classNodes: [
      {
        category: "Detection",
        categoryNodes:
          [
            "Get Combined LXR Intensity",
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
            "On Light State Changed",
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
]

const Nodes = [
  {
    functionTypes: ["pure"],
    title: "Get Combined LXR Intensity",
    comments: ["Combined LXR Intensity is light intensity from all targets combined to one value."],
    example: "https://blueprintue.com/render/k1n8dpyc/",
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
    functionTypes: ["delegate"],
    title: "On Light State Changed",
    comments: ["Blueprint Assignable event","Broadcasts when Source Component state changes."],
    example: "",
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
];

export default {
  Nodes, ClassNodes
};

```

```javascript
LXR_DataTypes:

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

```
output of
```javascript
<RenderNodes className="Detection Component" nodes={LXR_Nodes} dataTypes={LXR_DataTypes}/>
<RenderNodes className="Memory Component" nodes={LXR_Nodes} dataTypes={LXR_DataTypes}/>
<RenderNodes className="Query LXR Task" nodes={LXR_Nodes} dataTypes={LXR_DataTypes}/>
```

Will look like this:

## License

ReactUnreal Docs is released under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you'd like to contribute to ReactUnreal Docs, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## Feedback and Support

If you have any questions, feedback, or need support, feel free to [open an issue](https://github.com/your-username/react-unreal-docs/issues) or [reach out to us](mailto:your-email@example.com).

---

Feel free to customize the sections and content based on your project's specific features and requirements. Let me know if you need further assistance or if there's anything else you'd like to add!
