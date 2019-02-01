import React, { Component } from "react";

function TableHeader() {
  return (
    <thead className="thead-light">
      <tr>
        <th scope="col">Ref #</th>
        <th scope="col">Type</th>
        <th scope="col">Pending Action</th>
      </tr>
    </thead>
  );
}

function TableBody1(props) {
  props = props.pendingActionsList;
  var pendingActionsMapCallBack = function(pendingItem) {
    return (
      <tr key={pendingItem.id}>
        <th scope="col">{pendingItem.id}</th>
        <th scope="col">{pendingItem.itemType}</th>
        <th scope="col">{pendingItem.pendingAction}</th>
      </tr>
    );
  };

  if (props) {
    return <tbody>{props.map(pendingActionsMapCallBack)}</tbody>;
  }
  return null;
}
class PendingActions extends Component {
  render() {
    return (
      <div className="table-responsive">
        <h3>Pending Actions</h3>
        <table className=" table table-bordered table-responsive">
          <TableHeader />
          <TableBody1
            pendingActionsList={
              this.props.pendingActions ? this.props.pendingActions : []
            }
          />
        </table>
      </div>
    );
  }
}

export default PendingActions;
