const Delegates = [
{
	"name": "OnRetroDebugStateChanged",
	"description": "On Retro Debug State Changed  Delegate Signature",
	"comments": [],
	"data": [
		{
			"name": "State",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"MulticastDelegate",
		"Public",
		"Delegate"
	]
},
];
const Structs = [
{
	"name": "FRetroDebugEntry",
	"description": "Contains all data we need for Debug Entry.",
	"comments": [],
	"data": [
		{
			"name": "Path",
			"dataType": "FName",
			"containerType": "single",
			"object": "FName",
			"description": "Defines in which path entry will be generated in DebugMenu, must be set.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "Type",
			"dataType": "enum",
			"containerType": "single",
			"object": "ERetroDebugEntryType",
			"description": "Type of this entry.",
			"comments": [
				"ERetroDebugEntryType::Path is for internal use and not meant to be used manually."
			],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "ConsoleEntry",
			"dataType": "struct",
			"containerType": "single",
			"object": "FRetroDebugConsoleEntry",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "DataValue",
			"dataType": "FString",
			"containerType": "single",
			"object": "FString",
			"description": "Actual value in widget.",
			"comments": [
				"Also Cvar value for CommandEntry."
			],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "Tooltip",
			"dataType": "FString",
			"containerType": "single",
			"object": "FString",
			"description": "Tooltip for entry.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CustomMin",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "Used for when Type is Slider, CommandSlider or CommandToggle.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CustomMax",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "Used for when Type is Slider, CommandSlider or CommandToggle.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CustomValue",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "Used for when Type is Slider, CommandSlider or TimedExecute.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "OnlyUpdateWhenOpened",
			"dataType": "uint8",
			"containerType": "single",
			"object": "uint8",
			"description": "Only update widget data when debug menu is opens.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "AddToMiniDebug",
			"dataType": "uint8",
			"containerType": "single",
			"object": "uint8",
			"description": "Adds entry to Mini Debug.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "RDExecRequiresArgument",
			"dataType": "uint8",
			"containerType": "single",
			"object": "uint8",
			"description": "Does the console entry require argument.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "UpdateInterval",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "Update interval for data.",
			"comments": [
				"Execute frequency for event."
			],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CommandType",
			"dataType": "enum",
			"containerType": "single",
			"object": "ERetroDebugCommandType",
			"description": "Type of this command entry.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_BlueprintReadOnly",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "KeyMapping",
			"dataType": "struct",
			"containerType": "single",
			"object": "FInputActionKeyMapping",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_BlueprintReadOnly",
				"CPF_NativeAccessSpecifierPublic"
			]
		}
	],
	"flags": []
},
{
	"name": "FRetroDebugCommandEntry",
	"description": "Used for constructing FRetroDebugEntry for commands.",
	"comments": [],
	"data": [
		{
			"name": "Path",
			"dataType": "FName",
			"containerType": "single",
			"object": "FName",
			"description": "Defines in which path entry will be generated, used only when Type is set to Custom",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "Command",
			"dataType": "FString",
			"containerType": "single",
			"object": "FString",
			"description": "Console command used for this entry.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "Suffix",
			"dataType": "FString",
			"containerType": "single",
			"object": "FString",
			"description": "Console command suffix.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "Tooltip",
			"dataType": "FString",
			"containerType": "single",
			"object": "FString",
			"description": "Tooltip for entry.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "Type",
			"dataType": "enum",
			"containerType": "single",
			"object": "ERetroDebugCommandType",
			"description": "Type of this command.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CustomMin",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "Used for when Type is Slider or Toggle.",
			"comments": [
				"Defines CustomMin value."
			],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CustomMax",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "Used for when Type is Slider or Toggle.",
			"comments": [
				"       Defines Custom Max value."
			],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CustomValue",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "Used for when Type is Slider or TimedExecute.",
			"comments": [
				"Defines Custom value."
			],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		}
	],
	"flags": []
},
];
const Enums = [
{
	"name": "ERetroDebugEntryType",
	"description": "Type of this entry.",
	"comments": [
		"ERetroDebugEntryType::Path is for internal use and not meant to be used manually."
	],
	"data": [
		{
			"name": "TypeToggle",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Toggle entry",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TypeButton",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Execute/Fire-and-forget entry",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TypeValue",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Inspect variable entry",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TypeSlider",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Slider entry",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "ERetroDebugCommandType",
	"description": "Type of this command.",
	"comments": [],
	"data": [
		{
			"name": "CommandTypeNone",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "CommandTypeToggle",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Toggles Command from 0 to 1",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "CommandTypeExecute",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Execute Command",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "CommandTypeSlider",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Slider Command",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "CommandTypeTimedExecute",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Timed execute command",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
];
export default { 
	Delegates,Structs,Enums 
}
