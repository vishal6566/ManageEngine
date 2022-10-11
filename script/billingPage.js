{
    let count = 0


    function main1() {
        let sub = document.getElementById("subhead1")


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

function checkCheckbox(){
    let check=document.getElementById("paycheck1").checked
    
    let btn=document.getElementById("checkoutbutton")
    let btn1=document.getElementById("checkoutbutton1")
   if(check==true){
    btn1.style.display="block"
    btn.style.display="none"
   }else{
    btn1.style.display="none"
    btn.style.display="block"
   }
}

function getPrice(){
    let price=JSON.parse(localStorage.getItem("Price"))
   let price1=document.getElementById("getprice1")
   price1.innerText=price
   let price2=document.getElementById("getprice2")
   price2.innerText=price
}