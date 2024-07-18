import React, { useContext, useEffect, useState } from "react";
 import { DevfinderComponent } from "../DevfinderComponent";
import { APiContext } from "./APIContext";
import { DisplayUserDetails } from "../DisplayUserDetails";
import useThemeDetector from "../useThemeDetector";
import { ThemeContext } from "./APIContext";


export const UserSearchMainPage = () => {
  const [searchText, setSearchText] = useState("");
  const {  searchError, searchGithubUser } =
    useContext(APiContext);
const {setDark} = useContext(ThemeContext)
//hanndel on change function 
  const handleOnChange = (e) => {
    const searchValue = e.target.value.trim();
    setSearchText(searchValue);
  };

//theme setter
const isDarktheme = useThemeDetector();
useEffect(()=>{
  if(isDarktheme){
    document.documentElement.classList.add('dark')
    setDark(true)
  }
  else{
    document.documentElement.classList.remove('dark')
    setDark(false)
  }

},[isDarktheme])


  //handle click
  const handleSearch = (e) => {
    e.preventDefault();
    searchGithubUser(searchText);
  };

  return (
    <div className= ' Outerdiv dark:bg-gray-900 Outerdiv bg-backgroundColor'>
      <div className="mainDiv sm:px-96 px-8 sm:py-24 py-12">
        <DevfinderComponent />
        <form className="sm:max-w-[48rem] mx-auto" onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-9 pointer-events-none">
              <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                  fill="#0079ff"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=' dark:shadow-cyan-500/400 dark:placeholder-white dark:bg-WhiteThemebackgroundColor  focus:ring-blue-500 focus:border-blue-500 shadow-lg shadow-cyan-500/400 placeholder-gray-500  w-full p-[1.1rem] ps-20 text-lg  border rounded-lg  focus:ring-blue-500 focus:border-blue-500 '
              placeholder="Search Github Username..."
              required
              onChange={handleOnChange}
            />
            <button
              type="submit"
              className=" text-white absolute end-2.5 bottom-2.5 bg-regalBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
            <p className="absolute right-40 top-4 text-red-500">
              {searchError ? "No results" : ""}
            </p>
          </div>
        </form>
        <DisplayUserDetails/>
      </div>
      <div>
      
      </div>
    </div>
  
  );
};




