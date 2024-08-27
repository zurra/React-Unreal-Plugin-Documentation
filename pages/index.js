// pages/properties.js
import React from 'react';
import Property from '../components/Unreal/Inspector/Property';
import Node from '../components/Unreal/BP/BP';
import LXR_Classes from '../components/Unreal/Project/Classes';
import LXR_Nodes from '../components/Unreal/Project/Nodes';
import LXR_Properties from '../components/Unreal/Project/Properties';
import LXR_DataTypes from '../components/Unreal/Project/DataTypes';
import Tooltip from '../components/tooltip';

const PropertiesPage = () => {
  return (

    <div style={{ background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgb(22, 0, 0) 50%, rgba(15,0,0,1) 100%)' }}>
      <div style={{
        alignContent: 'center',
        background: '#850000',
        boxShadow: 'inset 0px 0px 10px 5px',
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
      }}>
        <h1 style={{
          color: "white",
          textAlign: 'center',
        }}>Properties</h1>

      </div>
      <div style={{ height: '25px',
        background: '#3f3f3f' }}>
        </div>
      <Property className="LXRDetectionComponent" classes={LXR_Classes} datatypes={LXR_DataTypes}  />
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
        }}>
        </div>
      <Node className="LXRMemoryComponent" nodes={LXR_Classes} datatypes={LXR_DataTypes} />

      <div style={{ height: '50px',
        }}>
        </div>
      <Node className="LXRDetectionComponent" nodes={LXR_Classes} datatypes={LXR_DataTypes} />

      {/*<div style={{ height: '50px',
        }}>
        </div>
      <Node className="QueryLXRTask" nodes={LXR_Nodes} datatypes={LXR_DataTypes} /> */}



    </div>
  );
};

export default PropertiesPage;
