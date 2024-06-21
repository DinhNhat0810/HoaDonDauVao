import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

export default function CustomLoading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </div>
  );
}
