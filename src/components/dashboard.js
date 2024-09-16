import React, { useEffect, useState } from "react";
import Star from "./icons/star";
import { getData } from "@/client";
import ConvertDate from "@/utility/convertDate";


const Dashboad = () => {
  const [ratingData, setRatingData] = useState(null);
  const [loading,setLoading]= useState(true)

  const renderStars = (rating,className) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={` ${className} ${
            i <= rating ? "fill-orange-500" : "fill-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  

  const fetchReview = async () => {
    try {
      const res = await getData("user-rating");
      setRatingData(res);
      setLoading(false)
    } catch (err) {
      console.error("Something went wrong!", err);
    }
  };

  useEffect(() => {
    fetchReview();
    setTimeout(() => {
      fetchReview();
    }, 30000)
  }, []);

  

  return (
    <>
      <div className="px-8 lg:px-4 py-5 font-sans  lg:py-6 font-pop">
        <div>
          <img src="/logo-white.svg" className="w-40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-20 mt-5 lg:mt-10 text-white-50">
          <div>
            <p className="text-white-50 text-4xl font-bold lg:text-3xl">
              Event Highlights and Reviews
            </p>
            <p className="text-sm text-gray-51 mt-3 lg:text-base lg:mt-4 xl:text-base xl:font-medium">
              Revolutionize your business with AI-driven software solutions that
              enhance efficiency, automate processes, and deliver result-driven
              insights effortlessly.
            </p>
          </div>

          {!loading ? (
            <div className="flex flex-col lg:flex-row xl:flex-row mt-10 lg:mt-0 xl:mt-0 lg:gap-3">
              <div className="w-30 flex items-center gap-5 lg:flex-col">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-6xl font-mono lg:text-7xl xl:text-7xl text-orange-500">
                    {ratingData?.averageRating}
                  </p>
                </div>
                <div>
                  <div className="flex">
                    {}
                    {renderStars(
                      Math.round(ratingData?.averageRating),
                      "w-3 h-3 sm:w-5 sm:h-5"
                    )}
                    {/* <Star
                      className={"fill-yellow-500 w-3 h-3 sm:w-5 sm:h-5  "}
                    />
                    <Star
                      className={"fill-yellow-500 w-3 h-3 sm:w-5 sm:h-5 "}
                    />
                    <Star
                      className={"fill-yellow-500 w-3 h-3 sm:w-5 sm:h-5 "}
                    />
                    <Star
                      className={"fill-yellow-500 w-3 h-3 sm:w-5 sm:h-5 "}
                    />
                    <Star className={"fill-gray-200 w-3 h-3 sm:w-5 sm:h-5 "} /> */}
                  </div>
                  <p className="text-ss text-center text-gray-400 lg:text-base xl:text-base mt-2 lg:mt-1 xl:mt-1 font-mono">
                    ({ratingData?.data?.length})
                  </p>
                </div>
              </div>

              <div className="w-full xl:w-full mt-5 lg:mt-0 xl:mt-0">
                <div className="flex items-center gap-2 xl:gap-2">
                  <p className="text-gray-200 text-base font-semibold md:text-xs lg:text-base xl:text-xl font-mono">
                    5
                  </p>
                  <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3  overflow-hidden border border-gray-300">
                    <div className="bg-orange-500 text-xs leading-none h-3  w-9/12"></div>
                  </div>
                  <p className="text-gray-200 text-base font-semibold md:text-xs lg:text-base xl:text-xl font-mono">
                    ({ratingData?.ratingCount?.five_rating_count})
                  </p>
                </div>
                <div className="flex items-center gap-2 md:mt-1 xl:gap-2">
                  <p className="text-gray-200 text-base font-semibold lg:text-base xl:text-xl font-mono">
                    4
                  </p>
                  <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3 overflow-hidden border border-gray-300">
                    <div className="bg-orange-500 text-xs leading-none h-3 w-2/12"></div>
                  </div>
                  <div>
                    <p className="text-gray-200 text-base font-semibold md:text-xs lg:text-base xl:text-xl font-mono">
                      ({ratingData?.ratingCount?.four_rating_count})
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:mt-1 xl:gap-2">
                  <p className="text-gray-200 text-base font-semibold lg:text-base xl:text-xl font-mono">
                    3
                  </p>
                  <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3 overflow-hidden border border-gray-300">
                    <div className="bg-orange-500 text-xs leading-none h-3 w-2/12"></div>
                  </div>
                  <div>
                    <p className="text-gray-200 text-base font-semibold lg:text-base xl:text-xl font-mono">
                      ({ratingData?.ratingCount?.three_rating_count})
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:mt-1 xl:gap-2">
                  <p className="text-gray-200 text-base font-semibold lg:text-base xl:text-xl font-mono">
                    2
                  </p>
                  <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3 overflow-hidden border border-gray-300">
                    <div className="bg-orange-500 text-xs leading-none h-3 w-1/12"></div>
                  </div>
                  <div>
                    <p className="text-gray-200 text-base font-semibold lg:text-base xl:text-xl font-mono">
                      ({ratingData?.ratingCount?.two_rating_count})
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:mt-1 xl:gap-2">
                  <p className="text-gray-200 text-base font-semibold lg:text-base xl:text-xl font-mono">
                    1
                  </p>
                  <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3 overflow-hidden border border-gray-300">
                    <div className="bg-orange-500 text-xs leading-none h-3 w-1/12"></div>
                  </div>
                  <div>
                    <p className="text-gray-200 text-base font-semibold lg:text-base xl:text-xl font-mono">
                      ({ratingData?.ratingCount?.one_rating_count})
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row xl:flex-row mt-10 lg:mt-0 xl:mt-0 gap-3">
              <div className="w-30 flex items-center lg:flex-col gap-2">
                <div className="flex items-center gap-1 animate-pulse bg-slate-300 h-16 w-24 mb-3 mt-3" />
                <div className="flex-col justify-center gap-2 items-center flex">
                  <div className="animate-pulse bg-slate-300 h-5 w-24"></div>
                  <div className="animate-pulse bg-slate-300 h-5 w-5 rounded-full"></div>
                </div>
              </div>

              <div className="w-full xl:w-full mt-5 lg:mt-0 flex gap-2 flex-col xl:mt-0">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 xl:gap-2 md:mt-1"
                  >
                    <p className="animate-pulse bg-slate-300 rounded-full h-5 w-5"></p>
                    <div className="w-full max-w-sm rounded-lg h-3 overflow-hidden border border-gray-300 animate-pulse bg-slate-300"></div>
                    <p className="animate-pulse bg-slate-300 rounded-full h-5 w-5"></p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 mt-5 lg:mt-8">
          <p className="text-white-50 text-xl font-bold lg:text-3xl xl:text-3xl">
            All Reviews{" "}
          </p>
          <p className="text-xs text-white-50 lg:text-base font-normal lg:mt-1">
            (Rating and reviews are verified and are from people who use the
            service)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 xl:grid-cols-3 mt-5 ">
          {!loading ? (
            ratingData &&
            ratingData?.data?.map((review, index) => {
              return (
                <div
                  key={index}
                  className="px-4 py-5 border border-gray-500  bg-[#3b3b3b] flex flex-col justify-start rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    {/* Title */}
                    <div>
                      <p className="text-white-50 text-lg font-semibold  w-40 sm:w-60">
                        {review.name}
                      </p>
                      <div className="mt-1">
                        <p className="text-xs text-[#c0c0c0] lg:text-sm">
                          <a href="#" className="no-underline outline-none">
                            {review.email}
                          </a>
                        </p>
                        <p className="text-[#c0c0c0] text-xs lg:text-sm">
                          {review.phone_number}
                        </p>
                      </div>
                    </div>
                    {/* Stars */}
                    <div>
                      <div className="flex gap-0.5">
                        {renderStars(review.rating, "w-2 h-2 sm:w-3 sm:h-3")}
                      </div>
                      <p className="text-gray-200 font-bold text-2xl font-mono lg:text-2xl xl:text-2xl flex justify-end mt-2">
                        {review.rating || 0}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="text-sm text-[#c0c0c0]">
                        {review.description}
                      </p>
                    </div>
                  </div>

                  {/* Below Content */}
                  <div className="flex justify-end items-start mt-auto">
                    <div>
                      <p className="flex justify-end mt-6 text-[#c0c0c0] text-sm">
                        <ConvertDate date={review.updatedAt} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              {Array.from({ length: 6 }).map((_, outerIndex) => (
                <div
                  key={outerIndex}
                  className="px-4 py-5  border border-gray-300 flex flex-col justify-between rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    {/* Title */}
                    <div>
                      <div className="animate-pulse bg-slate-300 h-6 w-40 sm:w-40 mb-2 rounded"></div>
                      <div className="mt-1">
                        <div className="animate-pulse bg-slate-300 h-4 w-32 mb-1 rounded"></div>
                        <div className="animate-pulse bg-slate-300 h-4 w-24 rounded"></div>
                      </div>
                    </div>
                    {/* Stars */}
                    <div className="flex justify-end flex-col items-end">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <div
                            key={starIndex}
                            className="animate-pulse bg-slate-300 h-5 w-5 rounded-full"
                          ></div>
                        ))}
                      </div>
                      <div className="animate-pulse bg-slate-300 h-6 w-12 rounded mt-2"></div>
                    </div>
                  </div>
                  {/* Below Content */}
                  <div className="flex justify-end items-start">
                    <div>
                      <div className="animate-pulse bg-slate-300 h-4 w-20 rounded mt-6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboad;
