const Phaser = require("phaser");

const eruda = require("eruda");
eruda.init();

const WIDTH = 720;
const HEIGHT = 1280;

const config = {
	scale: {
		parent: 'phaser-game',
		mode: Phaser.Scale.ENVELOP,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		autoRound: true,
		width: WIDTH,
		height: HEIGHT,
	},
	type: Phaser.AUTO,
	scene: {
		preload: preload,
		create: create
	}
}

function preload() {
	this.load.image('melody', 'images/melody.png');
}

function create() {
	var img = this.add.image(0,0,'melody').setOrigin(0,0)
}

window.addEventListener('load', () => {
	let game = new Phaser.Game(config)
})