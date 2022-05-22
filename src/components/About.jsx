import React from 'react'
import Intro from './intro/Intro'
import travel_01 from '../images/test01.avif'
import travel_02 from '../images/สมาชิก1.jpg'
import travel_03 from '../images/test03.avif'
import './About.css'
import User from './intro/User'
const About = () => {
  return (
    <div class="imageSrc">
      <Intro imageSrc={travel_01} h1={'สมาชิกกลุ่ม'} />
      <User  imageSrc2={travel_02} title={'นายพงศ์ปณต สมัครการ'} subtitle={'รหัส 6431311554310 สาขาเทคโนโลยีสารสนเทศและการสื่อสาร'} />
      <User imageSrc2={travel_03} title={'This is a Landing page'} subtitle={'For final Examing'} filpped={true} />
    </div>

  )
}

export default About