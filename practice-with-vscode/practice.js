const parks = [
    {
      id: 1,
      name: "Acadia",
      areaInSquareKm: 198.6,
      location: { state: "Maine" },
    },
    {
      id: 2,
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      id: 3,
      name: "Crater Lake",
      areaInSquareKm: 741.5,
      location: { state: "Oregon" },
    },
    {
      id: 4,
      name: "Lake Clark",
      areaInSquareKm: 10602,
      location: { state: "Alaska" },
    },
    {
      id: 5,
      name: "Kenai Fjords",
      areaInSquareKm: 2710,
      location: { state: "Alaska" },
    },
    {
      id: 6,
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
  ];
  let state = 'Alaska';
  const getParks = parks.reduce((acc, park) => {
    const location = park.location.state;
    
    if (location === state) {
      if (acc.hasOwnProperty(location)) {
        acc[location].push(park);
      }
      else {
        acc[location] = [park];
      }
    }
    
    return acc;
  }, {});
  
  return getParks ? getParks : "";
