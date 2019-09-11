class Synth {
    constructor() {
        this.rate = 0;
        this.voiceUri = "Google português do Brasil";
        this.synth = window.speechSynthesis;
        this.synth.onvoiceschanged = function () {
            this.voices = this.synth.getVoices();
            this.setVoice(this.voiceUri);
            if (this.onVoicesChanged)
                this.onVoicesChanged();
        }.bind(this);
    }

    setVoiceUri(voiceUri) {
        this.voiceUri = voiceUri;
    }

    setVoice(voiceUri){
        this.voice = this.voices.filter((v, i, a) => v.voiceURI === voiceUri)[0];
    }

    setRate(rate) {
        if (rate)
            this.rate = rate;
    }

    getVoices() {
        return this.voices;
    }

    speak(text) {
        this.setVoice(this.voiceUri);
        const utterThis = new SpeechSynthesisUtterance(text);
        utterThis.voice = this.voice;
        this.synth.speak(utterThis);
    }

    getSelectedVoice() {
        return this.voice;
    }
}

const synth = new Synth();
export default synth;