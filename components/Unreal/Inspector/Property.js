import React, { useState, useEffect } from 'react';
import styles from './Property.module.css';
import Helpers from '../Helpers';
import Tooltip from '../../Utils/tooltip';
import { DoSingleIcon, GetPinTypeIcon } from '../BP/BP';
import Unreal_DataTypes from '../Unreal_DataTypes';

 let projectSpecificData
 let projectDataTypesData
 let usedStructs


const GetPropertyDataByName = (classData,propertyName) => {
    console.log("------------------------------------------ S")
    console.log(classData)
    console.log("------------------------------------------ e")
    for (const element of classData.classPropertyCategories) {
        const foundProperty = element.categoryProperties.find(property => property.name === propertyName);
        if (foundProperty)
            return foundProperty;
    }
    return null;
}


function PropertyRender({
    className,
    classes,          // pass in your data as props
    projectSpecific,
    datatypes,
  }) {
  
    // 2) fresh maps on every render (or useMemo below)
    let CategorySubCategoryMap = {};
    let CategorySubCategoryMapBPProp = {};
  
    // 3) helper now closes over local classData:
    // const GetPropertyDataByName = name => {
    //   for (const cat of classData.classPropertyCategories) {
    //     const found = cat.categoryProperties.find(p => {
    //       // if propertyData is array:
    //       const propName = Array.isArray(p) ? p[0].name : p.name;
    //       return propName === name;
    //     });
    //     if (found) return found;
    //   }
    //   return null;
    // };


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
    // classesData.Classes[1].classPropertyCategories[0].categoryProperties

    const GetPropertyNameIfArray = (propertyData) => {
        let propertyName;
        if (Array.isArray(propertyData)) {
            propertyName = propertyData[0].name;
        }
        else {
            propertyName = propertyData.name;
        }
        return propertyName
    }

    const TraverseSubCategories = (ClassPropertyItem, CurrentPath) => {
        const CategoryTreeItem = GetItemFromMap(CategorySubCategoryMap, CurrentPath)
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
        const foundProperty = GetPropertyDataByName(classData,propertyName);

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
        const foundProperty = GetPropertyDataByName(classData,propertyName);

        if (!CategorySubCategoryMap[categoryItem.category].properties) {
            CategorySubCategoryMap[categoryItem.category].properties = []; // Initialize as an empty array if it doesn't exist

        }

        if (foundProperty) {

            if(propName.name == "DebugOptions")
            {
                console.log("I am an alert box!");

            }
            if (foundProperty.metas.includes("CPF_Edit")) {
                CategorySubCategoryMap[categoryItem.category].properties.push(foundProperty);
                CategorySubCategoryMap[categoryItem.category].category = categoryItem.category;
            }
            else if (!foundProperty.metas.includes("CPF_BlueprintAssignable") && (foundProperty.metas.includes("CPF_BlueprintVisible") || foundProperty.metas.includes("CPF_NativeAccessSpecifierPublic"))) {
                {

                    if (!Object.keys(CategorySubCategoryMapBPProp).includes(categoryItem.category)) {
                        CategorySubCategoryMapBPProp[categoryItem.category] = []
                    }
                    if (!CategorySubCategoryMapBPProp[categoryItem.category].properties) {
                        CategorySubCategoryMapBPProp[categoryItem.category].properties = []; // Initialize as an empty array if it doesn't exist
                    }

                    if (!CategorySubCategoryMapBPProp[categoryItem.category].properties.includes(foundProperty)) {
                        CategorySubCategoryMapBPProp[categoryItem.category].properties.push(foundProperty);
                    }
                    CategorySubCategoryMapBPProp[categoryItem.category].category = categoryItem.category;
                }
            }
        }

        // let onlyInPropertyImageValue = "false"
        // const exists = CategorySubCategoryMap[categoryItem.category].some(item => item.onlyInPropertyImage);

        // if (typeof categoryItem.onlyInPropertyImage !== 'undefined') {
        //     onlyInPropertyImageValue = categoryItem.onlyInPropertyImage
        // };


        // if (!exists) {
        //     CategorySubCategoryMap[categoryItem.category].push({ onlyInPropertyImage: onlyInPropertyImageValue });

        // }
    }


    const projectSpecificData = projectSpecific
    let classData = classes.Classes.find(c => c.className === className);
    if (classData === undefined) return <div>No data for {className}</div>;


    let classProperties = classData.classPropertyCategories
     
    classProperties.forEach(item => {
        {
            CategorySubCategoryMap[item.category] = []

            item.categoryProperties.forEach(name => {

                FillCategoryProperties({ categoryItem: item, propName: name })
                //     const propertyName = GetPropertyNameIfArray(name)
                //     const foundProperty = GetPropertyDataByName(propertyName);
                //     if (foundProperty) {
                //         if (!propertyMap[item.category]) {
                //             propertyMap[item.category] = []; // Initialize as an empty array if it doesn't exist
                //         }
                //         propertyMap[item.category].push(foundProperty);
                //         CategorySubCategoryMap[item.category].push(foundProperty);
                //     }
            });

            TraverseSubCategories(item, [item.category])

        }
    });


    let CategoryPriorities = {}

    Object.keys(CategorySubCategoryMap).map((item, index) => {

        const categoryToFind = CategorySubCategoryMap[item].category
        if (categoryToFind === undefined) return;
        console.log(categoryToFind);
        const categoryPriority = projectSpecificData.CategoryPriorities.find(data => data.category === item);
        let priority = "50";
        if (categoryPriority) {
            console.log(item.category + ":" + categoryPriority.priority)
            priority = categoryPriority.priority;
        }

        // if (Object.keys(CategoryPriorities).length !== 0) {
        //     Object.keys(CategoryPriorities).map((setPriority) => {
        //         if (CategoryPriorities[setPriority] !== "-1") {
        //             if (categoryToFind.includes(setPriority))
        //                 if (setPriority) {

        //                     let newPriority = parseInt(CategoryPriorities[setPriority], 10);
        //                     priority = (newPriority+1).toString();
        //                 }
        //         }
        //     });

        // }
        CategoryPriorities[item] = priority
    });

    function ReOrderCategories(categoryPriorities, map) {
        // Get all the category keys
        const keys = Object.keys(map);

        // Create an array of keys with their corresponding priorities
        const keysWithPriorities = keys.map(key => {
            const priority = categoryPriorities[key] !== undefined ? parseInt(categoryPriorities[key], 10) : -1;
            return { key, priority };
        });

        // Sort the array by priority (ascending order)
        keysWithPriorities.sort((a, b) => a.priority - b.priority);

        // Create a new ordered array of keys based on the sorted priorities
        const newKeys = keysWithPriorities.map(item => item.key);

        // Create a new map with the updated order
        const updatedMap = {};
        newKeys.forEach(key => {
            updatedMap[key] = map[key];
        });

        return updatedMap;
    }


    // Reorder the CategorySubCategoryMap based on CategoryPriorities
    CategorySubCategoryMap = ReOrderCategories(CategoryPriorities, CategorySubCategoryMap);
    CategorySubCategoryMapBPProp = ReOrderCategories(CategoryPriorities, CategorySubCategoryMapBPProp);

    
    return (
        <>
            {/* Check if CategorySubCategoryMap is valid and has properties */}
            {CategorySubCategoryMap && 
                Object.keys(CategorySubCategoryMap).some(key => CategorySubCategoryMap[key].properties.length > 0) && (
                    <>
                        <div className={styles.separator}>Properties</div>
                        {Object.keys(CategorySubCategoryMap).map((CategoryClass, index) => {
                            const category = CategorySubCategoryMap[CategoryClass];
                            return (
                                category.properties.length > 0 && (
                                    <div key={index} className={styles.propertyCategory}>
                                        <DoPropertyImageTitle CategoryClass={category} index={0} />
                                        <DoPropertyImageCategory CategoryClass={category} index={0} />
                                        <DoPropertyTableCategory CategoryClass={category} index={index} getter={false} InClassData={classData} />
                                    </div>
                                )
                            );
                        })}
                    </>
                )
            }
    
            {/* Check if CategorySubCategoryMapBPProp is valid and has properties */}
            {CategorySubCategoryMapBPProp &&
                Object.keys(CategorySubCategoryMapBPProp).some(key => CategorySubCategoryMapBPProp[key].properties.length > 0) && (
                    <>
                        <div className={styles.separator}>Getters</div>
                        {Object.keys(CategorySubCategoryMapBPProp).map((CategoryClass, index) => {
                            const category = CategorySubCategoryMapBPProp[CategoryClass];
                            return (
                                category.properties.length > 0 && (
                                    <div key={index} className={styles.propertyCategory}>
                                        <DoPropertyImageTitle CategoryClass={category} index={0} />
                                        <DoPropertyTableCategory CategoryClass={category} index={index} getter={true} InClassData={classData} />
                                    </div>
                                )
                            );
                        })}
                    </>
                )
            }
        </>
    );
}

