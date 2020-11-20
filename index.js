import audios from './data.js';
import element from './playerElements.js';
import { secondsToMinutes } from './utils.js';

const player = {
  listData: audios,
  currentData: {},
  currentCount: 0,
  isPlaying: false,
  start() {
    element.set.call(this);
    this.update();
  },
  play() {
    this.isPlaying = true;
    this.audio.play();
    this.playPause.innerHTML = `pause`;
  },
  pause() {
    this.isPlaying = false;
    this.audio.pause();
    this.playPause.innerHTML = `play_arrow`;
  },
  togglePlayPause() {
    if(this.isPlaying) {
      this.pause();
    }else {
      this.play();
    }
  },
  toggleMute(){
    this.audio.muted = !this.audio.muted;

    if(this.audio.muted){
      this.vol.innerHTML = 'volume_off';
    } else {
      this.setVolume(this.volControl.value);
    }

  },
  setVolume(value) {
    this.audio.volume = value / 100;

    if(value == 0){
      this.vol.innerHTML = 'volume_mute';
    }else if(value < 50) {
      this.vol.innerHTML = 'volume_down';
    }else {
      this.vol.innerHTML = 'volume_up';
    }
  },
  setSeek(value){
    this.audio.currentTime = value;
  },
  timeUpdate(){
    this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
    this.seekBar.value = this.audio.currentTime;
  },
  update() {
    this.currentData = this.listData[this.currentCount];
    this.cover.style.background = `url('${this.currentData.cover}') no-repeat center center / cover`;
    this.title.innerText = this.currentData.title;
    this.artist.innerHTML = `<i class='material-icons'>keyboard_voice</i> ${this.currentData.artist}`;
    element.createAudioElement.call(this, this.currentData.file);
    
    this.audio.onloadeddata = () => {
      element.actions.call(this);
    }
  },
  next() {
    this.currentCount++;
    if(this.currentCount === this.listData.length) this.restart();
    this.update();
    this.play();
  },
  restart() {
    this.currentCount = 0;
    this.update();
  }
}

window.addEventListener('load', player.start());