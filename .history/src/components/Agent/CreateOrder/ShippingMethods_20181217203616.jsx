import React, { Component } from 'react'

export default class ShippingMethods extends Component {
  render() {
    return (
      <div>
            <div className="col-sm-4">
                <h5>Select your Shipping Method :</h5>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <select
                            class="col-md-12 form-control"
                            name="country"
                            id="addressBook-scountry"
                            aria-required="true"
                        >
                            <option value="">Shipping methods...</option>
                            <option value="Standard">Standard</option>
                            <option value="AU">Priority</option>
                            <option value="BD">Free Shipping</option>
                            <option value="AR">Two Day</option>
                            <option value="AR">Ground</option>
                            <option value="AR">Overnight</option>
                        </select>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

