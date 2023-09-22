import React from 'react';
import { swiggyData } from '../config/config';

const CardSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {swiggyData.map((restaurant) => (
        <div
          key={restaurant.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src="https://www.google.com/search?q=restaurant+image&oq=rest&aqs=chrome.3.69i57j46i199i433i465i512j0i20i263i433i512j35i39i650j69i59j69i60l2j69i61.3880j0j7&sourceid=chrome&ie=UTF-8#vhid=F_Q6WmgH6OKsSM&vssid=l"
            // {`./../public/images/${restaurant.name}`  }  
                    alt={restaurant.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{restaurant.name}</h2>
            <p className="text-gray-700 text-sm mb-4">{restaurant.description}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-green-600 text-lg font-semibold">
                  {restaurant.rating}
                </p>
                <p className="text-gray-600 text-sm">Rating</p>
              </div>
              <div>
                <p className="text-blue-600 text-lg font-semibold">
                  {restaurant.deliveryTime}
                </p>
                <p className="text-gray-600 text-sm">Delivery Time</p>
              </div>
              <div>
                <p className="text-red-600 text-lg font-semibold">
                  {restaurant.deliveryCharge}
                </p>
                <p className="text-gray-600 text-sm">Delivery Charge</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
