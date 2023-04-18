function drawTextBy2dContext() {
  const textInput = document.getElementById('text-input');
  const fontSelect = document.getElementById('font-select');
  const fontSizeInput = document.getElementById('font-size-input');
  const fontWeightInput = document.getElementById('font-weight-input');
  const letterSpacingInput = document.getElementById('letter-spacing-input');
  const lineHeightInput = document.getElementById('line-height-input');
  const textWidth = document.getElementById('text-width');
  const textHeight = document.getElementById('text-height');

  const text = textInput.value;
  const font = fontSelect.value;
  const fontSize = `${fontSizeInput.value}px`;
  const fontWeight = fontWeightInput.value;
  const lineHeight = `${lineHeightInput.value * parseFloat(fontSize)}px`;
  const letterSpacing = `${letterSpacingInput.value}px`;

  // Create a new p element
  const p = document.createElement('p');
  p.style.fontFamily = font;
  p.style.fontSize = fontSize;
  p.style.fontWeight = fontWeight;
  p.style.lineHeight = lineHeight;
  p.style.letterSpacing = letterSpacing;
  p.style.margin = '0';
  p.style.padding = '0';
  p.innerText = text;

  // Insert the p element into the document
  document.body.appendChild(p);

  // Get the dimensions of the rendered text
  const rect = p.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  // Set the dimensions of the canvas
  canvas.width = width;
  canvas.height = height;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the text onto the canvas
  ctx.font = `${fontWeight} ${fontSize} ${font}`;
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'top';
  ctx.lineHeight = lineHeight;
  const lines = text.split('\n');
  let y = 0;
  for (const line of lines) {
    ctx.fillText(line, 0, y);
    y += parseFloat(lineHeight);
  }

  // Set the text width and height
  textWidth.innerText = width;
  textHeight.innerText = height;

  // Remove the p element from the document
  document.body.removeChild(p);
}