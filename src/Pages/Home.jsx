import classNames from "classnames";
import { useAtom } from "jotai";
import { darkModeAtom } from "../atoms/darkModeAtom";

import Divider from "../Components/base/Divider";
import SearchInput from "../Components/base/SearchInput";
import Tag from "../Components/base/Tag";
import Card from "../Components/shared/Card";
import MediaFilter from "../Components/base/MediaFilter";

import cardsData from "../data/cards.json";
import TopNav from "../Components/shared/TopNav";
import { useState } from "react";

const Home = () => {
  const [darkMode,] = useAtom(darkModeAtom);
  const [filterName, setFilterName] = useState(null);

  const handleFilterChange = (filterName) => {
    // console.log('filterName', filterName);
    setFilterName(filterName);
  }

  console.log(filterName);

  return (
    <section className="flex flex-col w-full">
      <TopNav
        darkMode={darkMode}
      />

      <Divider
        className={classNames("h-[1px] w-full  my-8", {
          "bg-gray-300": !darkMode,
          "bg-gray-700": darkMode,
        })}
      />

      <div className="flex gap-6 mb-6 lg:hidden">
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

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
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
