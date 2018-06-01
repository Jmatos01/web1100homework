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

var questions = {
  L2Q1: "Deli is now packed. You grab a ticket and it says 3, but the current is 54. What is your next move?",
  L2Q2: "They ran out of the good stuff, you only have generic crap. Buy anyway???",
  L2Q3: "The fruit is delicious and very fresh. Everything is good until you see the prices.  $5 for pineapples? $6 for grapes? You aren't trying to spend this...Should you buy some? Should go somewhere else? Or should you simply grab a few while no one is watching?",
  L3Q1: "You continue to wait...and wait...and wait. You look at your ticket again and it still says 3, but the ticket counter says only 72? What are you going to do?",
  L3Q2: "Where would you like to go?",
  L3Q3: "You buy a few Marie Calendar frozen dinners, if only if I had a microwave??? Let's go find something that I don't have to cook myself? Where do you want to go?",
  L3Q4: "You bought some expensive fruit. You snack on a few and they were delicious. But...it didn't help you hunger, it makes you more hungry."
}

var buttons = {
  L2A1: ["Continue to wait", "Yes", "Buy some fruit"],
  L2A2: ["Go somewhere else", "No...but still yes", "Go somewhere else"],
  L2A3: ["Grab a few when no one is looking"],
  L3A1: ["Continue to wait still", "Frozen food isle", "Go to deli", "Continue to wait still", "Go to deli"],
  L3A2: ["Go somewhere else finally", "Fruit Section", "Go to fruit section", "Go somewhere else finally", "Go to Frozen Food isle"]
}


//define functions
function addQuestion(level, question, buttons){
  main.innerHTML += 
  `
  <div class="level ${level}">
    <p class="${level}Q1">
      ${question}
    </p>
  `
  buttons.forEach(function(button, index){
    main.innerHTML += 
    `
      <button class="${level}A${index+1}">${button}</button>
    `
  })
}

function addEvents(elem, eve, callback){
  elem.addEventListener(eve, function(event){
    main.innerHTML = ""
    //Begin the function this event is listening on
    //Run the appropriate function
    callback(event.target.classList[0])
  })
}

function l1answrs(selected){
  if(selected === "L1A1"){
    console.log(selected)
    player.score += 20
    addQuestion("L2", questions.L2Q1, [buttons.L2A1[0], buttons.L2A2[0]])
    var L2A1 = document.querySelector(".L2A1")
    var L2A2 = document.querySelector(".L2A2")
    addEvents(L2A1, "click", l2answrsScen1)
    addEvents(L2A2, "click", l2answrsScen1)
    return
  }
  if(selected === "L1A2"){
    addQuestion("L2", questions.L2Q2, [buttons.L2A1[1], buttons.L2A2[1]])
    var L2A1 = document.querySelector(".L2A1")
    var L2A2 = document.querySelector(".L2A2")
    addEvents(L2A1, "click", l2answrsScen2)
    addEvents(L2A2, "click", l2answrsScen2)
    return
  }
  if(selected === "L1A3"){
    addQuestion("L2", questions.L2QA3, [buttons.L2A1[2], buttons.L2A2[2], buttons.L2A3[0]])
    var L2A1 = document.querySelector(".L2A1")
    var L2A2 = document.querySelector(".L2A2")
    var L2A3 = document.querySelector(".L2A3")
    addEvents(L2A1, "click", l2answrsScen3)
    addEvents(L2A2, "click", l2answrsScen3)
    addEvents(L2A3, "click", l2answrsScen3)
    return 
  }
}

