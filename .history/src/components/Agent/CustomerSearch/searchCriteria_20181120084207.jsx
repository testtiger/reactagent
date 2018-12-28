import React, { Component } from "react";

class SearchCriteria extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h3>Customer Search</h3>
            <hr />
            <form>
            <div className="container">
              <div className="row">
        
                <div className="form-group col-md-3">
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group col-md-3">
                  <input type="text" className="form-control" placeholder="Last name" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-3">
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group col-md-3">
                  <input type="text" className="form-control" placeholder="Zip code" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-3">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
              </div>
              <div className="row">
                    <div className="form-group col-md-3"/>
                    <div className="form-group col-md-3" />
                    <div className="form-group col-md-3" >
                        <button type="button" className="btn btn-secondary">
                            Reset
                </button>
                   
                        <button type="submit" className="btn btn-primary">
                            Search
                </button>
                    </div>
                   
               
              </div>
              </div
            </form>

           
          </div>;
    }
}

export default SearchCriteria;