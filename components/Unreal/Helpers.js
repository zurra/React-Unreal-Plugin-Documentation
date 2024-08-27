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


    if(typeof dataTypePath === 'undefined')
    {
        console.log("FUCKS")
    }

    let foundObject = dataTypePath.find(data => data.name === objectName);
    let isProjectType = !!foundObject;

    if (!foundObject) {
        foundObject = Unreal_DataTypes.DataTypes.find(data => data.datatype === objectName);
        isProjectType = false;
    }

    return {isProjectType, foundObject};

}

export default {
    FindObjectByDataTypeAndName
};