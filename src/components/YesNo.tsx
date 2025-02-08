import { Box } from "@material-ui/core";
import YesButton from "./YesButton";
import NoButton from "./NoButton";

function YesNo() {
  return (
    <Box style={{ display: "flex", gap: 20, marginTop: "20px" }}>
      <YesButton />
      <NoButton />
    </Box>
  );
}

export default YesNo;
