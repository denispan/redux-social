import {Status} from '../../helpers/status';

export interface IPost {
  id: number;
  body: string;
  tags: string[];
  reactions: number;
  userId: number;
}

export interface PostsSliceState {
  posts: IPost[];
  status: Status;
}
