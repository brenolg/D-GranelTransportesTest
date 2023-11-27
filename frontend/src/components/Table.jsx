import TableContainer from "./TableStyles";
import { useContext } from "react";
import Context from "../context/Context";
import DeleteUserPopUp from "./DeleteUserPopUp";
import EditUserPopUp from "./EditUserPopUp";

export default function Table() {
  const { setShowEditUserPop, setShowDeleteUserPop, userList, setSelectedUserToEdit, setSelectedUserToDelete } = useContext(Context);

  const handleEditUserPop = (user) => {
    setSelectedUserToEdit(user);
    setShowEditUserPop(true);
  };

  const handleDeleteUserPop = (user) => {
    setSelectedUserToDelete(user);
    setShowDeleteUserPop(true);
  };

  return (
    <TableContainer className="tableSection">
      <table>
        <thead>
          <tr>
            <th className="name-th">Nome</th>
            <th>Departamento</th>
            <th>Salario</th>
            <th>Nascimento</th>
            <th className="edit-th">Edição</th>
          </tr>
        </thead>

        <tbody>
          {userList.length > 0 &&
            userList.map((user) => {
              const formattedDate = new Date(user.birth).toLocaleDateString('pt-BR');
              return (
                <>
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.department}</td>
                  <td>{user.salary}</td>
                  <td>{formattedDate}</td>
                  <td className="button-td">
                    <button type="button" 
                    onClick={() => handleEditUserPop(user)} 
                    className="editButton"
                    >
                      Editar
                    </button>

                    <button type="button" 
                    onClick={() => handleDeleteUserPop(user)} 
                    className="deleteButton"
                    >
                      Deletar
        
                    </button>
                  </td>
                </tr>

                </>
              );
            })}

            <DeleteUserPopUp/>

            <EditUserPopUp/>
        </tbody>
      </table>
    </TableContainer>
  );
}
