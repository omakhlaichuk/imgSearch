import {SEARCH_IMAGES} from './types';
import unsplash from '../api/unsplash';


export const searchImages = searchPhrase =>  async dispatch => {
    const response = await unsplash.get('/search/photos', {
        params: { query: searchPhrase },
    });
    console.log(response);
    dispatch({ type: SEARCH_IMAGES, payload: response })
};
/*const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        console.log({ images: response.data.results });
        */