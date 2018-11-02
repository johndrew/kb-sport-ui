import React, { Component } from 'react';
import Modal from 'react-modal';

const styles = {
    content: {
        'backgroundColor': '#3d3d3d',
    }
}

export default class ModalWrapper extends Component {

    render() {

        return (
            <Modal
                isOpen={this.props.open}
                style={styles}
                ariaHideApp={false} /** TODO: Remove and make accessible */>
                <span
                    className="modalWrapper__closeButton"
                    onClick={this.props.closeModal}>
                    X
                </span>
                {this.props.children}
            </Modal>
        );
    }
}