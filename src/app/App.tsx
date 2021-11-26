import React from 'react';
import './App.css';
import {Todo} from "../features/Todo/Todo";
import {Navigation} from "../features/Navigation/Navigation";
import {AppBar, Box, LinearProgress, Toolbar, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSelector} from "react-redux";
import {AppRootState} from "./store";
import {RequestStatusType} from "./app-reducer";
import {ErrorSnackbar} from "../Components/ErrorSnackBar/ErrorSnackBar";



function App() {

    const status = useSelector<AppRootState, RequestStatusType>(state=> state.app.status)

  return (
    <div className={'App'}>
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
            {status==='loading' &&
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
            }
        </Box>
        <Todo/>
        <ErrorSnackbar/>
    </div>
  );
}

export default App;
