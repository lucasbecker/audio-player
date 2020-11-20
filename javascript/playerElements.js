import { secondsToMinutes } from './utils.js';

export default {
  set() {
  this.cover = document.querySelector('.card-image');
  this.title =document.querySelector('.card-content h5');
  this.artist = document.querySelector('.card-content .details .artist');
  this.moreDetails = document.querySelector('.card-content .details .more');
  this.playPause = document.querySelector('#play-pause');
  this.nextBtn = document.querySelector('#next');
  this.previousBtn = document. querySelector('#previous');
  this.vol = document.querySelector('#vol');
  this.volControl = document.querySelector('#vol-control');
  this.seekBar = document.querySelector('#seekbar');
  this.currentDuration = document.querySelector('#current-duration');
  this.totalDuration = document.querySelector('#total-duration');
  },
  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  actions() {
    this.audio.onended = () => this.next();
    this.audio.ontimeupdate = () => this.timeUpdate();
    this.playPause.onclick = () => this.togglePlayPause();
    this.nextBtn.onclick = () => this.handleNext();
    this.previousBtn.onclick = () => this.handlePrevious();
    this.vol.onclick = () => this.toggleMute();
    this.volControl.oninput = () => this.setVolume(this.volControl.value);
    this.volControl.onchange = () => this.setVolume(this.volControl.value);
    this.seekBar.oninput = () => this.setSeek(this.seekBar.value);
    this.seekBar.onchange = () => this.setSeek(this.seekBar.value);
    this.seekBar.max = this.audio.duration;
    this.totalDuration.innerHTML = secondsToMinutes(this.audio.duration);
  }
}