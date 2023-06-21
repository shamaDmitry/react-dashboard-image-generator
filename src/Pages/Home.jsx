import { useAtom } from "jotai";
import { darkModeAtom } from "../atoms/darkModeAtom";

import Divider from "../Components/base/Divider";
import SearchInput from "../Components/base/SearchInput";
import UserMenu from "../Components/shared/user/UserMenu";
import UserNotificationCenter from "../Components/shared/user/UserNotificationCenter";
import Tag from "../Components/base/Tag";
import Card from "../Components/shared/Card";

import Heart from "../assets/icons/Heart";
import OpenEye from "../assets/icons/OpenEye";

const Home = () => {
  const [darkMode,] = useAtom(darkModeAtom);

  return (
    <section className="flex flex-col w-full">
      <div className="flex w-full">
        <div>
          <SearchInput />
        </div>

        <div className="flex gap-4 ml-auto">
          <UserMenu
            avatar="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=100"
            name="Nicholsdsas Turner"
            company="SaaS Blocks LLC"
          />

          <UserNotificationCenter />
        </div>
      </div>

      <Divider
        className="h-[1px] w-full bg-gray-300 my-8"
      />

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

        <div>
          <select name="" id="">
            <option value="">filter</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card
          media="https://placeimg.com/250/480/any"
          author={{
            "avatar": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=100",
            "name": "Nicholsdsas Turner",
          }}
          stats={[
            {
              "icon": <Heart />,
              "count": 24,
            },
            {
              "icon": <OpenEye />,
              "count": 224,
            },
          ]}
        />

        <Card
          media="https://placeimg.com/250/480/any"
          author={{
            "avatar": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=100",
            "name": "Nicholsdsas Turner",
          }}
          stats={[
            {
              "icon": <Heart />,
              "count": 24,
            },
            {
              "icon": <OpenEye />,
              "count": 224,
            },
          ]}
        />

        <Card
          media="https://placeimg.com/250/480/any"
          author={{
            "avatar": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=100",
            "name": "Nicholsdsas Turner",
          }}
          stats={[
            {
              "icon": <Heart />,
              "count": 24,
            },
            {
              "icon": <OpenEye />,
              "count": 224,
            },
          ]}
        />

        <Card
          media="https://placeimg.com/250/480/any"
          author={{
            "avatar": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=100",
            "name": "Nicholsdsas Turner",
          }}
          stats={[
            {
              "icon": <Heart />,
              "count": 24,
            },
            {
              "icon": <OpenEye />,
              "count": 224,
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Home;
