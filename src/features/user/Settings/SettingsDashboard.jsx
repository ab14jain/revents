import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Route, Redirect } from 'react-router';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';

const SettingsDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <switch>
                    <Redirect exact from='/settings' to='/settings/basic'/>
                    <Route path='/settings/basic' component={BasicPage}/>
                    <Route path='/settings/about' component={AboutPage}/>
                    <Route path='/settings/photos' component={PhotosPage}/>
                    <Route path='/settings/account' component={AccountPage}/>
                </switch>
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingsNav></SettingsNav>
            </Grid.Column>
        </Grid>
        
    );
};

export default SettingsDashboard;