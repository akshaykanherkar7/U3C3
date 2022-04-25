// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let walletblc = JSON.parse(localStorage.getItem("amount"))||0;
console.log('walletblc:', walletblc)

let wallet = document.getElementById("wallet");
wallet.innerText = walletblc;

let booknowdata = JSON.parse(localStorage.getItem("movie"))||[];


appenddata();
function appenddata(){
    
    booknowdata.map(function(elem){
        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = `${elem.Poster}`;

        let title = document.createElement("h4");
        title.innerText = `${elem.Title}`

        box.append(title,image);
        document.getElementById("movie").append(box);
    })
}

let qty = document.getElementById("number_of_seats").value * 100;

function Confermtic(){
    if(walletblc > 100)
    {
        alert("Booking Successfull!")
        walletblc = (+walletblc) - (+qty);
        localStorage.setItem("amount",JSON.stringify(walletblc));
    }
    else
    {
        alert("Insufficient Balance!");
    }
}
