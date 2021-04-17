let yourName = document.querySelector("#yourName").value;
let yourEmail = document.querySelector("#yourEmail").value;

let details = document.querySelector("form");

details.onsubmit = (e)=> {
   e.preventDefault();
   if (yourName && yourEmail){
       alert(`You have a message from ${yourName} with email ${yourEmail}`)
   }

}