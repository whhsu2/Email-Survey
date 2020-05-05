import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import Landing from './Landing'
import DashBoard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <div className="container" style={{width: "100%"}}>
                    <div className="container" style={{width: "100%"}}>
                        <BrowserRouter>
                            <div>
                                <Header />
                                <Route exact path='/' component={Landing} />
                                <Route exact path='/surveys' component={DashBoard} />
                                <Route path='/surveys/new' component={SurveyNew} />
                            </div>
                        </BrowserRouter>
                    </div>

                </div>

            </div>
        );
    }
};

export default connect(null, actions)(App);