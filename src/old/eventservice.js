import React, { useState } from 'react';
import './eventservice.css';

function EventService() {

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div className={isOn ? 'pricing-container-event-ind' : 'pricing-container-event-event'}> 
      <div className={isOn ? 'pricing-text-event-ind' : 'pricing-text-event-event'}>
        <h1>Plans & Pricing</h1>
        <p>If you would like to customize or request additions or anything else not listed here please</p>
        <h2><a href="mailto:wwdouglas@hotmail.co.uk" class={isOn ? 'pricing-contact-ind' : 'pricing-contact-event'}>Contact me</a></h2>
      </div>
      <div className='pricing-most'>
      <h1 className={isOn ? 'pricing-most-text-ind' : 'pricing-most-text-event'}>MOST POPULAR</h1>
      </div>
      <div className='pricing-switch-event'>
      <h1 className={isOn ? 'pricing-switch-event-text-ind' : 'pricing-switch-event-text-event'}>
        Events
      </h1>
      <div className="switch-toggle">
        <input
          type="checkbox"
          id="switch"
          checked={isOn}
          onChange={handleToggle}
          className="switch-toggle__input"
        />
        <label htmlFor="switch" className="switch-toggle__label"></label>
      </div>
      <h1 className={isOn ? 'pricing-switch-event-text-ind' : 'pricing-switch-event-text-event'}>
        Individual/Couples
      </h1>
    </div>
    <div className="pricing-table-event">
      <div className='pricing-card-blue'>
        <h3 className="pricing-title-event">Basic</h3>
        <p className="pricing-price-event">{isOn ? '$225' : '$400 +'}</p>
        <ul className="pricing-features-event">
          <li>Features:</li>
          <li>{isOn ? 'Up to three hour sessions' : 'Two hour session'}</li>
          <li>Shared Restricted Google Drive</li>
          <li>No limits of photos taken</li>
          <li>{isOn ? 'Editing and post-processing included' : ''}</li>
          <br></br>
          <li>{isOn ? 'Optional:' : 'Basic features:'}</li>
          <li>{isOn ? '1x Poster Original or Black & White (up to 1.2m x 1.2m)' : '10x Black & White copies'}</li>
          <br></br>
          <li>{isOn ? '' : 'Optional:'}</li>
          <li>{isOn ? '' : 'Photo album'}</li>
          <li>{isOn ? '' : 'Names embossed'}</li>
          <br></br>
        </ul>
        <button className={isOn ? 'pricing-button-event-ind' : 'pricing-button-event-event'}>Choose</button>
      </div>
      <div className={`pricing-card-green ${isOn ? 'pricing-card-green-ind' : 'pricing-card-green-event'}`}>
        <h3 className={isOn ? 'pricing-title-event-green-ind' : 'pricing-title-event-green-event'}>Plus</h3>
        <p className={isOn ? 'pricing-price-event-green-ind' : 'pricing-price-event-green-event'}>{isOn ? '$320' : '$800 +'}</p>
        <ul className={isOn ? 'pricing-features-event-green-ind' : 'pricing-features-event-green-event'}>
          <li>Features:</li>
          <li>{isOn ? 'Four or more hour sessions' : 'Four hour session'}</li>
          <li>Shared Restricted Google Drive</li>
          <li>No limits of photos taken</li>
          <li>{isOn ? 'Editing and post-processing included' : ''}</li>
          <br></br>
          <li>{isOn ? 'Optional:' : 'Plus features:'}</li>
          <li>{isOn ? '1x Poster original or Black & White (up to 1.2m x 1.2m)' : '10x Black and White copies'}</li>
          <li>{isOn ? '' : '5x photo frames of your choice (20cm x 15cm)'}</li>
          <br></br>
          <li>{isOn ? '' : 'Optional:'}</li>
          <li>{isOn ? '' : 'Photo album'}</li>
          <li>{isOn ? '' : 'Names embossed'}</li>
          <br></br>
          <br></br>
        </ul>
        <button className={isOn ? 'pricing-button-event-ind' : 'pricing-button-event-event'}>Choose</button>
      </div>
      <div className="pricing-card-orange">
        <h3 className="pricing-title-event">Pro</h3>
        <p className="pricing-price-event">{isOn ? '$380' : '$1500 +'}</p>
        <ul className="pricing-features-event">
          <li>Features:</li>
          <li>{isOn ? 'Six hour sessions' : 'Eight hour session'}</li>
          <li>Shared Restricted Google Drive</li>
          <li>No limits of photos taken</li>
          <li>{isOn ? 'Editing and post-processing included' : ''}</li>
          <br></br>
          <li>{isOn ? 'Optional:' : 'Pro features:'}</li>
          <li>{isOn ? '1x Poster original or Black & White (up to 1.2m x 1.2m)' : '10x Black & White copies'}</li>
          <li>{isOn ? '' : '3x photo frames of your choice (20cm x 15cm)'}</li>
          <li>{isOn ? '' : '1x Poster original or Black & White (up to 1.2m x 1.2m)'}</li>
          <br></br>
          <li>{isOn ? '' : 'Optional:'}</li>
          <li>{isOn ? '' : 'Photo album'}</li>
          <li>{isOn ? '' : 'Names embossed'}</li>
          <br></br>
          <br></br>
          <br></br>
        </ul>
        <button className={isOn ? 'pricing-button-event-ind' : 'pricing-button-event-event'}>Choose</button>
      </div>
    </div>
    </div>
  );
};

export default EventService;
