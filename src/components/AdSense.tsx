import React from 'react';
import Script from "next/script";

type AdSenseTypes = {
  pId: 9891580637314161;
}

const AdSense = ({ pId }: AdSenseTypes) => {
  return (
    <Script 
      async 
      src={ 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}' }
      crossOrigin="anonymous"
    />
  )
}

export default AdSense;
