document.querySelector("form").addEventListener("submit", myFunction);
 
function myFunction(event){
    event.preventDefault();
    const myName = document.querySelector("input[name=name]").value;
    const myAge = document.querySelector("input[name=age]").value;
 
    if(myAge >= 18){
        document.querySelector("h1").textContent = "Vairuoti gali: " + myName;
    }else if(myAge > 0 && myAge < 18) {
        document.querySelector("h1").textContent = myName + " dar mokysis vairuoti";
    }else {
        document.querySelector("h1").textContent = "Blogai nurodytas amzius";
    }
}