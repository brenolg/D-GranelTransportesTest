import { useState } from 'react';
import SearchSection from './SearchFormStyles.js';
import { useNavigate } from 'react-router-dom';
import { searchUsers } from '../services/APICommunication';
import { useContext } from 'react';
import Context from '../context/Context';

export default function SearchForm() {
  const [searchName, setSearchName] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('vendas'); 
  const { setUserList } = useContext(Context);

  const navigate = useNavigate();

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const queryString = new URLSearchParams({
      department: selectedDepartment,
      name: searchName,
    }).toString();

    searchUsers({name: searchName, department: selectedDepartment}).then((response) => {
      if (response.error) {
        alert(response.message);
        return;
      }
      setUserList(response.data);

    });

    navigate(`/search?${queryString}`);
  };

  return (
    <SearchSection>
      <form onSubmit={handleSearch}>
        <label className="label" htmlFor="search">
          Nome:
          <input
            onChange={({ target }) => setSearchName(target.value)}
            value={searchName}
            type="text"
            id="search"
            placeholder="Pesquise por nome"
          />
        </label>

        <label className="label label-select" htmlFor="departamento">
          Departamento:
          <select
            id="departamento"
            name="departamento"
            value={selectedDepartment} 
            onChange={handleDepartmentChange} 
          >
            <option value="all">Todas</option>
            <option value="vendas">Vendas</option>
            <option value="marketing">Marketing</option>
            <option value="financeiro">Financeiro</option>
            <option value="suporte">Suporte</option>
            <option value="ti">TI</option>
          </select>
        </label>

        <button type="submit" className="searchButton">
          Pesquisar
        </button>
      </form>
    </SearchSection>
  );
}
