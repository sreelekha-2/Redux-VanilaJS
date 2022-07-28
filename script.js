let decBtn = document.getElementById('dec');
let incBtn = document.getElementById('inc');

//state
const initialState = { count: 0 };

//actions
const increment = () => {
  return {
    type: 'INC',
    payload: 1,
  };
};

const decrement = (num) => {
  return {
    type: 'DEC',
    payload: num,
  };
};

//reducer
function counterReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'INC':
      return { ...state, count: state.count + 1 };
    case 'DEC':
      return { ...state, count: state.count - actions.payload };
    default:
      return state;
  }
}

//store
const store = Redux.createStore(counterReducer);
function render() {
  const state = store.getState();
  document.getElementById('count').innerHTML = state.count;
}
render();

//subscribe
store.subscribe(render);

decBtn.addEventListener('click', function () {
  store.dispatch(decrement(3));
});

incBtn.addEventListener('click', function () {
  store.dispatch(increment());
});
