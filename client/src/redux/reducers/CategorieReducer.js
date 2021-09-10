import { GET_CATEGORIES } from "../constants/ActionTypesCat";

const initState = {
  categorie: [],
};
const CategorieReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categorie: action.payload.categories,
      };

    default:
      return state;
  }
};

export default CategorieReducer;
