import React, { Component } from 'react';
import Box from '../Box/Box';
import './AddBox.scss';

export default class AddBox extends Component {

    constructor(args) {
        
        super(args);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {

        return (
            <Box>
                <p className="addBox__plus" onClick={this.handleClick}>+</p>
            </Box>
        );
    }

    handleClick() {

        this.props.addClicked();
    }
}