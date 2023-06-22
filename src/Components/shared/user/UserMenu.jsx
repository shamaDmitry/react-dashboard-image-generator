import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { Fragment } from 'react';
import DynamicIcon from '../../../assets/icons/_DynamicIcon';
import UserRow from '../../base/UserRow';

const UserMenu = ({ avatar, name, company, darkMode }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="flex items-center"
      >
        <UserRow
          avatar={avatar}
          name={name}
          company={company}
          darkMode={darkMode}
        />

        <DynamicIcon
          name="arrowDown"
          className="w-4 ml-2"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <Menu.Item>
            {({ active, disabled, }) => (
              <button
                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                <ChevronDownIcon
                  className="mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                Edit
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
