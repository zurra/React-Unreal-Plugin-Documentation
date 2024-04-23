// pages/properties.js
import React from 'react';
import Property from '../components/Unreal/Inspector/Property';
import Node from '../components/Unreal/BP/BP';
import LXR_Nodes from '../components/Unreal/LXR/LXR_Nodes';
import LXR_Properties from '../components/Unreal/LXR/LXR_Properties';
import LXR_DataTypes from '../components/Unreal/LXR/LXR_DataTypes';

const PropertiesPage = () => {
  return (
    <div style={{background: 'black'}}>
      <h1>Properties</h1>
      <Property className="Detection Component" properties={LXR_Properties} dataTypes={LXR_DataTypes}/>
      <br></br>

      <h1>Nodes</h1>
      <Node className="Memory Component" nodes={LXR_Nodes} dataTypes={LXR_DataTypes}/>
    </div>
    
  );
};

export default PropertiesPage;
