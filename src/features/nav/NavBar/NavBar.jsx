import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
    state = {
        isAuthenticated: false
    }

    handleSignedIn = () => this.setState({isAuthenticated : true});

    handleSignedOut = () => {
        this.setState({isAuthenticated : false});
        this.props.history.push('/');
    }
    render() {
        const { isAuthenticated } = this.state;
        return (
            <Menu inverted fixed="top">
                <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="assets/logo.png" alt="logo" />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name="Events" />
                <Menu.Item as={NavLink} to='/people' name="People" />
                <Menu.Item as={NavLink} to='/test' name="Test" />
                <Menu.Item>
                    <Button 
                        as={Link}
                        to='/createEvent'
                        floated="right" positive inverted content="Create Event" />
                </Menu.Item>   
                {isAuthenticated ? <SignedInMenu signedOut={this.handleSignedOut}></SignedInMenu> : <SignedOutMenu signedIn={this.handleSignedIn}></SignedOutMenu>} 
                                            
                </Container>
            </Menu>
        );
    }
}

export default withRouter(NavBar);