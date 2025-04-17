import HomeTextArea from "./HomeTextArea";
import HomeSearchBar from "./HomeSearchBar";
import HomeCategoryList from "./HomeCategoryList";

export default function HomeMainSection() {
  return (
    <div className="px-6 py-36 text-white w-screen">
      <HomeTextArea />
      <HomeSearchBar />
      <HomeCategoryList />
    </div>
  );
}
