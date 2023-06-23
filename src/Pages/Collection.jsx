import { useAtom } from "jotai";
import { darkModeAtom } from "../atoms/darkModeAtom";
import TopNav from "../Components/shared/TopNav";

const Collection = () => {
  const [darkMode,] = useAtom(darkModeAtom);

  return (
    <section className="flex flex-col w-full">
      <TopNav
        darkMode={darkMode}
      />
    </section>
  );
}

export default Collection;
