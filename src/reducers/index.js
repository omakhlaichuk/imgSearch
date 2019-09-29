import { combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import imagesReducer from './imagesReducer';
 
export default combineReducers({
    form: formReducer,
    images: imagesReducer,
})