const App = ({ todos }) => {
  console.log('[App.js] todos: ', todos);
  return (
    <div>
      my app
      {/* {todos.map(todo => <p>{todo.text}</p>)} */}
    </div>
  );
}

export default App;
