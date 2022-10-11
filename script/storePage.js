{
    let count = 0


    function main1() {
        let sub = document.getElementById("subhead1")


        count++

        if (count % 2 == 1) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
            sub.style.transition = " all 0.5s";

        }

    }
}


{
    let count = 0
    function main2() {
        let sub = document.getElementById("subhead2")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main3() {
        let sub = document.getElementById("subhead3")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main4() {
        let sub = document.getElementById("subhead4")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main5() {
        let sub = document.getElementById("subhead5")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main6() {
        let sub = document.getElementById("subhead6")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main7() {
        let sub = document.getElementById("subhead7")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main8() {
        let sub = document.getElementById("subhead8")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}

function getinput1() {
    let input = document.getElementById("input1").value
    let price1 = input * 597
    
    let span = document.getElementById("price1")
    span.innerText = price1
    cost=price1
}
function getinput2() {
    let input = document.getElementById("input2").value
    let price2 = input * 897.5
    let price=price2.toFixed(2)
    let span = document.getElementById("price2")
    span.innerText = price
    
}


function getinput3() {
    let input = document.getElementById("input3").value
    let price3 = input * 472.5
    let price=price3.toFixed(2)
    let span = document.getElementById("price3")
    span.innerText = price
}
function getinput4() {
    let input = document.getElementById("input4").value
    let price4 = input * 247.5
    let price=price4.toFixed(2)
    let span = document.getElementById("price4")
    span.innerText = price
}
function getinput5() {
    let input = document.getElementById("input5").value
    let price5 = input * 69
    let price=price5.toFixed(2)
    let span = document.getElementById("price5")
    span.innerText = price
}
function getinput6() {
    let input = document.getElementById("input6").value
    let price6 = input * 2.45
    let price=price6.toFixed(2)
    let span = document.getElementById("price6")
    span.innerText = price
}
function getinput7() {
    let input = document.getElementById("input7").value
    let price7 = input * 3.45
    let price=price7.toFixed(2)
    let span = document.getElementById("price7")
    span.innerText = price
}

function checkfun(){
    let check=document.getElementById("check").checked
    if(check==true){
        
        document.getElementById("pricetotal").innerText="345.00"
    }
    
    else{
        document.getElementById("pricetotal").innerText="0"
    }
}
function getedition(){
    let edition=document.getElementById("edisel").value
    if(edition=="Student"){
        
        document.getElementById("pricetotal").innerText="245.00"
    }else if(edition=="Professional"){
     
        document.getElementById("pricetotal").innerText="345.00"
    }
    else{
        document.getElementById("pricetotal").innerText="0" 
    }
}
