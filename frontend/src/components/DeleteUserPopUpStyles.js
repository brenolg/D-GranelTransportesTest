import styled from 'styled-components';

const DeleteUserContainer = styled.div`
  font-size: 1.8rem;
  margin-bottom: 6rem;
  margin-top: 6rem;
  background: white;
  display: ${props => props.showPop? 'flex' : 'none'};
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.1rem solid black;
  border-radius: 2rem;
  width: 50%;
  padding: 3rem;
  gap: 6rem;

  h1 {
    font-size: 2.6rem;
    font-weight: 900;
    text-align: center;
  }

  span {
    width: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: left;
  }

  .button-container {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .cancelButton, .deleteButton {
    border-radius: 1rem;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 900;
    font-weight: 900;
  }

`;
export default DeleteUserContainer;