import React, { useState } from "react";
import { restaurant } from "../config/config";

const CardSection = (restaurant) => {
  console.log(restaurant)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* {swiggyData.map((restaurant..data) => ( */}
        <div
          key={restaurant.restaurant.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src=""
            // {`https://example.com/${restaurant.data.image}`}
            alt={restaurant.restaurant.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{restaurant.restaurant.name}</h2>
            <p className="text-gray-700 text-sm mb-4">
              {restaurant.restaurant.description}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-green-600 text-lg font-semibold">
                  {restaurant.restaurant.rating}
                </p>
                <p className="text-gray-600 text-sm">Rating</p>
              </div>
              <div>
                <p className="text-blue-600 text-lg font-semibold">
                  {restaurant.restaurant.deliveryTime}
                </p>
                <p className="text-gray-600 text-sm">Delivery Time</p>
              </div>
              <div>
                <p className="text-red-600 text-lg font-semibold">
                  {restaurant.restaurant.deliveryCharge}
                </p>
                <p className="text-gray-600 text-sm">Delivery Charge</p>
              </div>
            </div>
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};

export default CardSection;
