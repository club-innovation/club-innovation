// import imageExample from "../imgs/projects/imageexample"
import background from "../imgs/home/background.jpg"
import yahya from "../imgs/team/yahya.png"
import hamza from '../imgs/team/hamza.jpg'
import oussama from '../imgs/team/oussama.jpeg'
import mohammed from '../imgs/team/mohamed.jpeg'
import oualid from '../imgs/team/oualid.jpeg'
import taha from '../imgs/team/taha.jpeg'
import badr from '../imgs/team/bader.jpg'
import programming from "../imgs/home/programming.gif";
import terminal from "../imgs/home/terminal.gif";
import help from "../imgs/home/help.gif";

const projects = [
    {
        title: "project title",
        shortDescription: "project short description",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: background,
        images: [
            { url: help },
            { url: programming },
            { url: terminal},
            { url: programming },
            { url: help},
        ],
        time: "16:00",
        date: "22/02/2023",
        duration: "2 hours",
        city: "Marrakech",
        adresse: "ECOLE MAROCAINE DES SCIENCES DE L'INGENIEUR 05 lot bouizgaren, Rte de Safi",
        map:
        {
            lat: 31.63122053463084,
            lon: -8.012774493797531
        },
        link: "https://club-innovation.github.io/club-innovation",
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
            ]
    },
    {
        title: "project title",
        shortDescription: "project short description",
        description: "project description",
        image: "",
        images: [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ],
        time: "16:00",
        date: "22/02/2023",
        duration: "2 hours",
        city: "Marrakech",
        adresse: "Gueliz, Marrakech",
        map:
        {
            lat: 31.653610147613122,
            lon: -8.021447459904543
        },
        link: "https://club-innovation.github.io/club-innovation",
        organizers:
            [
                {
                    name: 'Hamza Ouabiba',
                    role: 'Project Manager',
                    image: hamza,
                    github: 'https://github.com/Hamza-ouabiba',
                    instagram: 'https://www.instagram.com/hamzaouee/',
                    linkedin: 'https://www.linkedin.com/in/hamza-ouabiba-b95392203/'
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
                    name: 'Oussama seme elayne',
                    role: 'President',
                    image: oussama,
                    github: 'https://github.com/oussama-seme-elayne',
                    instagram: 'https://www.instagram.com/xx_oprog/',
                    linkedin: 'https://www.linkedin.com/in/oussama-seme-elayne-ba6800198/'
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
                    name: 'Mohamed Nezhari',
                    role: 'Project Co-Manager',
                    image: mohammed,
                    github: 'https://github.com/Nezgova',
                    instagram: 'https://www.instagram.com/mohamed_nezhari/',
                    linkedin: 'https://www.linkedin.com/in/mohamed-nezhari-306b3625a'
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
    {
        title: "project title",
        shortDescription: "project short description",
        description: "project description",
        image: "",
        images: [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ],
        time: "16:00",
        date: "22/02/2023",
        duration: "2 hours",
        city: "Marrakech",
        adresse: "Gueliz, Marrakech",
        map:
        {
            lat: 31.653610147613122,
            lon: -8.021447459904543
        },
        link: "https://club-innovation.github.io/club-innovation",
        organizers:
            [
                {
                    name: 'Hamza Ouabiba',
                    role: 'Project Manager',
                    image: hamza,
                    github: 'https://github.com/Hamza-ouabiba',
                    instagram: 'https://www.instagram.com/hamzaouee/',
                    linkedin: 'https://www.linkedin.com/in/hamza-ouabiba-b95392203/'
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
                    name: 'Oussama seme elayne',
                    role: 'President',
                    image: oussama,
                    github: 'https://github.com/oussama-seme-elayne',
                    instagram: 'https://www.instagram.com/xx_oprog/',
                    linkedin: 'https://www.linkedin.com/in/oussama-seme-elayne-ba6800198/'
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
                    name: 'Mohamed Nezhari',
                    role: 'Project Co-Manager',
                    image: mohammed,
                    github: 'https://github.com/Nezgova',
                    instagram: 'https://www.instagram.com/mohamed_nezhari/',
                    linkedin: 'https://www.linkedin.com/in/mohamed-nezhari-306b3625a'
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
    {
        title: "project title",
        shortDescription: "project short description",
        description: "project description",
        image: "",
        images: [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ],
        time: "16:00",
        date: "22/02/2023",
        duration: "2 hours",
        city: "Marrakech",
        adresse: "Gueliz, Marrakech",
        map:
        {
            lat: 31.653610147613122,
            lon: -8.021447459904543
        },
        link: "https://club-innovation.github.io/club-innovation",
        organizers:
            [
                {
                    name: 'Hamza Ouabiba',
                    role: 'Project Manager',
                    image: hamza,
                    github: 'https://github.com/Hamza-ouabiba',
                    instagram: 'https://www.instagram.com/hamzaouee/',
                    linkedin: 'https://www.linkedin.com/in/hamza-ouabiba-b95392203/'
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
                    name: 'Oussama seme elayne',
                    role: 'President',
                    image: oussama,
                    github: 'https://github.com/oussama-seme-elayne',
                    instagram: 'https://www.instagram.com/xx_oprog/',
                    linkedin: 'https://www.linkedin.com/in/oussama-seme-elayne-ba6800198/'
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
                    name: 'Mohamed Nezhari',
                    role: 'Project Co-Manager',
                    image: mohammed,
                    github: 'https://github.com/Nezgova',
                    instagram: 'https://www.instagram.com/mohamed_nezhari/',
                    linkedin: 'https://www.linkedin.com/in/mohamed-nezhari-306b3625a'
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
    {
        title: "project title",
        shortDescription: "project short description",
        description: "project description",
        image: "",
        images: [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ],
        time: "16:00",
        date: "22/02/2023",
        duration: "2 hours",
        city: "Marrakech",
        adresse: "Gueliz, Marrakech",
        map:
        {
            lat: 31.653610147613122,
            lon: -8.021447459904543
        },
        link: "https://club-innovation.github.io/club-innovation",
        organizers:
            [
                {
                    name: 'Hamza Ouabiba',
                    role: 'Project Manager',
                    image: hamza,
                    github: 'https://github.com/Hamza-ouabiba',
                    instagram: 'https://www.instagram.com/hamzaouee/',
                    linkedin: 'https://www.linkedin.com/in/hamza-ouabiba-b95392203/'
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
                    name: 'Oussama seme elayne',
                    role: 'President',
                    image: oussama,
                    github: 'https://github.com/oussama-seme-elayne',
                    instagram: 'https://www.instagram.com/xx_oprog/',
                    linkedin: 'https://www.linkedin.com/in/oussama-seme-elayne-ba6800198/'
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
                    name: 'Mohamed Nezhari',
                    role: 'Project Co-Manager',
                    image: mohammed,
                    github: 'https://github.com/Nezgova',
                    instagram: 'https://www.instagram.com/mohamed_nezhari/',
                    linkedin: 'https://www.linkedin.com/in/mohamed-nezhari-306b3625a'
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
    {
        title: "project title",
        shortDescription: "project short description",
        description: "project description",
        image: "",
        images: [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ],
        time: "16:00",
        date: "22/02/2023",
        duration: "2 hours",
        city: "Marrakech",
        adresse: "Gueliz, Marrakech",
        map:
        {
            lat: 31.653610147613122,
            lon: -8.021447459904543
        },
        link: "https://club-innovation.github.io/club-innovation",
        organizers:
            [
                {
                    name: 'Hamza Ouabiba',
                    role: 'Project Manager',
                    image: hamza,
                    github: 'https://github.com/Hamza-ouabiba',
                    instagram: 'https://www.instagram.com/hamzaouee/',
                    linkedin: 'https://www.linkedin.com/in/hamza-ouabiba-b95392203/'
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
                    name: 'Oussama seme elayne',
                    role: 'President',
                    image: oussama,
                    github: 'https://github.com/oussama-seme-elayne',
                    instagram: 'https://www.instagram.com/xx_oprog/',
                    linkedin: 'https://www.linkedin.com/in/oussama-seme-elayne-ba6800198/'
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
                    name: 'Mohamed Nezhari',
                    role: 'Project Co-Manager',
                    image: mohammed,
                    github: 'https://github.com/Nezgova',
                    instagram: 'https://www.instagram.com/mohamed_nezhari/',
                    linkedin: 'https://www.linkedin.com/in/mohamed-nezhari-306b3625a'
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