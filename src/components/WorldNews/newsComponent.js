import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCards from "./newsCards";
import style from "./newsCards.module.css";
import { config } from "../../Config";

const NewsComponent = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [search, setSearch] = useState("");

  const getAllNews = () => {
    axios
      .get(config.url.API_URL + "/news")
      .then((response) => {
        console.log(response.data);
        const news = response.data;
        setNewsArray(news);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <div>
      {/* <section className={style.countryfilter}> */}
        {/* <label htmlFor="Country">Country:</label>
        <select
          name="Country"
          id="Country"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        >
          <option defaultValue value="">
            All
          </option>
          <option value="">Global</option>
              <option value="Agrolly">Agrolly</option>
              <option value="Brazil">Brazil</option>
              <option value="India">India</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Taiwan">Taiwan</option>
              <option value="United States">United States</option>
        </select> */}
      {/* </section> */}
      <div className={style.site}>
        {newsArray.map((news) => {
          return <NewsCards key={news.id} news={news} />;
        })}
      </div>
    </div>
  );
};

export default NewsComponent;
