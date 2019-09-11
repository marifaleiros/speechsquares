import React from 'react';
import './Settings.css'
import synth from '../../libs/Synth'

class Settings extends React.Component {
    constructor(){
        super();
        synth.onVoicesChanged = this.onVoicesChanged;
        this.state = {
            voices: synth.getVoices()
        }
    }

    render() {
        console.log(this.state.voices);
        return (
            <div className="center mw8 cf bg-gold pa4">
                <div className="fl w-70">
                    <label htmlFor="voicesSelect">Voice</label><br />
                    <select id="voicesSelect"
                        className="f6 f5-l bn black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns"
                        value={this.props.selectedVoice}
                        onChange={this.props.onSelectedVoiceChanged}>
                        {this.state.voices && this.state.voices.map(v => (
                            <option key={v.voiceUri} value={v.voiceUri}>{v.name}</option>
                        ))}
                    </select>
                </div>
                <div className="fl w-30">
                    <label htmlFor="rate">Rate</label><br />
                    <input id="rate"
                        className="f6 f5-l bn black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns"
                        type="number"
                        value={this.props.rate}
                        onChange={this.props.onRateChanged}
                        min="-10"
                        max="10"/>
                </div>
            </div>
        );
    }

    onVoicesChanged = () =>{
        this.setState({voices: synth.getVoices()});
    }
};

export default Settings;