// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// esse código inicial nao carrega na sequencia correta

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  
  
  
  
  
  
  



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          
          document.querySelector("#mashedPotatoes").innerHTML += "<li>Mashed potatoes are ready!.</li>";
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.error(error))

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      obtainInstruction('steak', 2)
      .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
        obtainInstruction('steak', 3)
        .then( (step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
          obtainInstruction('steak', 4)
          .then( (step3) => {
            document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
            obtainInstruction('steak', 5)
            .then( (step3) => {
              document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
              obtainInstruction('steak', 6)
              .then( (step3) => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
                obtainInstruction('steak', 7)
                .then( (step3) => {
                  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
                  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
                  document.querySelector("#steakImg").removeAttribute("hidden");
                  })
                })
              })
            })
          })
        })
    })
  })

// Iteration 3 using async/await
async function makeBroccoli() {
  var xpd = await obtainInstruction('broccoli',0);
  document.querySelector("#broccoli").innerHTML += `<li>${xpd}</li>`;
  xpd = await obtainInstruction('broccoli',1);
  document.querySelector("#broccoli").innerHTML += `<li>${xpd}</li>`;
  xpd = await obtainInstruction('broccoli',2);
  document.querySelector("#broccoli").innerHTML += `<li>${xpd}</li>`;
  xpd = await obtainInstruction('broccoli',3);
  document.querySelector("#broccoli").innerHTML += `<li>${xpd}</li>`;
  xpd = await obtainInstruction('broccoli',4);
  document.querySelector("#broccoli").innerHTML += `<li>${xpd}</li>`;
  xpd = await obtainInstruction('broccoli',5);
  document.querySelector("#broccoli").innerHTML += `<li>${xpd}</li>`;
  xpd = await obtainInstruction('broccoli',6);
  document.querySelector("#broccoli").innerHTML += `<li>${xpd}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli()
// Bonus 2 - Promise all

const p1 = obtainInstruction('brusselsSprouts',0);
const p2 = obtainInstruction('brusselsSprouts',1);
const p3 = obtainInstruction('brusselsSprouts',2);
const p4 = obtainInstruction('brusselsSprouts',3);
const p5 = obtainInstruction('brusselsSprouts',4);
const p6 = obtainInstruction('brusselsSprouts',5);
const p7 = obtainInstruction('brusselsSprouts',6);
const p8 = obtainInstruction('brusselsSprouts',7);
Promise.all([p1,p2,p3,p4,p5,p6,p7,p8])
.then((steps) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[0]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[1]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[2]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[3]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[4]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[5]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[6]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[7]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})