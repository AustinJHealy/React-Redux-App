import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions";
import styled from "styled-components";

const Paragraph = styled.p`
  color: green;
  font-size: 1rem;
  font-family: Tahoma, Geneva, sans-serif;
  border-radius: 10px;
  margin: 2% 30%;
  padding: 1%;
`;
const Title = styled.h2`
  color: green;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 2.5rem;
  padding: 1%;
  margin: 1%;
`;
const Heading = styled.h1`
  color: green;
  border: 5px dashed red;
  font-size: 2rem;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  border-radius: 20px;
  margin: 2% 20%;
  padding: 1%;
`;
const Button = styled.button`
  color: green;
  font-size: 1.5rem;
  border: 0.5px solid green;
  border-radius: 5px;
  font-weight: bold;
`;

const CharacterList = (props) => {
  const fetchCharacters = (e) => {
    e.preventDefault();
    props.getCharacters();
  };

  //console.log(props);

  return (
    <>
      <Title>WubALubADubDub</Title>
      <div className="characters">
        {props.characters.map((character) => {
          return (
            <div className={character.name} key={character.id}>
              <Heading key={character.id}>Name : {character.name}</Heading>
              <img src={character.image} alt={character.name}></img>
              <Paragraph>Location : {character.location.name}</Paragraph>
              <Paragraph>Origin: {character.origin.name}</Paragraph>
              <Paragraph>Species: {character.species}</Paragraph>
              <Paragraph>Status: {character.status}</Paragraph>
            </div>
          );
        })}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <Button onClick={fetchCharacters}>Fetch Characters!</Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
  error: state.error,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, { getCharacters })(CharacterList);
