import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import label from 'react-bootstrap';


const App = () => {
    const buttonText = {text: 'click me'};
    return <div>
        <label className="label" htmlFor="name">Enter Name:</label>
        <input id="name" type="text"></input>
        <button style = {{backgroundColor: 'red', color:'white'}}>{buttonText.text}</button>
    </div>;
}
ReactDOM.render(<App/>,document.querySelector('#root'));

const Components = () => {
return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="savan" timeAgo= {faker.date.past().toDateString()} imageava= {faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="savan2" timeAgo={faker.date.future().toDateString()} imageava= {faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard > 
            <CommentDetail author="savan1" timeAgo={faker.date.future().toDateString()} imageava= {faker.image.avatar()} />
        </ApprovalCard>
    </div>
);
}
ReactDOM.render(<Components/>,document.querySelector('#components'));
