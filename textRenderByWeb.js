
const p = document.getElementById('p-text');
p.style.width = 'auto';
p.style.height = 'auto';
p.style.display = 'inline-block';

function drawTextByWeb() {
  const webTextInput = document.getElementById('text-input');
  const webFontSelect = document.getElementById('font-select');
  const webFontSizeInput = document.getElementById('font-size-input');
  const webFontWeightInput = document.getElementById('font-weight-input');
  const webLetterSpacingInput = document.getElementById('letter-spacing-input');
  const webLineHeightInput = document.getElementById('line-height-input');
  const webTextWidth = document.getElementById('web-text-width');
  const webTextHeight = document.getElementById('web-text-height');

  const webText = webTextInput.value;
  const webFont = webFontSelect.value;
  const webFontSize = `${webFontSizeInput.value}px`;
  const webFontWeight = webFontWeightInput.value;
  const webLineHeight = `${webLineHeightInput.value * parseFloat(webFontSize)}px`;
  const webLetterSpacing = `${webLetterSpacingInput.value}px`;
  console.log('draw!!', webText, '//')
  // Create a new p element

  p.style.fontFamily = webFont;
  p.style.fontSize = webFontSize;
  p.style.fontWeight = webFontWeight;
  p.style.lineHeight = webLineHeight;
  p.style.letterSpacing = webLetterSpacing;
  p.style.margin = '0';
  p.style.padding = '0';
  p.innerText = webText;

  // Insert the p element into the documente
  // Get the dimensions of the rendered text
  const rect = p.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  // Set the text width and height
  webTextWidth.innerText = width;
  webTextHeight.innerText = height;
}

drawTextByWeb();