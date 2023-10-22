const tokenKey = 'userToken';

export const setToken = (token: string) => {
  try {
    localStorage.setItem(tokenKey, token);
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem(tokenKey) || '';
  } catch (err) {
    console.error((err as Error).message);
  }
};
