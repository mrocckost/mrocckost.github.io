(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/readme/guardian (1).png');
        game.load.image('projectile', './asset/projectile.png');
        game.load.image('platform', './asset/readme/goodgrass.png'); 
        game.load.image('db', './asset/collectable/yellowgem_5.png');
        game.load.image('steve', './asset/collectable/bluegem_5.png');
        game.load.image('grace', './asset/collectable/redgem_5.png');
        game.load.image('kennedi', './asset/collectable/kennedi-head.png');
        game.load.image('max', './asset/collectable/max-head.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
    };
})(window);
