import * as queryString from 'query-string';

function getFetchUrl(args) {
  const { API_URL } = process.env;
  return API_URL + args.endpoint + (args.query ? `?${queryString.stringify(args.query)}` : '');
}

function getFetchArgs(args) {
  const headers = {
    'Content-Type': 'application/json'
  };
  let body;
  if (args.request) {
    if (args.type === 'GET') {
      throw new Error('GET request does not support request body.');
    }
    delete headers['Content-Type'];
    const formData = new FormData();
    Object.keys(args.request).forEach((arg) => formData.append(`${arg}`, `${args.request[arg]}`));
    body = formData;
  }
  return {
    method: args.type,
    headers,
    ...(args.request === 'GET' ? {} : { body })
  };
}

export async function throwIfResponseFailed(res) {
  if (!res.ok) {
    let parsedException = 'Something went wrong with request!';
    try {
      parsedException = await res.json();
    } catch (err) {
      //
    }
    throw parsedException;
  }
}

export default async function callWebApi(args) {
  const res = await fetch(getFetchUrl(args), getFetchArgs(args));
  await throwIfResponseFailed(res);
  return res;
}