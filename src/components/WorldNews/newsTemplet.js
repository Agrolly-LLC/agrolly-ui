import React, { Component } from "react";
import axios from "axios";
import style from "./newsTemplet.module.css";
import Footer from "../footer/footer";
import { config } from "../../Config";
import parse from 'html-react-parser';

export default class newsTemplet extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      image: "",
     location:"",
      content: "",
      reference: "",
      date: "",
    };
  }

  componentDidMount() {
    axios
      .get(config.url.API_URL + "/news/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          news_id: response.data.id,
          title: response.data.title,
          image: response.data.image,
          location: response.data.location,
          content: response.data.content,
          reference: response.data.reference,
          date: response.data.date_happen
        });
      });
  }

  render() {
    return (
      <div>
        <div className={style.newsContainer}>
          <div className={style.imageContainer}>
            <img src={this.state.image} alt="news" />
          </div>
          <div className={style.contentContainer}>
            <h1>{this.state.title}</h1>
            <p>
              {this.state.location}
              <small> {new Date(this.state.date).toLocaleDateString()}</small>
            </p>
            <p> {parse(`${this.state.content}`)}</p>
            
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
