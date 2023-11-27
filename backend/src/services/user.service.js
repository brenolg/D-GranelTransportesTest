const { User } = require('../database/models');
const schema = require('./validations/validationInputValues');
const HttpException = require('../utils/HttpException');
const { Op } = require('sequelize');

const createNewUser = async (user) => {
  const error = schema.validateNewUser(user);
  if (error.type) throw new HttpException(400, error.message);

  const newUser = User.create(user);

  return newUser ;
};

const findUserByName = async (name) => User.findOne({ where: { name } });

const findAllUsers = async () => User.findAll();

const removeUser = async (id) => {
  const removed = await User.destroy({ where: { id } });

  return removed;
}

const updatedUser = async (id, updatedUserData) => {
  const error = schema.validateNewUser(updatedUserData);
  if (error.type) throw new HttpException(400, error.message);

  const [updated] = await User.update(updatedUserData, {
    where: { id },
  });

  const updatedUser = await User.findOne({ where: { id } });
  return updatedUser ;
};

const searchAll = async(categorySearched, nameSearched) => {
  let nameQuery = { [Op.like]: `%${nameSearched}%` };

  const users = await User.findAll({
    where: {
      department: `${categorySearched}`,
      name: { ...nameQuery }, 
    },
  });

  return users;
}

const searchByCategory = async (categorySearched) => {
  const users = await User.findAll({
    where: {
      department: `${categorySearched}`,
    },
  });

  return users;
}

const searchByName = async (nameSearched) => {
  let nameQuery = { [Op.like]: `%${nameSearched}%` };
  
  const users = await User.findAll({
    where: {
      name: { ...nameQuery }, 
    },
  });

  return users;
}

module.exports = {
  createNewUser,
  findUserByName,
  findAllUsers,
  removeUser,
  updatedUser,
  searchAll,
  searchByCategory,
  searchByName,
};