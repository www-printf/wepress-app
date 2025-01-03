import { Spin } from "antd";
import logo from "../assets/icons/icon_printer_black.png";
import { LoadingOutlined } from "@ant-design/icons";
function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={logo} width={150} height={"auto"} />
      <Spin className="mt-6"
        indicator={
          <LoadingOutlined style={{ fontSize: 24, color: "blue" }} spin />
        }
      />
    </div>
  );
}

export default Loading;
