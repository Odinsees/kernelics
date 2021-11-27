import React, {ChangeEvent, useEffect, useState} from 'react';
import {TextField} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppRootState} from "../../app/store";
import {RequestStatusType} from "../../app/app-reducer";

type PropsType = {
    title: string
    callBack: (newTitle: string) => void
    disabled?:boolean
}

export const EditableSpan = React.memo(function ({callBack, ...props}: PropsType) {

    const status = useSelector<AppRootState, RequestStatusType>(state => state.app.status)

    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState(props.title)

    useEffect(()=>{
        setTitle(props.title)
    },[status,props.title])

    const editModeHandler = () => {
        setEdit(true)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        if(title === props.title){
            setEdit(false)
        }else{
            callBack(title)
            setEdit(false)
        }
    }
    return (
        edit
            ? <TextField
                id="standard-basic"
                autoFocus
                value={title}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                variant="standard"
                disabled={props.disabled}
            />
            : <span onDoubleClick={editModeHandler}>{props.title}</span>
    )
})