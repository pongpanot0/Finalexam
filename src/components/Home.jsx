import React from 'react'
import Intro from '../components/intro/Intro.jsx';
import travel_01 from '../images/test01.avif'
import travel_02 from '../images/test02.avif'
import travel_03 from '../images/test03.avif'
import Slider from '../components/intro/Slider';


const Home = () => {
  return (
    <div>
      
      <Intro imageSrc={travel_01} h1={'Travel madsimple'}/>
      <Slider imageSrc={travel_02} title={'This is a Landing page'} subtitle={'For final Examing'} />
      <Slider imageSrc={travel_03} title={'This is a Landing page'} subtitle={'For final Examing'} filpped={true} />
    </div>
  )
}

export default Home