import * as ActionTypes from './ActionTypes';
import { auth, firestore, fireauth, firebasestore,storage } from '../firebase/firebase';
//import {SLIDES} from '../shared/slides';
import firebase from 'firebase';

export const fetchSlides = () => (dispatch) => {

    dispatch(slidesLoading(true));
    return firestore.collection('slides').get()
    .then(snapshot => {
        let slides = [];
        snapshot.forEach(doc => {
            const data = doc.data()
            const _id = doc.id
            slides.push({_id, ...data });
        });
        return slides;
    })
    .then(slides => dispatch(addSlides(slides)))
    .catch(error => dispatch(slidesFailed(error.message)));
  
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