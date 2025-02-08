import { Typography, Card, CardContent } from "@material-ui/core";
import CuteLook from "./CuteLook";

function MessageCard() {
  return (
    <Card
      style={{
        padding: 3,
        marginBottom: 3,
        borderRadius: 2,
        background: "#fce4ec",
      }}>
      <CardContent>
        <CuteLook />
        <Typography variant="h4" color="primary" style={{ fontWeight: "bold" }}>
          Will You Be My Valentine?
        </Typography>
        <Typography variant="h6" color="textSecondary" style={{ marginTop: 2 }}>
          I can't imagine spending Valentine's or any other Day without you. 💖
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MessageCard;
