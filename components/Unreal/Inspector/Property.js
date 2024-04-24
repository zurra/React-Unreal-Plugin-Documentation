import React from 'react';
import styles from './Property.module.css';
import Unreal_DataTypes from '../Unreal_DataTypes';
import Helpers from '../Helpers';
let projectDataTypesData
let propertiesData
let propertyMap = {};
let CategoryImageMap = {};
let CategorySubCateroryMap = {};

function PropertyRender({ className }) {


    // Function to recursively get the item from the nested map
    const GetItemFromMap = (map, keys) => {
        if (keys.length === 0) {
            return map;
        }

        const [currentKey, ...remainingKeys] = keys;
        const nextMap = map[currentKey];

        if (nextMap) {
            return GetItemFromMap(nextMap, remainingKeys);
        } else {
            return undefined; // Key doesn't exist in the map
        }
    };

    const GetPropertyDataByName = (propertyName) => {
        const foundProperty = propertiesData.Properties.find(property => property.name === propertyName);
        return foundProperty
    }

    const GetPropertyNameIfArray = (propertyData) => {
        let propertyName;
        if (Array.isArray(propertyData)) {
            propertyName = propertyData[0];
        }
        else {
            propertyName = propertyData;
        }
        return propertyName
    }

    const TraverseSubCategories = (ClassPropertyItem, CurrentPath) => {
        const CategoryTreeItem = GetItemFromMap(CategorySubCateroryMap, CurrentPath)
        if (typeof ClassPropertyItem.subCategories !== 'undefined') {


            ClassPropertyItem.subCategories.forEach(subCategory => {
                CategoryTreeItem[subCategory.category] = [];

                console.log(CategoryTreeItem.category, " ==", subCategory.category)
                // if(CategoryTreeItem.category == subCategory.category)
                // {
                //     CurrentPath.pop()
                // }

                CurrentPath.push(subCategory.category)
                subCategory.categoryProperties.forEach(subCategoryProperty => {


                    FillSubCategoryProperties({ CategoryTreeItem, subCategoryProperty, subCategory })
                });

                if (CurrentPath.length > 0) {
                    TraverseSubCategories(subCategory, CurrentPath)
                    CurrentPath.pop()
                }
            });
        }
        else {
            CategoryTreeItem.lastElement = true;
        }


    }

    const FillSubCategoryProperties = ({ CategoryTreeItem, subCategoryProperty, subCategory }) => {


        if (CategoryTreeItem.category === subCategory.category) {
            return;
        }

        const propertyName = GetPropertyNameIfArray(subCategoryProperty)
        const foundProperty = GetPropertyDataByName(propertyName);

        if (!CategoryTreeItem.subCategoryNames) {
            CategoryTreeItem.subCategoryNames = []; // Initialize as an empty array if it doesn't exist
        }

        const exists = CategoryTreeItem.subCategoryNames.includes(subCategory.category);


        if (!exists) {
            CategoryTreeItem.subCategoryNames.push(subCategory.category)
        }

        if (!CategoryTreeItem[subCategory.category]) {
            CategoryTreeItem[subCategory.category] = []; // Initialize as an empty array if it doesn't exist
        }

        CategoryTreeItem[subCategory.category].category = subCategory.category;


        if (!CategoryTreeItem[subCategory.category].properties) {
            CategoryTreeItem[subCategory.category].properties = []; // Initialize as an empty array if it doesn't exist

        }

        if (foundProperty) {
            CategoryTreeItem[subCategory.category].properties.push(foundProperty);
        }



        // console.log(subCategory)
        if (typeof subCategory.onlyInPropertyImage !== 'undefined') {

            // Check if the object already exists in the array
            const exists = CategoryTreeItem[subCategory.category].some(item => item.onlyInPropertyImage);

            // If it doesn't exist, push it to the array
            if (!exists) {
                CategoryTreeItem[subCategory.category].push({ onlyInPropertyImage: subCategory.onlyInPropertyImage });
                // console.log(CategoryTreeItem)

            }
        }
    }

    const FillCategoryProperties = ({ categoryItem, propName }) => {

        const propertyName = GetPropertyNameIfArray(propName)
        const foundProperty = GetPropertyDataByName(propertyName);

        if (!CategorySubCateroryMap[categoryItem.category].properties) {
            CategorySubCateroryMap[categoryItem.category].properties = []; // Initialize as an empty array if it doesn't exist

        }

        if (foundProperty) {
            CategorySubCateroryMap[categoryItem.category].properties.push(foundProperty);
            CategorySubCateroryMap[categoryItem.category].category = categoryItem.category;

        }
        let onlyInPropertyImageValue = "false"
        const exists = CategorySubCateroryMap[categoryItem.category].some(item => item.onlyInPropertyImage);

        if (typeof categoryItem.onlyInPropertyImage !== 'undefined') {
            onlyInPropertyImageValue = categoryItem.onlyInPropertyImage
        };


        if (!exists) {
            CategorySubCateroryMap[categoryItem.category].push({ onlyInPropertyImage: onlyInPropertyImageValue });

        }
    }


    propertyMap = {};
    CategoryImageMap = {};

    const classRootProperties = propertiesData.ClassProperties.find(s => s.className === className);
    let classProperties = classRootProperties.classProperties
    // console.log(classRootProperties);
    classProperties.forEach(item => {
        {
            CategorySubCateroryMap[item.category] = []

            CategoryImageMap[item.category] = item.image;
            item.categoryProperties.forEach(name => {

                FillCategoryProperties({ categoryItem: item, propName: name })
                //     const propertyName = GetPropertyNameIfArray(name)
                //     const foundProperty = GetPropertyDataByName(propertyName);
                //     if (foundProperty) {
                //         if (!propertyMap[item.category]) {
                //             propertyMap[item.category] = []; // Initialize as an empty array if it doesn't exist
                //         }
                //         propertyMap[item.category].push(foundProperty);
                //         CategorySubCateroryMap[item.category].push(foundProperty);
                //     }
            });

            TraverseSubCategories(item, [item.category])

        }
    });

    console.log(CategorySubCateroryMap)
    return (
        <>
            {CategoryImageMap && (
                <>
                    {
                        Object.keys(CategorySubCateroryMap).map((CategoryClass, index) => (
                            <>
                                <div className={styles.propertyCategory} >
                                    <div className={styles.propertyCategoryTitle}>  {CategoryClass} </div>

                                    <DoPropertyImageCategory CategoryClass={CategorySubCateroryMap[CategoryClass]} index={0} />
                                </div>
                                <DoPropertyTableCategory CategoryClass={CategorySubCateroryMap[CategoryClass]} index={index} />

                            </>

                        ))
                    }
                </>
            )}

        </>
    )
}

