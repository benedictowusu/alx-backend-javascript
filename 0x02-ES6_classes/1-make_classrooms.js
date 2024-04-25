import ClassRoom from "./0-classroom.js";

function initializeRooms() {
  const rooms = [];

  // Create 3 ClassRoom objects with specified sizes
  rooms.push(new ClassRoom(19));
  rooms.push(new ClassRoom(20));
  rooms.push(new ClassRoom(34));

  return rooms;
}
