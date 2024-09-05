import { ImageCategory } from "@/components/ImageCategory";
import { ImageContainer } from "@/components/ImageContainer";
import { SearchInput } from "@/components/SearchInput";

const Home = () => {
  return (
    <div>
      <h1>Snapshot</h1>
      {/* Search section */}
      <SearchInput />
      {/* Category section */}
      <ImageCategory />
      {/* Image container section */}
      <ImageContainer />
    </div>
  );
};

export default Home;
