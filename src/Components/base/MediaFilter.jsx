import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

import classNames from 'classnames'
import DynamicIcon from '../../assets/icons/_DynamicIcon'

const list = [
  { name: 'Default', value: 0 },
  { name: 'Likes(asc)', value: 1 },
  { name: 'Likes(desc)', value: 2 },
  { name: 'Views(asc)', value: 3 },
  { name: 'Views(desc)', value: 4 },
]
const MediaFilter = ({ onChange, darkMode }) => {
  const [selected, setSelected] = useState(list[0]);

  const handleSelected = (value) => {
    setSelected(value);
    onChange(value);
  }

  return (
    <Listbox
      value={selected}
      onChange={handleSelected}
      by="value"
      className="w-full"
      name="mediaFilter"
    >
      <div className="relative">
        <Listbox.Button
          className={classNames("relative flex items-center w-full cursor-pointer rounded-large py-3 pl-3 pr-10 text-left border-2", {
            "border-gray-400": !darkMode,
          })}
        >
          {({ open }) => {
            return (
              <>
                <span className="mr-2">
                  <DynamicIcon
                    name="filter"
                    className={classNames({
                      "text-gray-400": !darkMode,
                      "text-gray-300": darkMode,
                    })}
                  />
                </span>

                <span className="block truncate">
                  {selected ? selected.name : (
                    <span className={classNames({
                      "text-gray-400": !darkMode,
                      "text-gray-300": darkMode,
                    })}>
                      Filter
                    </span>
                  )}
                </span>

                <span
                  className={classNames("transition-all origin-center pointer-events-none absolute inset-y-0 right-3 flex items-center", {
                    "rotate-180": open
                  })}
                >
                  <DynamicIcon
                    name="arrowDown"
                    className={classNames("h-5 w-5", {
                      "text-gray-400": !darkMode,
                      "text-gray-300": darkMode,
                    })}
                  />
                </span>
              </>
            )
          }}
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className="absolute max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5"
          >
            {list.map((item, itemIdx) => (
              <Listbox.Option
                key={itemIdx}
                value={item}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                    >
                      {item.name}
                    </span>

                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default MediaFilter;
