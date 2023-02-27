// import imageExample from "../imgs/projects/imageexample"
import Pilot from "../imgs/data/game/1.png"
import yahya from "../imgs/team/yahya.png"
import hamza from '../imgs/team/hamza.jpg'
import oussama from '../imgs/team/oussama.jpeg'
import mohammed from '../imgs/team/mohamed.jpeg'
import oualid from '../imgs/team/oualid.jpeg'
import taha from '../imgs/team/taha.jpeg'
import badr from '../imgs/team/bader.jpg'
import pone from "../imgs/data/game/2.png";
import ptwo from "../imgs/data/game/3.png";
import pthree from "../imgs/data/game/4.png";
import pfive from "../imgs/data/game/5.png";

import wone from "../imgs/data/innovation-website/1.png"
import wtwo from "../imgs/data/innovation-website/2.png"
import wthree from "../imgs/data/innovation-website/3.png"
import wfour from "../imgs/data/innovation-website/4.png"
import wfive from "../imgs/data/innovation-website/5.png"

const projects = [
    {
        title: "Pilot GameDemo",
        shortDescription: "project short description",
        description: "Pilot is an exciting 2022 game developed by Innovation Club using Unity and C#. Maneuver through a futuristic world filled with obstacles and solve logical puzzles. With stunning visuals and immersive sound effects, Pilot offers a challenging but intuitive gameplay experience, ideal for those who enjoy a mental challenge.",
        image: Pilot,
        images: [
            { url: pone },
            { url: ptwo },
            { url: pthree},
            { url: pfive },
            { url: Pilot},
        ],
        time: "00:00",
        date: "22/02/2022",
        duration: "3 months",
        city: "Marrakech",
        adresse: "ECOLE MAROCAINE DES SCIENCES DE L'INGENIEUR 05 lot bouizgaren, Rte de Safi",
        map:
        {
            lat: 31.63122053463084,
            lon: -8.012774493797531
        },
        link: "/game",
        organizers:
            [
                {
                    name: 'Oussama seme elayne',
                    role: 'President',
                    image: oussama,
                    github: 'https://github.com/oussama-seme-elayne',
                    instagram: 'https://www.instagram.com/xx_oprog/',
                    linkedin: 'https://www.linkedin.com/in/oussama-seme-elayne-ba6800198/'
                },
                {
                    name: 'Yahya Lazrek',
                    role: 'Vice President',
                    image: yahya,
                    github: 'https://github.com/UUinc',
                    instagram: 'https://www.instagram.com/yahya.lz/',
                    linkedin: 'https://www.linkedin.com/in/yahyalazrek/'
                },
                {
                    name: 'Hamza Ouabiba',
                    role: 'Project Manager',
                    image: hamza,
                    github: 'https://github.com/Hamza-ouabiba',
                    instagram: 'https://www.instagram.com/hamzaouee/',
                    linkedin: 'https://www.linkedin.com/in/hamza-ouabiba-b95392203/'
                },
                {
                    name: 'Walid Habbach',
                    role: 'Technical Manager',
                    image: oualid,
                    github: 'https://github.com/walidhabbach',
                    instagram: 'https://www.instagram.com/walid_habbach/',
                    linkedin: 'https://www.linkedin.com/in/oualid-habbach-0385641bb/'
                },
                {
                    name: 'Bader tebaa',
                    role: 'Treasurer',
                    image: badr,
                    github: 'https://github.com/badertebaa',
                    instagram: 'https://www.instagram.com/badertebaa/',
                    linkedin: 'https://www.linkedin.com/in/badr-tebaa-310a50207/'
                },
            ]
    },
    {
        title: "Club Innovation Website",
        shortDescription: "project short description",
        description: "Club Innovation is a modern website created in 2023 by the Innovation Club team using React JS, pure HTML, and pure CSS. The sleek design and user-friendly interface make it easy to navigate, while the use of GitHub for code management ensures constant updates and improvements. Check it out to explore the world of innovation and technology!",
        image: wone,
        images: [
            { url: wone },
            { url: wtwo },
            { url: wthree },
            { url: wfour },
            { url: wfive },
        ],
        time: "00:00",
        date: "17/02/2023",
        duration: "15 days",
        city: "Marrakech",
        adresse: "Gueliz, Marrakech",
        map:
        {
            lat: 31.653610147613122,
            lon: -8.021447459904543
        },
        link: "https://club-innovation.github.io/club-innovation/",
        organizers:
            [
                {
                    name: 'Oussama seme elayne',
                    role: 'President',
                    image: oussama,
                    github: 'https://github.com/oussama-seme-elayne',
                    instagram: 'https://www.instagram.com/xx_oprog/',
                    linkedin: 'https://www.linkedin.com/in/oussama-seme-elayne-ba6800198/'
                },
                {
                    name: 'Yahya Lazrek',
                    role: 'Vice President',
                    image: yahya,
                    github: 'https://github.com/UUinc',
                    instagram: 'https://www.instagram.com/yahya.lz/',
                    linkedin: 'https://www.linkedin.com/in/yahyalazrek/'
                },
                {
                    name: 'Hamza Ouabiba',
                    role: 'Project Manager',
                    image: hamza,
                    github: 'https://github.com/Hamza-ouabiba',
                    instagram: 'https://www.instagram.com/hamzaouee/',
                    linkedin: 'https://www.linkedin.com/in/hamza-ouabiba-b95392203/'
                },
                {
                    name: 'Mohamed Nezhari',
                    role: 'Project Co-Manager',
                    image: mohammed,
                    github: 'https://github.com/Nezgova',
                    instagram: 'https://www.instagram.com/mohamed_nezhari/',
                    linkedin: 'https://www.linkedin.com/in/mohamed-nezhari-306b3625a'
                },
                {
                    name: 'Bader tebaa',
                    role: 'Treasurer',
                    image: badr,
                    github: 'https://github.com/badertebaa',
                    instagram: 'https://www.instagram.com/badertebaa/',
                    linkedin: 'https://www.linkedin.com/in/badr-tebaa-310a50207/'
                },
                {
                    name: 'Walid Habbach',
                    role: 'Technical Manager',
                    image: oualid,
                    github: 'https://github.com/walidhabbach',
                    instagram: 'https://www.instagram.com/walid_habbach/',
                    linkedin: 'https://www.linkedin.com/in/oualid-habbach-0385641bb/'
                },
                {
                    name: 'Taha Ammour',
                    role: 'Technical Co-Manager',
                    image: taha,
                    github: 'https://github.com/taha-ammour',
                    instagram: '',
                    linkedin: ''
                },
            ]
    },
    
];

export default projects;