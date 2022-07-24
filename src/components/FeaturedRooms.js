import React, { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

const FeaturedRooms = () => {
  const { loading, featuredRooms: rooms } = useContext(RoomContext);

  return (
    <section className="featured-rooms">
      <Title title="Featured rooms" />
      <div className="featured-rooms-center">
        {loading 
          ? <Loading /> 
          : rooms.map((room) => <Room key={room.id} room={room} />)
        }
      </div>
    </section>
  );
}

export default FeaturedRooms;

