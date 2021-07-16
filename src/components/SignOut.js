import React, {PureComponent} from 'react';
import {auth} from '../firebase.js';

export default class SignOut extends PureComponent {
    render() {        
        return (            
            <div>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
        );
    }
}