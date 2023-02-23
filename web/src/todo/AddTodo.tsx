import {createSignal} from "solid-js";
import {Grid, Button, TextField} from "@suid/material";
import {gql, createMutation} from "@merged/solid-apollo";

const ADD_MUTATION = gql`
    mutation createTodo($title: String!) {
        createTodo(input: {title: $title}) {
            id
            title
            completed
        }
    }
`

export default function AddTodo() {
    const [text, setText] = createSignal('', );
    const [mutate] = createMutation(ADD_MUTATION, { refetchQueries: ['getTodos'] })
    const handleSubmit = async (e) => {
        e.preventDefault();
        await mutate({variables: {title: text()}})
        setText('')
    }
    const handleChange = (e) => { setText(e.target.value) }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="flex-end" marginY={2}>
                <Grid item xs={12}>
                    <TextField label="Title" variant="standard" required fullWidth value={text()} onChange={handleChange} />
                </Grid>
                <Grid item xs={3}>
                    <Button color="secondary" variant="contained" type="submit">Add Todo</Button>
                </Grid>
            </Grid>
        </form>
    );
}
