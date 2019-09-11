import React from 'react';
import Modal from '@material-ui/core/Modal';
import './SettingsModal.css'
import synth from '../../libs/Synth'

class SettingsModal extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedVoice: synth.getSelectedVoice()
        };
    }
    render() {
        const voices = synth.getVoices();
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.isOpen}
                onClose={this.props.closeModal}>
                <div className="settingsModal bg-near-white pa4 mt6 ba bw4 w-50 center">
                    <h2 id="simple-modal-title">Settings</h2>

                    <label htmlFor="voicesSelect">Voice</label><br/>
                    <select id="voicesSelect" c
                        className="f6 f5-l bn black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                        value={this.state.selectedVoice}
                        onChange={this.changeSelectedVoice}>
                        {voices && voices.map(v => (
                            <option key={v.voiceUri} value={v.voiceUri}>{v.name}</option>
                        ))}
                    </select>
                    <br/><br/><br/>
                    <label htmlFor="rate">Rate</label><br/>
                    <input id="rate"
                        className="f6 f5-l bn black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                        type="number"
                        min="-10"
                        max="10" />
                </div>
            </Modal>);
    }

    changeSelectedVoice = (e) => {
        const voice = e.target.value;
        synth.setVoice(voice);
        this.setState({selectedVoice: voice});
    }
};

export default SettingsModal;