import {ListItem, ListItemText} from "@suid/material";
import CompleteTodo from "./CompleteTodo";
import DeleteTodo from "./DeleteTodo";
import {Todo} from "./Todos";

export default function TodoItem({todo}: { todo: Todo }) {
   return (
       <ListItem>
           <ListItemText primary={todo.title} class={todo.completed ? "line-through" : ""}/>
           <CompleteTodo todo={todo}/>
           <DeleteTodo todo={todo}/>
       </ListItem>
   )
}

