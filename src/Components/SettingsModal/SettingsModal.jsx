import React from 'react';
import Modal from '@material-ui/core/Modal';
import './SettingsModal.css'
import synth from '../../libs/Synth'

class SettingsModal extends React.Component {

    render() {
        const selectedVoice = synth.getSelectedVoice();
        const voices = synth.getVoices();
        console.log(voices);
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.isOpen}
                onClose={this.props.closeModal}>
                <div className="bg-near-white pa4 mt6 ba bw4 w-50 center">
                    <h2 id="simple-modal-title">Settings</h2>
                    <select  value={selectedVoice && selectedVoice.name} onChange={this.changeSelectedVoice}>
                    {voices && voices.map(v => (
                        <option key={v.voiceUri} value={v.voiceUri}>{v.name}</option>
                    ))}
                    </select>
                </div>
            </Modal>);
    }

    changeSelectedVoice = (e) => {
        console.log(e);
    }
};

export default SettingsModal;