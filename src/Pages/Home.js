import React from 'react';
import Product from '../Components/Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home_banner'
        src='
      https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />
      {/* first row */}
      <div className='home_row'>
        <Product
          id='123456'
          title='Lenovo Legion Y540 9th Gen Intel Core i5 15.6 inch FHD Gaming Laptop'
          price={65490}
          rating={5}
          image='https://m.media-amazon.com/images/I/81pl1o7uQ3L._AC_UY327_QL65_.jpg'
        />
        <Product
          id='123457'
          title='Voltas 1.5 Ton 3 Star Split AC (Copper 183EZA White)'
          price={30980}
          rating={4}
          image='https://m.media-amazon.com/images/I/511fs9x31bL._AC_UY327_QL65_.jpg'
        />
      </div>
      {/* second row */}
      <div className='home_row'>
        <Product
          id='123458'
          title='Apple iPhone 11 (64GB) - White'
          price={63999.00}
          rating={4}
          image='https://m.media-amazon.com/images/I/51o5RmQtroL._AC_UY327_QL65_.jpg'
        />
        <Product
          id='123459'
          title='Whirlpool 190 L 2 Star Direct-Cool Single Door Refrigerator '
          price={11990.12}
          rating={3}
          image='https://m.media-amazon.com/images/I/61Eu0QD2pZL._AC_UY327_QL65_.jpg'
        />
        <Product
          id='123460'
          title='RAW BICYCLES Children 20T Sports'
          price={4099}
          rating={5}
          image='https://m.media-amazon.com/images/I/81l04cgQPdL._AC_UL480_QL65_.jpg'
        />
      </div> 
      {/* third row */}
      <div className='home_row'>
        <Product
            id='123461'
            title='OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android '
            price={69899}
            rating={5}
            image='https://m.media-amazon.com/images/I/817gj7pfUzL._AC_UY327_QL65_.jpg'
          />
        </div>
      {/* fourth row */}
      <div className='home_row'>
        <Product
            id='123253'
            title='Mi 10000mAH Li-Polymer Power Bank 2i (Blue) '
            price={899}
            rating={4}
            image='https://m.media-amazon.com/images/I/61yhZL4nMML._AC_UL480_QL65_.jpg'
          />
          <Product
            id='123492'
            title='Kubra KB-2022 Cordless Beard and Hair Trimmer'
            price={599}
            rating={3}
            image='https://m.media-amazon.com/images/I/51lPn8P9uOL._AC_UL480_QL65_.jpg'
          />
          <Product
            id='153462'
            title='LEWEL Mens Regular T-Shirt'
            price={469}
            rating={4}
            image='https://m.media-amazon.com/images/I/71ab+4XLYqL._AC_UL480_QL65_.jpg'
          />
          <Product
            id='103462'
            title='Centy Toys Rugged Bike'
            price={250}
            rating={5}
            image='https://m.media-amazon.com/images/I/61oTziv9YNL._AC_UL480_QL65_.jpg'
          />
        </div>
      {/* Fifth row */}
      <div className='home_row'>
        <Product
            id='122402'
            title='Nightwear Women Pyjama with Pockets and Rope'
            price={399}
            rating={4}
            image='https://m.media-amazon.com/images/I/71s-yHBfT5L._AC_UL480_QL65_.jpg'
          />
           <Product
            id='113462'
            title='Denill Women Bellies'
            price={424}
            rating={3}
            image='https://m.media-amazon.com/images/I/71hKITI+HXL._AC_UL480_QL65_.jpg'
          />
           <Product
            id='123462'
            title='Leatherette Side Sling Bags For Women Ladies'
            price={345}
            rating={4}
            image='https://m.media-amazon.com/images/I/71uMUyTBggL._AC_UL480_QL65_.jpg'
          />
        </div>

    </div>
  );
}

export default Home;
