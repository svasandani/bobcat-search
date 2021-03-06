export function convertUnits(minUnit, maxUnit) {
    if(minUnit === 0) {
        return maxUnit;
    }
    return `${minUnit} - ${maxUnit}`;
}

export function splitLocation(location) {
    if(location.includes("-") && location.includes("Room")) {
        let locations = location.split("-");
        let roomNumber = locations[1].split(":");
        return {
            "Building" : locations[0],
            "Room": roomNumber[1]
        }
    }
    return {
      "Building": location
    };
}
  