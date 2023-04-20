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
  // Create a new p element

  const p = document.getElementById('p-text');
  p.style.width = 'auto';
  p.style.height = 'auto';
  p.style.display = 'inline-block';

  p.style.fontFamily = webFont;
  //console.log('webFontSize ::', webFontSize)
  p.style.fontSize = webFontSize;
  //console.log(webFontWeight)
  p.style.fontWeight = webFontWeight;
  //p.style.lineHeight = webLineHeight;
  p.style.letterSpacing = webLetterSpacing;
  p.style.margin = '0';
  p.style.padding = '0';
  p.innerText = webText;

  // Insert the p element into the documente
  // Get the dimensions of the rendered text

  const style = getComputedStyle(p); // p 요소의 스타일 가져오기
  const font = style.getPropertyValue("font"); // 폰트 스타일 가져오기
  const range = document.createRange(); // 레인지 객체 생성
  range.selectNodeContents(p); // 레인지에 p 요소 추가
  const rect = range.getBoundingClientRect(); // p 요소의 경계 사각형 가져오기
  const text = p.innerText; // p 요소의 텍스트 가져오기
  const canvas = document.createElement("canvas"); // 캔버스 엘리먼트 생성
  const ctx = canvas.getContext("2d"); // 2D 그래픽 컨텍스트 생성
  
  //ctx.textBaseline = 'top';
  ctx.imageSmoothingEnabled = true;
  var dpr = window.devicePixelRatio || 1;

  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.font = `${webFontWeight} ${webFontSize} ${webFont}`;
  ctx.fillText(text, 0, 20);

  const textMetrics = ctx.measureText(text); // 텍스트 크기 측정

  const height = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent; // 텍스트 높이 계산

  const width = rect.width;

  
  // Set the text width and height
  webTextWidth.innerText = `p tag width : ${rect.width} / actual width : ${width}`;
  webTextHeight.innerText = `p tag height : ${rect.height} / actual height : ${height}`;
}

drawTextByWeb();