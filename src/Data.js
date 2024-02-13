import HTML from './assets/html.png'
import CSS from './assets/css.png';
import JavaScript from './assets/javascript.png';
import ReactImg from './assets/react.png';
import GitHub from './assets/github.png';
import Tailwind from './assets/tailwind.png';
import Bootstrap from './assets/bootstrap.png';
import Git from './assets/git.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

const skills = [
    { name: 'HTML', img: `${HTML}` },
    { name: 'CSS', img: `${CSS}` },
    { name: 'JavaScript', img: `${JavaScript}` },
    { name: 'React', img: `${ReactImg}` },
    { name: 'Tailwind', img: `${Tailwind}` },
    { name: 'Git', img: `${Git}` },
    // { name: 'Bootstrap', img: `${Bootstrap}` },
    // { name: 'GitHub', img: `${GitHub}` }
]

const social = [
    { icon: <FaLinkedin size={30}/>, link: 'https://www.linkedin.com/in/stevencartavia/' },
    { icon: <FaGithub size={30} />, link: 'https://github.com/stevencartavia' },
    { icon: <FaSquareXTwitter size={30} />, link: 'https://twitter.com/stevencartavia' },
    { icon: <HiOutlineMail size={30} />, link: 'mailto: corderosteven6@gmail.com' }
]

const projects = [
    {
        name: 'Tenzies Game',
        desc: 'A game where you have to roll until all dice are the same. You have to click each die to freeze it at its current value between rolls.',
        demo: 'https://tenzies-game-tawny-zeta.vercel.app/',
        code: 'https://github.com/stevencartavia/tenzies-game'
    },
    {
        name: 'Budget Tracker',
        desc: 'Effortlessly manage your finances with our budget tracker app. Track expenses and stay on top of your budget. Simplify your financial life with ease.',
        demo: 'https://budget-tracker-rho-sand.vercel.app/',
        code: 'https://github.com/stevencartavia/budget-tracker'
    },
    {
        name: 'Weather App',
        desc: 'A BigCity Weather App that provides weather information for some of the biggest cities around the world.',
        demo: 'https://weather-app-bay-three.vercel.app/',
        code: 'https://github.com/stevencartavia/weather-app'
    },
]

export { skills, social, projects };