const data = require("../restaurants.json");
const measureDistance = require("./measureDistance");

const filterRestaurants = (userPos) => {
  // filtering only relevant restaurants (less than 1.5km)
  const addDistanceProperty = (userPos) => {
    return data.restaurants.map((restaurant) => {
      distance = measureDistance(
        restaurant.location[0], // restaurant longtitude
        restaurant.location[1], // restaurant latitude
        userPos.lon,
        userPos.lat
      );

      return { ...restaurant, distance };
    });
  };

  const restaurants = addDistanceProperty(userPos);
  return restaurants.filter((restaurant) => restaurant.distance <= 1.5);
};

const popular = (restaurants) => {
  return restaurants
    .sort((x, y) => y.online - x.online || y.popularity - x.popularity)
    .slice(0, 10);
};

const news = (restaurants) => {
  restaurants.filter((restaurant) => {
    const diffTime = Math.abs(Date.now() - new Date(restaurant.launch_date));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays < 200; // should be 120 days = 4 months. playing with the value for test porpuses
  });
  return restaurants
    .sort(
      (x, y) =>
        y.online - x.online || new Date(y.launch_date) - new Date(x.launch_date)
    )
    .slice(0, 10);
};

const nearby = (restaurants) => {
  return restaurants
    .sort((x, y) => y.online - x.online || x.distance - y.distance)
    .slice(0, 10);
};

module.exports.renderJson = (userPos) => {
  const restaurants = filterRestaurants(userPos);
  return {
    sections: [
      {
        title: "Popular Restaurants",
        restaurants: popular(restaurants),
      },
      {
        title: "New Restaurants",
        restaurants: news(restaurants),
      },
      {
        title: "Nearby Restaurants",
        restaurants: nearby(restaurants),
      },
    ],
  };
};
