import {Suspense} from "solid-js";
import {createTheme, Divider, Paper, ThemeProvider} from '@suid/material';
import {grey, red} from "@suid/material/colors";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@merged/solid-apollo'
import Navbar from "./navbar";
import TodoList from "./todo/TodoList";
import AddTodo from "./todo/AddTodo";

const client = new ApolloClient({
    uri: "http://localhost:5173/query",
    cache: new InMemoryCache(),
})

const theme = createTheme({
    palette: {
        primary: {
            main: red[700],
        },
        secondary: {
            main: grey[200],
        }
    }
})
export default function App() {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Navbar/>
                    <Paper class="container mx-auto px-4 max-w-lg">
                        <AddTodo/>
                        <Divider/>
                        <TodoList/>
                    </Paper>
                </Suspense>
            </ThemeProvider>
        </ApolloProvider>
    )
}