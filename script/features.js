import { subfooter, subnavbar, topnavbar } from "../components/proto.js";
import { footer } from "../components/headerComponent.js";

document.getElementById("sub-footer").innerHTML = subfooter();
document.getElementById("prod-navbar").innerHTML = topnavbar();
document.getElementById("sub-navbar").innerHTML = subnavbar();
document.getElementById("no_body").innerHTML = footer();

let revert = () => {
   window.location.href = "./download.html";
};

document.getElementById("revert").addEventListener("click", revert);
