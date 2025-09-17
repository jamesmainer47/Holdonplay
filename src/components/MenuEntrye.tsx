"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
const menu = [
  { name: 'holdONplay Family', href: '/family' },
  { name: 'Our Locations', href: '/locations' },
  { name: 'Social Blender', href: '/blender' },
  {
    name: 'Blog',
    children: [
      { name: 'Home', href: '/blog' },
      { name: 'New Music', href: '/blog/new-music' },
      { name: 'Industry' , href: '/blog/industry-news' },
      { name: 'ONE Publishing', href: '/blog/one-publishing' },
      { name: 'Tips & Tricks', href: '/blog/tips' },
      { name: 'Resources', href: '/blog/resources' },
    ],
  },
  { name: 'ONErpm Academy', href: '/academy' },
  { name: 'Press Releases', href: '/press' },
  { name: 'Playlist Covers', href: '/covers' },
  { name: 'Distribution Partners', href: '/partners' },
  { name: 'Careers', href: '/careers' },
  { name: 'ONErpm Branding', href: '/branding' },
];

function MenuEntrye() {
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <Menu>
      <MenuButton className="flex justify-center items-center gap-2 border-2 border-blue-300 p-30">
        Business Solutions
        <ChevronDownIcon className="size-5" />
      </MenuButton>
      <MenuItems className="absolute mt-2 w-40 top-5  origin-middle-right divide-y divide-teal-400 rounded-md bg-black shadow-lg ring-1 ring-black/5 focus:outline-none z-20">
        {menu.map((item, index) => {
          if (item.name === 'Blog') {
            return (
              <div key={item.name} className="p-2">
                <button
                  onClick={() => setBlogOpen(!blogOpen)}
                  className="w-full text-left text-sm font-semibold text-gray-500 px-4 py-2 hover:text-blue-700 flex"
                >
                  {item.name}
                  <ChevronDownIcon className="size-5 flex-1/2" />
                </button>
                {blogOpen && item.children.map((child) => (
                  <MenuItem key={child.name} >
                    {({ active }) => (
                      <Link
                        href={child.href}
                        className={`block px-4 py-2 text-sm rounded ${
                          active ? 'bg-blue-100 text-blue-700' : 'text-black'
                        }`}
                      >
                        {child.name}
                      </Link>
                    )}
                  </MenuItem>
                ))}
                {index < menu.length - 1 && <div className="my-2 h-px bg-gray-200" />}
              </div>
            );
          }

          // Non-Blog entries
          return (
            <MenuItem key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-sm rounded ${
                    active ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}

export default MenuEntrye;