function GetPropColor(prop) {
    const color = [];
    let datatypesToFind = []

    if (typeof prop.dataType === 'undefined') {
        console.log(pin)
        return
    }

    let datatype = prop.dataType.toLowerCase();

    if (datatype === "class") {
        datatype = prop.object
    }

    if (datatype === "struct") {
        datatype = prop.object
    }
    if (datatype.includes("Component")) {
        datatype = "UComponent"
    }
    const FoundDataType = Unreal_DataTypes.DataTypes.find(data => data.datatype === datatype);
    if (FoundDataType) {
        return FoundDataType.color;
    }


    datatypesToFind.forEach(datatype => {
        const FoundDataType = Unreal_DataTypes.datatype.find(data => data.datatype === datatype);
        if (FoundDataType) {
            color.push(FoundDataType.color);
        }
    })

    if (color.length == 1) {
        return color[0]
    }

    return color;
}

function DoBPProperty({InClassData, property, PropertyOwner, category, index }) {

    const pin = {}
    pin.name = property.name
    pin.dataType = property.dataType
    pin.containerType = property.containerType
    pin.object = property.object



    const IconRender = GetPinTypeIcon({
        pin: pin,
    });

    if(InClassData === undefined) 
        {
            console.log ("-------- EARLY RETURN ----------")
            return
        }

        console.log("classData")

    let propertyColor = GetPropColor(property)
    return (
        <>
            <div className={styles.grid} >
                <div style={{ gridArea: '1/1' }} >
                    <div className={styles.BPProperty} style={{ float: "right" }} >

                        <div className={styles.BPPropertyOwner}>
                            {InClassData.className}
                        </div>

                        <div style={{
                            gridArea: '1 / 3',
                            position: 'relative',
                            top: '6px'
                        }} >
                            {GetPinTypeIcon({ pin: pin })}

                        </div>

                    </div>
                </div>

                <div style={{ gridArea: '1 / 1 / span 1 / span 3' }} >
                    <div className={styles.BPPropertyLink} />
                </div>

                <div style={{ gridArea: '1/3' }} >
                    <div className={styles.BPProperty} style={{
                        '--prop-color': propertyColor,
                        float: "left",
                        boxShadow: 'inset 0px 0px 5px 1px var(--prop-color)'
                    }} >

                        <div style={{
                            gridArea: '1 / 1',
                            position: 'relative',
                            top: '6px'
                        }} >
                            {GetPinTypeIcon({ pin: pin })}

                        </div>
                        <div className={styles.BPPropertyName}>
                            {property.name}
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

function DoPropertyImageTitle({ CategoryClass, index }) {

    let hasProperties = false;

    if (typeof CategoryClass.properties !== 'undefined') {
        hasProperties = true
    };
    if (!hasProperties)
        return;

    return (
        <>
            <div className={styles.propertyCategoryTitle}> {CategoryClass.category} </div>
        </>
    )
}

function DoPropertyImageCategory({ CategoryClass, index }) {


    let hasSubProperties = false;
    let lastElement = false;
    let hasProperties = false;

    if (typeof CategoryClass.subCategoryNames !== 'undefined') {
        hasSubProperties = CategoryClass.subCategoryNames.length > 0;
    };

    if (typeof CategoryClass.lastElement !== 'undefined') {
        lastElement = CategoryClass.lastElement
    };

    if (typeof CategoryClass.properties !== 'undefined') {
        hasProperties = true
    };
    if (!hasProperties)
        return;

    const PropertiesCount = CategoryClass.properties.length;
    console.log("HasSubProperties", hasSubProperties)
    console.log("CatSubCat", CategoryClass.category)


    {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
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
                    border: '1px solid',
                    borderColor: 'darkred',
                    animation: 'Property_pulse__QWcVi 3s infinite',
                    boxShadow: '0 0px 20px 10px rgb(255 0 0 / 10%)',
                    marginBottom: '20px',
                    paddingBottom: '15px'

                } : {}}>
                    <div className={styles.propertyImageCategory}>
                        <div className={styles.triangleDown}></div>

                        {CategoryClass.category}</div>
                    <div className={styles.propertyImageElementContainer} style={{ marginBottom: lastElement ? '0px' : '0' }} >

                        {/* {console.log("categoryMap: ", CategorySubCategoryMap[CategoryClass])} */}
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



                {/* {CategorySubCategoryMap[CategoryClass].properties.map((prop, index) => (
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
            </div>
        )
    }
}

function DoPropertyTableCategory({InClassData, CategoryClass, index, getter }) {

    let hasProperties = false;

    console.log(CategoryClass.properties)
    if (typeof CategoryClass.properties !== 'undefined') {
        hasProperties = true
    };
    if (!hasProperties)
        return;


    return (
        <>
            {CategoryClass.properties.map((prop, index) => (
                <div key={index} className={styles.propertyGrid} style={{ marginBottom: "20px", padding: "10px" }}>
                    {getter ? (
                        <>
                            <DoPropertyTable key={index} property={prop} InClassData={InClassData} />

                            <DoBPProperty key={index} property={prop} InClassData={InClassData} />
                        </>
                    ) : (
                        <DoPropertyTable key={index} property={prop} InClassData={InClassData} />
                    )}
                </div>
            ))}
        </>
    );

}

function DoPropertyImageElementType({ property }) {

    let IsArray = false

    if (typeof property.containerType !== 'undefined') {
        IsArray = property.containerType.toLowerCase() === "tarray"
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
            defaultValue = "None"; g
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


function DoPropertyTable({InClassData, property }) {

    let propetyInfo;
    const IsPropDefinedInBP = false;
    const propColor = IsPropDefinedInBP ? "midnightblue" : "darkred"
    const infoType = property.dataType;
    const infoObject = property.object;
    const hasObject = infoObject !== "";
    const isEnumOrStruct = infoType === "enum" || infoType === "struct";
    let hasPropertyInfo = false;
    let potentialPropertyInfo;
    let propertyInfo;

    if (isEnumOrStruct) {
        const result = Helpers.FindObjectByDataTypeAndName({
            dataType: infoType,
            objectName: infoObject,
            projectDataTypes: projectDataTypesData
        });

        if (result.isProjectType) {
            hasPropertyInfo = true;
        }


        if (hasPropertyInfo) {

            if (potentialPropertyInfo === undefined) {
                potentialPropertyInfo = projectSpecificData.RelatedProperties.find(data => data.name === property.name);
            }


            propertyInfo = []
            let data = []
            data.info = []
            data.comments = property.comments;
            data.dataType = property.dataType;
            data.defaultValue = property.defaultValue;
            data.description = property.description;
            data.name = property.name;
            data.object = property.object;
            result.foundObject.data.forEach(item => {
                let info = {}

                if (potentialPropertyInfo !== undefined) {
                    const infoFoundInPotential = potentialPropertyInfo.info.find(i => i.infoName === item.name);
                    if (infoFoundInPotential) {
                        info = infoFoundInPotential;
                        if (Array.isArray(info.description)) {
                            if (info.description.length == 0) {
                                info.description = item.description;
                            }
                            else {
                                if (info.description = "") {
                                    info.description = item.description;
                                }
                            }
                        }
                    }
                }

                if (Object.keys(info).length === 0) {
                    info.infoName = item.name;
                    info.description = item.description;
                    info.comments = item.comments;
                    if (item.infoType !== undefined)
                        info.infoType = item.infoType;
                    else
                        info.infoType = infoType;
                }
                data.info.push(info)

            });
            propertyInfo = data;
        }
    }


    if (propertyInfo) {
        console.log(propertyInfo);
    }

    

    return (
        <React.Fragment>

            {/* <div className={styles.topCell} style={{ borderColor: propColor }}>

                <Tooltip text="Property Type">
                    <div className={styles.propertyType}>{property.containerType} {property.dataType}</div>
                </Tooltip>

                <Tooltip text="Name">
                    <div className={styles.propertyTitle}>
                        {property.name}
                    </div>
                </Tooltip>

                <Tooltip text="Default value">
                    <div className={styles.propertyDefault}>{property.defaultValue}
                    </div>
                </Tooltip>


            </div> */}

            <div className={styles.leftCell}>

                <div className={styles.propertyTitle}>
                    <Tooltip text="Name">
                        {property.name}
                    </Tooltip>
                </div>

                <div className={styles.propertyType}>
                    <Tooltip text="Property Type" >
                        {property.containerType} {property.dataType}
                    </Tooltip>

                </div>

                <div className={styles.propertyDefault}>
                    <Tooltip text="Default value">
                        {property.defaultValue}
                    </Tooltip>
                </div>
            </div>

            <div className={styles.rightCell} >
                <div className={styles.propertyDescription} style={{
                    // borderBottom: 'groove', borderColor: "#470000"
                }}>{property.description}</div>
                {/* <div className={styles.propertyComment}>
                    {property.comments}

                </div> */}
                {property.comments?.length > 0 && (
                    <div >
                        {property.comments.map((comment, index) => (
                            <div key={index} className={styles.propertyComment}>
                                <li>{comment}</li>
                            </div>
                        ))}
                    </div>
                )}
            </div>


            {/* <div className={styles.botCell} style={{
                borderColor: IsPropDefinedInBP ? '#00004a' : "#580000"
            }}
            >
                <div className={styles.propertyDescription} >{property.description}</div>

                {property.comments?.length > 0 && (
                    <div className={styles.propertyComment}>
                        {property.comments}


                    </div>
                )}

            </div> */}



            {hasPropertyInfo &&

                <div className={styles.infoCell}>
                    {propertyInfo.dataType === "struct" ? (
                        // Struct case: render one DoInfo with the full info payload

                            <div key="{idx}" className={styles.propertyInfoContainer}>
                                <DoInfo
                                    propertyData={propertyInfo}
                                    info={propertyInfo.info[0]}
                                    count="-1"
                                    InClassData={InClassData}
                                />
                            </div>
                        
                    ) : (
                        // Non-struct case: map over the info array
                        propertyInfo.info.map((infoItem, idx) => (
                            <div key={idx} className={styles.propertyInfoContainer}>
                                <DoInfo
                                    propertyData={property}
                                    info={infoItem}
                                    count={idx}
                                    InClassData={InClassData}
                                />
                            </div>
                        ))
                    )}
                </div>
            }

        </React.Fragment>
    );
}

