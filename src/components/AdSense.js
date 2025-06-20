import { useEffect, useRef } from "react";

export default function AdSenseBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    if (window && window.adsbygoogle && adRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {}
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', width: '100%', maxWidth: 728, height: 90 }}
      data-ad-client="ca-pub-9113733158673282"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    ></ins>
  );
}
