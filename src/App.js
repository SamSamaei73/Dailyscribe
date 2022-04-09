import { useState,useEffect } from 'react';
import './App.css';
import Navbar from '../src/Component/Nvbar';
import About from './Component/About';
import Employer from './Component/Employer';
import Map from './Component/Map';
import Footer from './Component/Footer';
import { animateScroll as scroll } from 'react-scroll';
import * as Scroll from 'react-scroll';
import React from 'react';
import Swal from 'sweetalert2';
import Chart from './Component/Chart';
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";





function App() {
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      Swal.fire({
        icon: 'info',
        title: 'توجه',
        text: '.این سایت یک پورتال ارتباطی می باشد و تولید محتوا در آن صورت نمی گیرد',
        confirmButtonText: 'تایید',
      });
      setLoading(false)
    },1000)
  },[]);

  const scrollToAbout = () => {
    var scroller = Scroll.scroller;
    //console.log('reached the point');
    scroll.scrollTo('1100', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  const scrollToActive = () => {
    var scroller = Scroll.scroller;
    //console.log('reached the point');
    scroll.scrollTo('500', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  const scrollToEmployer = () => {
    var scroller = Scroll.scroller;
    //console.log('reached the point');
    scroll.scrollTo('1700', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  const scrollToMap = () => {
    var scroller = Scroll.scroller;
    //console.log('reached the point');
    scroll.scrollTo('2250', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  const override = css`
  display: block;
  margin: 15rem auto;
`;

  return (
    <div className="App">
      {
        loading ?
        <PuffLoader
        color={'#192e37'} loading={loading} css={override} size={150} />

        :

      <div className="container">
        <Navbar
          scrollToAbout={scrollToAbout}
          scrollToActive={scrollToActive}
          scrollToEmployer={scrollToEmployer}
          scrollToMap={scrollToMap}
        />
        <Employer />
        <About />
        <Chart/>
        <Map />
        <Footer />
      </div>
      }
    </div>
  );
}

export default App;
