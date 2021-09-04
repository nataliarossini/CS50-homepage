fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('hero.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_hero");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_footer");
    let newelem = document.createElement("footer");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
});

function openNav(){
    const list = document.querySelector(".nav-toggle");
    list.style.display="flex";

}

function closeNav(){
    const list = document.querySelector(".nav-toggle");
    list.style.display="none";

}

function loadPage(file){
    let obj = new XMLHttpRequest();
    obj.onreadystatechange = function() {
        if (this.status == 200){
            document.getElementById("container").innerHTML = this.responseText;
        }
    }
    obj.open("get", file, true);
    obj.send();
}


function generateQuote(data) {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(resp => resp.json())
        .then(function (data) {
            document.getElementById("quote").style.display="block";
            document.getElementById("quote").innerText = `"${data[0]}"`;

        })
        .catch(function (error) {
            console.log(error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const listElem = document.querySelectorAll(".toggle-item");
    listElem.forEach(elem => {
        elem.addEventListener('click', closeNav);
    })
})