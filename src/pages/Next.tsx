import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import Hugging from "../components/Hugging";
import { Link } from "react-router-dom";
import SuccessSnackbar from "../components/SuccessSnackBar";

function Next() {
  const mediaLg = useMediaQuery("(max-width: 1280px)");
  console.log("🚀 ~ Next ~ mediaLg:", mediaLg);
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          height: !mediaLg ? "100%" : "100vh",
          backgroundColor: "#f8bbd0",
        }}>
        <Link to="/">
          <Button
            variant="outlined"
            color="primary"
            style={{
              position: "absolute",
              bottom: "20px",
              justifyContent: "end",
              left: 25,
            }}>
            Back
          </Button>
        </Link>
        <Card
          style={{
            padding: 3,
            marginBottom: 3,
            borderRadius: 2,
            background: "#fce4ec",
            maxWidth: "50%",
          }}>
          <CardContent>
            <Hugging />
            <Typography
              variant="h4"
              color="primary"
              style={{ fontWeight: "bold", textAlign: "center" }}>
              I knew you would say YES! 💕
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              style={{ marginTop: 2 }}>
              💖 In your arms, I have found my home. In your eyes, I see my
              forever. You make life feel so complete, and with you, every day
              is filled with magic. This ‘yes’ is just the start of a lifetime
              together, and I’m so excited to spend every precious moment with
              you. 💖
            </Typography>
          </CardContent>
        </Card>
        <SuccessSnackbar />
      </Box>
    </>
  );
}

export default Next;
