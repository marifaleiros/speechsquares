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

    setVoice(voiceUri) {
        if (!this.voices || this.voices.lenght === 0)
            return false;
        this.voice = this.voices.filter((v, i, a) => v.voiceURI === voiceUri)[0];
        return true;
    }

    setRate(rate) {
        if (rate)
            this.rate = rate;
    }

    getVoices() {
        return this.voices;
    }

    speak(text) {
        const couldSetVoice = this.setVoice(this.voiceUri);
        if (!couldSetVoice)
            return false;

        const utter = new SpeechSynthesisUtterance(text);
        utter.voice = this.voice;
        utter.rate = this.rate;
        this.synth.speak(utter);
        return true;
    }

    getSelectedVoice() {
        return this.voice;
    }
}

const synth = new Synth();
export default synth;