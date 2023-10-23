import {Status} from '../../helpers/status';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  token: string;
}

export interface IUserFull extends IUser {
  email: string;
  birthDate: string;
  maidenName: string;
}

export interface UserSliceState {
  user: IUserFull;
  status: Status;
}
