import Phaser from 'phaser'
import Scene from './scene'


const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

new Phaser.Game({
	type: Phaser.CANVAS,
	canvas,
	width: 400, height: 200,
	scene: [Scene]
})
