import { useEffect } from "react";

const CuteLook = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tenor-gif-embed"
      data-postid="10402284298245091480"
      data-share-method="host"
      data-aspect-ratio="1.17453"
      data-width="100%">
      <a href="https://tenor.com/view/bubu-dudu-sseeyall-gif-10402284298245091480">
        Bubu Dudu Sseeyall Sticker
      </a>{" "}
      from
      <a href="https://tenor.com/search/bubu+dudu-stickers">
        Bubu Dudu Stickers
      </a>
    </div>
  );
};

export default CuteLook;
