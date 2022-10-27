import React from "react";
import style from "./partnerComponent.module.css";
import { Link } from "react-router-dom";

function NewsPreview(props) {
  return (
    <div className={style.PartnerContainer}>
      <div>
        <div className={style.LinkContainer}>
          <Link>
            <img
              style={{ hight: props.Size }}
              className={style.PartnerImage}
              src={props.Image}
              alt=""
            />
          </Link>
        </div>
        <div className={style.PertnerContent}>
          <h4>{props.Name}</h4>
          <p>{props.Content}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsPreview;
