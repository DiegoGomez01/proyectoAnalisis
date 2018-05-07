
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    this.load.image('backdrop', 'assets/js/remember-me.jpg');
    this.load.image('baddie1', 'assets/js/shmup-baddie.png');
    this.load.image('baddie2', 'assets/js/shmup-baddie2.png');

}

var cursors;
function create() {
    game.world.setBounds(0, 0, 1920, 1200);

    game.add.sprite(0, 0, 'backdrop');

    //  Generate 100 random sprites

    for (var i = 0; i < 100; i++)
    {
        var s = game.add.sprite(game.rnd.between(800, 1100), game.world.randomY, 'baddie' + game.rnd.between(1, 2));
        game.physics.arcade.enable(s);
        s.body.velocity.x = game.rnd.between(-25, -50);
        s.autoCull = true;
        s.checkWorldBounds = true;
        s.events.onOutOfBounds.add(resetSprite, this);
    }

    cursors = game.input.keyboard.createCursorKeys();

}

function resetSprite(sprite) {

    sprite.x = game.world.bounds.right;

}

function update() {

    if (cursors.up.isDown)
    {
        game.camera.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
    }

    if (cursors.left.isDown)
    {
        game.camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
    }

}

function render() {

    game.debug.cameraInfo(game.camera, 32, 32);

}