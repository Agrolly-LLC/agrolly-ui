import React, { Component } from "react";
import style from "./inputNews.module.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { config } from "../../Config";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class InputNews extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeReference = this.onChangeReference.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      image: "",
      location: "",
      city: "",
      content: "",
      reference: "",
      author: "",
      date: "",
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeImage(e) {
    this.setState({
      imageURL: e.target.value,
    });
  }
  onChangeReference(e) {
    this.setState({
      reference: e.target.value,
    });
  }
  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }
  onChangeContent(e) {
    this.setState({
      content: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newscreate = {
      title: this.state.title,
      content: this.state.content,
      location: this.state.location,
      image: this.state.imageURL,
      reference: this.state.reference,
      date_happen: this.state.date,
    };

    console.log(newscreate);

    axios
      .post(config.url.API_URL + "/news", newscreate)
      .then((response) => {
        console.log("create successfully ");
        window.location = "/news"
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  }

  render() {
    return (
      <div className={style.container}>
        <section>
          <h1>What New</h1>
        </section>
        <form style={{ margin: "10px" }} onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              News Headline
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Image URL
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.onChangeImage}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Reference Link
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.onChangeReference}
            />
          </div>

          <div className="input-group mb-3" onChange={this.onChangeCountry}>
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Country
            </label>
            <select className="form-control" id="inputGroupSelect01">
              <option value="">Global</option>
              <option value="Agrolly">Agrolly</option>
              <option value="Brazil">Brazil</option>
              <option value="India">India</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Taiwan">Taiwan</option>
              <option value="United States">United States</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              City
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.onChangeCity}
            />
          </div>

          {/* <div className="form-floating">
            <label htmlFor="floatingTextarea">News Content</label>
            <textarea
              className="form-control"
              placeholder="Put your news content"
              id="floatingTextarea"
              style={{ height: "100px" }}
              onChange={this.onChangeContent}
            ></textarea>
          </div> */}

          <CKEditor
            editor={ClassicEditor}
            data={this.state.content}
            onChange={(event, editor) => {
              const data = editor.getData();
                this.setState({
                  content: data,
                });
            }}
          />

          <div>
            <label style={{ display: "block" }}>News post date</label>
            <DatePicker
              dayPickerProps={{
                month: new Date(2018, 10),
                showWeekNumbers: true,
                todayButton: "Today",
              }}
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create News"
              className={style.submitButtom}
            />
          </div>
        </form>
      </div>
    );
  }
}
