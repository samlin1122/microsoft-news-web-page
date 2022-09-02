import React from "react";
import { FooterWrapper } from "./index.style";
import { HSpace, Link } from "../layouts";

function Footer() {
  const footerList = [];
  return (
    <FooterWrapper>
      <Link>隱私權和 Cookie</Link>
      <HSpace length={20} />
      <Link>法律聲明</Link>
      <HSpace length={20} />
      <Link>廣告</Link>
      <HSpace length={20} />
      <Link>關於我們的廣告</Link>
      <HSpace length={20} />
      <Link>說明</Link>
      <HSpace length={20} />
      <Link>意見反應</Link>
    </FooterWrapper>
  );
}

export default React.memo(Footer);
