import React from 'react'
import style from './Numbers.module.css'

const NumbersCard = () => {
  return (
    <div style={{"textAlign": "center"}}>
         
          <div className={style.Fourth_section}>
          
        <div className={style.Fourth_section_text} data-aos="fade-down" data-aos-duration="1500">
        <h2> Social Impact </h2>
            <div className={style.counter_card}>
                <h3 className={style.counter_no}>7690</h3>
                <p className={style.counter_desc}>cities</p>
            </div>

            <div className={style.counter_card}>
                <h3 className={style.counter_no}>480+</h3>
                <p className={style.counter_desc}>crop varieties</p>
            </div>

            <div className={style.counter_card}>
                <h3 className={style.counter_no}>10K+</h3>
                <p className={style.counter_desc}>user download</p>
            </div>

            <div className={style.counter_card}>
                <h3 className={style.counter_no}>3K+</h3>
                <p className={style.counter_desc}>active users</p>
            </div>

        </div>

    </div>
    </div>
   
  )
}

export default NumbersCard