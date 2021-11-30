import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <Link to="/contact">
        <h3><a href="https://drive.google.com/file/d/1twlCLVKxqs22ZVL2yhfzA3bkcuVWaB7M/view?usp=sharing"> More Detailed Downloadable Resume Can Be Accessed Here</a></h3>
      </Link>
      <iframe
        src="https://docs.google.com/gview?url=https://drive.google.com/uc?id=1twlCLVKxqs22ZVL2yhfzA3bkcuVWaB7M&embedded=true"
        frameBorder="0"
        scrolling="auto"
        height="400px"
        width="100%"
        title="pdf"
      />
    </div>
  </div>
);

export default References;
