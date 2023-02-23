import {Checkbox, ListItemIcon} from "@suid/material";
import {gql, createMutation} from "@merged/solid-apollo";
import {Todo} from "./Todos";

const COMPLETED_MUTATION = gql`
    mutation setCompleted($id: ID!, $completed: Boolean!) {
        setCompleteTodo(id: $id, done: $completed) {
            id
        }
    }
`

export default function CompleteTodo({todo}: { todo: Todo }) {
    const [mutate] = createMutation(COMPLETED_MUTATION, { refetchQueries: ['getTodos'] });
    const onClick = () => mutate({variables: {id: todo.id, completed: !todo.completed}});

    return (
        <ListItemIcon>
            <Checkbox checked={todo.completed} onClick={onClick} />
        </ListItemIcon>
    )
}