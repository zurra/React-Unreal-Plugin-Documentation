import React from 'react';
import Unreal_DataTypes from './Unreal_DataTypes';

function GetInputAsString({input})
{

}

function FindObjectByDataTypeAndName({ dataType, objectName, projectDataTypes }) {

    let dataTypePath;
    switch (dataType) {
        case 'enum':
            dataTypePath = projectDataTypes.Enums;
            break;
        case "struct":
            dataTypePath = projectDataTypes.Structs;
            break;
        case "delegate":
            dataTypePath = projectDataTypes.Delegates;
            break;
    }


    let foundObject = dataTypePath.find(data => data.name === objectName);
    if (!foundObject) {
        foundObject = Unreal_DataTypes.DataTypes.find(data => data.name === objectName);

    }

    // console.log("found", objectName, foundObject)

    return foundObject;

}

export default {
    FindObjectByDataTypeAndName
};