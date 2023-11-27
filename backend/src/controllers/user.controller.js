const { findAllUsers , createNewUser, removeUser, updatedUser, searchAll, searchByName, searchByCategory} = require('../services/user.service');

const createUser = async (req, res) => {
  const newUser = req.body;

  await createNewUser(newUser);
  
  return res.status(201).json({ user: newUser });
};

const getAllUsers = async (_req, res) => {
  const users = await findAllUsers();

  return res.status(200).json(users);
};

const searchUser = async (req, res) =>{
  const { name, department } = req.query;
  let users = [];

  if (department==='all') { 
    users = await searchByName(name)
  } else {
    users = await searchAll(department, name);
  } 

  if (!users.length) {
    return res.status(404).json({ message: 'Usuário não encontrado' }); 
  }
  
  return res.status(200).json(users);
}

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const removed = await removeUser(id);

  if (!removed) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(200).json({ message: 'Usuário removido com sucesso' });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updated = await updatedUser(id, data);

  return res.status(200).json({ updated });
};


module.exports = {
  createUser,
  getAllUsers,
  searchUser,
  deleteUser,
  updateUser,
};