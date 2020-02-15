import React from 'react';
import {  useSelector, useDispatch  } from "react-redux";
// import PropTypes from 'prop-types';
import { fetchCounter } from './stores/Actions';

import './App.css';

export default () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <button onClick={() => dispatch(fetchCounter('+'))}>+</button> 
        <button onClick={() => dispatch(fetchCounter('-'))}>-</button>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header>
    </div>
  );
}

// const App = ({counter, dispatch}) => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{counter}</h1>
//         <button onClick={() => dispatch(fetchCounter('+'))}>+</button> 
//         <button onClick={() => dispatch(fetchCounter('-'))}>-</button>
//         <p>Edit <code>src/App.js</code> and save to reload.</p>
//       </header>
//     </div>
//   );
// }
// App.prototype = {
//   dispatch: PropTypes.func.isRequired,
// }

// const mapStateToProps = state => {
//   return { counter: state.counter };
// };

// export default connect(mapStateToProps)(App);