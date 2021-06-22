import Phaser from 'phaser'


export default class BasicScene extends Phaser.Scene {

	create() {
		let debugGraphics = new Phaser.GameObjects.Graphics(this, { x: 0, y: 0 })
		debugGraphics.lineStyle(1, 0x33ff33, 1)
		debugGraphics.fillStyle(0xff0000, 1)

		let squarePoints = [
			{ x:   1, y:   1 }, // top-left
			{ x: 101, y:   1 }, // top-right
			{ x: 101, y: 101 }, // bottom-right
			{ x:   1, y: 101 }  // bottom-left
		]

		debugGraphics.strokePoints(squarePoints, true, true)
		debugGraphics.fillPoints(squarePoints, true, true)
		debugGraphics.generateTexture('square')
		// debugGraphics.destroy() // this was suggested as a fix; it has no impact on the problem

		this.add.sprite(200, 100, 'square') // these are bad coords!
		// this.add.sprite(0, 0, 'square') // these coords render the square offscreen, but should be the top-left
	}

}
