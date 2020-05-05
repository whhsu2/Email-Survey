import React, { Component } from 'react'
import { connect} from 'react-redux'
import { fetchSurveys } from '../../actions'

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys()
    }

    renderScreen() {
        if(this.props.surveys.length === 0) {
            return this.renderStart()
        }else{
            return this.renderSurveys()
        }
    }

    renderStart() {
        return (
        <div>
            <p>
                First add credits. For the credit card number, input 4242 4242 4242 4242. For 
                email, MM/YY and CVC, you can enter arbitrary values.
            </p>
            <p>
                Create a survey with the buttom on the bottom right. 
            </p>
            
        </div>
        )
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderScreen()}
            </div>
        )
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys} )(SurveyList);