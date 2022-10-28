import React from "react";
import style from "./newsCards.module.css";
import { Link } from "react-router-dom";

function NewsCards(props) {
  return (
    <div>
      <Link className={style.editButton} to={"/happened/" + props.news.id}>
        <img className={style.newsImage} src={props.news.image} alt="" />
        <h4>{props.news.title}</h4>
        <p>
          {props.news.locatinon} {props.news.date}
        </p>
      </Link>
    </div>
  );
}

export default NewsCards;
