import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const MyCarousel = () => {
    const photos = [
        'https://www.topgear.com/sites/default/files/2023/05/P90505059_highRes.jpg?w=892&h=502',
        'https://cdn.motor1.com/images/mgl/pbx6EV/s3/mercedes-amg-gt-4-puertas-coupe-2022.webp',
        'https://d1lhv9gpjooyls.cloudfront.net/eyJvdXRwdXRGb3JtYXQiOiJqcGciLCJidWNrZXQiOiJ6YWxhLXByb2R1Y3Rpb24iLCJrZXkiOiJhY2NvdW50LTE5XC8xNjkyMzM3MTk1MTAxXzEwMjU3NVwvQTIyNjE1OV9sYXJnZS5qcGciLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJoZWlnaHQiOjEwODAsIndpZHRoIjoxMDgwLCJmaXQiOiJpbnNpZGUiLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6bnVsbH19fX0=',
        'https://www.automobil-produktion.de/files/upload/post/apr/2020/01/231472/vw-arteon-2020-bild-volkswagen-ag.jpg',
        'https://webp-konwerter.infor.pl/eyJmIjoiaHR0cHM6Ly9nNS5pb/mZvci5wbC9wL19maWxlcy8xNj/gwMDAvMDU2NzM3NzAwXzEyMTg/2MzU2ODIuanBnIiwidyI6NzgwfQ.png'
      ];
  return (
    <Carousel>
    {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo} alt={`Slide ${index}`} />
        </div>
      ))}
      </Carousel>
  )
}

export default MyCarousel
  

