import { useAtom } from "jotai";
import { darkModeAtom } from "../atoms/darkModeAtom";

import Divider from "../Components/base/Divider";
import SearchInput from "../Components/base/SearchInput";
import UserMenu from "../Components/shared/user/UserMenu";
import UserNotificationCenter from "../Components/shared/user/UserNotificationCenter";
import Tag from "../Components/base/Tag";
import Card from "../Components/shared/Card";

import MediaFilter from "../Components/base/MediaFilter";

import cardsData from "../data/cards.json";
import classNames from "classnames";

const Home = () => {
  const [darkMode,] = useAtom(darkModeAtom);

  const handleFilterChange = (filterName) => {
    console.log('filterName', filterName);
  }

  return (
    <section className="flex flex-col w-full">
      <div className="flex w-full">
        <div className="hidden lg:flex"> 
          <SearchInput
            darkMode={darkMode}
          />
        </div>

        <div className="flex gap-4 ml-auto">
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
      </div>

      <Divider
        className={classNames("h-[1px] w-full  my-8", {
          "bg-gray-300": !darkMode,
          "bg-gray-700": darkMode,
        })}
      />

      <div className="lg:hidden flex gap-6 mb-6">
        <SearchInput
          darkMode={darkMode}
        />

        <MediaFilter
          onChange={handleFilterChange}
          darkMode={darkMode}
          menu={[]}
        />
      </div>

      <div className="flex justify-between mb-4">
        <div className="flex flex-wrap gap-4">
          <Tag
            label="Discovery"
            className="flex"
            darkMode={darkMode}
            active
          />
          <Tag
            label="Abstract"
            className="flex"
            darkMode={darkMode}
          />
        </div>

        <div className="w-full hidden lg:flex max-w-[260px]">
          <MediaFilter
            onChange={handleFilterChange}
            darkMode={darkMode}
            menu={[]}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {
          cardsData.map(card => {
            return (
              <Card
                key={card.id}
                media={card.media}
                author={card.author}
                stats={card.stats}
                darkMode={darkMode}
              />
            )
          })
        }
      </div>
    </section>
  );
}

export default Home;
