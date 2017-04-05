// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas
// http://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf/3514404#3514404
// https://gist.github.com/gustavohenke/9073132
// Date TimeStamp
function dateTimeStamp() {
    var d = new Date();
    var sepDate = "";
    var sepDT = "";
    var sepTime = "";
    var sepMSec = "";
    return d.getFullYear().toString() + sepDate + 
           ("00" + d.getMonth().toString()).slice(-2) + sepDate + 
           ("00" + d.getDate().toString()).slice(-2) + sepDT + 
           ("00" + d.getHours().toString()).slice(-2) + sepTime + 
           ("00" + d.getMinutes().toString()).slice(-2) + sepTime + 
           ("00" + d.getSeconds().toString()).slice(-2) + sepMSec + 
           ("000" + d.getMilliseconds().toString()).slice(-3);
}

// Generate SVG URL
function buildSVGURL() {
  var svg = document.querySelector('svg').outerHTML;
  return 'data:image/svg+xml;base64,' + Base64.encode(svg);
}

// save SVG
function saveSVG(fileName) {
  var a = document.createElement('a');
  a.href = buildSVGURL();
  a.download = fileName;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

function updateCanvas() {
    var svg = document.querySelector('svg');
    var svgSize = svg.getBoundingClientRect();
    var img = new Image();
    var canvas = document.createElement('canvas');
    var image64 = buildSVGURL();
    // set it as the source of the img element
    img.src = image64;

    // draw the image onto the canvas
    img.onload = function() {
      var canvas = document.getElementById('myCanvas');
      canvas.width = svgSize.width;
      canvas.height = svgSize.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
    }
};

function exportCanvasToMimeType() {

    var svg = document.querySelector('svg');
    // var canvas = document.querySelector('canvas');

    // get svg data
    var xml = new XMLSerializer().serializeToString(svg);

    // make it base64
    var svg64 = btoa(xml);
    var b64Start = 'data:image/svg+xml;base64,';

    var svgSize = svg.getBoundingClientRect();
    console.log(svgSize.width);
    console.log(svgSize.height);

    // prepend a "header"
    // var image64 = b64Start + svg64;    

    var img = new Image();
    var canvas = document.createElement('canvas');

    var image64 = buildSVGURL();
    // set it as the source of the img element
    img.src = image64;

    img.onload = function() {
      // draw the image onto the canvas
      canvas.width = svgSize.width;
      canvas.height = svgSize.height;
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = "white";
      ctx.fillRect(0,0,svgSize.width,svgSize.height);
      ctx.drawImage(img, 0, 0);


    // var MIME_TYPE = "image/png"; // 'image/png', 'image/bmp', 'image/gif', 'image/jpeg', 'image/tiff'
    var MIME_TYPE = document.getElementById("mimetype").value;

    // var imgURL = canvas.toDataURL(MIME_TYPE);
    var imgURL = canvas.toDataURL(MIME_TYPE);
    var optInd = document.getElementById("mimetype").selectedIndex;
    // var fileExt = document.getElementsByTagName("option")[optInd].text;
    var fileExt = document.getElementById("mimetype")[optInd].text;

    var dlLink = document.createElement('a');
    dlLink.download = "image" + dateTimeStamp() + "." + fileExt.toLowerCase();
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);

    }; // img.onload
};

// var canvas = document.getElementById("mycanvas");
// var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
// window.location.href = image;

// function exportCanvasAsPNG(id, fileName) {

//     var svg = document.querySelector('svg');
//     var img = document.querySelector('img');
//     // var canvas = document.querySelector('canvas');

//     // get svg data
//     var xml = new XMLSerializer().serializeToString(svg);

//     // make it base64
//     var svg64 = btoa(xml);
//     var b64Start = 'data:image/svg+xml;base64,';

//     var svgSize = svg.getBoundingClientRect();
//     console.log(svgSize.width);
//     console.log(svgSize.height);

//     // prepend a "header"
//     // var image64 = b64Start + svg64;
//     var image64 = buildSVGURL();

//     // set it as the source of the img element
//     img.src = image64;

//     // var imgNew = document.getElementById('myImg');

//     // // draw the image onto the canvas
//     // var canvas = document.getElementById('myCanvas');
//     // canvas.width = svgSize.width;
//     // canvas.height = svgSize.height;
//     // var ctx = canvas.getContext('2d');
//     // ctx.drawImage(imgNew, 0, 0);

//     // var canvasElement = document.getElementById(id);

//     // var MIME_TYPE = "image/png";

//     // var imgURL = canvas.toDataURL(MIME_TYPE);
    
//     // console.log(imgURL);

//     // var dlLink = document.createElement('a');
//     // dlLink.download = fileName;
//     // dlLink.href = imgURL;
//     // dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

//     // document.body.appendChild(dlLink);
//     // dlLink.click();
//     // document.body.removeChild(dlLink);
//     updateCanvas();
// };

// function exportPNG(id, fileName) {

//     var svg = document.querySelector('svg');
//     var img = document.querySelector('img');
//     var canvas = document.querySelector('canvas');

//     // get svg data
//     var xml = new XMLSerializer().serializeToString(svg);

//     // make it base64
//     var svg64 = btoa(xml);
//     var b64Start = 'data:image/svg+xml;base64,';

//     var svgSize = svg.getBoundingClientRect();
//     console.log(svgSize.width);
//     console.log(svgSize.height);

//     // prepend a "header"
//     // var image64 = b64Start + svg64;
//     var image64 = buildSVGURL();

//     // set it as the source of the img element
//     img.src = image64;

//     // draw the image onto the canvas
//     canvas.width = svgSize.width;
//     canvas.height = svgSize.height;
//     canvas.getContext('2d').drawImage(img, 0, 0);

//     var MIME_TYPE = "image/png";

//     var imgURL = canvas.toDataURL(MIME_TYPE);

//     var dlLink = document.createElement('a');
//     dlLink.download = fileName;
//     dlLink.href = imgURL;
//     dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

//     document.body.appendChild(dlLink);
//     dlLink.click();
//     document.body.removeChild(dlLink);
// };