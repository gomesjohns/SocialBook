import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Friends-SIZED.jpg?itok=N2d9PAIT"
        profileSrc="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
        title="John Gomesssssssssssss"
      />
      <Story
        image="https://www.introvertedbadass.com/wp-content/uploads/2017/06/63-Days-to-a-kick-ass-social-life-1.jpg"
        profileSrc="https://srkheadshotday.com/wp-content/uploads/Herman_Man_Headshot_19G1006-1024x683.jpg"
        title="Hati Vai"
      />
      <Story
        image="https://img.buzzfeed.com/buzzfeed-static/static/2019-12/11/16/enhanced/c9fa35b7d9ce/enhanced-1529-1576081124-7.jpg"
        profileSrc="https://i.pinimg.com/originals/a1/1e/2a/a11e2a9d5803e4dc2c034819ce12a16e.jpg"
        title="Muti Vai"
      />
      <Story
        image="https://www.zhounutrition.net/blog/wp-content/uploads/2017/05/Is-Your-Social-Life-Sabotaging-Your-Weight-Goals-featured.jpg"
        profileSrc="https://www.photoflex.com/wp-content/uploads/2018/06/2027bc51ae4a2631d5d76b961c6d24ad.jpeg"
        title="Toma Vai"
      />
      <Story
        image="https://www.allpeers.com/wp-content/uploads/2018/04/College-Students.jpeg"
        profileSrc="https://studiojphotography.ca/wp-content/uploads/2010/03/professional-headshot.jpg"
        title="Pranto vai"
      />
    </div>
  );
}

export default StoryReel;
