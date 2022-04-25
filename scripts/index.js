// Store the wallet amount to your local storage with key "amount"
let amtarr = JSON.parse(localStorage.getItem("amount"))||0;

function AddAmount(){
  
    var amt = document.getElementById("amount").value;
    // console.log("in function");
    // let money = amt + 0;
    let total = (+amtarr) + (+amt);
    console.log('total:', total)

    let wallet = document.querySelector("#wallet");
    wallet.innerHTML = `${(+total)}`

    localStorage.setItem("amount", total);
    
}
