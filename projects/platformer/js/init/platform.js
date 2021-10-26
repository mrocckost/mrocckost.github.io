(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function add_img(){
        var img = document.createElement('img');
        img.src = 'https://i.pinimg.com/474x/38/24/17/382417b60104d16330ea6933754a658b--aniversario-minecraft--bit.jpg';
        document.getElementById('body').appendchild(img);
        let myImage = img.src
    }
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 6.8, 2,);    // DO NOT DELETE
        createPlatform(0, 500, 0.2);
         // example:
        createPlatform(100, 250,1,0.2);
        createPlatform(400, 300,1,0.2)
        createPlatform(170, 560,1,0.2);
        createPlatform(370, 460,1,0.2);
        createPlatform(570, 600,1,0.2);
        createPlatform (625, 425,1,0.2);
        

        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);