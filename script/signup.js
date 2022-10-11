function Page(n,u,e,p){
    this.name=n;
    this.user_name=u;
    this.your_email = e;
    this.your_pass=p;
}

function pro(event){
event.preventDefault();
let form = document.getElementById("frame")
let name = form.name.value;
let user_name = form.user_name.value;
let your_email = form.your_email.value;
let your_pass = form.your_pass.value;

console.log(name, user_name,your_email,your_pass)
let s1= new Page(name,user_name,your_email,your_pass)
let bit = JSON.parse(localStorage.getItem('user'))||[]
bit.push(s1)

window.location.reload();


let flag = true;
if(name = "" || user_name=="" ||  your_email =="" || your_pass==""){
    alert("Enter Required Data")
    flag=false;
}
if(flag){
    alert("Signup Successful")
    localStorage.setItem("user",JSON.stringify(bit))
    window.location.href="enginelogin.html"
}

}