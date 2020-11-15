import React, { useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      url:
        "https://gjunghoon-tinder-clone.s3.ap-northeast-2.amazonaws.com/sjh.jpg",
      name: "신정현",
    },
    {
      url:
        "https://gjunghoon-tinder-clone.s3.ap-northeast-2.amazonaws.com/jsw.jpg",
      name: "정성원",
    },
    {
      url:
        "https://gjunghoon-tinder-clone.s3.ap-northeast-2.amazonaws.com/yja.jpg",
      name: "유재안",
    },
  ]);

  return (
    <Container>
      {people.map((person) => (
        <StyledTinderCard key={person.name} preventSwipe={["up", "down"]}>
          <Card style={{ backgroundImage: `url(${person.url})` }}>
            <h3>{person.name}</h3>
          </Card>
        </StyledTinderCard>
      ))}
    </Container>
  );
};

export default TinderCards;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;

const StyledTinderCard = styled(TinderCard)`
  position: absolute;
`;

const Card = styled.div`
  position: relative;
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 50vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  > h3 {
    position: absolute;
    bottom: 10px;
    color: white;
  }
`;