function DoPropertyImageCategory({ CategoryClass, index }) {


    let hasSubProperties = false;
    let lastElement = false;
    if (typeof CategoryClass.subCategoryNames !== 'undefined') {
        hasSubProperties = CategoryClass.subCategoryNames.length > 0;
    };

    if (typeof CategoryClass.lastElement !== 'undefined') {
        lastElement = CategoryClass.lastElement
    };
    const PropertiesCount = CategoryClass.properties.length;
    console.log("HasSubProperties", hasSubProperties)
    console.log("CatSubCat", CategoryClass.category)


    {
        return (
            <>
                {/* <div style={{
                    display: "grid",
                    gridTemplateColumns: '50%',
                    gridTemplateRows: '1fr'
                }}> */}

                {/* {CategoryImageMap[CategoryClass.category] && (
                    <img src={CategoryImageMap[CategoryClass.category]} style=
                        {{
                            border: '1px solid',
                            borderColor: 'darkred',
                            animation: 'pulse_src-components-Plugins-KeyFeatures-KeyFeatures-module 3s infinite',
                            boxShadow: '0 0px 20px 10px rgb(255 0 0 / 10%)',
                            placeSelf: 'center',
                            marginBottom: "20px"
                        }} />
                )} */}
                <div className={styles.propertyImageContainer} style={index === 0 ? {
                    width: '550px',
                    border: '1px solid',
                    borderColor: 'darkred',
                    animation: 'pulse 3s infinite',
                    boxShadow: '0 0px 20px 10px rgb(255 0 0 / 10%)',
                    marginBottom: '20px',
                    paddingBottom: '15px'

                } : {}}>
                    <div className={styles.propertyImageCategory}>
                        <div className={styles.triangleDown}></div>

                        {CategoryClass.category}</div>
                    <div className={styles.propertyImageElementContainer} style={{ marginBottom: lastElement ? '20px' : '0' }} >

                        {/* {console.log("categoryMap: ", CategorySubCateroryMap[CategoryClass])} */}
                        {CategoryClass.properties.map((prop, index) => (
                            <>
                                <DoPropertyImageElement key={index} property={prop} />
                            </>
                        ))}

                        {hasSubProperties === true && (
                            <>


                                {CategoryClass.subCategoryNames.map((SubCategoryName, index2) => (
                                    <React.Fragment key={index2}>
                                        {console.log("FUCKSs", SubCategoryName)}
                                    </React.Fragment>
                                ))}


                                {CategoryClass.subCategoryNames && (
                                    CategoryClass.subCategoryNames.map((SubCategoryName, index2) => (
                                        <React.Fragment key={index2}>
                                            <DoPropertyImageCategory CategoryClass={CategoryClass[SubCategoryName]} index={12} />
                                        </React.Fragment>
                                    ))

                                )}
                            </>
                        )}


                    </div>
                </div>



                {/* {CategorySubCateroryMap[CategoryClass].properties.map((prop, index) => (
            <div key={index} className={styles.propertyGrid} style={{ marginBottom: "20px" }} >
                <DoPropertyTable key={index} property={prop} />

            </div>
        ))}  */}

                {/* </div > */}
                {/* {CategoryClass.properties.map((prop, index) => (
                    <div key={index} className={styles.propertyGrid} style={{ marginBottom: "20px" }} >
                        <DoPropertyTable key={index} property={prop} />

                    </div>
                ))} */}
            </>
        )
    }
}

