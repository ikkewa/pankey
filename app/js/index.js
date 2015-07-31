
var dom = require('component-dom');
var domready = require('domready');
var Howl = require('howler').Howl;

var sound = new Howl({
  urls: ['assets/sprite.mp3', 'assets/sprite.ogg'],
  sprite: {
    danke: [0, 416],
    hallo: [1000, 560],
    busen: [2000, 500],
    watt: [3000, 120],
    ahjo: [3500, 630],
    ehm: [4500, 830]
  }
});

var mapKey2Sound = {
  65: 'danke',
  87: 'hallo',
  83: 'busen',
  69: 'watt',
  68: 'ahjo',
  82: 'ehm',
  70: 'danke',
  84: 'hallo',
  71: 'busen',
  90: 'watt',
  72: 'ahjo',
  85: 'ehm',
  74: 'danke',
  73: 'hallo',
  75: 'busen',
  79: 'watt',
  76: 'ahjo'
};

domready(function() {
  dom('.key').on('click', onKeyClick);
  window.addEventListener('keyup', function(e) {
    var key = String(e.keyCode);
    dom('.key[data-key="' + key + '"]').removeClass('press');
  }, false);

  window.addEventListener('keydown', function(e) {
    var key = String(e.keyCode);
    dom('.key[data-key="' + key + '"]').addClass('press');
    playSound(key);
  }, false);

  function onKeyClick(e) {
    var key = dom(e.target).attr('data-key');
    playSound(key);
  }

  function playSound(keyCode) {
    sound.play(mapKey2Sound[keyCode]);
  }
});
