import { Image, Tooltip } from "antd";
import miss from "../../media/stake/miss.png";
import nomiss from "../../media/stake/no-miss.png";
import Zoom from "@mui/material/Zoom";

const UptimeBlock = (props) => {
  let { height, uptime } = props;
  console.log(height, uptime);
  if (uptime.length === 0) {
    return (
      <Tooltip TransitionComponent={Zoom} title={height}>
        <Image
          style={{ width: "4rem", height: "4rem" }}
          preview={false}
          src={nomiss}
        />
      </Tooltip>
    );
  } else {
    for (let index = 0; index < uptime.length; index++) {
      const element = uptime[index];
      if (height === parseInt(element)) {
        return (
          <Tooltip TransitionComponent={Zoom} title={height}>
            <Image
              style={{ width: "4rem", height: "4rem" }}
              preview={false}
              src={miss}
            />
          </Tooltip>
        );
      }
    }
    return (
      <Tooltip TransitionComponent={Zoom} title={height}>
        <Image
          style={{ width: "4rem", height: "4rem" }}
          src={nomiss}
          preview={false}
        />
      </Tooltip>
    );
  }
};

export default UptimeBlock;
