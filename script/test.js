// const star = {
//   cx: 75,
//   cy: 100,
//   spikes: 5,
//   outerRadius: 30,
//   innerRadius: 15,
//   ctx: bigCanvasContext
// };

// const drawStar = ({cx, cy, spikes, outerRadius, innerRadius, ctx}) => {
//   let rot = Math.PI / 2 * 3;
//   let x = cx;
//   let y = cy;
//   let step = Math.PI / spikes;

//   ctx.strokeSyle = "#000";
//   ctx.beginPath();
//   ctx.moveTo(cx, cy - outerRadius)

//   for (let i = 0; i < spikes; i++) {
//     x = cx + Math.cos(rot) * outerRadius;
//     y = cy + Math.sin(rot) * outerRadius;
//     ctx.lineTo(x, y)
//     rot += step

//     x = cx + Math.cos(rot) * innerRadius;
//     y = cy + Math.sin(rot) * innerRadius;
//     ctx.lineTo(x, y)
//     rot += step
//   }
//   ctx.lineTo(cx, cy - outerRadius)
//   ctx.closePath();
//   ctx.lineWidth = 5;
//   ctx.strokeStyle = 'blue';
//   ctx.stroke();
//   ctx.fillStyle = 'skyblue';
//   ctx.fill();
// }


// const bigCanvas = document.getElementById('big'),
//       bigCanvasLeft = bigCanvas.offsetLeft,
//       bigCanvasTop = bigCanvas.offsetTop,
//       bigCanvasContext = bigCanvas.getContext('2d'),
//       bigCanvasElements = [];

// const smallCanvas = document.getElementById('small'),
//       smallCanvasContext = smallCanvas.getContext('2d');



// bigCanvas.addEventListener('click',e => {
//   let xValue = e.pageX - bigCanvasLeft,
//       yValue = e.pageY - bigCanvasTop;
//   bigCanvasElements.forEach(item => {
//     if(xValue > item.top && yValue < item.top + item.height && xValue > item.left && xValue < item.left + item.width) {
//       alert(item.colour)
//     }
//   })
// },false);

// const rect = [
//   {
//     colour: '#f7f7f7',
//     width: 50,
//     height: 50,
//     top: 10,
//     left: 10
//   },
//   // {
//   //   colour: 'red',
//   //   width: 50,
//   //   height: 50,
//   //   top: 10,
//   //   left: 70
//   // }
// ]

// bigCanvasElements.push(...rect);

// bigCanvasElements.forEach(function(ele) {
//   // create collision
//   // bigCanvasContext.fillStyle = ele.colour;
//   // bigCanvasContext.globalAlpha = 0;
//   // bigCanvasContext.fillRect(ele.left, ele.top, ele.width, ele.height);
  
//   bigCanvasContext.beginPath();
//   bigCanvasContext.moveTo(0,0);
//   bigCanvasContext.lineTo(0,100);
//   bigCanvasContext.lineTo(50,50);
//   bigCanvasContext.fill();
//   bigCanvasContext.stroke();
// });