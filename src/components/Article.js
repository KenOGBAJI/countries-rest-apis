import React from 'react';
import { Link } from 'react-router-dom';

export default function Article({flags, name, population, region, subregion}) {
  return (
    <>
      <Link to={`/${name.common}`}>
          <article className='bg-white hover:bg-gray-200 dark:bg-gray-800 transition-all duration-200 rounded-lg shadow-md'>
            <img src={flags.svg} alt='' className='md:h-64 w-full object-cover'/>
              <div className='p-4'>
                  <h2 className='font-bold text-lg text-gray-900 dark:text-white mb-2'>{name.common}</h2>
                <ul className='flex flex-col items-start justify-start dark:text-gray-200 gap-2'>
                  <li>Population: {population.toLocaleString()}</li>
                  <li>Region: {region}</li>
                  <li>Subregion: {subregion}</li>
                </ul>
              </div>
          </article>
      </Link>
    </>
  );
}
