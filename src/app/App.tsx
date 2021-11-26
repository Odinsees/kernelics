import React from 'react';
import './App.css';
import {Todo} from "../features/Todo/Todo";
import {Navigation} from "../features/Navigation/Navigation";
import {AppBar, Box, Toolbar, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";


function App() {
  return (
    <div>
        <Box style={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Navigation/>
                    <Typography variant="h6" component="div" style={{flexGrow: 1}}>
                        Your Todolist
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <Todo/>
    </div>
  );
}

export default App;
