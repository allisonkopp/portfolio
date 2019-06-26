import { images } from '../../utils';

export const schema = [
  {
    id: 0,
    title: 'Pac-Man',
    description: 'A re-make of the classic arcade game, Pac-Man! Gameboard built using Canvas. This was my first Ironhack project.',
    icons: [images[0], images[1], images[2]],
    link: 'https://allisonkopp.github.io/pac-man-project/',
    code: 'https://github.com/allisonkopp/pac-man-project'
  },
  { id: 1, 
    title: 'Thrive', 
    description: 'A productivity application that keeps track of daily notes and tasks using a dashboard. The sticky notes are draggable and a text-editor API is implemented to style notes.',
    icons: [images[0],images[1], images[2], images[4], images[5], images[7], images[9] ],
    link: 'https://you-can-thrive.herokuapp.com',
    code: 'https://github.com/allisonkopp/productivity-app'

  },
  {
    id: 2,
    title: 'Home',
    description: 'A MERN stack web application that aims to improve local communities by allowing users to report issues in their area. The application uses Recharts and MapBox to generate reports, making it simple for city officials to address problems.',
    icons: images,
    link: 'https://city-improvement.herokuapp.com',
    code: 'https://github.com/allisonkopp/city-improvement'
  }
];
