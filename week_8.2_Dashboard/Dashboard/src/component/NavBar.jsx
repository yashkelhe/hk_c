import React from "react";

function NavBar() {
  return (
    <>
      <div>
        <div className="flex p-4 border-b-2 justify-between">
          <div className="inline-flex items-center">
            <div className="">Payouts</div>
            <div className="pl-3"> How it works </div>
          </div>
          <div>searchBar</div>
          <div className="inline-flex items-center">
            <div className="pr-3">icon1</div>
            <div>icon2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
