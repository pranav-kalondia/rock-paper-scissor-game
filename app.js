let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".chose"); //this is to select the concerned class
const msg= document.querySelector("#msg");// this is tp access the text place yiur move and change it accordingly
const userscorepara= document.querySelector("#human");
const compscorepara= document.querySelector("#computer");
const gencompchoice =  () => {
 const options =[ "rock", "paper", "scissors"];
 const randidx = Math.floor(Math.random() * 3);
 return options [randidx];


};
 const drawgame = () => {
    console.log("game was draw");
    msg.innerText ="draw!!!!!!!!!!!!!!!!";
    msg.style.backgroundColor ="#081b31";
 } 





const playgame =(userchoice) => {
    console.log("user choice= ", userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice= ", compchoice);
    if (userchoice===compchoice){
        drawgame();
    }
  else {
    let userWin = true;
    if (userchoice === "rock") {
      //scissors, paper
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock, scissors
      userWin = compchoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compchoice === "rock" ? false : true;
    }
    showwinner(userWin, userchoice, compchoice);
  }
};


const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin ){
      userscore++;
      userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText =`you win ${userchoice} beats ${compchoice}` ;
        msg.style.backgroundColor ="green";
        
    }
    else {
      compscore++;
      compscorepara.innerText = compscore;
        console.log("you lose");
        
        msg.innerText ="you lose";
        msg.innerText =`you lose ${userchoice} beats ${compchoice}` ;
        msg.style.backgroundColor ="red";
    }
    };
    


choice.forEach(chose => {
    console.log(chose);
    chose.addEventListener("click", () => {
        const userchoice= chose.getAttribute("id");
        console.log( "choice is ",userchoice);
          playgame(userchoice); //function call playgame
     

    })
});
//https://blackbox.ai/share/c5191541-777f-488e-8475-c6f81f6f9091 (for understanding starting code)