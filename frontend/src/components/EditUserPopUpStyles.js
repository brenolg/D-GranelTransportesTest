import styled from 'styled-components';

const EditUserContainer = styled.div`
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
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    text-align: center;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 2rem;
  }

  .label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .label-select {
    width :100%;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .cancelButton, .saveButton {
    border-radius: 1rem;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 900;
    font-weight: 900;
  }

  .error {
    color: red;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    height: 1.8rem;
  }
`;
export default EditUserContainer;