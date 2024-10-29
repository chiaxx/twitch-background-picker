document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.querySelector('#yellow').addEventListener('click', partyYellow)
document.querySelector('#pink').addEventListener('click', partyPink)



function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgb(140, 63, 247)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgb(145, 223, 170)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = ' rgb(50, 120, 241)'
  document.querySelector('body').style.color = 'white'
}
function partyYellow(){
  document.querySelector('body').style.backgroundColor = ' rgb(250, 255, 145)'
  document.querySelector('body').style.color = 'white'
}

function partyPink(){
  document.querySelector('body').style.backgroundColor = 'rgb(255, 142, 161)'
  document.querySelector('body').style.color = 'white'
}