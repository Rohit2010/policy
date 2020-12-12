import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import App from './App'

const Web = () => {
  return(
    <BrowserRouter>
    <App />
    </BrowserRouter>
  );
};


ReactDOM.render( <Web />,document.getElementById('root'));