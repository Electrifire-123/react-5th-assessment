import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Higher Order Component</h1>
      <p>Ans:- Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</p>
      <br/>
      <br/>
      <h1>Pure Component</h1>
      <p>Ans:-  If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or  Not.
      In simple words, If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of re-rendering of the component. Pure Components are Class Components which extends React.PureComponent. </p>
    </div>
  );
}

export default App;
