import React from 'react';
import Room from './Room';

const RoomsList = ({ rooms }) => {
  if (!rooms) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no room matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => <Room key={item.id} room={item} />)}
      </div>
    </section>
  );
};

export default RoomsList;
