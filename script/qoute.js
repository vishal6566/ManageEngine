import { subfooter, subnavbar, topnavbar } from "../components/proto.js";
import { footer } from "../components/headerComponent.js";

document.getElementById("sub-footer").innerHTML = subfooter();
document.getElementById("prod-navbar").innerHTML = topnavbar();
document.getElementById("sub-navbar").innerHTML = subnavbar();
document.getElementById("no_body").innerHTML = footer();

let quouteApproval = (event) => {
   event.preventDefault();

   let a = document.getElementById("a").value;
   let b = document.getElementById("b").value;
   let c = document.getElementById("c").value;
   let d = document.getElementById("d").value;
   let e = document.getElementById("e").value;
   let f = document.getElementById("f").value;
   let g = document.getElementById("g").value;
   let names = document.getElementById("name").value;
   let number = document.getElementById("number").value;
   let email = document.getElementById("email").value;
   let country = document.getElementById("country").value;

   if (
      a.length > 2 &&
      b.length > 2 &&
      c.length > 2 &&
      d.length > 2 &&
      e.length > 2 &&
      f.length > 2 &&
      g.length > 2 &&
      names.length > 2 &&
      number.length > 2 &&
      email.length > 2 &&
      country.length > 2
   ) {
      alert("Thank You! Request for Quote is approved, We will get in touch with you soon");
      console.log(a, b, c, d, e, f, g);
   } else alert("Please fill the input fields");
};

document.getElementById("quote-div").addEventListener("submit", quouteApproval);

let reset = () => {
   (a.innerText = null),
      (b.innerText = null),
      (c.innerText = null),
      (d.innerText = null),
      (e.innerText = null),
      (f.innerText = null),
      (g.innerText = null),
      (names.innerText = null),
      (email.innerText = null),
      (number.innerText = null);
};

document.getElementById("reset").addEventListener("click", reset);

let revert = () => {
   window.location.href = "./download.html";
};

document.getElementById("revert").addEventListener("click", revert);
