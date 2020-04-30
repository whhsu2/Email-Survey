import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'
import * as actions from '../../actions'
import { withRouter } from 'react-router'

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields =  
        formFields.map(({label, name}) => {
            return (
                <div key={label}>
                    <label>{label}</label>
                    <div>
                        {formValues[name]}
                    </div>
                </div>
            )
        })

    return (
        <div>
            <h5>Please Review your form</h5>
            {reviewFields}
            <button  className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
            </button>
            <button 
                onClick={() => submitSurvey(formValues, history)}
                className="green btn-flat right white-text"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return (
        { formValues: state.form.surveyForm.values }
    )
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview))