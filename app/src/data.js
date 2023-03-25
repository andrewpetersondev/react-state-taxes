import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'
import img4 from './images/img-4.jpg'

export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#states', text: 'states' },
];
export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const states = [
    {
        id: 1,
        image: img1,
        taxRate: '11%',
        location: 'hawaii'
    },
    {
        id: 2,
        image: img2,
        taxRate: '10.75%',
        location: 'new jersey'
    },
    {
        id: 3,
        image: img3,
        taxRate: '11%',
        location: 'hawaii'
    },
    {
        id: 4,
        image: img4,
        taxRate: '13.3%',
        location: 'california'
    }
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'spending money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'spending your kids money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
    {
        id: 4,
        icon: 'fas fa-soild fa-baby',
        title: 'spending your grandkids money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
];

