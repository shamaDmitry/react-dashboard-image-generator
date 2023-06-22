import ArrowDown from "./ArrowDown";
import Bell from "./Bell";
import Chat from "./Chat";
import Clock from "./Clock";
import Collection from "./Collection";
import Downloads from "./Downloads";
import Filter from "./Filter";
import Heart from "./Heart";
import Home from "./Home";
import Logout from "./Logout";
import Moon from "./Moon";
import OpenEye from "./OpenEye";
import Plus from "./Plus";
import Search from "./Search";
import Settings from "./Settings";
import Star from "./Star";
import Sun from "./Sun";

const iconTypes = {
  arrowDown: ArrowDown,
  bell: Bell,
  chat: Chat,
  clock: Clock,
  collection: Collection,
  downloads: Downloads,
  filter: Filter,
  heart: Heart,
  home: Home,
  logout: Logout,
  moon: Moon,
  openEye: OpenEye,
  plus: Plus,
  search: Search,
  settings: Settings,
  star: Star,
  sun: Sun,
};

const DynamicIcon = ({ name, ...props }) => {
  let Icon = iconTypes[name];

  return <Icon {...props} />;
}

export default DynamicIcon;
