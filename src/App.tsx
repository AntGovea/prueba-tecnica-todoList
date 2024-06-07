import { SearchTodo } from "./components/SearchTodo"
import { TodoList } from "./components/TodoList"
import './index.css'
export const App = () => {
  return (
    <div className=" w-full h-full "  >
      <SearchTodo />
      <TodoList />



    </div>

  )
}
