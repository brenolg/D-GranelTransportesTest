import styled from 'styled-components';

const TableContainer = styled.section`
  font-size: 1.8rem;
  margin-bottom: 6rem;
  margin-top: 6rem;
  width: 100%;
  text-align: center;

  table {
    margin: auto;
    border-radius: 1rem;
    width: 90%;
    border: 1px solid black;
    border-collapse: collapse;
  }

  th, td{
    border: 1px solid black;
    padding: 1em 0;
  }

  .name-th {
    width: 40%;
  }

  .button-td {
    display: flex;
    padding: 0.5rem 3rem;
    justify-content: space-evenly;
    gap: 2rem;
  }

  .editButton, .deleteButton {
    padding: 1em;
    font-size: 1.8rem;
    border-radius: 1rem;
  }
`;
export default TableContainer ;