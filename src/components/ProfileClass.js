import React, { Component } from 'react'

export default class ProfileClass extends Component {
    constructor(props){
        super(props);
        this.state ={
            userInfo:'',
            location:''
        }
    }
    async componentDidMount(){
        const userData = await fetch('https://api.github.com/users/Krishn-Singh');
        const ProfieData = await userData.json();
        console.log('profile Data ',ProfieData)
        this.setState({
            userInfo: ProfieData
          });
    }
   
  render() {
    return (
       <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <img
              src={this.state?.userInfo?.avatar_url}
              alt="Profile Picture"
              className="rounded-full"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-lg font-semibold">{this.state?.userInfo?.name}</h2>
            <p className="text-gray-600">{this.state?.userInfo?.name}</p>
            <p className="text-gray-600">{this.state?.userInfo?.location}</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
