export default function authHeader() {
  const dataUser = localStorage.getItem('base-aynun');
  let dataToken;
  let authToken;
  if (dataUser) {
    dataToken = JSON.parse(localStorage.getItem('base-aynun'));
  }
  const token = dataToken?.token;
  if (token) {
    authToken = `Bearer ${token}`;
    return {
      Authorization: authToken,
    };
  }
  return {};
}
