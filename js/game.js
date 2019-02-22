
// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');

// our game's configuration
let config = {
type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
width: 800, // game width
height: 600, // game height
scene: gameScene // our newly created scene
};

// reate the game, and pass it the configuration
let game = new Phaser.Game(config);

gameScene.init = function(){
    this.playerSpeed = 1.5;
    this.cursors = this.input.keyboard.createCursorKeys();
    
};

// Load asset files for our game
gameScene.preload = function () {

    // Load images
    //this.load.image('llamas', 'Assets/llamaPlayer.png');
    this.load.image('bg', 'Assets/img/bg.png');

    //Load game spritesheets      
    this.load.spritesheet('player', 'Assets/img/llamaSprite.png',
    { frameWidth: 129.083, frameHeight: 162 });

    //Load game audio
    this.load.audio('levelTheme', ['assets/sound/levelTheme.mp3']);

};

// Executed once, after assets were loaded
gameScene.create = function () {

    //Background definitions
    let bg = this.add.sprite(0, 0, 'bg');
    bg.setScale(2);

    //Player definitions
    this.player = this.add.sprite(400, 300, 'llamas');
    this.player.setScale(0.7);
    //this.player.anchor.setTo(0.5);

    //Animations Definitions
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: -1
    });

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
        frameRate:5 ,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
        frameRate:5 ,
        repeat: -1
    });

    //Create game audio
    this.levelTheme = this.sound.add('levelTheme');

    //Playing game audio
    this.levelTheme.play();

};

gameScene.update = function () {
    

    /*if (this.input.activePointer.isDown){
        //player walks
        this.player.x += this.playerSpeed;
    }*/

    
    
    //Player Controls

        if (this.cursors.left.isDown)
    {
        this.player.x -=this.playerSpeed;

        this.player.anims.play('left', true);
    }
    
    else if (this.cursors.right.isDown)
    {
        this.player.x += this.playerSpeed;

        this.player.anims.play('right', true);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.y -= this.playerSpeed;

       this.player.anims.play('up', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.y += this.playerSpeed;

       // player.anims.play('right', true);
    }
    
    else if (!this.cursors.left.isDown)
    {
        this.player.anims.play('left', false);
    }
    else if (!this.cursors.right.isDown)
    {
        this.player.anims.play('right', false);
    }
    
   
}