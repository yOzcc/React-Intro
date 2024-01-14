import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Default, {DefaultOlmayan(lar)} from "dosyaismi";
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// self closing tag => <img />
// normal tag => <a> </a>
root.render(<App></App>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
