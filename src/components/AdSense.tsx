import React from 'react';
import Script from 'script';

type AdSenseTypes = {
  pId: string;
}

const AdSense = ({ pId }: AdSenseTypes) => {
  return (
    <Script 
      async 
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9891580637314161"
      crossorigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

export default AdSense;
