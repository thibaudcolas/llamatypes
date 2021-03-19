const distanceTypes = {
  earth: "Distance from Earth",
  mars: "Distance traveled on Mars",
};

const getDistanceTypeLabel = (distanceType) => {
  return distanceTypes[distanceType] || distanceType;
};

console.log(getDistanceTypeLabel("earth"));
console.log(getDistanceTypeLabel("mars"));
console.log(getDistanceTypeLabel("Mars"));
console.log(getDistanceTypeLabel("potato"));
