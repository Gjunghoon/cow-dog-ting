import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import axios from "./config/axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await axios.get("/users");
      setPeople(data);
    };
    fetchPeople();
  }, []);

  return (
    <Container>
      {people.map((person) => (
        <StyledTinderCard key={person.name} preventSwipe={["up", "down"]}>
          <Card style={{ backgroundImage: `url(${person.profileImageUrl})` }}>
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
