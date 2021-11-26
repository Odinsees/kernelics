
import {useDispatch} from "react-redux";
import {addNewTodolist} from "../todolist-reducer";
import {TitleForm} from "../../../Components/TitleForm/TitleForm";

export const CreateTodolist = () => {

    const dispatch = useDispatch()

    const CreateTodoHandler = (newTitle:string) =>{
        dispatch(addNewTodolist(newTitle))
    }

    return (
        <div>
            <TitleForm callBack={CreateTodoHandler}/>
        </div>
    )
}