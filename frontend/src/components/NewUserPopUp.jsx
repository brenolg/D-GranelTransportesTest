import { useState } from 'react';
import NewUserContainer from './NewUserPopUpStyles';
import { useContext } from 'react';
import Context from '../context/Context';
import {createUser, getUsers} from '../services/APICommunication';
import validateUserData  from '../utils/validateUserData';

export default function NewUserPopUp() {
  const { setShowNewUserPop, showNewUserPop, setUserList} = useContext(Context);
  const [userName, setUserName] = useState('');
  const [userDepartment, setUserDepartment] = useState('vendas'); 
  const [userCPF, setUserCPF] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userSalary, setUseSalary] = useState('');
  const [error, setError] = useState('');

  const handleCancelButton = () => {
    setShowNewUserPop(false);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: userName,
      department: userDepartment,
      cpf: userCPF,
      birth: userDate,
      salary: userSalary,
    };

    const validationResult = validateUserData(userData);
    if (validationResult.isValid) {
      createUser( userData).then((response) => {
        if (response.error) {
          alert(response.message);
        }
        if (!response.error) {
          getUsers().then((response) => {
          setUserList(response.data);
          setShowNewUserPop(false);
          });
        }
      });
    } else {
      setError(validationResult.error);
      setTimeout(() => {
        setError('');
      } , 3000);
    }
  };

  return (
    <NewUserContainer showPop={showNewUserPop}>
      
      <h1>Novo funcionário</h1>

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
            type="number"
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
            onChange={({ target }) => setUseSalary(target.value)}
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

        <span className="error">{error}</span>

        <div className='button-container'>
          <button 
            onClick={handleCancelButton}
            type="button" 
            className="cancelButton"
          >
            Cancelar
          </button>

          <button 
            onClick={handleFormSubmit}
            type="button" 
            className="saveButton"
          >
            Salvar
          </button>
        </div>

      </form>
    </NewUserContainer>
  );
}
