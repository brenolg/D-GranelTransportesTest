import { useState, useEffect } from 'react';
import EditUserContainer from './EditUserPopUpStyles';
import { useContext } from 'react';
import Context from '../context/Context';
import PropTypes from 'prop-types';
import { getUsers, updateUser} from '../services/APICommunication';
import validateUserData  from '../utils/validateUserData';

export default function EditUserPopUp() {
  const { setShowEditUserPop, showEditUserPop, setUserList, selectedUserToEdit} = useContext(Context);
  const [userName, setUserName] = useState('');
  const [userDepartment, setUserDepartment] = useState(''); 
  const [userCPF, setUserCPF] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userSalary, setUserSalary] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if(selectedUserToEdit === null) return;
    setUserName(selectedUserToEdit.name);
    setUserDepartment(selectedUserToEdit.department);
    setUserCPF(selectedUserToEdit.cpf);
    setUserDate(selectedUserToEdit.birth);
    setUserSalary(selectedUserToEdit.salary);
  }, [showEditUserPop, selectedUserToEdit]);

  const handleCancelButton = () => {
    setShowEditUserPop(false);
  }

  const handleEditButton = async (event) => {
    event.preventDefault();

    const formattedDate = new Date(userDate).toISOString();
    const userData = {
      name: userName,
      department: userDepartment,
      cpf: userCPF,
      birth: formattedDate,
      salary: userSalary,
    };

    const validationResult = validateUserData(userData);
    if (validationResult.isValid) {
      updateUser(selectedUserToEdit.id, userData).then((response) => {
        if(userDate === '' || userDate === undefined) return alert('Data inválida');
    
        if (response.error) {
          setError(response.message);
          setTimeout(() => {
            setError('');
          } , 3000);
          return;
        }
        if (!response.error) {
          getUsers().then((response) => { 
          setUserList(response.data);
          setShowEditUserPop(false);
          });
        }
      });
        
    } else {
        setError(validationResult.error); 
        setTimeout(() => {
          setError('');
        } , 3000);
        return;
      }
  };

  return (
    <EditUserContainer showPop={showEditUserPop}>
      
      <h1>Editar funcionário</h1>

      <form >
        <label className="label" htmlFor="name">
          Nome:
          <input
            onChange={({ target }) => setUserName(target.value)}
            value={userName}
            type="text"
            id="name"
            placeholder="Nome do funcionário"
            required
          />
        </label>

        <label className="label" htmlFor="cpf">
          CPF:
          <input
            onChange={({ target }) => setUserCPF(target.value)}
            value={userCPF}
            type="text"
            id="cpf"
            placeholder="CPF do funcionário"
            required
          />
        </label>

        <label className="label label-select" htmlFor="departamento">
          Departamento:
          <select
            id="departamento"
            name="departamento"
            value={userDepartment} 
            onChange={({ target }) => setUserDepartment(target.value)} 
          >
            <option value="vendas">Vendas</option>
            <option value="marketing">Marketing</option>
            <option value="financeiro">Financeiro</option>
            <option value="suporte">Suporte</option>
            <option value="ti">TI</option>
          </select>
        </label>

        <label className="label" htmlFor="salary">
          Salario:
          <input
            onChange={({ target }) => setUserSalary(target.value)}
            value={userSalary}
            type="number"
            id="salary"
            placeholder="Salario do funcionário"
            required
          />
        </label>

        <label className="label" htmlFor="date">
          Data de Nascimento:
          <input
            onChange={({ target }) => setUserDate(target.value)}
            value={userDate}
            type="date"
            id="date"
            placeholder="Data de nascimento do funcionário"
            required
          />
        </label>

        <span className='error'>{error}</span>

        <div className='button-container'>
          <button 
            onClick={handleCancelButton}
            type="button" 
            className="cancelButton"
          >
            Cancelar
          </button>

          <button 
            onClick={handleEditButton}
            type="submit" 
            className="saveButton"
          >
            Salvar
          </button>
        </div>

      </form>
    </EditUserContainer>
  );
}

EditUserPopUp.propTypes = {
  name: PropTypes.string.isRequired,
  cpf: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};