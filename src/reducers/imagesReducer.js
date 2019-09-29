import { SEARCH_IMAGES } from '../actions/types';


export default (state = [], action) => {
    switch (action.type) {

        //loading data from unsplash to state
        case SEARCH_IMAGES:
            return action.payload.data.results;

        default:
            return state;
    };
}