import Button from "@material-ui/core/Button"
import {Fade, Menu, MenuItem} from "@material-ui/core";
import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="contained"
                color={"info"}
            >
                Menu
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}><Link to="/create-new-todolist">Create new TODOLIST</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/my-todoLists">My TODOLIST</Link></MenuItem>
            </Menu>
        </div>
    );
}


// <div>
//     <Link to="/create-new-todolist">Create new Todolist</Link>
//     <Link
