let initialState= {
  categoriesList: [
  {name: 'Food', description: "you can eat it" },
  {name: 'Electronics', description: "you cant eat it" },
],
initCategory: '',
initDescription:'',
}

export default (state = initialState, action ) => {
  let {type, payload} = action;

  switch (type) {
    case "INACTIVE":
      return initialState;
    case "ACTIVATE":
      return {... state, showCategory: payload.category, showDescription: payload.description};
    default:
      return state;
  }
}

export function hide () {
  return {type: 'INACTIVE'}
}

export function show (category, description) {
  return {
    type: 'ACTIVATE',
    payload : {category, description}
}
}