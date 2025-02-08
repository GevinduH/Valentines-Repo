import { useState } from "react";
import { Button } from "@material-ui/core";

function NoButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      size="large"
      style={{
        padding: "15px 30px",
        fontSize: "18px",
        fontWeight: "bold",
        opacity: isHovered ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
      className="heart-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      No, I won't! 💔
    </Button>
  );
}

export default NoButton;
