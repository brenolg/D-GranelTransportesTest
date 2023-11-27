
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";
import NewUserButton from "../components/NewUserButton";
import NewUserPopUp from "../components/NewUserPopUp";
import { useEffect } from "react";
import { getUsers } from "../services/APICommunication";
import { useContext } from 'react';
import Context from '../context/Context';

export default function MainPage() {
  const { setUserList } = useContext(Context);

  useEffect(() => {
    getUsers().then((response) => {
      setUserList(response.data);
    });
  
  }, [setUserList]);

  return (
      <main>
        <SearchForm />
        <Table />
        <NewUserButton />
        <NewUserPopUp />
      </main>
  );
}
