import React, { useEffect, useState } from "react";
import Star from "./icons/star";
import { getData } from "@/client";

const Dashboad = () => {
  const [isReviews, setIsReviews] = useState([]);
  const [averageRating, setAverageRating] = useState();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-2 h-2 sm:w-3 sm:h-3 ${
            i <= rating ? "fill-orange-400" : "fill-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const fetchReview = async () => {
    try {
      const res = await getData("user-rating");
      setIsReviews([...res.data]);
      setAverageRating(res.averageRating);
    } catch (err) {
      console.error("Something went wrong!", err);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    <>
      <div className="px-8 py-5 font-sans lg:px-10 lg:py-6 font-pop container mx-auto">
        <div>
          <img src="/logo.svg" className="w-40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-20 mt-5 lg:mt-10">
          <div>
            <p className="text-black-50 text-4xl font-bold lg:text-3xl">
              Reviews
            </p>
            <p className="text-sm text-gray-51 mt-3 lg:text-base lg:mt-4 xl:text-base xl:font-medium">
              Revolutionize your business with AI-driven software solutions that
              enhance efficiency, automate processes, and deliver result-driven
              insights effortlessly.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row xl:flex-row mt-10 lg:mt-0 xl:mt-0 lg:gap-3">
            <div className="w-30 flex items-center gap-5 lg:flex-col">
              <div className="flex items-center gap-1">
                <p className="font-bold text-6xl font-mono lg:text-7xl xl:text-7xl text-orange-50">
                  {averageRating}
                </p>
              </div>
              <div>
                <div className="flex">
                  {}
                  <Star className={"fill-yellow-500 w-3 h-3 sm:w-5 sm:h-5  "} />
                  <Star className={"fill-yellow-500 w-3 h-3 sm:w-5 sm:h-5 "} />
                  <Star className={"fill-yellow-500 w-3 h-3 sm:w-5 sm:h-5 "} />
                  <Star className={"fill-yellow-500 w-3 h-3 sm:w-5 sm:h-5 "} />
                  <Star className={"fill-gray-200 w-3 h-3 sm:w-5 sm:h-5 "} />
                </div>
                <p className="text-ss text-center text-gray-400 lg:text-base xl:text-base mt-2 lg:mt-1 xl:mt-1 font-mono">
                  ({isReviews.length})
                </p>
              </div>
            </div>

            <div className="w-full xl:w-full mt-5 lg:mt-0 xl:mt-0">
              <div className="flex items-center gap-2 xl:gap-2">
                <p className="text-black-50 text-base font-semibold md:text-xs lg:text-base xl:text-xl font-mono">
                  5
                </p>
                <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3  overflow-hidden border border-gray-300">
                  <div className="bg-orange-50 text-xs leading-none h-3  w-9/12"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:mt-1 xl:gap-2">
                <p className="text-black-50 text-base font-semibold lg:text-base xl:text-xl font-mono">
                  4
                </p>
                <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3 overflow-hidden border border-gray-300">
                  <div className="bg-orange-50 text-xs leading-none h-3 w-2/12"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:mt-1 xl:gap-2">
                <p className="text-black-50 text-base font-semibold lg:text-base xl:text-xl font-mono">
                  3
                </p>
                <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3 overflow-hidden border border-gray-300">
                  <div className="bg-orange-50 text-xs leading-none h-3 w-2/12"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:mt-1 xl:gap-2">
                <p className="text-black-50 text-base font-semibold lg:text-base xl:text-xl font-mono">
                  2
                </p>
                <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3 overflow-hidden border border-gray-300">
                  <div className="bg-orange-50 text-xs leading-none h-3 w-1/12"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:mt-1 xl:gap-2">
                <p className="text-black-50 text-base font-semibold lg:text-base xl:text-xl font-mono">
                  1
                </p>
                <div className="w-full bg-gray-200 max-w-sm rounded-lg h-3 overflow-hidden border border-gray-300">
                  <div className="bg-orange-50 text-xs leading-none h-3 w-1/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 mt-5 lg:mt-8">
          <p className="text-black-50 text-xl font-bold lg:text-3xl xl:text-3xl">
            All Reviews{" "}
          </p>
          <p className="text-xs text-gray-51 lg:text-base font-normal lg:mt-1">
            (Rating and reviews are verified and are from people who use the
            service)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 lg:mt-5">
          {isReviews &&
            isReviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className="px-4 py-5 border-1 border-gray-300  flex flex-col justify-between rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    {/* Title */}
                    <p className="text-black-50 text-lg font-semibold  w-40 sm:w-60">
                      {review.name}
                    </p>
                    {/* Stars */}
                    <div>
                      <div className="flex gap-0.5">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-black-50 font-bold text-2xl font-mono lg:text-2xl xl:text-2xl flex justify-end mt-2">
                        {review.rating}
                      </p>
                    </div>
                  </div>

                  {/* Below Content */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-400 lg:text-sm">
                        <a href="#" className="no-underline outline-none">
                          {review.email}
                        </a>
                      </p>
                      <p className="text-gray-400 text-xs lg:text-sm">
                        {review.phone_number}
                      </p>
                    </div>
                    <div>
                      <p className="flex justify-end mt-6 text-gray-400 text-sm">
                        22.03.21
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboad;
