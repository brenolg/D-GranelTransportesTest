import styled from 'styled-components';

const SearchSection = styled.section`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  margin-top: 6rem;
  width: 100%;
  display: flex;
  border-radius: 1rem;
  width: 90%;
  border: 1px solid black;
  justify-content: center;
  padding: 3rem;

  form {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .label {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .label-select {
    width :20%;
  }

  .searchButton {
    border-radius: 1rem;
    padding: 1em 2em;
    font-size: 1.8rem;
    font-weight: 900;
  }

`;
export default SearchSection;