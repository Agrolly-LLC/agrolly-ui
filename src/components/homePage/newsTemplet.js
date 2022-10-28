import React from "react";
import style from "./newsTemplet.module.css";
import { Link } from "react-router-dom";

function NewsPreview(props) {
  return (
    <div className={style.newsCard}>
      <div>
        <Link
          className={style.editButton}
          to={"/happened/" + props.news.id}
        >
          <img className={style.newsImage} src={props.news.image} alt="" />
          <h4 className={style.titleText}>{props.news.title}</h4>
        </Link>
      </div>
    </div>
  );
}

export default NewsPreview;
