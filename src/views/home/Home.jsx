import React from "react";
import { Button } from "antd";
import { setAlertAction } from "../../actions/alerts";
import { useDispatch } from "react-redux";
import uuid from "uuid";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          dispatch(
            setAlertAction({
              id: uuid.v4(),
              msg: "alert msg",
            })
          );
        }}
      >
        Display normal message
      </Button>
    </div>
  );
};

export default Home;
