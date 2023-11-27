const { newUserSchema } = require('./schemas');

const validateNewUser = (user) => {
  console.log('joi,',user);
  const { error } = newUserSchema.validate(user);
  if (!error) {
    return { type: null, message: null, 
  }; 
}}

module.exports = {
  validateNewUser,
};
