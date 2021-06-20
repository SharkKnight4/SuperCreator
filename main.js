var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
part_image_heigth = 30;
part_image_width = 30;
player_object = "";
image_object = "";
function player_update() {
    fabric.Image.fromURL("poketrainer.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    });
}
function part_update(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        image_object = Img;
        image_object.scaleToWidth(part_image_width);
        image_object.scaleToHeight(part_image_heigth);
        image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (e.shiftKey == true && key_pressed == "77") {
        console.log("Shift And m Pressed.Terminate");
        part_image_heigth = part_image_heigth - 10;
        part_image_width = part_image_width - 10;
        document.getElementById("current_height").innerHTML = part_image_heigth;
        document.getElementById("current_width").innerHTML = part_image_width;
    }
    if (e.shiftKey == true && key_pressed == "80") {
        console.log("Shift And p Pressed.Terminate");
        part_image_heigth = part_image_heigth + 10;
        part_image_width = part_image_width + 10;
        document.getElementById("current_height").innerHTML = part_image_heigth;
        document.getElementById("current_width").innerHTML = part_image_width;
    }
    if (key_pressed == '38') {
        up();
        console.log("Up Key is pressed.Terminated");
    }
    if (key_pressed == '40') {
        down();
        console.log("Down Key is pressed.Terminated");
    }
    if (key_pressed == '37') {
        left();
        console.log("Left Key is pressed.Terminated");
    }
    if (key_pressed == '39') {
        right();
        console.log("Right Key is pressed.Terminated");
    }
    if (key_pressed == '84') {
        part_update("Screenshot 2021-06-19 10.21.30 PM.png");
    
        console.log("Put tail part Down");
    }
    if (key_pressed == '72') {
        part_update("Screenshot 2021-06-19 10.22.23 PM.png");

        console.log("Put head part Down");
    }
    if (key_pressed == '66') {
        part_update("Screenshot 2021-06-19 10.23.11 PM.png");

        console.log("Put Body part Down");
    }
    if (key_pressed == '70') {
        part_update("Screenshot 2021-06-19 10.23.40 PM.png");
        console.log("Put Feet part Down");
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - part_image_heigth;
        console.log("The new X = " + player_x + "and New Y = " + player_y);
        canvas.remove(player_object);
        player_update();
        document.getElementById("Marvel_MUSIC").play();
    }
}
function down() {
    if (player_y <= 700) {
        player_y = player_y + part_image_heigth;
        console.log("The new X = " + player_x + " and New Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x <= 700) {
        player_x = player_x + part_image_width;
        console.log("The new X = " + player_x + " and New Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_x >= 0) {
        player_x = player_x - part_image_width;
        console.log("The new X = " + player_x + " and New Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
