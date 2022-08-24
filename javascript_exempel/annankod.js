const img = new Image();
img.crossOrigin = 'anonymous';
img.src = './red.jpg';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
img.onload = () => {
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};
const hoveredColor = document.getElementById('hovered-color');
const selectedColor = document.getElementById('selected-color');

function pick(event, destination) {
  const x = event.layerX;
  const y = event.layerY;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;

    const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`;
    destination.style.background = rgba;
    destination.textContent = rgba;

    return rgba;
}

const grayscale = () => {
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i]     = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
};




function set(event, destination){
    var rect = canvas.getBoundingClientRect();
    var x = event.layerX - rect.left;
    x = Math.round(x);
    var y = event.layerY - rect.top;
    y = Math.round(y);
    // ctx.drawImage(img, 0, 0);
    // alert(rect.top + " " + y);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    var bredd = imageData.width;
    var höjd = imageData.height;

    
    data[x*4 + y * 4 * bredd] = 255;
    data[x*4 + y * 4 * bredd + 1] = 255;
    data[x*4 + y * 4 * bredd + 2] = 255;

    ctx.putImageData(imageData, 0, 0);
}

canvas.addEventListener('mousemove', (event) => {
    // pick(event, hoveredColor);
    set(event, canvas);
});
canvas.addEventListener('click', (event) => {
    // set(event);
    // set(event, canvas);
    pick(event, selectedColor);
});