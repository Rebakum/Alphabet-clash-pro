
//function play(){
//      //console.log('play start now ');
//      // step-1:hide the home screen
//      const homeSection = document.getElementById('home-screen');
//      homeSection.classList.add('hidden');
//      console.log(homeSection.classList);
//      // show the playground
//const playgroundSection = document.getElementById('play-ground');
//playgroundSection.classList.remove('hidden')
//console.log(playgroundSection.classList);
//}
function continueGame(){
      console.log('hello')
// step -1: generate a random alphabet
const alphabet = getARandomAlphabet( );
console.log('your random alphabet' , alphabet);
//set randomly generated a random alphabet to the (show it)
const currentAlphabetElement =document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;
//set backgroundColor
setBackgroundColorById(alphabet);
}


function play(){
      hideElementById('home-screen');
      showElementById('play-ground');
      continueGame()
}