/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import React, {PureComponent} from 'react';
import firebase from 'firebase'; //로그인하기 위해 임포트
import {auth} from '../firebase';

const login_btn = css`    
    width: 100vw;
    height: 100vh;              
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 240px;
        height: 100px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
        background-color: #ffffff;
        font-size: large;
        color: #555555;
    } 
`          

export default class SignIn extends PureComponent {
    render() {
        const signInWithGoogle = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            //auth.signInWithPopup(provider);            
            auth.signInWithRedirect(provider);
        };// 로그인 팝업
        return (
            <div css={login_btn}>
                <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
        );
    }
}

