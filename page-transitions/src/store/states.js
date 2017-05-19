import Index from '../components/IndexPage';
import About from '../components/AboutPage';
import Contact from '../components/ContactPage';

const pages = {
  '/': {
    location: {
      component: Index,
      name: 'index',
      title: 'Index',
    },
    regions: {
      main: '<h1>Index</h1><p>Welcome, blah blah, enjoy your stay.</p>',
    },
  },

  '/about': {
    location: {
      component: About,
      name: 'about',
      title: 'About',
    },
    regions: {
      main: '<h1>About</h1><p>We is expertz.</p>',
      contact: '<p>contact@example.io</p>',
    },
    services: [
      {
        id: 1,
        name: 'Stuffing',
        description: '<p>Blah blah stuff me stuff me.</p>',
      }, {
        id: 2,
        name: 'Unstuffing',
        description: '<p>Blah blah we are good at undoing anything we have done before.</p>',
      },
    ],
  },

  '/contact': {
    location: {
      component: Contact,
      name: 'contact',
      title: 'Contact',
    },
    regions: {
      main: '<h1>Contact</h1><p>Please don\'t talk to us</p>',
      contact: '<p>contact@example.io</p>',
    },
    employees: [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@themorgue.com',
      }, {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@themorgue.com',
      },
    ],
  },
};

export default pages;
