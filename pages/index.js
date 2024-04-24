// pages/properties.js
import React from 'react';
import Property from '../components/Unreal/Inspector/Property';
import Node from '../components/Unreal/BP/BP';
import LXR_Nodes from '../components/Unreal/LXR/LXR_Nodes';
import LXR_Properties from '../components/Unreal/LXR/LXR_Properties';
import LXR_DataTypes from '../components/Unreal/LXR/LXR_DataTypes';

const PropertiesPage = () => {
  return (
    <div style={{ background: 'black' }}>
      <div style={{
        alignContent: 'center',
        background: '#850000',
        boxShadow: 'inset 0px 0px 10px 5px',
        border: 'solid #5f5f5f'
      }}>

        <h1 style={{
          color: "white",
          textAlign: 'center',
          fontSize: 'xx-large'
        }}> This page will always show the current state of the  main branch generator and the results it generates </h1>
      </div>

      <div style={{ height: '25px',
        background: '#3f3f3f' }}>
        </div>
      <div style={{
        alignContent: 'center',
        background: '#850000',
        boxShadow: 'inset 0px 0px 10px 5px',
        border: 'solid #5f5f5f'
      }}>
        <h1 style={{
          color: "white",
          textAlign: 'center',
        }}>Properties</h1>

      </div>
      <div style={{ height: '25px',
        background: '#3f3f3f' }}>
        </div>
      <Property className="Detection Component" properties={LXR_Properties} dataTypes={LXR_DataTypes} />
      <br></br>
      <div style={{ height: '25px',
        background: '#3f3f3f' }}>
        </div>
      <div style={{
        alignContent: 'center',
        background: '#850000',
        boxShadow: 'inset 0px 0px 10px 5px',
        border: 'solid #5f5f5f'
      }}>
        <h1 style={{
          color: "white",
          textAlign: 'center',
        }}>Nodes</h1>
      </div>

      <div style={{ height: '25px',
        background: '#3f3f3f' }}>
        </div>
      <Node className="Memory Component" nodes={LXR_Nodes} dataTypes={LXR_DataTypes} />

      <div style={{ height: '50px',
        background: '#3f3f3f' }}>
        </div>
      <Node className="Detection Component" nodes={LXR_Nodes} dataTypes={LXR_DataTypes} />

      <div style={{ height: '50px',
        background: '#3f3f3f' }}>
        </div>
      <Node className="Query LXR Task" nodes={LXR_Nodes} dataTypes={LXR_DataTypes} />



    </div>

  );
};

export default PropertiesPage;
