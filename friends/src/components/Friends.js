import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchFriends } from './actions/actions';




class Friends extends React.Component {
    state={
        name:'',
        age:'',
        email:'',
            
    }
    
    componentDidMount(){
        this.props.fetchFriends()
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <>
            <h1>Lambda Friends</h1>
            {this.props.friends.map(x => (
                <div key={x.id}>
                    <h3>{x.name} / {x.age}</h3>
                    <p>{x.email}</p>
                    {/* <button onClick={e => this.updateFriend(e, x)}>Edit Friend</button> */}
                    <button onClick={e => this.unFriend(e, x.id)}>Delete Friend</button>
                    {/* <EditFriend 
                    submitUpdate={this.submitUpdate}
                    handleChange={this.handleChange}
                    nameEdit={this.state.nameEdit}
                    ageEdit={this.state.ageEdit}
                    emailEdit={this.state.emailEdit}
                    x={x}
                    /> */}
                </div>
            ))}
            <div>
                <h3>Add a Lambda Friend</h3>
                <form id="friend-form" onSubmit={e => this.addFriend(e)}>
                    <input 
                    type="string" 
                    name="name" 
                    value={this.state.name}
                    placeholder="name"
                    onChange={this.handleChange}
                    />
                    <input 
                    type="string" 
                    name="age" 
                    value={this.state.age}
                    placeholder="age"
                    onChange={this.handleChange}
                    />
                    <input 
                    type="string" 
                    name="email" 
                    value={this.state.email}
                    placeholder="email"
                    onChange={this.handleChange}
                    />
                    <button>Add Your New Friend</button>
                </form>
            </div>
        </>
        )
    }
}

const mapStateToProps = state => ({
    friends: [],
    loading: state.loading,
    error: state.error
})


export default withRouter(connect(
    mapStateToProps,
    {
     fetchFriends,   
    }

)(Friends));