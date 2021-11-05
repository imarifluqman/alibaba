import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <p className="py-1">We’ll never share your email address with a third-party.</p>
        <div className="links p-5 m-5 d-flex justify-content-around align-items-start">
          <ul>
            <li>Customer Services</li>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Report Abuse</li>
            <li>Submit a Dispute</li>
            <li>Policies & Rules</li>
            <li>Get Paid for Your Feedback</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>About Alibaba.com</li>
            <li>About Alibaba Group</li>
            <li>Sitemap</li>
          </ul>
          <ul>
            <li>Source on Alibaba.com</li>
            <li>Resources</li>
            <li>All Categories</li>
            <li>Request for Quotation</li>
            <li>Ready to Ship</li>
            <li>Buyer Partners</li>
          </ul>
          <ul>
            <li>Sell on Alibaba.com</li>
            <li>Supplier Memberships</li>
            <li>Learning Center</li>
            <li>Partner Program</li>
          </ul>
          <ul>
            <li>Trade Services</li>
            <li>Trade Assurance</li>
            <li>Business Identity</li>
            <li>Logistics Service</li>
            <li>Production Monitoring & Inspection Services</li>
            <li>Letter of Credit</li>
          </ul>
        </div>
        {/* <div className="storelinks">
          <ul>
            <li>Download: </li>
            <li>Alibaba Supplier App : </li>
            <li className="icon">
              Follow Us : <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
              <i class="fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default Footer;
