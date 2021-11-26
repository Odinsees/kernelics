import {Link } from "react-router-dom"

export const Navigation = () => {
    return(
        <div>
            <Link to="/create-new-todolist">Create new Todolist</Link>
            <Link to="/my-todoLists">My TodoLists</Link>
        </div>
    )
}