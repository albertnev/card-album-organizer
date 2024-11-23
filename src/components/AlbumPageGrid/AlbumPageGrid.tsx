import { clsx } from "clsx";

import { AlbumCard } from "../AlbumCard";

import { pageSides } from "@/constants/pageSides";
import { type AlbumSettingsDto } from "@/types/AlbumSettingsDto";
import { type CardAlbumParamsDto } from "@/types/CardAlbumParamsDto";

interface AlbumPageGrid {
  cardPosition: CardAlbumParamsDto["position"];
  cols: AlbumSettingsDto["cols"];
  page: CardAlbumParamsDto["page"];
  rows: AlbumSettingsDto["rows"];
  side: CardAlbumParamsDto["side"];
  startNumber?: number;
}

/*
  Compile dynamic Tailwind classes for the album grid:
    grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6
    grid-rows-2 grid-rows-3 grid-rows-4 grid-rows-5 grid-rows-6
*/

const AlbumPageGrid = ({
  cardPosition,
  cols,
  page,
  rows,
  side,
  startNumber = 0,
}: AlbumPageGrid) => {
  const isLeftPage = side === pageSides.left;

  return (
    <div className={`relative grid grid-cols-${cols} grid-rows-${rows} gap-1`}>
      {page > 0 && (
        <div
          className={clsx(
            "absolute text-sm rounded-full  w-5 h-5 bg-neutral-content text-neutral flex justify-center items-center font-bold",
            {
              "left-0": isLeftPage,
              "right-0": !isLeftPage,
            },
          )}
        >
          <span>{page}</span>
        </div>
      )}
      {Array.from({ length: cols * rows }).map((_item, position) => (
        <AlbumCard
          // eslint-disable-next-line react/no-array-index-key -- visual representation of card, not representing any specific item
          key={`card-${position}`}
          isHighlighted={cardPosition === position + 1}
          number={startNumber ? startNumber + position : 0}
        />
      ))}
    </div>
  );
};

export default AlbumPageGrid;
