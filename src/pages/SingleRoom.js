import React, { useContext } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

const SingleRoom = ({ match }) => {
  const slug = match.params.slug;
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...defaultImg] = images;

  if (!room) {
    return (
      <div className="error">
        <h3>This room cannot be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Go back
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room `}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => <img key={index} src={item} alt={name} />)}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => <li key={index}> - {item}</li>)}
        </ul>
      </section>
    </>
  );
}

export default SingleRoom;