import React from "react";
import { SlDoc, SlEqualizer, SlPeople, SlTrophy } from "react-icons/sl";
import Card from "./Card";

const Achievements = () => {
  return (
    <>
      <section className={`achievements w-full bg-white pb-24 pt-[120px] `}>
        <div className={`container`}>
          <div className={`flex cards`}>
            
            <Card style={'achievementCard'} icon={<SlPeople />} heading={'Loved by Customers'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}  cardColor="primary" btnTxt="VIEW MORE" />
            <Card style={'achievementCard'} icon={<SlDoc />} heading={'Well Documented'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}  cardColor="black" btnTxt="VIEW MORE" />
            <Card style={'achievementCard'} icon={<SlTrophy />} heading={'Winner'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}  cardColor="primary" btnTxt="VIEW MORE" />
            <Card style={'achievementCard'} icon={<SlEqualizer />} heading={'Customizable'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}  cardColor="black" btnTxt="VIEW MORE" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
