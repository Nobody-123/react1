import React from "react";

class AddMessage extends React.Component{
    state = {
        text: ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.sendMessage(this.state.text);
        this.setState({
            text: ""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <textarea id="text" value={this.state.text} onChange={this.handleChange}></textarea>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddMessage;