module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Paulo Xavier',
      department: 'financeiro',
      salary: 10000, 
      birth: '1989-02-12',
      cpf: '111.111.111-11',
    },
    {
      id: 2,
      name: 'Carla Monteiro',
      department: 'financeiro',
      salary: 40000, 
      birth: '1989-02-19',
      cpf: '111.111.111-11',
    },
    {
      id: 3,
      name: 'Fulana Pereira',
      department: 'ti',
      salary: 2000, 
      birth: '1989-11-02',
      cpf: '111.111.111-11',
    },
    {
      id: 4,
      name: 'Marcia Pereira',
      department: 'suporte',
      salary: 3600, 
      birth: '1989-06-02',
      cpf: '111.111.111-11',
    }, 
    {
      id: 5,
      name: 'Gisele Lopes',
      department: 'marketing',
      salary: 3900, 
      birth: '1989-12-02',
      cpf: '111.111.111-11',
    }, 

    {
      id: 6,
      name: 'Marcelo Lopes',
      department: 'financeiro',
      salary: 3900, 
      birth: '1989-02-17',
      cpf: '111.111.111-11',
    }, 
    {
      id: 7,
      name: 'João Lopes',
      department: 'suporte',
      salary: 3950, 
      birth: '1689-02-18',
      cpf: '111.111.111-11',
    }, 
    {
      id: 8,
      name: 'Kelly Lopes',
      department: 'vendas',
      salary: 3950, 
      birth: '1959-02-21',
      cpf: '111.111.111-11',
    },
    {
      id: 9,
      name: 'Marcelo Xavier',
      department: 'suporte',
      salary: 3950, 
      birth: '1959-05-01',
      cpf: '111.111.111-11',
    },

    {
      id: 10,
      name: 'Fulana Silva',
      department: 'suporte',
      salary: 3950, 
      birth: '1959-07-29',
      cpf: '111.111.111-11',
    },

    {
      id: 11,
      name: 'Fulana Fonseca',
      department: 'suporte',
      salary: 3950, 
      birth: '2989-02-06',
      cpf: '111.111.111-11',
    },
    {
      id: 12,
      name: 'Fulana Xavier',
      department: 'marketing',
      salary: 3950, 
      birth: '2989-02-12',
      cpf: '111.111.111-11',
    },
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
