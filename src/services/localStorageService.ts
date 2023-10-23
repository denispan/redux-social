import {IUserFull} from '../redux/user/types';

export const setUserLS = (user: IUserFull) => {
  try {
    localStorage.setItem("id", user.id.toString());
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("image", user.image);
    localStorage.setItem("token", user.token);
    localStorage.setItem("birthDate", user.birthDate);
    localStorage.setItem("email", user.email);
    localStorage.setItem("maidenName", user.maidenName);
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const getUserLS = () => {
  try {
    return {
      id: localStorage.getItem("id") || 0,
      firstName: localStorage.getItem("firstName") || '',
      lastName: localStorage.getItem("lastName") || '',
      image: localStorage.getItem("image") || '',
      token: localStorage.getItem("token") || '',
      birthDate: localStorage.getItem("birthDate") || '',
      email: localStorage.getItem("email") || '',
      maidenName: localStorage.getItem("maidenName") || '',
    };
  } catch (err) {
    console.error((err as Error).message);
    return {
      id: 0,
      firstName: '',
      lastName: '',
      maidenName: '',
      image: '',
      token: '',
      birthDate: '',
      email: '',
    };
  }
};
