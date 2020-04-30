import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import { Link } from 'react-router-dom'
import formFields from './formFields'

class SurveyForm extends Component {
    renderFields() {
        return formFields.map(({label, name}) => {
            return <Field key={name} label={label} name={name} component={SurveyField} type="text" />
        })
    }


    render() {
        return (
            <div>
                <form 
                    onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
                >
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}
    errors.emails = validateEmails(values.recipients || '')

    formFields.forEach( ({name}) => {
        if(!values[name]) {
            errors[name] = `You must provide a ${name}`
        }
    })
    return errors
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)