function DoInfo({InClassData, propertyData, info, count }) {

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
    const infoObject = propertyData.object
    let dataObjectName;
    let dataObjectType;

    switch (infoType) {
        case 'enum':
            property = false;
            break;
        case "detailed":
            property = true;
            break;
    }
    if (infoType === "property") {
        if (typeof info.relevantProperties !== 'undefined') {
            info.relevantProperties.forEach(relevantPropName => {
                // const foundProperty = propertiesData.Properties.find(data => data.name === relevantPropName);
                // const foundProperty = classData.classPropertyCategories.find(data => data.name === relevantPropName);
                // const foundProperty = GetPropertyDataByName(InClassData,relevantPropName)
                const foundProperty = GetPropertyDataByName(InClassData,relevantPropName)
                if (foundProperty) {
                    relevantProperties.push(foundProperty);
                    dataObjectName = foundProperty.object
                }
            });
        }
    }



    if (infoType === "struct" || infoType === "enum") {
        const result = Helpers.FindObjectByDataTypeAndName({
            dataType: infoType,
            objectName: infoObject,
            projectDataTypes: projectDataTypesData
        });

        if (!result.foundObject) {
            // console.log(infoType, info, dataObject)
            property = true
            infoTitle = "ERROR:::" + infoObject + " not Found  "
        }
        else {
            dataObjectName = result.foundObject.name
            dataObjectType = infoType
            if (result.foundObject.data.length > 0) {
                if (typeof info.relevantProperties !== 'undefined') {
                    info.relevantProperties.forEach(relevantPropName => {
                        const foundProperty = GetPropertyDataByName(InClassData,relevantPropName)
                        if (foundProperty) {
                            relevantProperties.push(foundProperty);
                        }
                    });
                }
                else {
                    relevantProperties = result.foundObject.data;
                }
            }

            if (typeof infoTitle == 'undefined') {
                infoTitle = result.foundObject.data.name;
            }
        }
    }
    if (infoType === "struct") {
        property = true
        infoTitle = ""
    }

    // console.log(infoTitle, relevantProperties, property)
    return (
        <>
          {!property ? (
            // ─── NO PROPERTY: “else” branch ────────────────────────────
            <div className={styles.propertyInfoGridContainer}>
              <div
                className={styles.propertyGrid}
                style={{ background: count % 2 === 0 ? '#220000' : '#140000' }}
              >
                <div className={styles.firstInfoCell}>
                  <div
                    className={styles.propertyTitle}
                    style={{ gridArea: '1 / 1 / span 2 / span 1', alignSelf: 'center' }}
                  >
                    {info.infoName}
                  </div>
                </div>
                <div className={styles.secondInfoCell} style={{ display: 'grid' }}>
                  <div className={styles.propertyInfoDescription}>{info.description}</div>
                </div>
                {info.comments?.length > 0 && (
                  <div
                    style={{
                      borderBottom: 'double',
                      borderColor: '#470000',
                      padding: '10px',
                      gridArea: '3 / 1 / span 1 / span 3',
                    }}
                  >
                    {info.comments.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            // ─── PROPERTY EXISTS: “if” branch ──────────────────────────
            <>
              {/* ── HEADER (only when infoTitle has content) ── */}
              {infoTitle?.trim() && (
                <div className={styles.propertyInfoHeader}>
                  <div className={styles.propertyInfoName}>{infoTitle}</div>
                  {/* Uncomment if you need type/name */}
                  {/* {dataObjectName && (
                    <div className={styles.propertyInfoType}>
                      {dataObjectType} :: {dataObjectName}
                    </div>
                  )} */}
                </div>
              )}
      
              {/* ── DESCRIPTION (only when you showed the title) ── */}
              {infoTitle?.trim() && infoDescriptionSet && (
                <div className={styles.propertyInfoShortTitleDescription}>
                  {infoDescription.map((comment, idx) => (
                    <div key={idx}>{comment}</div>
                  ))}
                </div>
              )}
      
              {/* ── GRID OF RELEVANT PROPERTIES ── */}
              <div className={styles.propertyInfoGridContainer}>
                {relevantProperties.map((relatedProp, idx) => (
                  <div
                    key={idx}
                    className={styles.propertyGrid}
                    style={{
                      background: idx % 2 === 0 ? '#220000' : '#140000',
                    }}
                  >
                    <Tooltip
                      text="Relevant Property"
                      style={{
                        gridArea: '1 / 1 / span 1 / span 2',
                        gridTemplateRows: 'auto auto',
                        gridTemplateColumns: '70% 30%',
                        alignContent: 'center',
                        border: '1px solid #470000',
                        justifyItems: 'left',
                      }}
                    >
                      <div className={styles.firstInfoCell}>
                        <div className={styles.propertyTitle}>{relatedProp.name}</div>
                        <div className={styles.propertyDefault}>
                          {relatedProp.defaultValue}
                        </div>
                        <div className={styles.propertyType}>
                          {relatedProp.dataType}
                        </div>
                      </div>
                    </Tooltip>
      
                    <div className={styles.secondInfoCell} style={{ display: 'grid' }}>
                      <div className={styles.propertyInfoDescription}>
                        {relatedProp.description}
                      </div>
                    </div>
      
                    {relatedProp.comments?.length > 0 && (
                      <div
                        style={{
                          borderBottom: 'double',
                          borderColor: '#470000',
                          padding: '10px',
                          gridArea: '3 / 1 / span 1 / span 4',
                        }}
                      >
                        {relatedProp.comments.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      );
      
};


export default function Properties({
    className,
    datatypes,
    classes,
    projectSpecific,
  }) {
    // Synchronously derive the right class data every render
    // classData = classes.Classes.find(s => s.className === className);

    // classesData = classes
     projectSpecificData = projectSpecific
     projectDataTypesData = datatypes
  
    // if (!classData) {
    //   return (
    //     <section>
    //       <div className="container">
    //         <div className="row">No data found for “{className}”.</div>
    //       </div>
    //     </section>
    //   );
    // }
  
    return (
      <section>
        <div className="container">
          <div className="row" style={{ display: 'grid' }}>
            {/* key here is optional now—you’re remounting via prop lookup */}
            <PropertyRender
              className={className}
              datatypes={datatypes}
              classes={classes}
              projectSpecific={projectSpecific}
            />
          </div>
        </div>
      </section>
    );
  }