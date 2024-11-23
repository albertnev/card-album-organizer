"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { AlbumPreview } from "../AlbumPreview";

import { pageSides } from "@/constants/pageSides";
import {
  getCardParameters,
  getPreviousCardParameters,
} from "@/redux/features/card/selectors";
import {
  getSearchIsLoading,
  getSearchIsRelative,
} from "@/redux/features/search/selectors";
import { useAppSelector } from "@/redux/hooks";
import { getRelativeCardPosition } from "@/utils/getRelativeCardPosition";

const CardSearchResults = () => {
  const searchIsLoading = useAppSelector(getSearchIsLoading);
  const isRelativeSearch = useAppSelector(getSearchIsRelative);
  const currentCardAlbumParams = useAppSelector(getCardParameters);
  const previousCardAlbumParams = useAppSelector(getPreviousCardParameters);

  const displayCardAlbumParams = isRelativeSearch
    ? getRelativeCardPosition(currentCardAlbumParams, previousCardAlbumParams)
    : currentCardAlbumParams;

  return (
    <div className="relative w-full py-4 min-h-56 flex flex-col items-center lg:flex-row lg:justify-center">
      {searchIsLoading ? (
        <div className="absolute z-30 w-full h-full bg-base-200/80 flex justify-center items-center">
          <span className="loading loading-spinner loading-lg" />
        </div>
      ) : null}
      {displayCardAlbumParams.page ? (
        <>
          <div className="stats stats-horizontal shadow w-fit flex mx-auto my-2 lg:stats-vertical lg:inline-grid lg:mx-0 lg:mr-4">
            <div className="stat p-2 md:p-4">
              <div className="stat-title">Page turns</div>
              <div className="stat-value flex justify-center">
                {displayCardAlbumParams.pageTurns}
              </div>
            </div>
            <div className="stat p-2 md:p-4">
              <div className="stat-title">Page</div>
              <div className="stat-value flex justify-center">
                {displayCardAlbumParams.page}
              </div>
            </div>
            <div className="stat p-2 md:p-4">
              <div className="stat-title">Page slot</div>
              <div className="stat-value flex justify-center">
                {displayCardAlbumParams.position}
              </div>
            </div>
            <div className="stat p-2 md:p-4">
              <div className="stat-title">Page side</div>
              <div className="stat-value flex justify-center capitalize">
                {displayCardAlbumParams.side === pageSides.left ? (
                  <FaArrowLeft />
                ) : (
                  <FaArrowRight />
                )}
              </div>
            </div>
          </div>
          <AlbumPreview cardAlbumParameters={displayCardAlbumParams} />
        </>
      ) : null}
    </div>
  );
};

export default CardSearchResults;
