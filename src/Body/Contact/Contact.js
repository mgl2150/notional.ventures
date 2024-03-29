import React from "react";
import "./Contact.css";
import ContactBackground from "../../media/background-decor/Contact.svg";
import Email from "../../media/icon/mail.png";
// import Discord from "../../media/icon/discord.png";
import Github from "../../media/icon/github.png";
import Twitter from "../../media/icon/twitter.png";
// import Telegram from "../../media/icon/telegram.png";
import { Image } from "antd";
const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Contacts</p>
        <p className="text">
        Want to inquire about Notional’s services? Contact us and we’ll happily help you.{" "}
        </p>
      </div>
      <div className="contact">
        <Image className = "img-contact" src={ContactBackground} preview={false} />
        <div className="contact-items_container">
          <div>
            <h1 className="contact-title">Contacts</h1>
            <div className="contact-items">
              <Image className="img-icon" src={Email} preview={false} />
              <p>william@notional.ventures</p>
            </div>
            <div className="contact-items">
              <Image className="img-icon" src={Email} preview={false} />
              <p>ricardo@notional.ventures</p>
            </div>
            <div className="contact-items">
              <Image className="img-icon" src={Email} preview={false} />
              <p>vinh@notional.ventures</p>
            </div>
          </div>
          <div>
            <h1 className="contact-title">Social networks</h1>
            <div className="contact-items">
              <Image className="img-icon" src={Twitter} preview={false} />
              <p>twitter.com/notionaldao</p>
            </div>
            <div className="contact-items">
              <Image className="img-icon" src={Github} preview={false} />
              <p>github.com/notional-labs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
