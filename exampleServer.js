import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
const Properties = require('./components/Unreal/Inspector/Property.js').default;
import LXR_Properties from './components/Unreal/LXR/LXR_Properties.js';
import LXR_DataTypes from './components/Unreal/LXR/LXR_DataTypes.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const propertyComponent = ReactDOMServer.renderToString(
      React.createElement(Properties, { className: 'Detection Component', properties: LXR_Properties, dataTypes: LXR_DataTypes })
    );
  
    res.send(`
      <html>
        <head>
          <title>React Component Example</title>
        </head>
        <body>
          <div id="root">${propertyComponent}</div>
        </body>
      </html>
    `);
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });