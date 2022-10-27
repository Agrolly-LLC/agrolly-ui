import React, { Component } from "react";
import axios from "axios";
import style from "./newsTemplet.module.css";
import Footer from "../footer/footer";
import { config } from "../../Config";

export default class newsTemplet extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      imageURL: "",
      country: "",
      city: "",
      content: "",
      reference: "",
      date: "",
    };
  }

  componentDidMount() {
    axios
      .get(config.url.API_URL + "/news/news/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          news_id: response.data.news_id,
          title: response.data.title,
          imageURL: response.data.imageURL,
          country: response.data.country,
          city: response.data.city,
          content: response.data.content,
          reference: response.data.reference,
          date: response.data.date,
        });
      });
  }

  render() {
    return (
      <div>
        <div className={style.newsContainer}>
          <div className={style.imageContainer}>
            <img src={this.state.imageURL} alt="news" />
          </div>
          <div className={style.contentContainer}>
            <h1>{this.state.title}</h1>
            <p>
              {this.state.city} {this.state.country}{" "}
              <small> {this.state.date}</small>
            </p>
            <p>{this.state.content}</p>
            <p>
              news link :{" "}
              <a href={this.state.reference}>{this.state.reference}</a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
