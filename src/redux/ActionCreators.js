import * as ActionTypes from './ActionTypes';
import {SLIDES} from '../shared/slides';

export const fetchSlides = () => (dispatch) => {

    dispatch(slidesLoading(true));

    setTimeout(() => {
        dispatch(addSlides(SLIDES));
    }, 2000);
}

export const slidesLoading = () => ({
    type: ActionTypes.SLIDES_LOADING
});

export const slidesFailed = (errmess) => ({
    type: ActionTypes.SLIDES_FAILED,
    payload: errmess
});

export const addSlides = (slides) => ({
    type: ActionTypes.ADD_SLIDES,
    payload: slides
});