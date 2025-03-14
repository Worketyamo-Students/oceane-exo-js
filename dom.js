let pays = prompt("entrer un nom de pays")

let conv = pays.toLowerCase()
let item1 = document.getElementById("item-1")
let item2 = document.getElementById("item-2")
let item3 = document.getElementById("item-3")
let star = document.getElementById("box-star")

if (conv == "cameroun" || pays =="cameroun"){
    item1.style.backgroundColor= "green"
    item2.style.backgroundColor= "red"
    star.style.backgroundColor = "yellow"
    item3.style.backgroundColor= "yellow"

}
else if (conv == "senegal" || pays =="senegal"){ 
    item1.style.backgroundColor= "green"
    item2.style.backgroundColor= "yellow"
    star.style.backgroundColor = "green"
    item3.style.backgroundColor= "red"

}
else if (conv == "japon" || pays =="japon"){
    item1.style.backgroundColor= "white"
    item2.style.backgroundColor= "white"
    star.style.clipPath =  " circle(50%)"
    star.style.backgroundColor = "red"
    star.style.width = "150px"
    star.style.height = "150px"
    item3.style.backgroundColor= "white"

}
else  if (conv == "guinee" || pays =="guinee"){
    item1.style.backgroundColor= "red"
    item2.style.backgroundColor= "yellow"
    item3.style.backgroundColor= "green"

}
