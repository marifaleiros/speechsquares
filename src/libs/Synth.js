class Synth {
    constructor() {
        this.synth = window.speechSynthesis;
        this.synth.onvoiceschanged = function() {
            const voices = this.synth.getVoices();
            console.log(voices);
            const voiceUri = "Google português do Brasil"
            this.voice = voices.filter((v, i, a) => v.voiceURI === voiceUri)[0];
        }.bind(this);
    }

    speak(text) {
        const utterThis = new SpeechSynthesisUtterance(text);
        utterThis.voice = this.voice;
        this.synth.speak(utterThis);
    }
}

const synth = new Synth();
export default synth;