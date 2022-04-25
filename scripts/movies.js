// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;

let booknowarr = JSON.parse(localStorage.getItem("movie"))||[];

let walletblc = JSON.parse(localStorage.getItem("amount"))||0;
console.log('walletblc:', walletblc)

let wallet = document.getElementById("wallet");
wallet.innerText = walletblc;



const searchMovie = async () =>{
    let query = document.getElementById("search").value;
    // http://www.omdbapi.com/?i=tt3896198&apikey=4e3278d6
    // http://www.omdbapi.com/?apikey=4e3278d6&S=${query}
    try{
        const res = await fetch(`https://www.omdbapi.com/?apikey=4e3278d6&s=${query}`);
        
        const data = await res.json();
        // console.log(data.Search);
        appendMovies(data.Search)
    }catch(err){
        console.log(err);
    }
};

function appendMovies(data){

    data.map(function(elem){

        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = `${elem.Poster}`;

        let title = document.createElement("h4");
        title.innerText = `${elem.Title}`

        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.onclick = (image,title) => {
            bookNow(elem);
        }

        box.append(image,title,btn);
        document.getElementById("movies").append(box);
    });
}

function bookNow(image,title){
    booknowarr.push(image,title)
    localStorage.setItem("movie",JSON.stringify(booknowarr));
    window.location.href = "checkout.html";
}

function debounce(func,delay){
    if(id)
    {
        clearInterval(id);
    }
    id = setTimeout(function(){
        func();
    },delay)
}