class Synth {
    constructor() {
        this.rate = 0;
        this.voiceUri = "Google português do Brasil";
        this.synth = window.speechSynthesis;
        this.synth.onvoiceschanged = function () {
            console.log('voices changed');
            this.voices = this.synth.getVoices();
            console.log(this.voices);
            this.setVoice(this.voiceUri);
            if (this.onVoicesChanged)
                this.onVoicesChanged();
        }.bind(this);
        this.speak("hi", 0); //forces voices to load on mobile
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
        return this.voices;
    }

    speak(text, volume) {
        const couldSetVoice = this.setVoice(this.voiceUri);
        if(!couldSetVoice)
            console.error("Could not set voice");

        try {
            const utter = new SpeechSynthesisUtterance(text);
            utter.voice = this.voice;
            utter.rate = this.rate;
            if (volume !== undefined)
                utter.volume = volume
            this.synth.speak(utter);
            return true;
        }
        catch{
            return false;
        }
    }

    isSupported() {
        return ('speechSynthesis' in window);
    }

    getSelectedVoice() {
        return this.voice;
    }
}

const synth = new Synth();
export default synth;