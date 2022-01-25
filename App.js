import React from 'react';
import Foo from './component/Foo';

const domContainer = document.querySelector('react_container');
console.log('first');
ReactDOM.render(React.createElement(Foo), domContainer);

export default App;
