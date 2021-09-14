import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
// import { Auth } from '../helpers/Auth';
import SamplePage from '../pages/sample';



/* 
-To be used when application has user roles and pages should be accessed by a particular user
-Parameters for Auth are Page and user roles(in array)
const AuththenticatedSamplePage = Auth(SamplePage, ['ADMIN','PARTNER']);
 */

const NotFoundRedirect = () => <Redirect to='/sample' />;

// const RestrictedRoute = ({ component: Component, location, authUser, ...rest }) =>
//     <Route
//         {...rest}
//         render={
//             props =>
//                 authUser
//                     ? <Component {...props} />
//                     : <Redirect
//                         to={{
//                             pathname: '/login',
//                             state: { from: location }
//                         }}
//                     />
//         }
//     />;


class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch >
                    <Route exact path='/' render={() => <Redirect to='/sample' />} />
                    <Route path='/sample' component={SamplePage} />
                    
                    {/* 
                        To be used when application has user roles and pages should be accessed by a particular user
                        <Route path='/sample' component={AuththenticatedSamplePage} /> 
                    */}
                    {/* 
                        // To be used if application requires nested navigation
                        // MainApp component will be similar to routes/route.js
                        <RestrictedRoute authUser={true} component={MainApp} />
                     */}
                    <Route component={NotFoundRedirect} />
                </Switch>
            </Router>
        );
    }
}

export { AppRouter };
