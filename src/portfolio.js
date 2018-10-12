import React, { Component } from 'react';


// const selectorForEmptyDiv = 'my-div';
const welcome = 'Welcome to my Portfolio';

class Portfolio extends Component {
  render() {
    const len = welcome.length;
    return (
      <div>{ welcome }{ len }</div>
    );
  }
}

export default Portfolio;
