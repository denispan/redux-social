import React from 'react';
import PostContainer from '../../components/PostContainer';

function Posts() {

  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  //
  //
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])


  return (
    <div className="App">
      {/*{*/}
      {/*  isLoading && <h1>LOADING...</h1>*/}
      {/*}*/}
      {/*{*/}
      {/*  error && <h1>{error}</h1>*/}
      {/*}*/}
      {/*{*/}
      {/*  users.length > 0 && (*/}
      {/*    users.map((user) => (*/}
      {/*      <div key={user.id}>*/}
      {/*        {user.name}*/}
      {/*      </div>*/}
      {/*    ))*/}
      {/*  )*/}
      {/*}*/}
      <PostContainer/>
    </div>
  );
}

export default Posts;
