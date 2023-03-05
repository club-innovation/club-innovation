// import imageExample from "../imgs/projects/imageexample"
import yahya from "../imgs/team/yahya.png"
import hamza from '../imgs/team/hamza.jpg'
import oussama from '../imgs/team/oussama.jpeg'
import mohammed from '../imgs/team/mohamed.jpeg'
import oualid from '../imgs/team/oualid.jpeg'
import taha from '../imgs/team/taha.jpeg'
import badr from '../imgs/team/bader.jpg'
import brain from '../imgs/events/brainstor/1.png'
import hiring from '../imgs/events/hiring/1.jpeg'

const events = [
    {
        title: "Brain Storming",
        shortDescription: "project short description",
        description: "The CLUB INNOVATION EMSI MARRAKECH is organizing a brainstorming event on Thursday, November 17th, at the EMSI GUELIZ amphitheater. The objective of this event is to exchange and discuss future innovative projects. All participants are welcome to share their ideas and participate in constructive discussions. This event is a unique opportunity to meet creative and passionate individuals who wish to contribute to the innovation and development of the region. Whether you are a student, a professional or simply interested in innovative projects, this event is an opportunity to network and participate in a stimulating conversation. Come in large numbers and do not hesitate to share your ideas to contribute to a more innovative and promising future.",
        image: brain,
        images: [
            { url: brain },
        ],
        time: "18:30",
        date: "17/11/2022",
        duration: "30 min",
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
                    name: 'Walid Habbach',
                    role: 'Technical Manager',
                    image: oualid,
                    github: 'https://github.com/walidhabbach',
                    instagram: 'https://www.instagram.com/walid_habbach/',
                    linkedin: 'https://www.linkedin.com/in/oualid-habbach-0385641bb/'
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
        title: "Recruitment Session",
        shortDescription: "project short description",
        description: "The Club Innovation Recruitment Session is an event designed to attract new members to join the Team and become part of a community of engaged and passionate individuals. The session is open to individuals who are interested in becoming a member of the Team and contributing to its mission.",
        image: hiring,
        images: [
            { url: hiring },
        ],
        time: "18:20",
        date: "09/03/2023",
        duration: "40 min",
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

export default events;