const initialState = {

};

export default function stockReducer(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }
  
  switch (action.type) {
    default:
      return state;
  }
}