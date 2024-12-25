import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuAPI";
import { MenuCard } from "./MenuCard";
import { Navbar } from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
];
console.log(uniqueList);
const Resturant = () => {
  const [menuData, setMenu] = useState(Menu);
  console.log(menuData);

  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category == "All" || category == "all") {
      setMenu(Menu); // Reset the state to original list if 'All' or 'all' is selected.
      return; // Exit the function immediately to avoid unnecessary computations.
    }
    const cat = category.toLowerCase();
    const updatedList = Menu.filter((currElem) => currElem.category === cat);
    setMenu(updatedList); // Update the state with the filtered list
  };
  return (
    <>
      {/* <Navbar filerItem={filterItem} menuList={menuList} /> */}
      <Navbar filterItem={filterItem} menuList={menuList} />

      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
