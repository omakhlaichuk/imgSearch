import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { searchImages } from '../actions';



const ImgSearch = props => {
    
    const onSearchSubmit = (formProps) => {
        console.log(formProps.imgTitle);
        if (formProps.imgTitle){
         props.searchImages(formProps.imgTitle)

        }
    }

    const renderImgTitle = formProps => {
        return (
            <Form.Group controlId="imageSearch.imgTitle">
                <Form.Label>Image Search</Form.Label>
                <Form.Control
                    type="text"
                    onChange={formProps.input.onChange}
                    value={formProps.input.value}
                />
                <div>{formProps.meta.pristine ? formProps.meta.error : ""} </div>
            </Form.Group>
        )
    }

    const renderColNum = formProps => {
        return (
            <Form.Group controlId="imageSearch.colNum">
                <Form.Label>Number of Columns</Form.Label>
                <Form.Control
                    as="select"
                    onChange={formProps.input.onChange}
                    value={formProps.input.value}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
        )
    }

    

    return (
        <Form onSubmit={props.handleSubmit(onSearchSubmit)}>
            <Field name="imgTitle" component={renderImgTitle} />
            <Field name="colNum" component={renderColNum} />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
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
    })(ImgSearch)
)