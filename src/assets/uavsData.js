import img1 from "./images/uavImages/1.jpg"
import img2 from "./images/uavImages/2.jpg"

import audioGhatak from "./audio/uavAudios/ghatak.mp3"
import audioCats from "./audio/uavAudios/cats.mp3"

const data = [
    {
        id: 0,
        category: "Stealth UAV",
        name: "DRDO Ghatak",
        imgSrc: img1,
        specifications: {
            engine_types: 'NPO Saturn 36MT, TRDD-50MT turbofan',
            length: '4 m',
            first_flight: '2022',
            range: '*unknown*',
            manufacturer: 'Defence Research and Development Organisation',
            top_speed: '*unknown*',
            design_group: "	Aeronautical Development Agency, Aeronautical Development Establishment, Indian Institute of Technology Kanpur",
        },
        audioSrc: audioGhatak
    },
    {
        id: 1,
        category: "Stealth UAV",
        name: "HAL CATS Warrior",
        imgSrc: img2,
        specifications: {
            engine_types: 'Turbofan, HAL HTFE-25',
            length: '9.2 m',
            first_flight: '2024',
            range: '1,500 km',
            manufacturer: 'Hindustan Aeronautics Limited',
            top_speed: '1,111 km/h',
            design_group: 'Hindustan Aeronautics Limited, Newspace Research & Technologies',
        },
        audioSrc: audioCats,
    },

]

export default data;