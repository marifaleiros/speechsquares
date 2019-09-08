import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './SettingsModal.css'
import synth from '../../libs/Synth'

class SettingsModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const selectedVoice = synth.getSelectedVoice();
        const voices = synth.getVoices();
        console.log(voices);
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.isOpen || false}
                onClose={this.props.closeModal}>
                <div className="settingsModal">
                    <h2 id="simple-modal-title">Settings</h2>
                    <TextField
                        select
                        label="Select"
                        value={selectedVoice}
                        onChange={this.changeVoice}
                        helperText="Please select the synthesizer language"
                        margin="normal"
                        variant="filled"
                    >
                        {voices && voices.map(option => (
                        <MenuItem key={option.voiceUri} value={option.voiceUri}>
                            {option.name}
                        </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Modal>);
    }

    changeVoice = (e) => {
        console.log(e);
    }
   
};

export default SettingsModal;