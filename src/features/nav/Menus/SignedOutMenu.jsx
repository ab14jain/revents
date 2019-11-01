import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

const SignedOutMenu = ({signedIn}) => {
    console.log(signedIn);
    return (
        <Menu.Item position="right">
            <Button basic inverted content="Login" onClick={signedIn}/>
            <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
        </Menu.Item>
    );
};

export default SignedOutMenu;