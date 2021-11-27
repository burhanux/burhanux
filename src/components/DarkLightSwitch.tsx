import React, { useEffect } from 'react';
import { darkLightMode } from '../events';
// import '../styles/darkmode.scss';

const DarkLightSwitch = () => {
  useEffect(() => {
    darkLightMode();
  }, [])
  return (
    <div className="toggle-container">
      <input type="checkbox" name="theme" id="switch" /><label htmlFor="switch" >Toggle</label>
    </div>
  )
}

export default DarkLightSwitch

/*Reference:
Creating a Dark & Light Toggle Mode on your UI Designs
DesignCourse
https://www.youtube.com/watch?v=ZKXv_ZHQ654

    <div>
      <div className="container">
        <h1>Light / Dark Mode</h1>
        <div className="toggle-container">
          <input type="checkbox" name="theme" id="switch" /><label htmlFor="switch" >Toggle</label>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt excepturi minima quisquam
          voluptatibus recusandae necessitatibus blanditiis voluptatum quidem ipsa aliquid accusamus sed quia a, unde
          velit nobis voluptate aspernatur?</p>
      </div>
    </div>
*/
