/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import React, {PureComponent} from 'react';
import {db, auth} from '../firebase';
import SendMessage from './SendMessage';
//import SignOut from './SignOut';

const container = css`
    width: 100%;
    height: 100%;              
    background-color: #e2d9d3;
    display: flex;
    flex-direction: column;    
`         

const msgs = css`    
    width: 100%;
    min-height: 92vh;    
    display: flex;
    flex-direction: column;
    align-items: flex-end;            
    padding: 18.5px 20px;    
`

const send_msg = css`    
    width: 82%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 8.5px 0px;    
    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }

    .text-div {        
        margin: 0px 11px;  
        word-break: break-all;
        background-color: #e3f9c8;        
        padding: 10px 14px 7px 14px;
        border-radius: 10px;
        display: flex;        
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

        .time {
            margin-top: 3.4px;            
            font-size: 14px;            
            color: #888888;
            align-self: flex-end;
        }
    }
`

const received_msg = css`//send_msg를 상속함
    align-self: flex-start;
    justify-content: flex-start;
    .text-div {
        background-color: #fffffd;
    }            
`  

export default class Chat extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {messages: []}
        this.unsubscribe = ()=>(null)
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({behavior: "smooth"});
    }   
    
    componentDidMount() {       
        this.unsubscribe = db.collection("messages").orderBy("createdAt").limit(50).onSnapshot(snapshot => {
            this.setState({messages: snapshot.docs.map(doc => doc.data())});       
            //docs -> doc -> (id, data().text, data().photo)
        });      
        this.scrollToBottom();        
    } 
    componentDidUpdate() {
        this.scrollToBottom();
    }       
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {      
        function timeConvert(time) {
            let hours = time.getHours();
            let minutes= time.getMinutes();
            let suffix = hours >= 12 ? "PM":"AM";
            return ((hours + 11) % 12 + 1) + ':' + minutes + ' ' + suffix; 
        }
        return (
            <div css={container}>                 
                <div css={msgs}>
                    {this.state.messages.map(({id, text, photoURL, uid, createdAt}) => (                        
                        uid === auth.currentUser.uid ?                                         
                            <div css={send_msg} key={id} className='send'> 
                                <div className="text-div">                                    
                                    <p>{text}</p>                                    
                                    <p className="time">{timeConvert(createdAt.toDate())}</p>
                                </div>                                
                                <img src={photoURL} alt="" />                                     
                            </div>                        
                        :                        
                            <div css={[send_msg, received_msg]} key={id} className='received'>                                                    
                                <img src={photoURL} alt="" />
                                <div className="text-div">
                                    <p>{text}</p>
                                    <p className="time">{timeConvert(createdAt.toDate())}</p>
                                </div>                                
                            </div>                        
                    ))}                     
                </div>                  
                <SendMessage />                
                {/* <SignOut /> */}
                <div ref={(el) => {this.messagesEnd = el;}}></div>  
            </div>
        );
    }
}