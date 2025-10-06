$(function () {
  //   initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 350, 200, 55);
    createPlatform(350, 500, 250, 95);
    createPlatform(700, 500, 250, 95);
    createPlatform(1050, 250, 250, 95);
    createPlatform(1000, 400, 250, 95);



    // TODO 3 - Create Collectables
    createCollectable("database", 1150, 200);
    createCollectable("database", 200, 300);
    createCollectable("database", 850, 450);

    
    // TODO 4 - Create Cannons
    createCannon("right", 375, 1400);
    createCannon("top", 200, 1050);
    createCannon("bottom", 700, 1050);
 

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
