const Properties = [
{
	"className": "RetroDebugSubSystem",
	"properties": [
		{
			"name": "OnRetroDebugStateChanged",
			"dataType": "delegate",
			"containerType": "single",
			"object": "FOnRetroDebugStateChanged",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "bIsDebugMenuOpen",
			"dataType": "uint8",
			"containerType": "single",
			"object": "uint8",
			"description": "Is Debug Menu Open? Can be used for ex. to disable character input.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "bIsConsoleActive",
			"dataType": "uint8",
			"containerType": "single",
			"object": "uint8",
			"description": "Is Console Input active? Used to prevent input. Used to disable RetroDebugWindow input",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "DebugWindowWidget",
			"dataType": "TWeakObjectPtr<UURetroDebugWindowWidget>",
			"containerType": "single",
			"object": "TWeakObjectPtr<UURetroDebugWindowWidget>",
			"description": "Created RetroDebugWindow Widget object",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "DebugMiniWindowWidget",
			"dataType": "TWeakObjectPtr<UURetroDebugMiniWindowWidget>",
			"containerType": "single",
			"object": "TWeakObjectPtr<UURetroDebugMiniWindowWidget>",
			"description": "Created RetroDebugMiniWindow Widget object",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "ConsoleEntries",
			"dataType": "FName:class",
			"containerType": "TMap",
			"object": "FName:URetroDebugObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate"
			]
		},
		{
			"name": "PersistingEntries",
			"dataType": "FName:class",
			"containerType": "TMap",
			"object": "FName:URetroDebugObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate"
			]
		},
		{
			"name": "InputComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "UInputComponent*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate"
			]
		},
		{
			"name": "PlayerController",
			"dataType": "class",
			"containerType": "single",
			"object": "APlayerController*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate"
			]
		}
	]
},
] 
export default { 
	Properties, 
	}
