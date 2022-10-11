let subfooter = () => {
  return `<h1 class="head">A complete suite of IAM and IT compliance solutions</h1>
    <br>
    <div id="rel-prod">
        <div>Related Products</div>
        </div>
    <div id="related">
        <div>
            <a href=""><h4>» Active Directory Management & Reporting</h4></a>
            <a href=""><h5>» Real-time Log Analysis and Reporting Solution</h5></a>
            <a href=""><h5>» Microsoft 365 Management& Reporting Tool</h5></a>
            <a href=""><h5>» Cloud Security & Log Management</h5></a>
        </div>
        <div>
            <a href=""><h4>» Active Directory Auditing<h4></a>
            <a href=""><h5>» Exchange Srever Auditing & Reporting</h5></a>
            <a href=""><h5>» Active Directory Backup & Recovery tool</h5></a>
            <a href=""><h5>» Comperhensive threat mitigation & SIEM (Log360)</h5></a>
        </div>
        <div>
            <a href=""><h4>» Self-Service Password Management<h4></a>
            <a href=""><h5>» File sever auditing & data discovery</h5></a>
            <a href=""><h5>» SharePoint Management and Auditing Solution</h5></a>
            <a href=""><h5>» Active Directory FREE Tools</h5></a>
        </div>
    </div>`;
};

let topnavbar = () => {

   return `  <div id="logo">
            <a href="./index.html"><img  src="https://www.manageengine.com/images/logo/manageengine-logo.svg" alt=""></a>

            <img  src="https://www.manageengine.com/images/me-20.png" alt="">
        </div>

        <div>
            <p>Products</p>
            <p><a href="storePage.html">Store</a></p>
            <p>Partners</p>
            <p>Affliiate</p>
            <p>Support</p>
            <p>|</p>
            <a href=""><span class="material-symbols-outlined">
            person
            </span></a>
            <span class="material-symbols-outlined">search</span>
            
        </div>
`;
};

let subnavbar = () => {
  return ` <div>
                 <p id="ad360">AD360</p>
             </div>
                <div>
                    <a href="./product.html">Overview</a>
                    <a href="./features.html">Features</a>
                    <a href="./demo.html">Demo</a>
                    <a href="./documents.html">Documents</a>
                    <a href="./qoute.html">Get Quote</a>
                    <a href="./support.html">Support</a>
                    <button id="revert">Download</button>
                </div>`;
};


export { subfooter, topnavbar, subnavbar };
