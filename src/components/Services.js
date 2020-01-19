import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title:"Free Cocktails",
        info: "All cocktails are included. Enjoy our finest drinks made with love while admiring the beautiful sunset."
      },

      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Enjoy our beautiful landscapes around the resort. A tour guide will be here to assist with information"
      },

      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "We will be happy to escort you around. We can also carry your luggages in your room upon arrival."
      },

      {
        icon: <FaBeer />,
        title: "Free Beers",
        info: "All beers are included. Enjoy our finest beers while relaxing on the beach."
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
            <article key={`item-${item.title}`} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
            );
          })}
        </div>
      </section>
    );
  }
}
