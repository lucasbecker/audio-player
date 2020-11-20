import player from './player.js';

document
  .querySelectorAll('#player .some-controls a, #player #custom-control a')
  .forEach( link => link.addEventListener( 'click', e => e.preventDefault() ) );


window.addEventListener('load', () => player.start());
