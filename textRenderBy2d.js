const browserInfo = document.getElementById('browser-info');
const osInfo = document.getElementById('os-info');

// Get browser information
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;
const browserInfoText = `${browserName} ${browserVersion}`;
// Get OS information
const userAgent = navigator.userAgent.toLowerCase();
let os = '';

if (userAgent.indexOf('mac') !== -1) {
  os = 'macOS';
} else if (userAgent.indexOf('win') !== -1) {
  os = 'Windows';
} else if (userAgent.indexOf('linux') !== -1) {
  os = 'Linux';
}

const osName = navigator.platform;
const osInfoText = `${os}`;
// Display browser and OS information
browserInfo.textContent = browserInfoText;
osInfo.textContent = osInfoText;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('text-input');
const fontSelect = document.getElementById('font-select');
const fontSizeInput = document.getElementById('font-size-input');
const fontWeightInput = document.getElementById('font-weight-input');
const letterSpacingInput = document.getElementById('letter-spacing-input');
const lineHeightInput = document.getElementById('line-height-input');
const fontSize = `${fontSizeInput.value}px`;
const fontWeight = fontWeightInput.value;
const lineHeight = `${lineHeightInput.value * parseFloat(fontSize)}px`;
const letterSpacing = `${letterSpacingInput.value}px`;
const textWidth = document.getElementById('text-width');
const textHeight = document.getElementById('text-height');
const antialiasingCheckbox = document.getElementById('antialiasing-checkbox');
// Set line height
ctx.imageSmoothingEnabled = true;
var dpr = window.devicePixelRatio || 1;
var rect = canvas.getBoundingClientRect();
// Give the canvas pixel dimensions of their CSS
// size * the device pixel ratio.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;

//ctx.textBaseline = 'top';

function drawTextBy2dContext() {

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set font and fill color
  const font = fontSelect.value;
  const fontSize = `${fontSizeInput.value}px`;
  const fontWeight = fontWeightInput.value;

  // Set font and fill color
  const lineHeight = `${lineHeightInput.value * parseFloat(fontSize)}px`;
  const letterSpacing = `${letterSpacingInput.value}px`;
  
  ctx.font = `${fontWeight} ${fontSize} ${font}`;


  ctx.fillStyle = 'black';

  // Set line height
  //ctx.textBaseline = 'top';
  //ctx.lineHeight = lineHeight;

  // Draw text
  const text = textInput.value;
  const lines = text.split('\n');
  let y = 100;
  // for (const line of lines) {
  //   ctx.fillText(line, 10, y);
  //   y += parseFloat(lineHeight);
  // }
  ctx.fillText(text, 0, y);

  // Measure text width and height
  const textMetrics = ctx.measureText(text);

  const width = textMetrics.width;
  const height = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent; // 텍스트의 높이

  // Display text width and height
  textWidth.textContent = width;
  textHeight.textContent = height;
}
function toggleAntiAliasing() {
  ctx.imageSmoothingEnabled = antialiasingCheckbox.checked;
  drawTextBy2dContext();
}

const defaultFont = fontSelect.value;
const fontLink = document.createElement('link');
fontLink.href = `https://fonts.googleapis.com/css2?family=${defaultFont.replace(' ', '+')}`;
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Load selected font when changed
fontSelect.onchange = function () {
  const font = fontSelect.value;
  const fontLink = document.createElement('link');
  fontLink.href = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}`;
  fontLink.rel = 'stylesheet';

  // Remove previous font link
  const oldFontLink = document.querySelector('link[rel="stylesheet"][href^="https://fonts.googleapis.com/css2?family="]');
  if (oldFontLink) {
    document.head.removeChild(oldFontLink);
  }

  // Add new font link
  document.head.appendChild(fontLink);

  // Redraw canvas with new font
  drawTextBy2dContext();
};

// Initial draw
drawTextBy2dContext();