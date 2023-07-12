import React from 'react';

export default function Header() {
  return (
    <>
     <header className='bg-slate-200 flex items-center justify-between w-full uppercase font-bold rounded-md shadow-md mb-8 mt-6 text-gray-800 text-md dark:text-white dark:bg-gray-700 p-4'>
         <div>
           <h1>Where in the world ?</h1>
          </div>
          <i className='fas fa-moon'></i>Dark Mode
     </header>
    </>
  );
}
