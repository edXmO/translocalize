import { useState } from "react";
import languages from '../constants/languages';

export default function SelectLanguage({}) {
   
   const [open, setOpen] = useState(false);
   const [searchInput, setSearchInput] = useState("");
   const [listLang, setListLang] = useState(languages);

   function filter(e: React.ChangeEvent<HTMLInputElement>){
      const input = e.target.value;
   
      if (input !== '') {
         const results = languages.filter((lang) => {
            return lang.name.toLowerCase().startsWith(input.toLowerCase());
         });
         setListLang(results)
      } else {
         setListLang(languages)
      }
   
      setSearchInput(input);
   }

   return (
      <div className="flex flex-col">
      <button 
         id="dropdownDividerButton" 
         onClick={() => setOpen(!open)}
         className="flex-row shadow-md h-12 justify-between w-96 text-white filter  bg-gradient-to-b from-teal-400  to-blue-800  focus:ring-4 focus:ring-blue-300 rounded-xl text-md font-medium px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Languages <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
         </button>
         {open && (
            <div className="z-10 mt-2 rounded-md text-base list-none bg-white  divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 overflow-y-scroll">
               <div className="p-2 ">
                  <label htmlFor="table-search" className="sr-only">Search</label>
                  <div className="relative mt-1 ml-2 rounded-md">
                     <div className="flex absolute pl-2 inset-y-0 rounded-md left-0 items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                     </div>
                     <input
                        onChange={(e) => filter(e)} 
                        type="text" 
                        value={searchInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                  </div>
               </div>
               <ul className="flex flex-col items-start py-1 overflow-scroll h-36 rounded-md" aria-labelledby="dropdownDividerButton">
                  {
                     listLang.map((lang, i) => (
                        <button 
                           key={`${lang.name}-${i}`}
                           className="w-full flex flex-row items-start"
                           onClick={() => {
                           // set selected lang,
                           setOpen(false);
                        }
                        }>
                           <a href="#" className="block py-2 px-4 w-full text-sm rounded-md ml-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-left">{lang.name}</a>
                        </button>
                        ))
                  }
               </ul>
            </div>
         )}
   </div>
   )
}