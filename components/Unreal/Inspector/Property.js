import React from 'react';
import styles from './Property.module.css';
import Unreal_DataTypes from '../Unreal_DataTypes';
import Helpers from '../Helpers';
let projectDataTypesData
let propertiesData
let propertyMap = {};
let CategoryImageMap = {};

function PropertyRender({ className }) {

    propertyMap = {};
    CategoryImageMap = {};

    const classRootProperties = propertiesData.ClassProperties.find(s => s.className === className);
    let classProperties = classRootProperties.classProperties
    // console.log(classRootProperties);
    classProperties.forEach(item => {
        {
            CategoryImageMap[item.category] = item.image;
            item.categoryProperties.forEach(name => {
                const foundProperty = propertiesData.Properties.find(property => property.name === name);
                if (foundProperty) {
                    if (!propertyMap[item.category]) {
                        propertyMap[item.category] = []; // Initialize as an empty array if it doesn't exist
                    }
                    propertyMap[item.category].push(foundProperty);
                }
            });


        }
    });
    return (
        <div>
            {propertyMap && (
                <div>
                    {Object.keys(propertyMap).map((item, index) => (
                        <div className={styles.propertyCategory} style={{ background: '#080000' }}>
                            <div className={styles.propertyCategoryTitle}> {item} </div>
                            {CategoryImageMap[item] && (
                                <img src={CategoryImageMap[item]} style=
                                    {{
                                        border: '1px solid',
                                        borderColor: 'darkred',
                                        animation: 'pulse_src-components-Plugins-KeyFeatures-KeyFeatures-module 3s infinite',
                                        boxShadow: '0 0px 20px 10px rgb(255 0 0 / 10%)',
                                        placeSelf: 'center',
                                        marginBottom: "20px"
                                    }} />

                            )
                            }
                            {propertyMap[item].map((prop, index) => (
                                <div key={index} className={styles.propertyGrid} style={{ marginBottom: "20px" }} >
                                    <DoPropertyTable key={index} property={prop} />

                                </div>
                            ))}

                        </div>
                    ))}

                </div>

            )}

            <hr style={{ marginLeft: "0" }}></hr>

        </div>
    );
}

function DoPropertyTable({ property }) {


    //Print all property names
    const propertyInfo = property.info;
    return (
        <React.Fragment>

            <div className={styles.leftCell}>
                <div className={styles.propertyTitle}>{property.name}</div>
                <div className={styles.propertyDefault}>{property.defaultValue}</div>
                <div className={styles.propertyType}>{property.dataType}</div>

            </div>

            <div className={styles.rightCell} >
                <div className={styles.propertyDescription} style={{ borderBottom: 'groove', borderColor: "#470000" }}>{property.description}</div>
                <div className={styles.propertyComment}>
                    {property.comments}

                </div>
            </div>




            {propertyInfo &&

                <div className={styles.infoCell} >

                    {propertyInfo.map((info, index) => (
                        <div key={index} className={styles.propertyInfoContainer} >
                            <DoInfo info={info} count={index} />

                            {/* 
                            {prop.infoType == "property" &&
                                <div>
                                    <div className={styles.propertyInfoName}>{prop.infoName}</div>
                                    <div className={styles.propertyInfoShortTitleDescription}>{prop.description}
                                    </div>
                                    {console.log(prop)}
                                </div>

                            }
                            {prop.relatedProps.map((relatedProp, index2) => (
                                <div key={index2} style={{ background: (prop.infoType === "property" ? index2 : index) % 2 === 0 ? '#220000' : '#140000' } }>

                                    <DoPropertyInfo relatedProp={relatedProp} property={prop.infoType == "property"} prop={prop} />
                                </div>
                            ))} */}

                        </div>

                    ))}

                </div>
            }

        </React.Fragment>
    );
}

