import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Container, Form, Button, Label } from 'semantic-ui-react';

import { searchImages } from '../actions';

const ImgSearch = props => {

    const onSearchSubmit = (formProps) => {
        if (formProps.imgTitle) {
            props.searchImages(formProps.imgTitle)

        }
    }


    const { pristine, reset, submitting } = props

    const renderInput = ({ input, meta }) => {

        return (
            <>
                <input {...input} placeholder="Search free high-resolution photos"  />
                {meta.touched && meta.error && <Label basic color='red' pointing>{meta.error}</Label>}
            </>
        )
    }

    return (
        <Container>
            <h1>Images from Unsplash</h1>

            <Form onSubmit={props.handleSubmit(onSearchSubmit)}>
                <Form.Field>
                    <Field
                        name="imgTitle"
                        component={renderInput}
                        type="text"
                        validation="requaired"
                        
                    />
                </Form.Field>
                <Form.Field>
                    <label>Number of columns:</label>
                    <Field name="colNum" component="select">
                        <option value="">auto-fill</option>
                        {[1, 2, 3, 4, 5].map(col => (
                            <option value={col} key={col}>
                                {col}
                            </option>
                        ))}
                    </Field>
                </Form.Field>

                <Button primary type="submit" disabled={pristine || submitting}>
                    Search
                    </Button>
                <Button type="button" disabled={pristine || submitting} onClick={() => {
                    reset();
                    props.searchImages("")
                }}>
                    Reset
                    </Button>
            </Form>
        </Container>
    )
}
const validate = formValues => {
    if (!formValues.imgTitle) {
        return { imgTitle: "You must enter something for search" };
    }

}

export default connect(null, { searchImages })(
    reduxForm({
        form: 'imageSearch',
        validate
    })(ImgSearch)
)