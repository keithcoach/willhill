import * as React from 'react';
import { useState, useEffect } from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

const api =
  'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_liberty';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.teams[0]);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  return (
    <>
      <div className="header">
        <div id="store">
          <a href="https://netsstore.com/collections/new-york-liberty">Store</a>
        </div>
        <div id="schedule">
          <a href="https://liberty.wnba.com/schedule/#?season=2021&seasontype=02">
            Schedule
          </a>
        </div>
        <div>
          <img
            id="wnba-logo"
            src={
              'https://ak-static.cms.nba.com/wp-content/themes/wnba-parent/img/logos/wnba-s25-primary-logo-alt.svg'
            }
            alt="WNBA logo"
          />
        </div>
        <div>{data.strGender}</div>
        <div>{data.strLeague}</div>
        <div>
          <a href={data.strWebsite}>{data.strWebsite}</a>
        </div>
        <div>{data.strStadiumLocation}</div>
        <div>{data.strStadium}</div>

        <div>{`Established ${data.intFormedYear}`}</div>
      </div>
      <div className="logo">
        <img src={data.strTeamBadge} alt="liberty logo" />
      </div>
      <div
        className="container"
        //stretch to have logo static fill the background
        // style={{
        //   backgroundImage: `url(${data.strTeamBadge})`,
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        // }}
      >
        <div className="info">
          <div id="about">
            <h4>About</h4>
            <p>{data.strDescriptionEN}</p>
          </div>
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12102.424532936515!2d-73.9754156!3d40.6826465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sus!4v1620695805038!5m2!1sen!2sus"
            allowFullScreen={true}
          ></iframe>
        </div>

        <div className="twitter">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="nyliberty"
            options={{ height: 800, width: 400 }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
