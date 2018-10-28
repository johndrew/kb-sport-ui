import React, { Component } from 'react';
import Modal from 'react-modal';

const styles = {
    content: {
        'backgroundColor': '#3d3d3d',
    }
}

export default class ModalWrapper extends Component {

    constructor(args) {

        super(args);

        this.state = {
            modalOpen: this.props.open != null ? this.props.open : false,
        };
    }

    closeModal() {

        this.setState({
            modalOpen: false,
        });
    }

    render() {

        return (
            <Modal
                isOpen={this.state.modalOpen || this.props.open}
                onRequestClose={this.closeModal}
                style={styles}
                ariaHideApp={false} /** TODO: Remove and make accessible */>
                {this.props.children}
            </Modal>
        );
    }
}