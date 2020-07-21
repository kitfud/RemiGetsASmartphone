
import * as ActionTypes from './ActionTypes';

export const Slides = (state = {isLoading:true,errMess:null,slides:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SLIDES:
            return {...state, isLoading: false, errMess: null, slides: action.payload};

        case ActionTypes.SLIDES_LOADING:
            return {...state, isLoading: true, errMess: null, slides: []}

        case ActionTypes.SLIDES_FAILED:
            return {...state, isLoading: false, errMess: action.payload}; 

        default:
          return state;
      }
};
