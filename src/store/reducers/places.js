import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PALCE,
  DESELECT_PLACE
} from "../actions/places";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: {
          key: Math.random(),
          name: action.placeName,
          // brought in from assets
          // image: placeImage
          // brought in from the web
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        }
      };
    default:
      return state;
  }
};

export default reducer;
