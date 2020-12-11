const generColor = () => {
  let color = '#'+((1<<24)*Math.random()|0).toString(16);
  return color;
}

const genElem =() => {
  let randElem = document.querySelectorAll("*");
  let counter = Math.floor(Math.random() * randElem.length);
  let originalStyle = getComputedStyle(randElem[counter]);
  originalStyle = originalStyle.backgroundColor;
  randElem[counter].style.backgroundColor = generColor();

  setTimeout(el =>{
    randElem[counter].style.backgroundColor = originalStyle;
    console.log();
  },4000)  
}
 document.addEventListener("DOMContentLoaded", function(event) {
    setInterval(el => {
      genElem();
    },2000)
});