function l2answrsScen1(selected){
  if(selected === "L2A1"){
    console.log(selected)
    //continue to wait
    addQuestion("L3", questions.L3Q1, [buttons.L3A1[0], buttons.L3A2[0]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen1)
    addEvents(L3A2, "click", l3answersScen1)
    return
  }
  if(selected === "L2A2"){
    //Go somewhere else
    console.log(selected)
    addQuestion("L3", questions.L3Q2, [buttons.L3A1[1], buttons.L3A2[1]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen2)
    addEvents(L3A2, "click", l3answersScen2)
    return
  }
}

function l2answrsScen2(selected){
  if(selected === "L2A1"){
    console.log(selected)
    //Yes
    addQuestion("L3", questions.L3Q3, [buttons.L3A1[2], buttons.L3A2[2]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen3)
    addEvents(L3A2, "click", l3answersScen3)
    return
  }
  if(selected === "L2A2"){
    console.log(selected)
    //No...but still yes
    addQuestion("L3", question.L3Q1, [buttons.L3A1[3], buttons.L3A2[3]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen4)
    addEvents(L3A2, "click", l3answersScen4)
    return
  }
}

function l2answrsScen3(selected){
  if(selected === "L2A1"){
    console.log(selected)
    //Buy some fruit
    addQuestion("L3", questions.L3Q4, [buttons.L3A1[4], buttons.L3A2[3]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen5)
    addEvents(L3A2, "click", l3answersScen5)
    return
  }
  if(selected === "L2A2"){
    console.log(selected)
    //Go somewhere else
    main.innerHTML += 
    `
      <div class="level L3">
        <p class="L3Q1">
          Where do you want to go?
        </p>
        <button class="L3A1">Go to deli</button>
        <button class="L3A2">Go to frozen food isle</button>
      </div>
    `
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    L3A1.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A2.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
  if(selected === "L2A3"){
    console.log(selected)
    //Grab a few when no one is looking
    main.innerHTML += 
    `
      <div class="level L3">
        <p class="L3Q1">
          You grab a few, they are delicious. However, an older individual saw you and that individual is a stickler for the rules. That person informs security and you have to go hide. Where would you like to go?
        </p>
        <button class="L3A1">Hide in deli section</button>
        <button class="L3A2">Hide in frozen food isle</button>
        <button class="L3A3">Hide in bath and home isle</button>
      </div>
    `
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    var L3A3 = document.querySelector(".L3A3")
    L3A1.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A2.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A3.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
}

function l3answersScen1(selected){
  if(selected==="L3A1"){
    //Continue to wait still
    console.log(selected)
    main.innerHTML += 
    `
      <div class="level L4">
        <p class="L4Q1">
          Someone you find attractive, walks next to you. You try to make eye contact but the individual walks away. You look down forgetting about the incident and you continue to shop. You look up moments later and you see that person looking directly at you now, smiling. You give them a smile back but then thier significant other also makes eye contact andt they are not happy. What do you do next?
        </p>
        <button class="L4A1">Hide in deli section</button>
        <button class="L4A2">Hide in frozen food isle</button>
        <button class="L4A3">Hide in bath and home isle</button>
      </div>
    `
    var L4A1 = document.querySelector(".L4A1")
    var L4A2 = document.querySelector(".L4A2")
    var L4A3 = document.querySelector(".L4A3")
    L4A1.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L4A2.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L4A3.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
  if(selected === "L3A2"){
    console.log(selected)
  }
}
function l3answersScen2(selected){
  //if you selected L2Scen2 Answer 1 or 2
  if(selected === "L3A1"){
    console.log(selected)
  }
  if(selected === "L3A2"){
    console.log(selected)
  }
}
function l3answersScen3(selected){
  //if you selected L2Scen3 Answer 1, 2, or 3
  if(selected === "L3A1"){
    console.log(selected)
  }
  if(selected === "L3A2"){
    console.log(selected)
  }
}
function l3answersScen4(selected){
  //if you selected L2Scen2 Answer2
  if(selected === "L3A1"){
    console.log(selected)
  }
  if(selected === "L3A2"){
    console.log(selected)
  }
}
function l3answersScen5(selected){
  //if you selected L2Scen3 Answer1
  if(selected === "L3A1"){
    console.log(selected)
    backToBeginning()
  }
  if(selected === "L3A2"){
    console.log(selected)
    backToBeginning()
  }
  if(selected === "L3A3"){
    console.log(selected)
    backToBeginning()
  }
}

function backToBeginning(){
  // main.innerHTML = ""
  main.innerHTML = `
    <div class="level L1">
      <p class="L1Q1">
        You go to the supermarket? You are kind of hungry so you go where?
      </p>
      <button class="L1A1">Go To Deli</button>
      <button class="L1A2">Go To Frozen Food Isle</button>
      <button class="L1A3">Go To Fruit Section</button>
    </div>
  `
  var L1A1 = document.querySelector(".L1A1")
  var L1A2 = document.querySelector(".L1A2")
  var L1A3 = document.querySelector(".L1A3")

  L1A1.addEventListener('click', function(event){
    main.innerHTML = ""
    l1answrs(event.target.value)
    var s = document.querySelectorAll('.L1 button')
    s.forEach(function(btn){
        btn.disabled
      })
    })
    
    L1A2.addEventListener('click',function(event){
      l1answrs(event.target.classList[0])
      var s = document.querySelectorAll('.L1 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
  
    L1A3.addEventListener('click',function(event){
      l1answrs(event.target.classList[0])
      var s = document.querySelectorAll('.L1 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
}
//add Event Listeners and call functions

//Level1
L1A1.addEventListener('click', function(event){
  l1answrs(event.target.classList[0])
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function(btn){
      btn.disabled = false
    })
  })
  
  L1A2.addEventListener('click',function(event){
    l1answrs(event.target.classList[0])
    var s = document.querySelectorAll('.L1 button')
    s.forEach(function(btn){
      btn.disabled = false
    })
  })

  L1A3.addEventListener('click',function(event){
    l1answrs(event.target.classList[0])
    var s = document.querySelectorAll('.L1 button')
    s.forEach(function(btn){
      btn.disabled = false
    })
  })
