import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [showNewUserPop, setShowNewUserPop] = useState(false);
  const [showEditUserPop, setShowEditUserPop] = useState(false);
  const [showDeleteUserPop, setShowDeleteUserPop] = useState(false);
  const [userList, setUserList] = useState([]);
  const [selectedUserToDelete, setSelectedUserToDelete] = useState([]);
  const [selectedUserToEdit, setSelectedUserToEdit] = useState(null);

  const value = useMemo(
    () => ({
      showNewUserPop,
      setShowNewUserPop,
      showEditUserPop,
      setShowEditUserPop,
      showDeleteUserPop,
      setShowDeleteUserPop,
      userList,
      setUserList,
      selectedUserToDelete,
      setSelectedUserToDelete,
      selectedUserToEdit,
      setSelectedUserToEdit,
    }),
    [showNewUserPop, showDeleteUserPop, showEditUserPop, userList, selectedUserToDelete, selectedUserToEdit],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};