/*
 * @Author: Nokey 
 * @Date: 2017-07-13 18:03:17 
 * @Last Modified by:   Nokey 
 * @Last Modified time: 2017-07-13 18:03:17 
 */
'use strict'; 

var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));