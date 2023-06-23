import { useAtom } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';
import DynamicIcon from '../../assets/icons/_DynamicIcon';
import { mobileMenuToggleAtom } from '../../atoms/mobileMenuToggleAtom';
import Button from '../base/Button';
import Logo from '../base/Logo';
import SearchInput from '../base/SearchInput';
import UserMenu from './user/UserMenu';
import UserNotificationCenter from './user/UserNotificationCenter';

const TopNav = ({ darkMode }) => {
  const [mobileMenuToggle, setMobileMenuToggle] = useAtom(mobileMenuToggleAtom);

  return (
    <nav className="flex w-full items-center">
      <div className="hidden lg:flex">
        <SearchInput
          darkMode={darkMode}
        />
      </div>

      <div className="flex lg:hidden items-center gap-4">
        <Button
          type="hollow"
          icon={<DynamicIcon name="menu" />}
          onClick={() => setMobileMenuToggle(!mobileMenuToggle)}
        />

        <Link to="/" className="block">
          <Logo
            className="mx-auto hover:opacity-70"
            color={darkMode ? "#fff" : "#1E2235"}
          />
        </Link>
      </div>

      <div className="flex gap-4 ml-auto items-center">
        <UserMenu
          avatar="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=100"
          name="Nicholsdsas Turner"
          company="SaaS Blocks LLC"
          darkMode={darkMode}
        />

        <UserNotificationCenter
          darkMode={darkMode}
        />
      </div>
    </nav>
  );
}

export default TopNav;
