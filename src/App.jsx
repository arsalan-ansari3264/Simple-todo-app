import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Todo from "./components/Todo";

function App() {
  return (
    <Provider store={store}>
    <Todo></Todo>
    </Provider>
  );
}

export default App;
