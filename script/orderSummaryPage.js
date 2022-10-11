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

function couponfun(){
    let value=document.getElementById("coupon-code").value
    let subprice=document.getElementById("subpricechan")
    let grandprice=document.getElementById("grandpricechan")
    if(value=="masai"){
        let price121=Math.random()*1000
        let price221=price121.toFixed(2)
        let price
        if(price221<="345"){
            subprice.innerText=price221
       grandprice.innerText=price221
      price=price221
      localStorage.setItem("Price",JSON.stringify(price))
        }else{
            subprice.innerText="245.00"
            grandprice.innerText="245.00"
            price="245.00"
            localStorage.setItem("Price",JSON.stringify(price))
        }
      
    }
}

function getpriceo(){
    let price=document.getElementById("priceo").value
    let value=price*345
    let showprice=document.getElementById("ppp")
    let subprice=document.getElementById("subpricechan")
    let grandprice=document.getElementById("grandpricechan")
    subprice.innerText=value
    grandprice.innerText=value
    showprice.innerText=value
    showprice=value
}