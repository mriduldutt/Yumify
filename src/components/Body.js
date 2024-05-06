import React, { useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_URL } from "../utils/constant";
import { toast } from "react-hot-toast";
import OfflineStatus from "./OfflineStatus";
import LoadingBar from "react-top-loading-bar";
import BodyScroller from "./BodyScroller";
import NotFound from "./NotFound";






const Body = () => {
  const [listofRestraunts, setListofRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [progress, setProgress] = useState(0);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestrauntCardVeg = withVegLabel(RestaurantCard);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    try {
      const data = await fetch(RES_URL);
      setProgress(50);
      const json = await data.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);

      setListofRestraunts(resData);
      setFilteredRestraunts(resData);
      setProgress(100);
    } catch (err) {
      console.log(err);
    }
  };

  const topRatedRestraunts = () => {
    setProgress(30);
    const topRatedList = filteredRestraunts.filter(
      (resData) => resData.info.avgRating >= 4.4
    );
    setFilteredRestraunts(topRatedList);
    toast("Top Rated Restraunts");
    setProgress(100);
  };

  
  const fastDelivery = () => {
    setProgress(30);
    const fastDeliveryList = filteredRestraunts.filter(
      (resData) => resData.info.sla.deliveryTime <= 30
    );
    setFilteredRestraunts(fastDeliveryList);
    toast("Fast Delivery Restraunts");
    setProgress(100);
  };


  const Nearby1km_Restraunts = () => {
    setProgress(30);
    const Nearby1km_RestrauntsList = filteredRestraunts.filter((resData) =>
      resData.info.sla.lastMileTravel <= 1
    );
    setFilteredRestraunts(Nearby1km_RestrauntsList);
    toast("Near by 1 km Restraunts");
    setProgress(100);
  };

  const BtnSearch = () => {
    setProgress(30);
    const filteredRestraunts = listofRestraunts.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredRestraunts.length === 0) {
      setProgress(100);
      toast("No Data Found");
      setFilteredRestraunts(listofRestraunts);
    }
    setFilteredRestraunts(filteredRestraunts);
    toast("Search Result Found");
    setProgress(100);
  };

  return (
    <>
      {onlineStatus ? (
        <>
          {listofRestraunts.length != 0 ? (
            <div>
              <LoadingBar
                color="#f11946"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
              />

              <p className='text-2xl font-bold mt-8 p-2 text-center'>What's on your mind?</p>
              <BodyScroller listOfRestaurant={listofRestraunts} filteredList={filteredRestraunts} setFilteredList={setFilteredRestraunts} setProgress={setProgress}/>


              <p className="text-2xl font-bold mt-8 p-2">Search Restaurants</p>
              <div className="flex justify-between flex-wrap shadow-md rounded-lg">
                <div className="p-2 m-2 w-72 flex justify-start rounded-lg ">
                  <input
                    type="text"
                    placeholder="Restaurant or Cuisine"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="border border-orange-400 bg-transparent font-semibold active:border-none m-2 p-2"
                  />
                  <button
                    data-testid="searchBtn"
                    onClick={BtnSearch}
                    className="w-12  rounded-lg "
                  >
                    {" "}
                    🔎{" "}
                  </button>
                </div>
                <button
                  data-testid="topRatedBtn"
                  onClick={topRatedRestraunts}
                  className="p-2 m-2 w-44 bg-orange-300 hover:bg-orange-500 rounded-lg font-semibold"
                >
                  {" "}
                  Ratings 4.0 ⭐{" "}
                </button>
                <button
                  onClick={fastDelivery}
                  className="p-2 m-2 w-44 bg-orange-300 hover:bg-orange-500 rounded-lg font-semibold"
                >
                  Fast Delivery
                </button>
                <button
                  onClick={Nearby1km_Restraunts}
                  className="p-2 m-2 w-44 bg-orange-300 hover:bg-orange-500 rounded-lg font-semibold"
                >
                  Near by 1km Restraunts
                </button>
                <button
                  onClick={() => {
                    setProgress(30);
                    setFilteredRestraunts(listofRestraunts);
                    setProgress(100);
                    toast("All restaurants");
                  }}
                  className="p-2 m-2 w-44 bg-orange-300 hover:bg-orange-500 rounded-lg font-semibold"
                >
                  All Restaurants
                </button>
              </div>
              {filteredRestraunts ? (
                <>
                  <p className="text-2xl font-bold mt-8 p-2 text-center">
                    Top restaurant chains in Vaishali
                  </p>
                  <div className="flex flex-wrap md:justify-center lg:justify-center justify-center ">
                    {filteredRestraunts.map((resData) => (
                      <Link
                        key={resData.info.id}
                        to={`/restraunts/${resData.info.id}`}
                      >
                        {resData.info.veg ? (
                          <RestrauntCardVeg resData={resData} />
                        ) : (
                          <RestaurantCard resData={resData} />
                        )}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NotFound />
              )}
            </div>
          ) :
            (<Shimmer/>)}
        </>
      ) : (
        <OfflineStatus />
      )}
    </>
  );
};

export default Body;
