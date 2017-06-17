import React from 'react';
import ReactDOM from 'react-dom';

// create new component
  // should produce html
const App = () => {
  return <div>Get fucked!</div>;
}


// take component's generated html and insert into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
