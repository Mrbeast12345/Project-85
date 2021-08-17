var canvas= new fabric.Canvas("my_Canvas");

var block_object_height=30;
var block_object_width=30;


var playerx=10;
var playery=10;


var playerobject="";
var blockobject="";
 function updateimg(){
    fabric.Image.fromURL("player.png",function(img){
playerobject=img;
playerobject.scaleToHeight(140);
playerobject.scaleToWidth(150);
playerobject.set({
    top:playery,
    left:playerx
})
canvas.add(playerobject);
    })
}

function newimg(get_image){
    fabric.Image.fromURL(get_image,function(img){
        block_object_img=img;
        block_object_img.scaleToHeight(block_object_height)
        block_object_img.scaleToWidth(block_object_width)
        block_object_img.set({
            top:playery,
            left:playerx
        })
        canvas.add(block_object_img);
    })
    }
    