function DoPropertyTableCategory({ CategoryClass, index }) {

    return (
        <>

            {CategoryClass.properties.map((prop, index) => (
                <div key={index} className={styles.propertyGrid} style={{ marginBottom: "20px" }} >
                    <DoPropertyTable key={index} property={prop} />

                </div>
            ))}
        </>
    )
}

function DoPropertyImageElementType({ property }) {

    let IsArray = false

    if (typeof property.containerType !== 'undefined') {
        IsArray = property.containerType.toLowerCase() === "array"
    };

    if (IsArray) {
        return (
            <>
                <div style={{
                    gridTemplateColumns: '75% 1fr',
                    paddingLeft: '8px',
                    display: 'grid'
                }}>
                    <div className={styles.propertyImageType} style={{
                        gridArea: '1 / 1'
                    }}>
                        0 Array element
                    </div>

                    <div style={{
                        gridTemplateColumns: 'auto auto auto auto',
                        gridTemplateRows: '1fr',
                        display: 'grid'

                    }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            display: 'flex',
                            borderRadius: '50%',
                            border: '2px solid #a6a6a6',
                            borderStyle: 'solid',
                            placeContent: 'center',
                            alignSelf: 'center',
                            justifySelf: 'center'
                        }}>
                            <div className={styles.plus} />
                        </div>
                        <div className={styles.trash} />

                    </div>
                </div>
            </>
        )
    }

    switch (property.dataType.toLowerCase()) {
        case 'bool':
            return <DoPropertyImageElementTypeBool property={property} />;
        case 'float':
            return <DoPropertyImageElementTypeFloat property={property} />;
        case 'int':
            return <DoPropertyImageElementTypeInt property={property} />;
        case 'struct':
            return <DoPropertyImageElementTypeStruct property={property} />;
        case 'enum':
            return <DoPropertyImageElementTypeEnum property={property} />;
        case 'uobject':
        case 'actor':
        case 'component':
        case 'uobject':
            return <DoPropertyImageElementTypeUObject property={property} />;

    }
}

