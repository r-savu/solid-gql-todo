import {IconButton, ListItemIcon} from "@suid/material";
import DeleteIcon from "@suid/icons-material/Delete";
import {gql, createMutation} from "@merged/solid-apollo";
import {Todo} from "./Todos";

const DELETE_MUTATION = gql`
    mutation deleteTodo($id: ID!) {
        deleteTodo(id: $id) {
            id
        }
    }
`;
export default function DeleteTodo({todo}: { todo: Todo }) {
    const [mutate] = createMutation(DELETE_MUTATION, { refetchQueries: ['getTodos'] });
    const onClick = () => mutate({variables: {id: todo.id}})
    return (
        <ListItemIcon>
            <IconButton color="primary" onClick={onClick}>
                <DeleteIcon />
            </IconButton>
        </ListItemIcon>
    )
}