import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor(){
        super()
        this.state = {
            name: "world"
        }
    }

    render(){
        return <h1>hello {this.state.name}</h1>
    }
}

export default HelloWorld