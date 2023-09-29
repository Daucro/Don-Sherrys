"use client";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styling/carousel.css";

export default function SlideShow() {
  return (
    <Carousel
      className="slideContainer"
      showThumbs={false}
      autoPlay
      infiniteLoop={true}
      interval={10000}
      width={1625}
    >
      <div>
        <img className="slidePhoto" src="https://picsum.photos/1623/325" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img className="slidePhoto" src="https://picsum.photos/1623/325" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img className="slidePhoto" src="https://picsum.photos/1623/325" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}
