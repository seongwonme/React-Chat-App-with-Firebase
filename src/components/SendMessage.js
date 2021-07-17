/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import React, {PureComponent} from 'react';
import {db, auth} from '../firebase';

const input_container = css`    
    width: 100%;
    height: 8vh;
    background-color: #efefef;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const input_tag = css`
    width: 94%;   
    padding: 12px 20px;              
    border: 0px;    
    border-radius: 20px;
    margin-right: 9px;
    box-sizing: border-box;
    outline: none;    
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    &::placeholder {
        color: #333333;
    }
`

const submit_btn = css`
    min-width: 50px;
    min-height: 50px;
    background-color: #0b8879;
    color: white;    
    border: none;
    padding: 1px 0px 0px 4px;    
    border-radius: 50%;
    cursor: pointer;        
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;  
`

export default class SendMessage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {msg: ''}
    }    
    render() {                        
        async function sendMessage(e) {  //Promise 리턴 비동기 함수
            e.preventDefault();
            let msg = this.state.msg;
            this.setState({msg:''});
            if(msg !== ''){                
                const {uid, photoURL} = auth.currentUser;
                await db.collection('messages').add({
                    text: msg,
                    photoURL,
                    uid,
                    createdAt: new Date(),
                });                            
            }
        }
        return (            
            <form onSubmit={sendMessage.bind(this)} css={input_container}>                
                <input    
                    name="input"                     
                    value={this.state.msg} 
                    onChange={(e) => this.setState({msg: e.target.value})} 
                    placeholder="Type a message"
                    css={input_tag}
                />
                <button type="submit" css={submit_btn}><i class="fas fa-caret-right"></i></button>
            </form>
        );
    }
}