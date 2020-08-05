(() => {
  const bigCanvas = document.getElementById('big-canvas'),
        smallCanvas = document.getElementById('small-canvas');

  const bigCanvasCtx = bigCanvas.getContext('2d'),
        smallCanvasCtx = smallCanvas.getContext('2d');
  const paths = [];
  const stars = [
    {
      cx: 75,
      cy: 100,
      spikes: 5,
      outerRadius: 30,
      innerRadius: 15,
      color: 'red',
    },
    {
      cx: 175,
      cy: 60,
      spikes: 5,
      outerRadius: 30,
      innerRadius: 15,
      color: 'blue',
    },
    {
      cx: 200,
      cy: 200,
      spikes: 5,
      outerRadius: 30,
      innerRadius: 15,
      color: 'green',
    },
    {
      cx: 300,
      cy: 150,
      spikes: 5,
      outerRadius: 30,
      innerRadius: 15,
      color: 'yellow',
    },
    {
      cx: 230,
      cy: 100,
      spikes: 5,
      outerRadius: 30,
      innerRadius: 15,
      color: 'black',
    }
  ]

  const starDraw = ({ cx, cy, spikes, outerRadius, innerRadius, color,ctx = bigCanvasCtx }) => {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes
    const path = new Path2D()

    ctx.beginPath(path);
    path.moveTo(cx, cy - outerRadius)

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      path.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      path.lineTo(x, y)
      rot += step
    }
    path.lineTo(cx, cy - outerRadius)
    path.closePath();
    ctx.fillStyle = color;
    ctx.fill(path);

    paths.push(path);
  }
  

  const getElementPosition = element => {
    let left = 0, top = 0;
    if (element.offsetParent) {
      do {
        left += element.offsetLeft;
        top += element.offsetTop;
      } while (element = element.ч);
      return { x: left, y: top }
    }
    return undefined
  }

  const getEventLocation = (element, event) => {
    const pos = getElementPosition(element);
    return {
      x: (event.pageX - pos.x),
      y: (event.pageY - pos.y)
    };
  }

  const rgbToHex = (r, g, b) => {
    if (r > 255 || g > 255 || b > 255) {
      throw "Invalid color component";
    }
    return ((r << 16) | (g << 8) | b).toString(16);
  }

  const canvasColorChange = (elem,ctx,hex) => {
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, elem.width, elem.height)
  }
  

  function IsInPath(event,ctx) {
    let bb, x, y, result;
    bb = event.currentTarget.getBoundingClientRect()
    x = (event.clientX - bb.left) * (event.currentTarget.width / bb.width)
    y = (event.clientY - bb.top) * (event.currentTarget.height / bb.height)
    paths.forEach(path => {
      if (ctx.isPointInPath(path, x, y)) {
        result = ctx.isPointInPath(path, x, y);
      }
    })
    return result;
  }

  const defineElement = event => {

    if (event != null) {
      if (IsInPath(event,smallCanvasCtx)) {
        const eventLocation = getEventLocation(bigCanvas, event);
        const pixelData = bigCanvasCtx.getImageData(eventLocation.x, eventLocation.y, 1, 1).data;
        const hex = `#${("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6)}`;
        canvasColorChange(smallCanvas, smallCanvasCtx, hex);
      } else {
        canvasColorChange(smallCanvas, smallCanvasCtx, '#fff');
      }
    }

  }

  stars.forEach(item => starDraw(item));

  bigCanvas.addEventListener('click', e => defineElement(e));

})();