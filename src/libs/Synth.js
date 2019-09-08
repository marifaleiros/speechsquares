class Synth {
    constructor() {
        this.synth = window.speechSynthesis;
        this.synth.onvoiceschanged = function () {
            this.voices = this.synth.getVoices();
            this.setVoice("Google português do Brasil");
        }.bind(this);
    }

    setVoice(voiceUri) {
        this.voice = this.voices.filter((v, i, a) => v.voiceURI === voiceUri)[0];
    }

    getVoices() {
        return this.voices;
    }

    speak(text) {
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