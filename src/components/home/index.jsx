import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

const sampleData = [
  {
    name: 'Lots of sushi',
    description: 'Wow looks expensive',
    img: 'http://www.harusushi.com/wp-content/uploads/2015/06/sushi_and_sashimi_for_two.jpg',
  },
  {
    name: 'Even more sushi',
    description: 'that piece of wood included',
    img: 'https://res.cloudinary.com/simpleview/image/upload/crm/frisco/Sushi0-380f05265056a36_380f06be-5056-a36a-073ed8db1c463d56.jpg',
  },
  {
    name: 'Too much sauce',
    description: 'meh',
    img: 'http://www.hesca.org/wp-content/uploads/2016/09/sushi-featured.jpg',
  },
  {
    name: 'Rice Burger',
    description: 'LUL',
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/30/17/enhanced/webdr11/enhanced-21036-1459372708-6.png',
  },
];


const Home = () => (
  <div style={{ margin: '5px' }}>
    <GridList>
      {sampleData.map(dish => (
        <GridTile
          key={dish.img}
          title={dish.name}
          subtitle={dish.description}
        >
          <img src={dish.img} alt={dish.name} />
        </GridTile>
      ))}
    </GridList>

  </div>
);

export default Home;
