const reachDestination = (distance, speed) => {
  const distanceTime = distance / speed;
  const roundedTime = Math.ceil(distanceTime / 0.5) * 0.5;
  return roundedTime.toString();
};

module.exports = reachDestination;
