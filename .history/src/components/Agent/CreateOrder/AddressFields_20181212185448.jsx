import React, { Component } from 'react'

export default class AddressFields extends Component {
  render() {
    return (<div>
        <div className="row first-row">
            <div className="form-group col-sm-4">
                <input type="text" class="col-md-12 form-control" name="firstName" id="addressBook-firstname" aria-required="true" required="required" placeholder="First Name" />
                <div className="form-group col-sm-4">
                    <input type="text" class="col-md-12 form-control" name="lasttName" id="addressBook-lastname" aria-required="true" required="required" placeholder="last Name" />
                </div>
            </div>
        </div>
    </div>)
    
  }
}
