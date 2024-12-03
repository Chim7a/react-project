import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function Player({ nameProp, team, image, nationality, jerseyNumber, age }) {
  return (
    <div>
      <Card
        hoverable
        cover={
          <img
            alt="example"
            className="w-[100px] h-[500px] object-cover"
            src={image}
          />
        }
      >
        <Meta
          title={nameProp}
          description={
            <div>
              <h3>Club Team: {team}</h3>
              <p>Nationality: {nationality}</p>
              <p>Jersey Number: {jerseyNumber}</p>
              <p>Age: {age}</p>
            </div>
          }
        />
      </Card>
    </div>
  );
}

export default Player;
