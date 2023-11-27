function isValidCPF(cpf) {
  const cpfRegex = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/;
  return cpfRegex.test(cpf);
}

export default function validateUserData(userData) {
  const { name, department, cpf, birth, salary } = userData;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return { isValid: false, error: 'Nome inválido ou vazio' };
  }

  if (!department || typeof department !== 'string' || department.trim() === '') {
    return { isValid: false, error: 'Departamento inválido ou vazio' };
  }

  if (!cpf || typeof cpf !== 'string' || cpf.trim() === '' || !isValidCPF(cpf)) {
    return { isValid: false, error: 'CPF inválido ou vazio' };
  }

  if (!salary ||  salary <= 0) {
    return { isValid: false, error: 'Salário inválido' };
  }

  if (!birth) {
    return { isValid: false, error: 'Data de nascimento inválida' };
  }

  return { isValid: true, error: null };
}