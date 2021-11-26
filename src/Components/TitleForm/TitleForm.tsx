import React, {useState} from 'react';
import {useFormik} from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as yup from 'yup'

type TitleFormPropsType = {
    callBack: (newTitle: string) => void
    maxLength:number
}

export const TitleForm = (props: TitleFormPropsType) => {

    const schemeCreator = (maxlength:number = props.maxLength) =>{
        return yup.object().shape({
            title: yup.string()
                .max(maxlength, `max length is ${maxlength} symbol`)
        })
    }

    const [error, setError] = useState(false)

    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (values) => {
            if(values.title.trim() !== ""){
                props.callBack(values.title)
                formik.resetForm()
            }else{
                setError(true)
            }
        },
        validationSchema:schemeCreator()
    });

    const onKeypressHandler = () => {
        setError(false)
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="title"
                    label="Title is required"
                    variant="outlined"
                    name="title"
                    color={'primary'}
                    size="small"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onKeyPress={onKeypressHandler}
                    helperText={formik.errors.title}
                    error={error}
                />
                <Button
                    variant="contained"
                    color='primary'
                    style={{maxWidth: '37px', maxHeight: '70px', minWidth: '37px', minHeight: '39px'}}
                    type="submit"
                    disabled={!!formik.errors.title || error}
                >+
                </Button>
            </form>
        </div>
    );
};


