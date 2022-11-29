import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

class Modal extends React.Component {
    closeModal = event => {
        if (event.currentTarget === event.target || event.code === 'Escape') {
        this.props.closeModal();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.closeModal);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModal);
    }

    render() {
        return createPortal (
            <div  className={css.Overlay} onClick={this.closeModal}>
                <div  className={css.Modal}>
                    <img src={this.props.url} alt="" />
                </div>
            </div>,
            document.querySelector('#root')
        );
    }
}

Modal.prototypes = {
    url: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default Modal;