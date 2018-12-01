import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';

import './ModalWrapper.scss';

const styles = {
    content: {
        'backgroundColor': '#3d3d3d',
    }
}

export default class ModalWrapper extends Component {

    constructor(args) {
    
        super(args);
    
        this.state = {
            modalOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render() {

        return (
            <Fragment>
                {this.props.triggerComponent({ open: this.openModal })}
                <Modal
                    isOpen={this.state.modalOpen}
                    style={styles}
                    ariaHideApp={false} /** TODO: Remove and make accessible */>
                    <span
                        className="modalWrapper__closeButton"
                        onClick={this.closeModal}>
                        X
                    </span>
                    <div className="modalWrapper__container">
                        {this.props.children({ close: this.closeModal })}
                    </div>
                </Modal>
            </Fragment>
        );
    }

    openModal() {
  
      this.setState({
        modalOpen: true,
      });
    }
  
    closeModal() {
  
      this.setState({
        modalOpen: false,
      });
    }
}