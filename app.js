const base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/USD/INR.json"

const dropdowns = document.querySelector(".dropdown select");
const btn = document.querySelector("form button")


for(let select of dropdowns){
for(let currcode in countryList) {
    let newoption = document.createElement("options")
    newoption.value = currcode;
    if (select.name === "from" && currcode==="USD")
        newoption.selected = "selected"
    else if (select.name === "to" && currcode==="INR")
        newoption.selected = "selected"
    select.append(newoption);

}
     select.addEventListener("change" , (evt) =>{
        updateflag(evt.target);

     })
}

const updateflag = (element) => {
let currcode = element.value;
let countrycode = countryList[currcode]
let newsrc = 'https://flagsapi.com/IN/flat/64.png"'
let img = element.parentElement.querySelector("img")
img.src = newsrc;

}

btn.addEventListener("click" , (evt) =>{
    evt.preventDefault();

})



