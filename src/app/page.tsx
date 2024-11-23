"use client";

import { AlbumSettings } from "./components/AlbumSettings";
import { CardSearchPanel } from "./components/CardSearchPanel";
import { CardSearchResults } from "./components/CardSearchResults";
import StoreProvider from "./StoreProvider";

const Home: React.FC = () => {
  return (
    <StoreProvider>
      <div>
        <AlbumSettings />
        <CardSearchPanel />
        <CardSearchResults />
      </div>
    </StoreProvider>
  );
};

export default Home;
