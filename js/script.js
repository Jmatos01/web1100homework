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
  L2Q1: "Jimmy's Boss tells him he's a great listener and will place him close to his very attractive assitant, What do you do?",
  L2Q2: "Later on The Boss explains to Jimmy that he doesnt like dogs because he was bitten when he was a small boy..... How does Jimmy repond?",
  L2Q3: "The fruit is delicious and very fresh. Everything is good until you see the prices.  $5 for pineapples? $6 for grapes? You aren't trying to spend this...Should you buy some? Should go somewhere else? Or should you simply grab a few while no one is watching?",
  L3Q1: "As Jimmy sits in his new office he gets a tap from a co-worker who shortly after asks Jimmy for some help? what does Jimmy do?",
  L3Q2: "Jimmy's Boss shows Jimmy his wedding ring.... and asks him who does he think he's married to?",
  L3Q3: "Jimmy's Boss thanks him for listening and asked him if he ever read a book called how to win friends and influence people? what does Jimmy say? ",
  L3Q4: "Oh oh a problem Arises! Someone forgot to fix an IF statement in java script!, Jimmy knows Java script like the back of his hands! A higher up asks Jimmy to resolve the issue!, What does Jimmy do!!!?"
}

var buttons = {
  L2A1: ["Shakes his Boss's hand with gratitude!", "Genuingly feels sorry for his Boss's childhood trauma", "Just laughs it off..."],
  L2A2: ["Says thank you and then asks about his very attractice assistant.", "Tells his boss he's a chump", "Sincierly Apologizes!"],
  L2A3: ["Laughs awkwardly and begins to walk away slowly..."],
  L3A1: ["Without hesitation helps his co-worker!", "awkwardly apologizes", "Jimmy says its a great book and alot of people should read it", "Continue to wait still", "Says sure captain and works hard to resolve the issue!"],
  L3A2: ["Tells his co-worker he's a bit too busy right now.", "walks away awkwardly", "no, he hasnt but should look into it!", "Tells his boss he will try his best but he cant guarantee it!", "Go to Frozen Food isle"]
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
         As you start getting ready to go to lunch, a co-worker tells you he needs help submitting work into his github!, what do you do!??
        </p>
        <button class="L3A1">Helps him</button>
        <button class="L3A2">Tells him to reference his textbook</button>
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
         The Boss and co-worker asks Jimmy to complete a developing problem he has ran into.... what does Jimmy do!?
        </p>
        <button class="L3A1">Tells him he is ready for the challenge!</button>
        <button class="L3A2">Tells his boss he needs to grow up</button>
        <button class="L3A3">Tells them he is there to help!</button>
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
          Well go figure! Your co-worker is actually the Boss's son! His name is Johnson and tells Jimmy he's a great developer! Johnson asks Jimmy they should work together more often! what does Jimmy do?
        </p>
        <button class="L4A1">Highly agrees and Thanks Johnson for his Compliment!</button>
        <button class="L4A2">Says thanks and starts blabing about himself </button>
        <button class="L4A3">Says thanks..</button>
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
        Problem is resolved and your co-worker is actually the Boss's floor manager and thanks you for helping him out and invites out for lunch with him and his boss when ever!... what do you do?
      </p>
      <button class="L1A1">Accept</button>
      <button class="L1A2">Tells him he's down for free food</button>
      <button class="L1A3">Tells him he's vegan....</button>
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



  function l4answersScen1(selected){
    if(selected==="L4A1"){
      //Continue to wait still
      console.log(selected)
      main.innerHTML += 
      `
        <div class="level L5">
          <p class="L5Q1">
            THIS IS A TEST 
          </p>
          <button class="L5A1">TEST</button>
          <button class="L5A2">TEST </button>
          <button class="L5A3">TEST</button>
        </div>
      `
      var L5A1 = document.querySelector(".L5A1")
      var L5A2 = document.querySelector(".L5A2")
      var L5A3 = document.querySelector(".L5A3")
      L5A1.addEventListener('click', function(event){
        l4answersScen5(event.target.classList[0])
        var s = document.querySelectorAll('.L2 button')
        s.forEach(function(btn){
          btn.disabled
        })
      })
      L5A2.addEventListener('click', function(event){
        l4answersScen5(event.target.classList[0])
        var s = document.querySelectorAll('.L2 button')
        s.forEach(function(btn){
          btn.disabled
        })
      })
      L5A3.addEventListener('click', function(event){
        l4answersScen5(event.target.classList[0])
        var s = document.querySelectorAll('.L2 button')
        s.forEach(function(btn){
          btn.disabled
        })
      })
      return
    }
    if(selected === "L4A2"){
      console.log(selected)
    }
  }