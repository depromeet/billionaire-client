const initialState = {

};

export default function depositReducer(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }
  
  switch (action.type) {
    default:
      return state;
  }
}