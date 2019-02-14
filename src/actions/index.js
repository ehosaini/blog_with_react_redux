import jsonPlaceholder from '../apis/jsonPlaceHolder'
export const fetchPosts = () => async dispatch => {
        const postsResponse =  await jsonPlaceholder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: postsResponse.data });
    }


