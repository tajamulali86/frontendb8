import MyComponent from "./MyComponent"


function WhatSection(params) {
    
    return (
        <div className="flex px-5 mx-5  justify-around">
        <MyComponent number={'01'} title={'Property Sales'} desc={'Find your dream home with Real Estate - our expert team will guide you through the process and ensure a smooth transaction.'}  />
        <MyComponent number={'01'} title={'Property Sales'} desc={'Find your dream home with Real Estate - our expert team will guide you through the process and ensure a smooth transaction.'}  />
        <MyComponent number={'03'} title={'Property Sales'} desc={'Find your dream home with Real Estate - our expert team will guide you through the process and ensure a smooth transaction.'}  />
        <MyComponent number={'3'} title={'Property Sales'} desc={'Find your dream home with Real Estate - our expert team will guide you through the process and ensure a smooth transaction.'}  />
   </div>
    )
}

export default WhatSection