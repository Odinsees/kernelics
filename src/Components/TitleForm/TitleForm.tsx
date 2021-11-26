import React from 'react';
import {useFormik} from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


type TitleFormPropsType = {
    callBack: (newTitle: string) => void
}

export const TitleForm = (props: TitleFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (values) => {
            props.callBack(values.title)
        },
    });

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
                    helperText={formik.touched.title && formik.errors.title}
                />
                <Button
                    variant="contained"
                    color='primary'
                    style={{maxWidth: '37px', maxHeight: '70px', minWidth: '37px', minHeight: '39px'}}
                    type="submit"
                >+
                </Button>
            </form>
        </div>
    );
};
