import {useDispatch} from "react-redux";
import {addNewTodolist} from "../todolist-reducer";
import {TitleForm} from "../../../Components/TitleForm/TitleForm";
import style from './CreateTodolist.module.scss'

export const CreateTodolist = () => {

    const dispatch = useDispatch()

    const CreateTodoHandler = (newTitle: string,) => {
        dispatch(addNewTodolist(newTitle))
    }

    return (
        <div>
            <div className={style.createTodoWrapper}>
                <h2 className={style.textTyping}>Hi! Create a new TODO!</h2>
                <TitleForm callBack={CreateTodoHandler} maxLength={10}/>
            </div>
        </div>
    )
}