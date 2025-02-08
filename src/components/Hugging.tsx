import React, { useEffect } from "react";

const Hugging = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tenor-gif-embed"
      data-postid="20613737"
      data-share-method="host"
      data-aspect-ratio="1.14695"
      data-width="100%">
      <a href="https://tenor.com/view/dee-hug-gif-20613737">Dee Hug GIF</a> from{" "}
      <a href="https://tenor.com/search/dee-gifs">Dee GIFs</a>
    </div>
  );
};

export default Hugging;
