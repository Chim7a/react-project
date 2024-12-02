import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function Player(props) {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title={props.nameProp} description={props.team} />
      </Card>
    </div>
  );
}

export default Player;
