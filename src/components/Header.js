import React from "react";

function Header() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <h1 className="font-semibold text-xl tracking-tight">Caldera Pottery Inventory Tracker</h1>
      <hr />
      </div>
    </React.Fragment>
  );
}

export default Header;