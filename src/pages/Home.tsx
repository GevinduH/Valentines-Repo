import { Container, CssBaseline } from "@material-ui/core";
import MessageCard from "../components/MessageCard";
import YesNo from "../components/YesNo";

function Home() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        <MessageCard />
        <YesNo />
      </Container>
    </>
  );
}

export default Home;
