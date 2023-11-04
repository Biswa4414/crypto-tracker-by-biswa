import React, { useState } from "react";
import "./styles.css";
function CoinInfo({ name, desc }) {
  const [flag, setFlag] = useState(false);

  const smallDesc =
    desc.length > 400
      ? desc.slice(0, 400) +
        "<p style='color:var(--grey); cursor:pointer;'>Read More...</p>"
      : desc;
  const fullDesc =
    desc.length > 400
      ? desc + "<p style='color:var(--grey);cursor:pointer;'>Read Less...</p>"
      : desc;

  return (
    <div className="grey-wrapper">
      <h1 className="coin-desc-heading">{name}</h1>
      <p
        onClick={() => {
          desc.length > 400 && setFlag(!flag);
        }}
        className="coin-desc-para"
        dangerouslySetInnerHTML={{ __html: flag ? fullDesc : smallDesc }} //This prop is used to render HTML content within the paragraph element.
      />
    </div>
  );
}

export default CoinInfo;


//The dangerouslySetInnerHTML prop is called "dangerous" because it allows you to inject raw HTML content into your component. It should be used with caution,
// as it can expose your application to potential security risks, such as cross-site scripting (XSS)

//If you do not set the dangerouslySetInnerHTML prop and attempt to render HTML content using it,
// React will treat the content as plain text, and any HTML tags within the content will be escaped