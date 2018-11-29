import React, { Component } from 'react';
import auth from '../hoc/auth'

class Quotes extends Component {

    render(){

        return (
            <div>
                <h1 className="center">Movie Quote</h1>
                <h5>Because he's the hero we need, but not the one we deserve</h5>
            </div>
        )
    }
}

export default auth(Quotes);