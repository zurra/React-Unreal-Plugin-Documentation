import React from 'react';
import styles from './BP.module.css';
import Unreal_DataTypes from '../Unreal_DataTypes';
import Helpers from '../Helpers';
import Tooltip from '../../Utils/tooltip';
let projectDataTypesData
let nodesData
let nodeMap = {};
let nodeTypeMap = {};

const GetPropertyDataByName = (propertyName) => {
    for (const element of classData.classPropertyCategories) {
        const foundProperty = element.categoryProperties.find(property => property.name === propertyName);
        if (foundProperty)
            return foundProperty;
    }
    return null;
}

// classData = classesData.Classes.find(s => s.className === className);
// let classProperties = classData.classPropertyCategories
// // console.log(classRootProperties);
// classProperties.forEach(item => {
//     {

function NodeRender({ className }) {


    nodeMap = {};
    nodeTypeMap = {}

    nodeTypeMap["pure"] = [];
    nodeTypeMap["nonpure"] = []
    nodeTypeMap["delegate"] = []

    const classData = nodesData.Classes.find(s => s.className === className);
    let classNodeCategories = classData.classNodeCategories
    let classProperties = classData.classPropertyCategories
    // console.log(classRootProperties);
    classProperties.forEach(item => {
        let nodeDelegateMap = [];

        item.categoryProperties.forEach(prop => {
            if (prop.dataType == "delegate") {



                let nodeDelegateData = {}
                let nodeInputs = []
                let nodeOutputs = []
                let nodeReturns = []
                nodeDelegateData.inputs = []
                nodeDelegateData.outputs = []
                nodeDelegateData.comments = []
                nodeDelegateData.name = prop.name;
                nodeDelegateData.description = prop.description

                prop.comments.forEach(comment => {
                    if (comment.includes("@return")) {
                        nodeReturns.push(comment)
                    }
                    else {
                        nodeDelegateData.comments.push()

                    }
                })

                const foundDelegate = projectDataTypesData.Delegates.find(delegate => delegate.name === prop.name);
                if (foundDelegate) {
                    console.log(foundDelegate);
                    foundDelegate.data.forEach(output => {
                        let outputPin = {};
                        outputPin.name = output.name;
                        outputPin.dataType = output.dataType;
                        outputPin.containerType = output.containerType;
                        outputPin.object = output.object;

                        nodeReturns.forEach(r => {
                            if (r.includes(output.name)) {
                                const parts = r.split(":");
                                const returnValue = parts[1].trim();
                                outputPin.description = returnValue
                            }
                        })


                        outputPin.comments = output.comments;
                        outputPin.defaultValue = output.defaultValue;
                        outputPin.metas = output.metas;
                        nodeOutputs.push(outputPin)
                    })
                }

                nodeDelegateData.outputs = nodeOutputs;

                nodeDelegateData.object = prop.object;

                nodeDelegateMap.push(nodeDelegateData)
                console.log(prop)
            }

        })

        nodeDelegateMap.forEach(delegate => {
            if (!nodeMap[item.category]) {
                nodeMap[item.category] = []; // Initialize as an empty array if it doesn't exist
            }
            nodeMap[item.category].push(delegate);
            nodeTypeMap["delegate"].push(delegate.name);

        })

    });

    classNodeCategories.forEach(item => {

        // CategoryImageMap[item.category] = item.image;
        item.categoryNodes.forEach(node => {

            if (!nodeMap[item.category]) {
                nodeMap[item.category] = []; // Initialize as an empty array if it doesn't exist
            }

            node.comments.forEach(comment => {
                if (comment.includes("Target is ")) {
                    console.log(comment)
                    const parts = comment.split("Target is ");
                    const target = parts[1].trim();
                    console.log(target);
                    node.target = target;

                }
            })

            if (node.flags.includes("BlueprintPure")) {
                nodeTypeMap["pure"].push(node.name);

            }
            else if (node.functionTypes.includes("delegate")) {
                nodeTypeMap["delegate"].push(node.name);
            }
            else {
                nodeTypeMap["nonpure"].push(node.name);
            }

            nodeMap[item.category].push(node);


        })

    });

    // ClassNodes.forEach(item => {
    //     {
    //         // CategoryImageMap[item.category] = item.image;
    //         item.functionTypes.forEach(functionType => {
    //             const foundNode = nodesData.Nodes.find(node => node.name === name);
    //             if (foundNode) {

    //                 if (!nodeMap[item.category]) {
    //                     nodeMap[item.category] = []; // Initialize as an empty array if it doesn't exist
    //                 }
    //                 nodeMap[item.category].push(foundNode);
    //             }
    //         });
    //     }
    // });

    return (
        <div>
            {nodeMap && (
                <>
                    <div className={styles.separator}>Nodes</div>
                    {Object.keys(nodeMap).map((item, index) => (
                        <div key={item} className={styles.nodeCategory}>
                            <div className={styles.nodeCategoryInnerShadowBox}>
                                <div className={styles.nodeCategoryTitle}> {item} </div>

                                {nodeMap[item].map((node, nodeIndex) => (
                                    <React.Fragment key={nodeIndex}>
                                        {nodeIndex > 0 && <div />}
                                        <div className={styles.nodeGrid}>
                                            <div
                                                style={{
                                                    gridArea: '1 / 1 / span 5 / span 1',
                                                    '--node-color': GetNodeColorAsCSSType({
                                                        nodeType: GetNodeType({ node }),
                                                        multiplier: 1.5,
                                                    }),
                                                }}
                                            ></div>
                                            <div
                                                className={styles.nodeBG}
                                                style={{
                                                    '--node-color': GetNodeColorAsStringRGB({
                                                        nodeType: GetNodeType({ node }),
                                                        multiplier: 1.5,
                                                    }),
                                                }}
                                            />
                                            <DoNodeTable node={node} />
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );

}

function DoNodeTable({ node }) {

    //Print all node names
    const nodeInputs = node.inputs;
    const nodeOutputs = node.outputs;
    const nodeColor = GetNodeColorAsCSSType({ nodeType: GetNodeType({ node: node }), multiplier: 1.5 })
    const nodeColorRGB = GetNodeColorAsStringRGB({ nodeType: GetNodeType({ node: node }), multiplier: 1.5 })

    const IsCommentsEmpty = (node) => {
        return node.comments.length > 0 && node.comments[0] !== ""
    };
    const commentsSet = IsCommentsEmpty(node, 0.2)
    let exampleCommentsSet
    let exampleComments = []

    let exampleAvailable = false
    if (typeof node.example !== 'undefined') {
        exampleAvailable = true
        if (Array.isArray(node.example.comments)) {
            if (node.example.comments.length > 1) {
                exampleComments = node.example.comments;
            }
            else {
                exampleComments.push(node.example.comments.join(''));
            }
        }
        else {

            exampleComments = node.example.comments;
        }
    }

    if (exampleComments.length > 0)
        exampleCommentsSet = true;

    return (
        <React.Fragment>

            {nodeInputs.length > 0 &&
                <div className={styles.topLeftCell} style={{ '--node-color': nodeColor }} >

                    <div className={styles.inputPinContainer} >

                        {nodeInputs.map((pin, index) => (
                            <DoNodePinInfo pin={pin} count={index} output={false} />
                        ))}

                    </div>
                </div>
            }

            {commentsSet && (

                <div className={styles.botCell} style={{
                    '--node-color': nodeColor,
                    '--node-color-rgb': nodeColorRGB
                }}>
                    <div className={styles.nodeComment}>
                        {node.comments.map((comment, index) => (
                            <div key={index} >{comment} </div>
                        ))}
                    </div>

                </div>
            )}


            <div className={styles.topCell} style={{ '--node-color': nodeColor }}>
                {console.log(node.comments)}
                <DoNode node={node} />


            </div>


            {nodeOutputs &&
                <div className={styles.topRightCell} style={{ '--node-color': nodeColor }} >

                    <div className={styles.outputPinContainer} >

                        {nodeOutputs.map((pin, index) => (
                            <DoNodePinInfo pin={pin} count={index} />
                        ))}

                    </div>
                </div>
            }

            {node.example && (
                <div className={styles.nodeExample} style={{ '--node-color': GetNodeColorAsStringRGB({ nodeType: GetNodeType({ node: node }), multiplier: 1.5 }) }} >
                    <div className={styles.nodeExampleTitle}>
                        Example
                    </div>
                    <iframe className={styles.nodeExampleBP} src={node.example.url} style={{ height: "400px", width: "100%" }} scrolling="no" allowfullscreen="true"></iframe>

                    {exampleCommentsSet && (
                        <div className={styles.nodeExampleCommentBox} style={{
                            '--node-color': nodeColor,
                            '--node-color-rgb': nodeColorRGB
                        }}>
                            <div className={styles.nodeComment}>
                                {exampleComments.map((comment, index) => (
                                    <div key={index} > {comment}</div>
                                ))}
                            </div>

                        </div>
                    )}
                </div>

            )}
        </React.Fragment>
    );
}

function GetNodeType({ node }) {
    let nodeType;
    Object.keys(nodeTypeMap).forEach(nodeKey => {
        const types = nodeTypeMap[nodeKey];
        if (types.includes(node.name)) {
            nodeType = nodeKey
        }
    });
    return nodeType
}

function GetNodeColorAsStringRGB({ nodeType, multiplier = 1 }) {
    const nodeColor = GetNodeColorComponents({
        nodeType: nodeType,
        multiplier: multiplier
    })
    return nodeColor.join(', ');
}

function GetNodeColorComponents({ nodeType, multiplier = 1 }) {

    let nodeColor
    switch (nodeType) {
        case 'nonpure':
            nodeColor = [27, 78, 132]
            break
        case 'delegate':
            nodeColor = [139, 0, 0]
            break
        case 'pure':
            nodeColor = [0, 132, 0]
            break
    }


    // Apply the multiplier to each color component
    nodeColor = nodeColor.map(component => Math.round(component * multiplier));
    return nodeColor
}

function GetNodeColorAsCSSType({ nodeType, multiplier = 1 }) {

    const nodeColor = GetNodeColorAsStringRGB({
        nodeType: nodeType,
        multiplier: multiplier
    })
    return "rgb(" + nodeColor + ")";
}


function DoNode({ node }) {

    const nodeType = GetNodeType({ node: node })
    const nodeColor = GetNodeColorAsCSSType({ nodeType: nodeType });

    // Define a function to make the color darker
    const makeColorDarker = (color, factor) => {
        return `rgb(${parseInt(color.split(',')[0].slice(4)) * factor}, ${parseInt(color.split(',')[1]) * factor}, ${parseInt(color.split(',')[2]) * factor})`;
    };
    const darkerColor = makeColorDarker(nodeColor, 0.2)

    return (
        // <div className={`${node.type === 'nonpure' ? styles.nodeImageNonPure : node.type === 'delegate' ? styles.nodeImageDelegate : node.type === 'pure' ? styles.nodeImageBGPure : ''}`}>
        <div className={styles.nodeBPGrid} style={{ borderColor: nodeColor }}>

            <div className={styles.nodeBPHeaderContainer} style={{ background: `repeating-radial-gradient(${darkerColor}, ${nodeColor} 150%)` }}>

                <div className={styles.nodeBPNodeIconContainer}>
                    <GetNodeTypeIcon node={node} />
                </div>
                <div className={styles.nodeBPTitle}>
                    {node.name}
                </div>
                {node.target &&
                    <div className={styles.nodeBPTarget}>
                        Target Is {node.target}
                    </div>
                }
            </div>

            <div className={styles.nodeBPBodyContainer} >


                {node.inputs.length > 0 &&

                    <div className={styles.nodeBPInputsContainer} >


                        {nodeType === 'nonpure' && (
                            <div className={styles.nodeBPInputPinContainer}>
                                <DoExecIcon input={true} />

                            </div>

                        )}
                        {node.inputs.map((pin, index) => (
                            <DoNodeBPPin key={index} pin={pin} input={true} />
                        ))}

                    </div>
                }

                <div className={styles.nodeBPOutputsContainer}  >

                    {(nodeType === 'nonpure' || nodeType === 'delegate') && (
                        <div className={styles.nodeBPOutputPinContainer} >
                            <DoExecIcon input={false} />
                        </div>

                    )}


                    {node.outputs.map((pin, index) => (
                        <DoNodeBPPin key={index} pin={pin} input={false} />
                    ))}
                </div>

            </div>
            <div className={`${nodeType === 'nonpure' ? styles.nodeImageNonPure : nodeType === 'delegate' ? styles.nodeImageDelegate : nodeType === 'pure' ? styles.nodeImagePure : ''}`} />
        </div>

        // </div>
    );
}

export function DoSingleIcon({ color, extraStyle }) {

    return (
        <div className={styles.single} style={{
            '--pin-color': color,
            ...extraStyle
        }} />
    );
};

function DoTaskNodeIcon({ color }) {

    return (
        <div className={styles.taskIcon} style={{
            '--pin-color': color,
            ...extraStyle
        }} />
    );
};

function DoDelegateIcon({ color }) {

    return (
        <div className={styles.delegateIcon} style={{
            '--pin-color': color,
            ...extraStyle
        }} />
    );
};


function DoDelegateNodeIcon({ color }) {

    return (
        <div className={styles.delegateNodeIcon} style={{
            '--pin-color': color,
        }} />
    );
};


function DoFunctionNodeIcon({ color }) {

    return (
        <div style={{
            position: "relative",
            bottom: "4px",
            fontWeight: "bold"
        }}>
            {'𝑓'}
        </div>
    );
};


function DoSetIcon({ color }) {


    return (
        <div style={{ color: `${color}`, fontWeight: 'bold', placeSelf: 'center', fontSize: '20px' }} >

            {'{ }'}
        </div>
    );
};

function DoReferenceIcon({ color }) {

    return (
        <div className={styles.reference} style={{ '--icon-color': color, }} >
        </div>
    );
};

function DoExecIcon({ input }) {

    return (
        <div className={styles.exec}
            style={{
                gridArea: input ? '1 / 1' : '1 / 2',
                transform: input ? 'translateX(-3px)' : 'none'
            }}>
        </div>
    );
};

function DoMapIcon({ color1, color2 }) {

    return (
        <div className={styles.mapIconContainer} style={{ '--key-color': color1, '--value-color': color2 }} >
            <div style={{
                gridArea: '1 /1',
                width: '50%',
                height: '50%',
                background: color1
            }} />
            <div style={{
                gridArea: '2 /1',
                width: '50%',
                height: '50%',
                background: color1
            }} />
            <div style={{
                gridArea: '3 /1',
                width: '50%',
                height: '50%',
                background: color1
            }} />
            <div style={{
                gridArea: '1 /2',
                height: '50%',
                background: color2
            }} />
            <div style={{
                gridArea: '2 /2',
                height: '50%',
                background: color2
            }} />
            <div style={{
                gridArea: '3 / 2',
                height: '50%',
                background: color2
            }} />
        </div>
    );
};

function DoArrayIcon({ color }) {
    const gridSize = 3; // Adjust as needed

    return (
        <div className={styles.arrayIconContainer} >

            {Array.from({ length: gridSize * gridSize }, (_, index) => {
                const row = Math.floor(index / gridSize) + 1;
                const col = (index % gridSize) + 1;
                if (row !== Math.ceil(gridSize / 2) || col !== Math.ceil(gridSize / 2)) {
                    return (
                        <div
                            key={`item-${row}-${col}`}
                            style={{
                                gridArea: `${row} / ${col}`,
                                width: '60%',
                                height: '60%',
                                background: `${color}`,
                                alignSelf: 'center'
                            }}
                        />
                    );
                }
                return null; // Skip rendering the center box
            })}

        </div>
    );
};

function GetPinIconColors({ pin, dataTypesToFind }) {
    const color = [];

    if (dataTypesToFind) {
        dataTypesToFind.forEach(datatype => {
            const FoundDataType = Unreal_DataTypes.DataTypes.find(data => data.datatype === datatype);
            if (FoundDataType) {
                color.push(FoundDataType.color);
            }
        })
        return color;
    }

    if (typeof pin.dataType === 'undefined') {
        console.log(pin)
        return
    }

    let datatype = pin.dataType.toLowerCase();

    if (datatype === "class") {
        datatype = pin.object
    }

    if (datatype === "struct") {
        datatype = pin.object
    }
    if (datatype.includes("Component")) {
        datatype = "UComponent"
    }

    let FoundDataType = Unreal_DataTypes.DataTypes.find(data => data.datatype === datatype);
    if (FoundDataType) {
        return FoundDataType.color;
    }

    FoundDataType = Unreal_DataTypes.DataTypes.find(data => data.datatype === pin.dataType.toLowerCase());
    if (FoundDataType) {
        return FoundDataType.color;
    }

}

function GetIsPinTypeOf({ pin, typeToCheck }) {
    return pin.dataType === typeToCheck
}


function GetNodeTypeIcon({ node }) {


    let nodeType = GetNodeType({ node: node })




    if (node.functionTypes === "delegate") {
        nodeType = "delegate"
    }

    if (typeof nodeType === 'undefined') {
        if (Array.isArray(node.functionTypes)) {
            if (node.functionTypes.includes("latent")) {
                nodeType = "latent"
            }
            else if (node.functionTypes.includes("pure")) {
                nodeType = "pure"
            }
            else if (node.functionTypes.includes("delegate")) {
                nodeType = "delegate"
            }
        }
    }

    if (typeof nodeType === 'undefined') {
        nodeType = "nonpure"
    }

    nodeType = nodeType.toLowerCase();
    switch (nodeType) {
        case 'delegate':
            return <DoDelegateNodeIcon />;
        case 'pure':
            return <DoFunctionNodeIcon />;
        case 'nonpure':
            return <DoFunctionNodeIcon />;
        case 'latent':
            return <DoTaskNodeIcon />;

    }

}

export function GetPinTypeIcon({ pin }) {

    let containertype = pin.containerType
    if (pin.dataType === "delegate") {
        containertype = "delegate"
    }

    if (typeof containertype === 'undefined') {
        containertype = pin.containertype;
    }
    if (typeof containertype === 'undefined') {
        containertype = "single";
    }

    const color = GetPinIconColors({ pin });
    // console.log(pin.name, containertype)
    switch (containertype) {
        case 'TArray':
            return <DoArrayIcon color={color} />;
        case 'TSet':
            return <DoSetIcon color={color} />;
        case 'TMap':
            {
                let dataTypesToFind = []


                const dataTypesSplit = pin.dataType.split(":");
                dataTypesToFind.push(dataTypesSplit[0]);
                dataTypesToFind.push(dataTypesSplit[1]);


                const colors = GetPinIconColors({ pin, dataTypesToFind });
                if (colors.length === 2) {
                    return <DoMapIcon color1={colors[0]} color2={colors[1]} />;
                }
            }
        case 'single':
            return <DoSingleIcon color={color} />;

        default:
            return <DoExecIcon />
    }
}

function GetExtraPins({ pin }) {
    let dataObject;
    let extraPins = []
    const PinDataType = pin.datatype;

    if (GetIsPinTypeOf({ pin: pin, typeToCheck: "delegate" })) {
        dataObject = Helpers.FindObjectByDataTypeAndName({
            dataType: pin.dataType,
            objectName: pin.object,
            projectDataTypes: projectDataTypesData
        });

        if (dataObject.foundObject === undefined) {
            console.log("Shit!")
            return extraPins
        }
        dataObject.foundObject.data.forEach(extraPinData => {
            const extraPin = extraPinData
            extraPins.push(extraPin)
        });
    }
    return extraPins
}


function DoNodeBPPin({ pin, input }) {

    let extraPins = GetExtraPins({ pin: pin })

    if (pin.name.toLowerCase() === "returnvalue") {
        pin.name = pin.object
    }
    return (
        <>
            <div className={input ? styles.nodeBPInputPinContainer : styles.nodeBPOutputPinContainer} >
                <GetPinTypeIcon pin={pin} />
                <div className={styles.nodeBPPinTitle} style={{ gridArea: input ? '1 / 2' : '1 / 1' }} >
                    {pin.name}
                </div>

            </div>
            {extraPins.map((extraPin, index) => (
                <DoNodeBPPin pin={extraPin} input={false} />
            ))}
        </>
    );
};

function DoNodePinInfo({ pin, count, extra, output = true }) {

    let extraPins = GetExtraPins({ pin: pin })
    const hasExtraPins = extraPins.length > 0
    let data
    let descToUse = [];
    if (pin.dataType === "struct") {
        const foundStruct = projectDataTypesData.Structs.find(str => str.name === pin.name);
        if (foundStruct) {
            data = foundStruct;
        }
    };

    if (pin.dataType === "delegate") {
        const foundDelegate = projectDataTypesData.Delegates.find(delegate => delegate.name === pin.object);
        if (foundDelegate) {
            data = foundDelegate;
        }
    };

    if (data !== undefined) {
        descToUse.push(data.description)
    }
    if (pin.description !== "") {
        descToUse.push(pin.description)
    }
    if (descToUse === undefined || descToUse === "" || descToUse.length === 0) {
        descToUse = Array.isArray(pin.comments) ? pin.comments : [pin.comments];
    }


    if (descToUse.length === 0) {
        if (pin.dataType === "struct") {
            const foundStruct = projectDataTypesData.Structs.find(str => str.name === pin.object);
            if (foundStruct) {
                descToUse.push(foundStruct.description);

                foundStruct.comments.forEach(comment => {
                    descToUse.push(comment);
                });
            }
        };
    }


    // if (Array.isArray(descToUse)) {
    //     console.log("IS ARRAY -- ", pin, " -- ",descToUse)
    // }
    // else
    // {
    //     console.log("IS NOT ARRAY -- ", pin, " -- ",descToUse)
    // }

    // console.log(descToUse)
    // descToUse.forEach(item => {
    //     console.log(item)
    // })

    const color = GetPinIconColors({ pin });

    return (
        <div className={styles.pin} style={{ '--pin-color': color }}>

            {hasExtraPins && (
                <div style={{
                    gridArea: '1 / 2 / span 10 / span 1',
                    justifySelf: 'center',
                    // width: '100px',
                    margin: '20px 0px',
                    background: 'linear-gradient(90deg, transparent 0%, var(--pin-color) 50%, transparent 100%)'
                }}></div>
            )}

            <div style={{
                gridArea: '1 / 2 / span 3 / 2',
                border: '1px solid var(--pin-color)',
                background: 'black'
            }} />
            <div style={{
                height: '1px',
                gridArea: output ? '1 / 1 / span 3' : '1 / 3 / span 3',
                alignSelf: 'center',
                background: 'var(--pin-color)'
            }} />
            <div className={styles.nodePinTitle} style={{ padding: output ? '0 0 0 10px' : '0 10px 0 0' }}> {pin.containerType} {pin.object} </div>
            {

                descToUse.length > 0 && (
                    <div className={styles.nodePinComment} style={{ padding: output ? '0 0 0 10px' : '0 10px 0 0' }}>
                        {descToUse.map((comment, index) => (
                            <div key={index} >
                                {comment}
                            </div>
                        ))}
                    </div>

                )

            }
            <div style={{
                gridArea: '4/1 /span 1 / span 3',
                marginLeft: '20px'
            }}>
                {extraPins.map((extraPin, index) => (
                    <DoNodePinInfo pin={extraPin} extra={true} />
                ))}
            </div>


        </div>
    );
};



export default function RenderNodes({ className, datatypes, nodes }) {

    nodesData = nodes
    projectDataTypesData = datatypes
    return (
        <section>
            <div className="container">
                <div className="row" style={{ display: 'grid' }}>
                    <NodeRender key={className} className={className} />
                </div>
            </div>
        </section>
    );
}

