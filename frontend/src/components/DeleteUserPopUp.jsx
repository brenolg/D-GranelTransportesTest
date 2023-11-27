import DeleteUserContainer from './DeleteUserPopUpStyles';
import { useContext } from 'react';
import Context from '../context/Context';
import { deleteUser, getUsers } from '../services/APICommunication';
import PropTypes from 'prop-types';

export default function DeleteUserPopUp() {
  const { showDeleteUserPop, setShowDeleteUserPop, setUserList, selectedUserToDelete} = useContext(Context);

  const handleCancelButton = () => {
    setShowDeleteUserPop(false);
  }

  const handleDeleteButton = () => {
    deleteUser(selectedUserToDelete.id).then((response) => {
      if (response.error) {
        alert(response.message);
      }
      if (!response.error) {
        getUsers().then((response) => {
        setUserList(response.data);
        setShowDeleteUserPop(false);
        });
      }
    });
  }

  return (
    <DeleteUserContainer showPop={showDeleteUserPop}>
      {selectedUserToDelete.name && (
      <>
      <h1>Deseja excluir o funcionário abaixo?</h1>

      <span>Nome: {selectedUserToDelete.name} </span>

      <span>CPF: {selectedUserToDelete.cpf} </span>

      <div className='button-container'>
        <button 
          onClick={handleCancelButton}
          type="button" 
          className="cancelButton"
        >
          Cancelar
        </button>

        <button 
          onClick={handleDeleteButton}
          type="submit" 
          className="deleteButton">
          Deletar
        </button>
      </div>
      </>
      )}

    </DeleteUserContainer>
  );
}

DeleteUserPopUp.propTypes = {
  name: PropTypes.string.isRequired,
  cpf: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
};