function DoPropertyImageElementTypeBool({ property }) {
    return (
        <div className={styles.propertyBool}></div>
    );
}

function DoPropertyImageElementTypeInt({ property }) {
    const integerString = property.defaultValue;
    const intValue = parseInt(integerString);
    return (
        <div className={styles.propertyInputField}>{intValue}</div>
    );
}

function DoPropertyImageElementTypeFloat({ property }) {


    const integerString = property.defaultValue;
    const floatValue = parseFloat(integerString).toFixed(1);
    return (
        <div className={styles.propertyInputField}>{floatValue}</div>
    );
}

function DoPropertyImageElementTypeUObject({ property }) {

    let defaultValue
    if (property.defaultValue) {
        if (property.defaultValue.toLowerCase() === "null") {
            defaultValue = "None";
        }
        else {
            defaultValue = property.defaultValue
        }

    }
    return (
        <>
            <div className={styles.propertyInputFieldDropdown}>{defaultValue}
                <div className={styles.arrowDown} ></div>
            </div>

        </>
    );
}

function DoPropertyImageElementTypeEnum({ property }) {

    return (
        <>
            <div className={styles.propertyInputFieldDropdown}>{property.defaultValue}
                <div className={styles.arrowDown} ></div>
            </div>

        </>

    );
}

function DoPropertyImageElementTypeStruct({ property }) {
    return (
        <>

            <div className={styles.propertyImageType}>{property.dataType}</div>

        </>
    );
}

function DoPropertyImageElement({ property }) {
    if (typeof property.name === 'undefined') {
        return
    }
    // console.log("PROP: ",property)
    return (
        <React.Fragment>

            <div className={styles.propertyImageElement}>
                <div className={styles.propertyImageName}>{property.name}</div>
                {/* <div className={styles.propertyDefault}>{property.defaultValue}</div> */}
                <DoPropertyImageElementType property={property} />


            </div>

            {/* <div className={styles.rightCell} >
                <div className={styles.propertyDescription} style={{ borderBottom: 'groove', borderColor: "#470000" }}>{property.description}</div>
                <div className={styles.propertyComment}>
                    {property.comments}

                </div>
            </div> */}

        </React.Fragment>
    );
}


function DoPropertyTable({ property }) {

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
    let infoDescription = [];
    let infoDescriptionSet = false;

    if (typeof info.description !== 'undefined') {
        infoDescriptionSet = true;
        if (Array.isArray(info.description)) {
            if (info.description.length > 1) {
                infoDescription = info.description;
            }
            else {
                infoDescription.push(info.description);
            }

        }
        else {
            infoDescription.push(info.description);
        }
    }

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
            // console.log(infoType, info, dataObject)
            property = true
            infoTitle = "ERROR:::" + infoObject + " not Found  "
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
        <>
            {property ? (
                <>
                    <div className={styles.propertyInfoHeader}>
                        <div className={styles.propertyInfoName}>{infoTitle}</div>
                        {dataObjectName && (<div className={styles.propertyInfoType}>{dataObjectType} : : {dataObjectName}</div>)}
                    </div>

                    {infoDescriptionSet && (
                            <div className={styles.propertyInfoShortTitleDescription}>
                                {infoDescription.map((comment, index) => (
                                    <div key={index} >{comment} </div>
                                ))}
                            </div>
                    )}
{/* 
                    {infoDescriptionSet && (

                        <div >
                            <div className={styles.nodeComment}>
                                {node.comments.map((comment, index) => (
                                    <div key={index} >{comment} </div>
                                ))}
                            </div>

                        </div>
                    )} */}


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


                </>
            ) : (

                < >


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

                </>
            )
            }
        </>


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

