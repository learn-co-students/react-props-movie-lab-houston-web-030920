import React, { Component } from "react";
import defaultPoster from "../assets/poster-imgs/default.png";
import cmi from "../assets/poster-imgs/choux-and-maru-go-to-istanbul.png";
import cmp1 from "../assets/poster-imgs/choux-and-maru-p1.png";
import cb from "../assets/poster-imgs/chromeboi.png";
import efv from "../assets/poster-imgs/escape-from-vim.png";
import goldeneye from "../assets/poster-imgs/goldeneye.jpg";
import hbmc from "../assets/poster-imgs/handsome-boy-modeling-club.png";
import msts from "../assets/poster-imgs/marus-spinoff-trapped-in-the-sheets.png";
import tkr from "../assets/poster-imgs/terrance-king-of-the-rats.png";
import ttm from "../assets/poster-imgs/the-trash-man.png";

export default class CardFront extends Component {
  render(props) {
    return (
      <div
        className="card-front"
        style={{ backgroundImage: `url(${this.props.poster})` }}
      ></div>
    );
  }
}
