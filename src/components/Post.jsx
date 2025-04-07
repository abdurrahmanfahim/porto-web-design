import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import Card from './Card'

const Post = () => {
  return (
    <>
      <section className="post w-full pt-[75px] pb-[50px]  ">
        <div className="container">
        <h2 className="text-black text-2xl tracking-[-1.4px] leading-[42plx] ">
          <span className="font-extrabold capitalize">Latest </span> Posts
        </h2>

        <div className="cards flex gap-3  ">
          <Card style={'postCard'} heading={'Lorem ipsum dolor sit amet, consectetur'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} btnTxt={'read more'} day={'15'} month={'jan'} />
          <Card style={'postCard'} heading={'Lorem ipsum dolor sit amet, consectetur'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} btnTxt={'read more'} day={'14'} month={'jan'} />
          <Card style={'postCard'} heading={'Lorem ipsum dolor sit amet, consectetur'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} btnTxt={'read more'} day={'13'} month={'jan'} />
          <Card style={'postCard'} heading={'Lorem ipsum dolor sit amet, consectetur'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} btnTxt={'read more'} day={'12'} month={'jan'} />
        </div>

        </div>
      </section>
    </>
  )
}

export default Post