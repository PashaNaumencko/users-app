import callWebApi from './helpers/webApiHelper';

export const login = async (request) => {
  const response = await callWebApi({
    endpoint: '/api/login',
    type: 'POST',
    request,
  });
  return response.json();
};

export const getUsers = async (filter) => {
  const response = await callWebApi({
    endpoint: '/api/users',
    type: 'GET',
    query: filter
  });
  return response.json();
};
