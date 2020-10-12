import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('');
  function getImpexFile() {
    const url = 'http://internal-d471ad54-qa01-beasqa01inte-8ada-587025982.us-west-2.elb.amazonaws.com/api/v1/hybris/impex';
    fetch('http://localhost:3002/impex').then((res) => {
      const body = res.json();
      body.then(data => {
        console.log('status code: ', data.body);
        setText(data.body);
        // document.getElementsByTagName('div').innerHTML = JSON.parseSdata;
      });
    }).catch(err => {
      console.log('errr::: ', err);
    });
  }

  return (
    <div className="App">
      <button onClick={getImpexFile}>Get File</button>
      <textarea readOnly style={{'width': '90%', 'height': '800px', 'border': '1px solid', 'margin': 'auto', padding: '20px', resize: 'none'}} value={text}>
      </textarea>
    </div>
  );
}

export default App;
