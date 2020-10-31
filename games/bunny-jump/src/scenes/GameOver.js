import Phaser from '../lib/phaser.js'

export default class GameOver extends Phaser.Scene
{
    constructor()
    {
        super('game-over')
    }
    preload()
    {
        this.load.audio('sadge', 'assets/sfx/lowRandom.ogg')
    }
    create()
    {
        const width = this.scale.width
        const height = this.scale.height

        this.add.text(width * 0.5, height * 0.5, 'Game Over\nPress Space', {
            fontSize: 48
        }).setOrigin(0.5)

        this.sound.play('sadge')

        this.input.keyboard.once('keydown_SPACE', () => {
            this.scene.start('game')
        })
    }
}