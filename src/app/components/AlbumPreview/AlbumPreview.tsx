import { AlbumPageGrid } from "../AlbumPageGrid";

import { pageSides } from "@/app/constants/pageSides";
import { getAlbumSettings } from "@/app/redux/features/album/selectors";
import { useAppSelector } from "@/app/redux/hooks";
import { type CardAlbumParamsDto } from "@/app/types/CardAlbumParamsDto";

interface AlbumPreviewProps {
  cardAlbumParameters: CardAlbumParamsDto;
}

const AlbumPreview = ({ cardAlbumParameters }: AlbumPreviewProps) => {
  const albumSettings = useAppSelector(getAlbumSettings);
  const isLeftPage = cardAlbumParameters.side === pageSides.left;

  const cardsPerPage = albumSettings.rows * albumSettings.cols;
  const cardPageStart =
    cardsPerPage * cardAlbumParameters.page - cardsPerPage + 1;

  const leftPageStart = isLeftPage
    ? cardPageStart
    : cardPageStart - cardsPerPage;
  const rightPageStart = !isLeftPage
    ? cardPageStart
    : cardPageStart + cardsPerPage;

  return (
    <div className="flex gap-4 p-2 bg-neutral w-fit rounded-md flex-shrink-0">
      <AlbumPageGrid
        cardPosition={isLeftPage ? cardAlbumParameters.position : 0}
        cols={albumSettings.cols}
        page={
          isLeftPage ? cardAlbumParameters.page : cardAlbumParameters.page - 1
        }
        rows={albumSettings.rows}
        side="left"
        startNumber={leftPageStart}
      />
      <AlbumPageGrid
        cardPosition={!isLeftPage ? cardAlbumParameters.position : 0}
        cols={albumSettings.cols}
        page={
          !isLeftPage ? cardAlbumParameters.page : cardAlbumParameters.page + 1
        }
        rows={albumSettings.rows}
        side="right"
        startNumber={rightPageStart}
      />
    </div>
  );
};

export default AlbumPreview;
