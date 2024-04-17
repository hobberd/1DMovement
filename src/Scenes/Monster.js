class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.armRX = 410; 
        this.armLX = this.armRX - 220;
        this.armY = 430;
        this.legRX = 360; 
        this.legLX = this.legRX - 130;
        this.legY = 480;
        this.eyeRX = 345; 
        this.eyeLX = this.eyeRX - 90;
        this.eyeY = 325;

        this.mouthX = 300;
        this.mouthY = 370;

        
        
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() 
    {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        let arm = "arm_redD.png";
        let leg = "leg_darkD.png";
        let eye = "eye_psycho_light.png";
        let acc = "detail_white_antenna_small.png";
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redB.png");
        my.sprite.legRight = this.add.sprite(this.legRX, this.legY, "monsterParts", leg);
        my.sprite.legLeft = this.add.sprite(this.legLX, this.legY, "monsterParts", leg);
        my.sprite.armRight = this.add.sprite(this.armRX, this.armY, "monsterParts", arm);
        my.sprite.armLeft = this.add.sprite(this.armLX, this.armY, "monsterParts", arm);
        my.sprite.eyeRight = this.add.sprite(this.eyeRX, this.eyeY, "monsterParts", eye);
        my.sprite.eyeLeft = this.add.sprite(this.eyeLX, this.eyeY, "monsterParts", eye);
        my.sprite.accRight = this.add.sprite(this.eyeRX, this.eyeY-70, "monsterParts", acc);
        my.sprite.accLeft = this.add.sprite(this.eyeLX, this.eyeY-70, "monsterParts", acc);
        my.sprite.legLeft.flipX = true;
        my.sprite.armLeft.flipX = true;
        my.sprite.eyeLeft.flipX = true;
        my.sprite.accLeft.flipX = true;

        my.sprite.mouthS = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouthF = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthF.visible = false;



        
    }
    
    update() 
    {
        let my = this.my;    // create an alias to this.my for readability
        var s = this.input.keyboard.addKey("s").isDown;
        var f = this.input.keyboard.addKey("f").isDown;
        var a = this.input.keyboard.addKey("a").isDown;
        var d = this.input.keyboard.addKey("d").isDown;
        

        var X = [this.bodyX, this.armRX, this.legRX, this.eyeRX, this.mouthX];

        if(s)
        {
            my.sprite.mouthS.visible = true;
            my.sprite.mouthF.visible = false;
        }
        if(f)
        {
            my.sprite.mouthS.visible = false;
            my.sprite.mouthF.visible = true;
        }
        if(a)
        {
            my.sprite.body.x -= 1;
            my.sprite.armLeft.x -= 1; 
            my.sprite.armRight.x -= 1; 
            my.sprite.legLeft.x -= 1; 
            my.sprite.legRight.x -= 1; 
            my.sprite.accLeft.x -= 1; 
            my.sprite.accRight.x -= 1; 
            my.sprite.mouthS.x -= 1;
            my.sprite.mouthF.x -= 1;
            my.sprite.eyeLeft.x -= 1;
            my.sprite.eyeRight.x -= 1;
        }
        if(d)
        {
            my.sprite.body.x += 1;
            my.sprite.armLeft.x += 1; 
            my.sprite.armRight.x += 1; 
            my.sprite.legLeft.x += 1; 
            my.sprite.legRight.x += 1; 
            my.sprite.accLeft.x += 1; 
            my.sprite.accRight.x += 1; 
            my.sprite.mouthS.x += 1;
            my.sprite.mouthF.x += 1;
            my.sprite.eyeLeft.x += 1;
            my.sprite.eyeRight.x += 1;
        }
    }

}