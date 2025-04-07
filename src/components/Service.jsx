import React from 'react'
import { SlDoc, SlLayers, SlMenu, SlScreenDesktop, SlSupport, SlUser } from 'react-icons/sl'
import Card from './Card'

const Service = () => {
  return (
    <>
      <section className='service w-full '>
        <div className="topPart text-center w-full py-[88px] bg-white ">
          <div className="container">
            <h5 className='text-black text-[32px] font-bold leading-11 tracking-[-1.5px] pb-4 '>Porto is <span className='text-white bg-primary p-2'>extremely</span> beautiful and fully responsive.</h5>
            <p className='text-gray text-xl font-light leading-[29px] tracking-[-1px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.</p>
          </div>
        </div>
        <div className="bottomPart w-full pt-24 pb-[148px] bg-primary text-white ">
          <div className="container">
            <div className="cards flex flex-wrap gap-y-6 ">

              <Card style={'serviceCard'} heading={'customer support'} description={'Lorem ipsum dolor sit , consectetur adipiscing elit. Praesent tincidunt pretium vulputate.'} icon={<SlSupport  />} />
              
              <Card style={'serviceCard'} heading={'SLIDERS'} description={'Lorem ipsum dolor sit , consectetur adipiscing elit. Praesent tincidunt pretium vulputate.'} icon={<SlLayers  />} />
             
              <Card style={'serviceCard'} heading={'buttons'} description={'Lorem ipsum dolor sit , consectetur adipiscing elit. Praesent tincidunt pretium vulputate.'} icon={<SlMenu  />} />
              
              <Card style={'serviceCard'} heading={'HTML5 / CSS3 / JS'} description={'Lorem ipsum dolor sit , consectetur adipiscing elit. Praesent tincidunt pretium vulputate.'} icon={<SlDoc  />} />
              
              <Card style={'serviceCard'} heading={'ICONS'} description={'Lorem ipsum dolor sit , consectetur adipiscing elit. Praesent tincidunt pretium vulputate.'} icon={<SlUser  />} />
             
              <Card style={'serviceCard'} heading={'LIGHTBOX'} description={'Lorem ipsum dolor sit , consectetur adipiscing elit. Praesent tincidunt pretium vulputate.'} icon={<SlScreenDesktop  />} />
              
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service