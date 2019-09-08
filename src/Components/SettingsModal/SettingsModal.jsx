import React from 'react';
import Modal from '@material-ui/core/Modal';
import './SettingsModal.css'

class SettingsModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.isOpen}
                onClose={this.props.closeModal}>
                <div className="settingsModal">
                    <h2 id="simple-modal-title">Text in a modal</h2>
                    <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                </div>
            </Modal>);
    }
};

export default SettingsModal;