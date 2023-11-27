const url = `http://localhost:3001`;
const appJson = 'application/json';

export async function createUser(data) {
  let error = false;
  const response = await fetch(`${url}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': appJson,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) error = true;
  const newUser = await response.json();
  return { error, message: newUser.message, status: response.status, data: newUser };
}

export async function getUsers() {
  const response = await fetch(`${url}/users`, {
    method: 'GET',
  });

  const usersData = await response.json();

  return { data: usersData, message: usersData.message, status: response.status };
}

export async function searchUsers(data) {
  const { department, name } = data;
  let error = false;
  
  const response = await
  fetch(`${url}/users/search/?department=${department}&name=${name}`, {
    method: 'GET',
  });

  if (!response.ok) error = true;
  const usersData = await response.json();
  return { error, data: usersData, message: usersData.message, status: response.status };
}

export async function deleteUser(id) {
  let error = false;
  let message = '';
  const response = await fetch(`${url}/users/${id}`, {
    method: 'DELETE',
    headers: {
    },
  });

  if (!response.ok) {
    const resMessage = await response.json();
    message = resMessage.message;
    error = true;
  }
  return { error, message, status: response.status };
}

export async function updateUser(id, data) {
  let responseJson = '';
  let error = false;
  const response = await fetch(`${url}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': appJson,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    error = true;
    responseJson = await response.json();
  }
  return { error, message: responseJson.message, status: response.status };
}



