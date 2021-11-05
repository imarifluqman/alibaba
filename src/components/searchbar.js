import React from "react";

function Searchbar() {
  return (
    <>
      <div className="searchbar">
        <div className="logo">
          <img
          width="200px"
            src="https://www.logolynx.com/images/logolynx/1a/1ab2f5f233798bab71abdf4a37f64cda.png"
            alt="logo"
          />
        </div>
        <div className="search">
            <input type="text" placeholder="What are you looking for" />
        </div>
        <div className="login">
            <ul>
                <li><i class="fal fa-user-alt"></i> <br />Sign in</li>
                <li><i class="fal fa-comment-alt-lines"></i> <br/>Message</li>
                <li><i class="fal fa-box-usd"></i> <br />Order</li>
                <li><i class="fal fa-shopping-cart"></i> <br />Cart</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
