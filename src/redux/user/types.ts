import {Status} from '../../helpers/status';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  token: string;
}

export interface UserSliceState {
  user: IUser;
  status: Status;
}
