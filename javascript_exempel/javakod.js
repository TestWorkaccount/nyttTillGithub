// document.ready
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// var tal1 = "en sträng";
// var tal2 = 2;
// a<fdasf
// var imageData = ctx.imageData;


var left = 10;
var top = 10;
var width = 10;
var height = 10;

const imageData = ctx.createImageData(150, 100);

const pixel = ctx.getImageData(10, 10, 1, 1);

// const imageData = ctx.getImageData(left, top, width, height);

// var blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2];

alert(pixel.data[1]);
// var blueComponent = imageData.data[1];
// alert(blueComponent);
alert(imageData);
// alert(canvas);
// alert("ya");