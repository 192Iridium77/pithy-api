import UsersList from "./Users/List.vue";
import RoomsList from "./Rooms/List.vue";
import Room from "./Rooms/Room.vue";

const routes = [
  {
    path: "/users",
    component: UsersList,
  },
  {
    path: "/rooms",
    component: RoomsList,
  },
  {
    path: "/room/:id",
    component: Room,
  },
];

export default routes;
