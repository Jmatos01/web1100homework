//select elements and create variables
var main = document.querySelector(".main")
var L1 = document.querySelector(".L1")
var L1A1 = document.querySelector(".L1A1")
var L1A2 = document.querySelector(".L1A2")
var L1A3 = document.querySelector(".L1A3")

var player = {
  score: 0,
  hunger: 100,
  money: 50.00
}



//define functions

function l2a2(){

}

function l1a1(){
  player.score += 20
  main.innerHTML += `
  <div class=" level L2">
    <p class="L2Q1">
      deli is now packed. You grab a ticket and it says 3, but the current is 54. What is your next move?
    </p>
    <button class="L2A1">COntinue to wait</button>
    <button class="L2A2">Go somewhere eles</button>
  </div>
  `
  var L2A1 = document.querySelector(".L2A1")
  var L2A2 = document.querySelector(".L2A2")

  L2A1.addEventListener('click', function(event){
    l2a2()
    document.querySelectorAll('.L2 button').forEach(function(btn){
      btn.disabled
    })
  })
  
}

function l1a2(){
  main.innerHTML += `
  <div class=" level L2">
  <p class="L2Q2">
    They ran out of the good stuff, you only have generic crap. Buy anyway??? 
  </p>
  <button class="L2A1">Yes</button>
  <button class="L2A2">No...but still yes</button>
</div>
  `
}
function l1a3(){
  main.innerHTML += `
  <div class=" level L2">
  <p class="L2Q1">
   deli is now packed. You grab a ticket and it says 3, but the current is 54. What is your next move?
  </p>
  <button class="L2A1">COntinue to wait</button>
  <button class="L2A2">Go somewhere eles</button>
</div>
  `
}





//add Event Listeners and call functions
L1A1.addEventListener('click', function(event){
  l1a1()
  // event.target.disabled
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function(btn){
    btn.disabled
  })
})

L1A2.addEventListener('click',function(event){
  l1a2()
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function(btn){
    btn.disabled
  })
})
L1A3.addEventListener('click',function(event){
  l1a3()
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function(btn){
    btn.disabled
  })
})