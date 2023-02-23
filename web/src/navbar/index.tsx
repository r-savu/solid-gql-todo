import {AppBar, Button, IconButton, Toolbar, Typography} from "@suid/material";
import MenuIcon from "@suid/icons-material/Menu";

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Todos</Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}