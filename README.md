# Git
1.Create a Git repository in github
2.Run "git init" in vscode terminal to make it as a git repository.
3.Run "git branch -M main"
4.Run "git add ."
5.Run "git commit -m "ep-01""
6.Run "git remote add origin https://github.com/bobcode4/namastereact2.0.git"
7.Run "git push origin main"

# npm
A standard repository for all the utilities, packages, libraries
Run npm init
package.json is a configuration for your npm

# parcel
npm install parcel
npx parcel index.html -> opens localhost

# react
npm install react
npm install react-dom
npm install react-router-dom
import React from "react"
import ReactDOM from "react-dom/client"

# package.json
"scripts": {
    "start": "parcel index.html",
    "build" : "parcel build index.html",
    "test": "jest"
  }

# Tailwind CSS
TERMINAL
    npm install -D tailwindcss postcss
    npx tailwindcss init
CREATE .postcssrc file in project root
    {
      "plugins": {
        "tailwindcss": {}
      }
    }
tailwind.config.js
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

# JSX # Babel
Babel converts JSX to React code so that browsers can understand Html,Js
JSX => React.createElement => a JS Object => DOM => Html

# React Context
import {createContext} from "react";
const AnyContext = createContext({
  userName : "Default User",
});
export default AnyContext;

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux 
- npm install @reduxjs/toolkit
- npm install react-redux
- Build our redux store
- Connect the store to our app 
- slice(Cart slice)
- dispatch(action)
- Selector


- import { configureStore } from "@reduxjs/toolkit";





# React Testing Library
- Jest
npm install -D @testing-library/react
npm install -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
babel.config.js 
  module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
.parcelrc
    {
      "extends": "@parcel/config-default",
      "transformers": {
        "*.{js,mjs,jsx,cjs,ts,tsx}": [
          "@parcel/transformer-js",
          "@parcel/transformer-react-refresh-wrap"
        ]
      }
    }

so that babel in parcel doesnot conflict with the babel that we configured
npx jest --init
npm install -D jest-environment-jsdom
npm i -D @babel/preset-react to make jsx work in test cases
include @babel/preset-react inside my babel.config.js
npm i -D @testing-library/jest-dom


