import Phaser from 'phaser'


export default class BasicScene extends Phaser.Scene {

	create() {
		let debugGraphics = new Phaser.GameObjects.Graphics(this, { x: 0, y: 0 })
		debugGraphics.lineStyle(1, 0x33ff33, 1)
		debugGraphics.fillStyle(0x555555, 1)

		let squarePoints = [
			{ x: 1, y: 1 },
			{ x: 101, y: 1 },
			{ x: 101, y: 101 },
			{ x: 1, y: 101 }
		]

		debugGraphics.strokePoints(squarePoints, true, true)
		debugGraphics.fillPoints(squarePoints, true, true)
		debugGraphics.generateTexture('square')
		// debugGraphics.destroy()

		this.add.sprite(200, 100, 'square')
	}

}
