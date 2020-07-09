import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {
    render() {
        return (
        <div className="tc">
            <h1 className="f1">Hello World</h1>
            <p>Start using React</p>
            <p>{this.props.extra} </p>
        </div>
        )
    };
}

export default Hello