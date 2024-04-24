import React from 'react';
import styles from './BP.module.css';
import Unreal_DataTypes from '../Unreal_DataTypes';
import Helpers from '../Helpers';
let projectDataTypesData
let nodesData
let nodeMap = {};
let nodeTypeMap = {};

function NodeRender({ className }) {


    nodeMap = {};
    nodeTypeMap = {}

    nodeTypeMap["pure"] = [];
    nodeTypeMap["nonpure"] = []
    nodeTypeMap["delegate"] = []

    const classNodesRoot = nodesData.ClassNodes.find(s => s.className === className);
    let ClassNodes = classNodesRoot.classNodes

    // console.log(classNodesRoot);    
    // console.log(nodesData);

    ClassNodes.forEach(item => {
        {
            // CategoryImageMap[item.category] = item.image;
            item.categoryNodes.forEach(name => {
                const foundNode = nodesData.Nodes.find(node => node.title === name);
                if (foundNode) {

                    if (!nodeMap[item.category]) {
                        nodeMap[item.category] = []; // Initialize as an empty array if it doesn't exist
                    }
                    nodeMap[item.category].push(foundNode);

                    if (foundNode.functionTypes.includes("nonpure")) {
                        nodeTypeMap["nonpure"].push(foundNode.title);
                    } else if (foundNode.functionTypes.includes("pure")) {
                        nodeTypeMap["pure"].push(foundNode.title);
                    } else if (foundNode.functionTypes.includes("delegate")) {
                        nodeTypeMap["delegate"].push(foundNode.title);
                    }

                }
            });
        }
    });

    // ClassNodes.forEach(item => {
    //     {
    //         // CategoryImageMap[item.category] = item.image;
    //         item.functionTypes.forEach(functionType => {
    //             const foundNode = nodesData.Nodes.find(node => node.title === name);
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
                <div>
                    {Object.keys(nodeMap).map((item, index) => (
                        <div className={styles.nodeCategory} >
                            <div className={styles.nodeCategoryInnerShadowBox}>
                                <div className={styles.nodeCategoryTitle}> {item} </div>


                                {nodeMap[item].map((node, index) => (
                                    <>
                                        {index > 0 && (
                                            <div />
                                        )}
                                        <div key={index} className={styles.nodeGrid} >
                                            <div style={{
                                                gridArea: '1 / 1 / span 5 / span 100',
                                                '--node-color': GetNodeColorAsCSSType({ nodeType: GetNodeType({ node: node }), multiplier: 1.5 }),
                                                border: 'solid 1px var(--node-color)',
                                                // padding: '8%'
                                            }}
                                            ></div>
                                            {/* <div className={`${node.type === 'nonpure' ? styles.nodeTypeBGNonPure : node.type === 'delegate' ? styles.nodeTypeBGDelegate : node.type === 'pure' ? styles.nodeTypeBGPure : ''}`} /> */}
                                            <div className={styles.nodeBG} style={{ '--node-color': GetNodeColorAsStringRGB({ nodeType: GetNodeType({ node: node }), multiplier: 1.5 }) }} />
                                            <DoNodeTable key={index} node={node} />
                                        </div>
                                    </>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

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

            {nodeInputs &&
                <div className={styles.topLeftCell} style={{ '--node-color': nodeColor }} >

                    <div className={styles.inputPinContainer} >

                        {nodeInputs.map((pin, index) => (
                            <DoNodePinInfo pin={pin} count={index} output={false} />
                        ))}

                    </div>
                </div>
            }

            {commentsSet && (

                <div className={styles.topCell} style={{
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


            <div className={styles.botCell} style={{ '--node-color': nodeColor }}>
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
        if (types.includes(node.title)) {
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

            <div className={styles.nodeBPHeaderContainer} style={{ background: `repeating-radial-gradient(${darkerColor}, ${nodeColor} 500px)` }}>

                <div className={styles.nodeBPNodeIconContainer}>
                    <GetNodeTypeIcon node={node} />
                </div>
                <div className={styles.nodeBPTitle}>
                    {node.title}
                </div>
            </div>

            <div className={styles.nodeBPBodyContainer} >


                {node.inputs &&

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

                    {nodeType === 'nonpure' && (
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

function DoSingleIcon({ color }) {

    return (
        <div className={styles.single} style={{ '--pin-color': color }} />
    );
};

function DoTaskNodeIcon({ color }) {

    return (
        <div className={styles.taskIcon} />
    );
};

function DoDelegateIcon({ color }) {

    return (
        <div className={styles.delegateIcon} />
    );
};


function DoDelegateNodeIcon({ color }) {

    return (
        <div className={styles.delegateNodeIcon} />
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
        <div style={{ color: `${color}`, fontWeight: 'bold', placeSelf: 'center', fontSize: '20px', marginLeft: "4px" }} >

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

function GetPinIconColors({ pin }) {
    const color = [];
    let dataTypesToFind = []

    if (Array.isArray(pin.dataTypes)) {
        if (pin.dataTypes.length > 1) {
            dataTypesToFind = pin.DataTypes;
        }
        else {
            dataTypesToFind.push(pin.dataTypes.join('').toLowerCase());
        }
    }
    else {

        const dataType = pin.dataTypes.toLowerCase();

        const FoundDataType = Unreal_DataTypes.DataTypes.find(data => data.dataType === dataType);
        if (FoundDataType) {
            return FoundDataType.color;
        }
    }


    dataTypesToFind.forEach(dataType => {
        const FoundDataType = Unreal_DataTypes.DataTypes.find(data => data.dataType === dataType);
        if (FoundDataType) {
            color.push(FoundDataType.color);
        }
    })

    if (color.length == 1) {
        return color[0]
    }

    return color;
}

function GetIsPinTypeOf({ pin, typeToCheck }) {
    if (Array.isArray(pin.dataTypes)) {
        return pin.dataTypes.includes(typeToCheck)
    }
    else {
        return pin.dataTypes === typeToCheck
    }
}


function GetNodeTypeIcon({ node }) {
    let nodeType
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

function GetPinTypeIcon({ pin }) {

    let containerType
    if (pin.dataTypes === "delegate") {
        containerType = "delegate"
    }

    if (typeof containerType === 'undefined') {
        containerType = pin.containerType;
    }
    if (typeof containerType === 'undefined') {
        containerType = "single";
    }

    containerType = containerType.toLowerCase();
    const color = GetPinIconColors({ pin });
    // console.log(pin.name, containerType)
    switch (containerType) {
        case 'array':
            return <DoArrayIcon color={color} />;
        case 'set':
            return <DoSetIcon color={color} />;
        case 'map':
            return <DoMapIcon colors={color} />;
        case 'single':
            return <DoSingleIcon color={color} />;

        default:
            return <DoExecIcon />
    }
}

function GetExtraPins({ pin }) {
    let dataObject;
    let extraPins = []

    if (GetIsPinTypeOf({ pin: pin, typeToCheck: "delegate" })) {
        dataObject = Helpers.FindObjectByDataTypeAndName({
            dataType: pin.dataTypes,
            objectName: pin.name,
            projectDataTypes: projectDataTypesData
        });

        dataObject.parameters.forEach(extraPinData => {
            const extraPin = {
                name: extraPinData.name,
                dataTypes: extraPinData.dataType,
                containerType: extraPinData.containerType,
            }
            extraPins.push(extraPin)
        });
    }
    return extraPins
}


function DoNodeBPPin({ pin, input }) {

    let extraPins = GetExtraPins({ pin: pin })

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
    if (pin.dataTypes === "struct") {
        const foundStruct = projectDataTypesData.Structs.find(str => str.name === pin.name);
        if (foundStruct) {
            data = foundStruct;
        }
    };

    if (pin.dataTypes === "delegate") {
        const foundDelegate = projectDataTypesData.Delegates.find(delegate => delegate.name === pin.name);
        if (foundDelegate) {
            data = foundDelegate;
        }
    };


    if (data) {
        descToUse = Array.isArray(data.description) ? data.description : [data.description];
    }
    else {
        descToUse = Array.isArray(pin.comments) ? pin.comments : [pin.comments];
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
                <div style={{gridArea: '1 / 2 / span 10 / span 1',
                justifySelf: 'center',
                width: '100px',
                margin: '20px 0px',
                background: 'linear-gradient(90deg, transparent 0%, var(--pin-color) 50%, transparent 100%)'}}></div>
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
            <div className={styles.nodePinTitle} style={{ padding: output ? '0 0 0 10px' : '0 10px 0 0' }}> {pin.name} </div>
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



export default function RenderNodes({ className, dataTypes, nodes }) {

    nodesData = nodes
    projectDataTypesData = dataTypes
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

