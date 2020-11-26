const wrapper = document.querySelector('.wrapper')
const round = document.querySelector('.round')
wrapper.addEventListener('click', backgroundColor) 
function backgroundColor() {
  if(round.classList.contains('switch')){
    round.classList.remove('switch')
    document.body.style.backgroundColor = "white"
  }else{
    round.classList.add('switch')
    document.body.style.backgroundColor = "black"
  }
}