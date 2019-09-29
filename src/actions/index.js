import {SEARCH_IMAGES} from './types';
import unsplash from '../api/unsplash';

//get async data from unsplash
export const searchImages = searchPhrase =>  async dispatch => {
    const response = await unsplash.get('/search/photos', {
        params: { query: searchPhrase },
    });
    dispatch({ type: SEARCH_IMAGES, payload: response })
};