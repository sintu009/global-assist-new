import { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/5f37cbdb4c7806354da698ff/default";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible UI
};

export default TawkMessenger;
