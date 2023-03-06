// Libraries
import React, { useState } from 'react';
import { FaPhone, FaChevronDown } from 'react-icons/fa';
import {
  CategoriesItems,
  BrandsItems,
  ProductsItems,
} from '../../menuItems';

function Header() {
  const navItems = [
    {
      id: 1,
      title: 'CATEGORIES',
    },
    {
      id: 2,
      title: 'TYPES DE PRODUITS',
    },
    {
      id: 3,
      title: 'MARQUES',
    },
  ];
  // State
  const [dropdownButton, setDropdownButton] = useState(false);
  const [innerTextValue, setInnerTextValue] = useState('');
  const [displayInnerText, setDisplayInnerText] = useState('');

  //   Methods
  const handleClickDropdown = (e) => {
    console.log(e.target.innerText);
    setInnerTextValue(e.target.innerText);
    setDropdownButton(!dropdownButton);
    displayMenuItems(innerTextValue);
  };

  const displayMenuItems = (innerTextValue) => {
    if (innerTextValue === 'CATEGORIES') {
      CategoriesItems.map((categoriesItem) => {
        setDisplayInnerText(categoriesItem.name);
      });
    } else if (innerTextValue === 'MARQUES') {
      console.log('Ca marche toujours');
    } else if (innerTextValue === 'TYPES DE PRODUITS') {
      console.log("C'est cool");
    }
  };
  return (
    <header>
      <div className='p-4 font-thin bg-slate-100'>
        <ul className='container flex gap-4 mx-auto'>
          <li className='flex items-center gap-2'>
            <FaPhone size={15} /> 01 02 03 04 05
          </li>
          <li className='text-slate-300'>|</li>
          <li>Livraison offerte à partir de 100€</li>
        </ul>
      </div>

      <nav>
        <ul className='flex'>
          <li className='text-2xl font-bold'>Choose</li>
          <a
            href='#'
            className='px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-50'
          >
            ACCUEIL
          </a>
          <li className='relative flex text-left'>
            {navItems.map((navItem) => (
              <div key={navItem.id}>
                <div>
                  <button
                    onClick={handleClickDropdown}
                    type='button'
                    className='flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50'
                    id='menu-button'
                    aria-expanded='true'
                    aria-haspopup='true'
                  >
                    {navItem.title} <FaChevronDown size={10} />
                  </button>
                </div>
                <div
                  style={
                    dropdownButton
                      ? { display: 'inline-block' }
                      : { display: 'none' }
                  }
                  className='absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='menu-button'
                  tabIndex='-1'
                >
                  <div
                    className='py-1'
                    role='none'
                  >
                    <p>{displayInnerText}</p>
                  </div>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
