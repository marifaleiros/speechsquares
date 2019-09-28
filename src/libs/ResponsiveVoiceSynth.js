class ResponsiveVoiceSynth {
    constructor() {
        this.rate = 0;
        this.voiceUri = "Portuguese Male";
        this.synth = window.responsiveVoice;
       
        this.synth.enableWindowClickHook(); //forces voices to load on mobile
        this.synth.clickEvent();
    }

    setVoiceUri(voiceUri) {
        this.voiceUri = voiceUri;
    }

    setVoice(voiceUri) {
        if (!this.voices || this.voices.lenght === 0) {
            this.voices = this.synth.getVoices();
        }
        try {
            this.voice = this.voices.filter((v, i, a) => v.voiceURI === voiceUri)[0];
            return true;
        }
        catch{
            return false;
        }
    }

    setRate(rate) {
        if (rate)
            this.rate = rate;
    }

    getVoices() {
        if (!this.voices || this.voices.lenght === 0) {
            this.voices = this.synth.getVoices();
        }
        return this.voices;
    }

    speak(text, volume) {
        const couldSetVoice = this.setVoice(this.voiceUri);
        if(!couldSetVoice)
            console.error("Could not set voice");

        try {
            this.synth.setDefaultVoice(this.voiceUri);
            this.synth.speak(text, this.voiceUri, {rate: this.rate, volume: volume});
            return true;
        }
        catch{
            return false;
        }
    }

    isSupported() {
        return this.synth.voiceSupport();
    }

    getSelectedVoice() {
        return this.voice;
    }
}

const synth = new ResponsiveVoiceSynth();
export default synth;