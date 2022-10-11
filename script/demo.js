import { subfooter, subnavbar, topnavbar } from "../components/proto.js";
import { footer } from "../components/headerComponent.js";

document.getElementById("sub-footer").innerHTML = subfooter();
document.getElementById("prod-navbar").innerHTML = topnavbar();
document.getElementById("sub-navbar").innerHTML = subnavbar();
document.getElementById("no_body").innerHTML = footer();

let Submitform = (event) => {
   event.preventDefault();

   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let number = document.getElementById("number").value;
   let date = document.getElementById("date").value;
   let req = document.getElementById("req").value;
   let country = document.getElementById("country").value;

   // console.log(name);

   if (name && email && number && req && date && country) {
      alert(" Your Request for the Demo is approved we will reach to you Soon !");
      window.location.reload();
   } else alert("Please Enter the input fields");
};

document.getElementById("form").addEventListener("submit", function () {
   Submitform(event);
});

let revert = () => {
   window.location.href = "./download.html";
};

document.getElementById("revert").addEventListener("click", revert);
