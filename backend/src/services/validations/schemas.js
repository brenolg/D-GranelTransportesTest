const Joi = require('joi');

const pattern = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;

const newUserSchema = Joi.object({
  name: Joi.string().required(),
  department: Joi.string().valid('vendas', 'marketing', 'financeiro', 'suporte', 'ti').required(),
  cpf: Joi.string().required(),
  birth: Joi.date().required(),
  salary: Joi.number().required(),
});

module.exports = { 
  newUserSchema,
};
