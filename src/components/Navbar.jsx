import React from "react";

export const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <>
                <button
                  className="btn-group__item"
                  onClick={() => filterItem(curElem)}
                >
                  {curElem}
                </button>
              </>
            );
          })}
          <button className="btn-group__item" onClick={() => filterItem("All")}>
            All
          </button>
        </div>
      </nav>
    </>
  );
};
