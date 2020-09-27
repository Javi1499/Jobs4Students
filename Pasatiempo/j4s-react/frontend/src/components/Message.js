import React from 'react'

function Message(props) {

    return (

        <div class={"alert alert-" + this.props.type} role="alert">
            {props.message}
        </div>


    )
}

export default Message;