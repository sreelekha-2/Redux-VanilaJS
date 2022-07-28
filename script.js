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
  console.log('reducer called');
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
console.log(store);
function render() {
  const state = store.getState();
  console.log(state);
  document.getElementById('count').innerHTML = state.count;
}
render();

//subscribe
store.subscribe(render); //it calls render for every dispatch of an action

decBtn.addEventListener('click', function () {
  store.dispatch(decrement(3));
});

incBtn.addEventListener('click', function () {
  store.dispatch(increment());
});
