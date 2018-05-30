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

function l1answrs(selected){
  console.log(selected)
  if(selected === "L1A1"){
    // player.score += 20
    main.innerHTML += 
    `
      <div class=" level L2">
        <p class="L2Q1">
          Deli is now packed. You grab a ticket and it says 3, but the current is 54. What is your next move?
        </p>
        <button class="L2A1">Continue to wait</button>
        <button class="L2A2">Go somewhere else</button>
      </div>
    `

    var L2A1 = document.querySelector(".L2A1")
    var L2A2 = document.querySelector(".L2A2")
    L2A1.addEventListener('click', function(event){
      //Begin the function this event is listening on
      //Run the appropriate function
      l2answrsScen1(event.target.classList[0])
      //Select all buttons from this scenario
      var s = document.querySelectorAll('.L2 button')
      //run a forEach loop 
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L2A2.addEventListener('click', function(event){
      l2answrsScen1(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })

    return
  }
  if(selected === "L1A2"){
    main.innerHTML += 
    `
    <div class=" level L2">
      <p class="L2Q2">
        They ran out of the good stuff, you only have generic crap. Buy anyway??? 
      </p>
      <button class="L2A1">Yes</button>
      <button class="L2A2">No...but still yes</button>
    </div>
    `

    var L2A1 = document.querySelector(".L2A1")
    var L2A2 = document.querySelector(".L2A2")
    L2A1.addEventListener('click', function(event){
      l2answrsScen2(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L2A2.addEventListener('click', function(event){
      l2answrsScen2(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })

    return
  }
  if(selected === "L1A3"){
    main.innerHTML += 
    `
    <div class=" level L2">
      <p class="L2Q1">
        The fruit is delicious and very fresh. Everything is good until you see the prices.  $5 for pineapples? $6 for grapes? You aren't trying to spend this...Should you buy some? Should go somewhere else? Or should you simply grab a few while no one is watching? 
      </p>
      <button class="L2A1">Buy some fruit</button>
      <button class="L2A2">Go somewhere else</button>
      <button class="L2A3">Grab a few when no one is looking</button>
    </div>
    `

    var L2A1 = document.querySelector(".L2A1")
    var L2A2 = document.querySelector(".L2A2")
    var L2A3 = document.querySelector(".L2A3")
    L2A1.addEventListener('click', function(event){
      l2answrsScen3(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L2A2.addEventListener('click', function(event){
      l2answrsScen3(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L2A3.addEventListener('click', function(event){
      l2answrsScen3(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return 
  }
}

function l2answrsScen1(selected){
  if(selected === "L2A1"){
    console.log(selected)
    //continue to wait
    main.innerHTML += 
    `
      <div class="level L3">
        <p class="L3Q">
          You continue to wait...and wait...and wait. You look at your ticket again and it still says 3, but the ticket counter says only 72
        </p>
        <button class="L3A1">Continue to wait still</button>
        <button class="L3A2">Go somewhere else finally</button>
      </div>
    `
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    L3A1.addEventListener('click', function(event){
      l3answersScen1(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A2.addEventListener('click', function(event){
      l3answersScen1(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
  if(selected === "L2A2"){
    //Go somewhere else
    console.log(selected)
    main.innerHTML += 
    `
      <div class="level L3">
        <p class="L3Q">
          Where would you like to go?
        </p>
        <button class="L3A1">Frozen food isle</button>
        <button class="L3A2">Fruit Section</button>
      </div>
    `
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    L3A1.addEventListener('click', function(event){
      l3answersScen2(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A2.addEventListener('click', function(event){
      l3answersScen2(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
}

function l2answrsScen2(selected){
  if(selected === "L2A1"){
    console.log(selected)
    //Yes
    main.innerHTML += 
    `
      <div class="level L3">
        <p class="L3Q1">
          You buy a few Marie Calendar frozen dinners, if only if I had a microwave??? Let's go find something that I don't have to cook myself? Where do you want to go?
        </p>
        <button class="L3A1">Go to deli</button>
        <button class="L3A2">Go to fruit section</button>
      </div>
    `
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    L3A1.addEventListener('click', function(event){
      l3answersScen3(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A2.addEventListener('click', function(event){
      l3answersScen3(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
  if(selected === "L2A2"){
    console.log(selected)
    //No...but still yes
    main.innerHTML += 
    `
      <div class="level L3">
        <p class="L3Q1">
          You continue to wait...and wait...and wait. You look at your ticket again and it still says 3, but the ticket counter says only 72
        </p>
        <button class="L3A1">Continue to wait still</button>
        <button class="L3A2">Go somewhere else finally</button>
      </div>
    `
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    L3A1.addEventListener('click', function(event){
      l3answersScen4(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A2.addEventListener('click', function(event){
      l3answersScen4(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
}

function l2answrsScen3(selected){
  if(selected === "L2A1"){
    console.log(selected)
    //Buy some fruit
    main.innerHTML += 
    `
      <div class="level L3">
        <p class="L3Q1">
          You bought some expensive fruit. You snack on a few and they were delicious. But...it didn't help you hunger it makes you more hungry.
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
  }
  if(selected === "L3A2"){
    console.log(selected)
  }
  if(selected === "L3A3"){
    console.log(selected)
  }
}
//add Event Listeners and call functions

//Level1
L1A1.addEventListener('click', function(event){
  main.innerHTML = ""
  l1answrs(event.target.classList[0])
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
