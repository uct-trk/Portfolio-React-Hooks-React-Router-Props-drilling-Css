import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import photo1 from "../img/photo1.jpg";
import photo2 from "../img/photo2.jpg";
import photo3 from "../img/photo3.jpg";
import photo4 from "../img/photo4.jpg";
import photo5 from "../img/photo5.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Son Çalışmalarımız</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              photo1={photo1}
              path="/services"
              label="Reklam"
              text="İnternette ve Televizyon dünyasında daha kaliteli görünmeniz için"
            />

            <CardItem
              photo1={photo2}
              path="/services"
              label="Reklam"
              text="İnternette ve Televizyon dünyasında daha kaliteli görünmeniz için"
            />

            <CardItem
              photo1={photo3}
              path="/services"
              label="Reklam"
              text="İnternette ve Televizyon dünyasında daha kaliteli görünmeniz için"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              photo1={photo4}
              path="/services"
              label="Reklam"
              text="İnternette ve Televizyon dünyasında daha kaliteli görünmeniz için"
            />

            <CardItem
              photo1={photo5}
              path="/services"
              label="Reklam"
              text="İnternette ve Televizyon dünyasında daha kaliteli görünmeniz için"
            />

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
