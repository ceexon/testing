import {types} from '../../actions/types';
import PostsReducer from './index';

describe('Posts Reducer', () => {

    it('should return default state', () => {
        const newState = PostsReducer(undefined, {});
        expect(newState).toEqual([]);
    })

    it('should return new state if receiving type', () => {
        const posts = [{title: 'Post One'}, {title: 'Post 2'}, {title: 'Post 3'}];
        const newState = PostsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })

        expect(newState).toEqual(posts);
    } )
})
