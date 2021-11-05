import React from "react";

function Navbar() {
  return (<>
<div className="nav">
<div className="menu">
    <ul>
        <li className="seprate"><i class="fal fa-bars"></i> Categories <i class="fal fa-angle-down"></i></li>
        <li>ready to ship <i class="fal fa-angle-down"></i></li>
        <li>personal protective <i class="fal fa-angle-down"></i></li>
        <li>trade shows <i class="fal fa-angle-down"></i></li>
        <li>buyer central <i class="fal fa-angle-down"></i></li>
        <li>sell on alibaba <i class="fal fa-angle-down"></i></li>
        <li>help <i class="fal fa-angle-down"></i></li>
    </ul>
</div>
<div className="country">
    <ul>
        <li>English-USD <i class="fal fa-angle-down"></i></li>
        <li>Ship to: <i class="fal fa-angle-down"></i></li>
    </ul>
</div>
</div>
  </>);
}

export default Navbar;
