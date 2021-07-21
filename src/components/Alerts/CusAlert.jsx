import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";

const CusAlert = () => {
  const alerts = useSelector((state) => state.alertReducer);

  useEffect(() => {
    console.log("aaaa click", alerts);

    alerts.msg && message.success(alerts.msg);
    // success error warning info
  }, [alerts]); // eslint-disable-line

  return <></>;
};

export default CusAlert;
