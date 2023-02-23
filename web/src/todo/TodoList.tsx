import {For, Show} from "solid-js";
import { List } from "@suid/material";
import {gql, createQuery } from "@merged/solid-apollo";
import TodoItem from "./TodoItem";
import {Todo} from "./Todos";

const TODOS_QUERY = gql`
    query getTodos {
        todos {
            id
            title
            completed
        }
    }
`
export default function TodoList() {
    const data = createQuery<{todos: Todo[]}>(TODOS_QUERY);

    return (
        <Show when={data()?.todos}>
            <List>
                <For each={data()!.todos}>
                    {(todo: Todo) => <TodoItem todo={todo}/>}
                </For>
            </List>
        </Show>
    );
}