function DoInfo({ info, count }) {

    let relevantProperties = []
    let property = true;
    let infoTitle = info.infoName;
    let infoDescription = info.description;

    const infoType = info.infoType;
    const infoObject = info.object
    let dataObjectName;
    let dataObjectType;

    switch (infoType) {
        case 'enum':
            property = false;
            break;
        case "struct":
            property = true;
            break;
    }
    if (infoType === "property") {
        if (typeof info.relevantProperties !== 'undefined') {
            info.relevantProperties.forEach(relevantPropName => {
                const foundProperty = propertiesData.Properties.find(data => data.name === relevantPropName);
                if (foundProperty) {
                    relevantProperties.push(foundProperty);
                }
            });
        }
    }
    if (infoType === "struct" || infoType === "enum") {
        const dataObject = Helpers.FindObjectByDataTypeAndName({
            dataType: infoType,
            objectName: infoObject,
            projectDataTypes: projectDataTypesData
        });

        if (!dataObject) {
         console.log(infoType, info, dataObject)
            property = true
            infoTitle = "ERROR:::"+infoObject+ " not Found  "
        }
        else {
            dataObjectName = dataObject.name
            dataObjectType = infoType
            if (dataObject.data.length > 0) {
                if (typeof info.relevantProperties !== 'undefined') {
                    info.relevantProperties.forEach(relevantPropName => {
                        const foundProperty = dataObject.data.find(data => data.name === relevantPropName);
                        if (foundProperty) {
                            relevantProperties.push(foundProperty);
                        }
                    });
                }
                else {
                    relevantProperties = dataObject.data;
                }
            }

            if (typeof infoTitle == 'undefined') {
                infoTitle = dataObject.name;
            }
        }
    }


    // console.log(infoTitle, relevantProperties, property)
    return (
        <div >
            {property ? (
                <div >
                    <div className={styles.propertyInfoHeader}>
                    <div className={styles.propertyInfoName}>{infoTitle}</div>
                    {dataObjectName && (<div className={styles.propertyInfoType}>{dataObjectType} : : {dataObjectName}</div>)}
                    </div>
                    <div className={styles.propertyInfoShortTitleDescription}>{infoDescription}</div>

                    {relevantProperties.map((relatedProp, index) => (

                        <div className={styles.propertyGrid} style={{ background: index % 2 === 0 ? '#220000' : '#140000' }}>

                            <div className={styles.firstInfoCell} >
                                <div className={styles.propertyTitle}>{relatedProp.name}</div>
                                <div className={styles.propertyDefault}>{relatedProp.defaultValue}</div>
                                <div className={styles.propertyType}>{relatedProp.dataType}</div>
                            </div>
                            <div className={styles.secondInfoCell} style={{ display: 'grid' }} >

                                <div className={styles.propertyInfoDescription}>{relatedProp.description}</div>
                            </div>

                            {relatedProp.comments?.length > 0 && (
                                <div style={{ borderBottom: 'double', borderColor: "#470000", paddingLeft: "10px", gridArea: "3/ 1/ span 1/ span 4", padding: "10px" }}>
                                    {relatedProp.comments.map((comment, index) => (
                                        <div key={index}>
                                            <li>{comment}</li>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}


                </div>
            ) : (

                <div >


                    {relevantProperties.map((relatedProp, index) => (

                        <div className={styles.propertyGrid} style={{ background: index % 2 === 0 ? '#220000' : '#140000' }}>

                            <div className={styles.firstInfoCell} >
                                <div className={styles.propertyTitle} style={{ gridArea: "1 / 1 / span 2 / span 1", alignSelf: "center" }} >{relatedProp.name}</div>
                                <div className={styles.propertyDefault}>{relatedProp.defaultValue}</div>
                                <div className={styles.propertyType}>{relatedProp.dataType}</div>
                            </div>
                            <div className={styles.secondInfoCell} style={{ display: 'grid' }} >

                                <div className={styles.propertyInfoDescription}>{relatedProp.description}</div>
                                {relatedProp.comments?.length > 0 && (
                                    <div style={{ borderBottom: 'double', borderColor: "#470000", paddingLeft: "10px", gridArea: "3/ 1/ span 1/ span 3", padding: "10px" }}>
                                        {relatedProp.comments.map((comment, index) => (
                                            <div key={index}>
                                                <li>{comment}</li>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            )
            }
        </div >


    );
};






export default function Properties({ className, dataTypes, properties }) {

    propertiesData = properties
    projectDataTypesData = dataTypes
    return (
        <section>
            <div className="container">
                <div className="row" style={{ display: 'grid' }}>
                    <PropertyRender key={className} className={className} />
                </div>
            </div>
        </section>
    );
}

