import React from "react";
import styled from "styled-components";

const Footerr = styled.h2`
  background-color: yellow;
  color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <div>
      <Footerr>Footer</Footerr>
    </div>
  );
};

export default Footer;
