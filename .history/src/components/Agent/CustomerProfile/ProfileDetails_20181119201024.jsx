import React, { Component } from "react";

export default class ProfileDetails extends Component {

    
th

                 //firstName
                 //lastName
                 //emailid
                 //Email prefrences
                 //CreateNewOrder Link
                 // Save Changes
                 /***
   *  <ProfileDetails
          firstName={profileDetails.firstName}
          lastName={profileDetails.firstName}
          email={profileDetails.email}
          receiveEmail={profileDetails.receiveEmail}
   */
                 render() {
                   return <div className="container">
                       <h3> Customer Profile</h3>
                       <div className="row">
                         <div className="col-md-4">
                           <label htmlFor="firstName">
                             firstName
                           </label>
                               <input id="firstName" type="text" value={this.props.firstName} />
                           <label htmlFor="firstName">
                             firstName
                           </label>
                               <input id="lastName" type="text" value={this.props.lastName} />
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                               <input type="text" value={this.props.email} />
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           {
                             //<button onClick={this.props.onClick()}>Save</button>
                           }
                         </div>
                       </div>
                     </div>;
                 }
               }
