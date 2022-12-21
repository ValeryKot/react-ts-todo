import { ITodo } from "../types/data"

type Props = {}

interface ITodoItem extends ITodo {}

const TodoItem: React.FC = (props: Props) => {
  return (
    <div>TodoItem</div>
  )
}

export {TodoItem}