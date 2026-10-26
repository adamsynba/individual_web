// Individual JavaScript DOM practice — Tasks 6–10
"use strict";

// TASK 6: Counter with click events
const counterValue = document.querySelector(".counter-value");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
let count = 0;
function updateCounter(){ counterValue.textContent = count; }
increaseBtn.addEventListener("click",()=>{ count += 1; updateCounter(); });
decreaseBtn.addEventListener("click",()=>{ if(count > 0) count -= 1; updateCounter(); });
resetBtn.addEventListener("click",()=>{ count = 0; updateCounter(); });

// TASK 7: Live text preview and character counter
const liveTextInput = document.getElementById("liveTextInput");
const textPreview = document.getElementById("textPreview");
const charCount = document.getElementById("charCount");
const clearTextBtn = document.getElementById("clearTextBtn");
function updateTextPreview(){
  const text = liveTextInput.value;
  textPreview.textContent = text.trim() === "" ? "Your text will appear here" : text;
  charCount.textContent = text.length;
}
liveTextInput.addEventListener("input",updateTextPreview);
clearTextBtn.addEventListener("click",()=>{
  liveTextInput.value = ""; updateTextPreview(); liveTextInput.focus();
});

// TASK 8: Change image with a select control
const imageSelect = document.getElementById("imageSelect");
const selectedImage = document.getElementById("selectedImage");
const imageCaption = document.getElementById("imageCaption");
const imageOptions = {
  car:{src:"images/car.svg",alt:"Illustration of a blue car",caption:"Car — selected image"},
  mountain:{src:"images/mountain.svg",alt:"Illustration of mountains beneath the sun",caption:"Mountain — selected image"},
  city:{src:"images/city.svg",alt:"Illustration of a city skyline",caption:"City — selected image"}
};
function updateSelectedImage(){
  const option = imageOptions[imageSelect.value];
  if(!option) return;
  selectedImage.src = option.src; selectedImage.alt = option.alt; imageCaption.textContent = option.caption;
}
imageSelect.addEventListener("change",updateSelectedImage);
updateSelectedImage();

// TASK 9: Keyboard events
const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const keyboardResult = document.getElementById("keyboardResult");
keyboardInput.addEventListener("keydown",(event)=>{
  keyStatus.textContent = `Last key: ${event.key}`;
  if(event.key === "Enter"){
    event.preventDefault();
    keyboardResult.textContent = keyboardInput.value.trim() || "The input is empty.";
  }
  if(event.key === "Escape"){
    event.preventDefault();
    keyboardInput.value = "";
    keyboardResult.textContent = "Your submitted text will appear here.";
    keyStatus.textContent = "Last key: Escape (input and result cleared)";
  }
});

// TASK 10: Mouse and focus events
const focusCard = document.getElementById("focusCard");
const focusInstruction = document.getElementById("focusInstruction");
function highlightCard(message){ focusCard.classList.add("highlight"); focusInstruction.textContent = message; }
function removeCardHighlight(){ focusCard.classList.remove("highlight"); focusInstruction.textContent = "Hover over or focus the card to highlight it."; }
focusCard.addEventListener("mouseenter",()=>highlightCard("mouseenter: the pointer entered the card."));
focusCard.addEventListener("mouseleave",removeCardHighlight);
focusCard.addEventListener("focus",()=>highlightCard("focus: the card received keyboard focus."));
focusCard.addEventListener("blur",removeCardHighlight);
