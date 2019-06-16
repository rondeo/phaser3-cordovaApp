import GameManager from '../data/GameManager';
import SimpleButton from '../class/SimpleButton';
import CONST from '../data/const';

export default class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  create(){
    // Define our objects
    console.log(`Ready SceneMain! ${GameManager.signature}`);
    GameManager.emitter.on(
      'event:clickStart', this.clickStart.bind(this)
    );
    GameManager.emitter.on(
      'event:move', this.doMove.bind(this)
    );

    this.startBtn = new SimpleButton(
      this,
      GameManager.width * .5,
      GameManager.height * .3,
      'logo',
      'event:clickStart'
    );
    this.startBtn.setScale(.5);

    new SimpleButton(
      this,
      GameManager.widthCenter * .5,
      GameManager.heightCenter + 200,
      'buttonArrow',
      'event:move',
      'left'
    );

    let rightBtn = new SimpleButton(
      this,
      GameManager.widthCenter + GameManager.widthCenter * .5,
      GameManager.heightCenter + 200,
      'buttonArrow',
      'event:move',
      'right'
    );
    rightBtn.flipX = true;

    this.add.text(
      GameManager.widthCenter,
      GameManager.heightCenter,
      "Welcome to Workshop\nFROM ZERO TO\nPHAS3R!", {
        color: 'black',
        font: `bold ${CONST.fonts.big} ${CONST.fonts.default[1]}`
      })
    .setOrigin(0.5)
    .setAlign('center');
    this.add.text(1, GameManager.height - 15, "RPLGDC@2019", {color: 'black'});
  }

  clickStart(){
    console.log('Hello world!');
  }

  doMove(param){
    switch (param) {
      case 'left':
          this.startBtn.x -= 10;
        break;
      case 'right':
          this.startBtn.x += 10;
        break;
      default:
        console.log('None');
    }
  }

  update(){
    // Running loop
  }
}
