import React from 'react';
import './App.css';
import {Todo} from "../features/Todo/Todo";
import {Navigation} from "../features/Navigation/Navigation";
import {AppBar, Box, LinearProgress, Toolbar, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSelector} from "react-redux";
import {AppRootState} from "./store";
import {RequestStatusType} from "./app-reducer";
import {ErrorSnackbar, SuccessSnackbar} from "../Components/SnackBar/ErrorSnackBar";


function App() {

    const status = useSelector<AppRootState, RequestStatusType>(state => state.app.status)

    return (
        <div className={'App'}>
            <Box style={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Navigation/>
                        <Typography variant="h6" component="div" style={{flexGrow: 1, marginLeft: '20px'}}>
                            Your Todolist
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                {status === 'loading' &&
                <Box sx={{width: '100%'}}>
                    <LinearProgress/>
                </Box>
                }
            </Box>
            <Todo/>
            <ErrorSnackbar/>
            <SuccessSnackbar/>
        </div>
    );
}

export default App;
