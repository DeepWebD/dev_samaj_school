import navbarData from "./navbarData";
import { prayers } from "./prayers";
import { subNavbarData, aboutAcademicData, pillers } from "./academic";
import banner2 from "../../public/banner5.jpg";
import banner1 from "../../public/banner4.jpg";
import banner3 from "../../public/banner7.jpg";
import HeroImg from "../../public/hero2.png";
import Teacher from "../../public/teachers/ds_teachers1.jpg";
import image1 from "../../public/ds_slider1.jpg";
import image2 from "../../public/ds_slider2.jpg";
import image3 from "../../public/ds_slider3.jpg";
import image4 from "../../public/image4.jpg";
import {TeacherData} from '../mockdata/data'

export const sukhdevNagar = {
  title: "Sukhdev Nagar",
  address: "Sukhdev Nagar, Delhi 110025",
  phone: "+91 12345 67890",
  email: "contact@nehrunagar.com",
  PIN: "123456",
  principal: "Soniya Roy",
  vice_principal: "Anshika Soni",
  director: "Sunit Verma",
  founder: "Suman Sumitra",
  homePageCasousel: [banner1, banner2, banner3],
  navbar: navbarData,
  homePage: {
    heroSection: {
      title: "Welome to Dev Samaj School",
      description: [
        ` Established in 1966, An English medium school in Nehru Nagar ,
            Delhi, stands at Ring Road, Nehru Nagar, Delhi - 110065, nurturing
            young minds with excellence.`,
        `  The name "Dev Samaj" also honors a legacy of social reform, founded
            in Lahore in 1887 by Pandit Shiv Narayan Agnihotri.`,
      ],
      heroImage: HeroImg,
      buttonTitle: "Learn More",
      buttonLink: "/about",
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      expertTeacher: "150",
      SchoolBuses: "200",
      alumni: "20000",
      activeStudents: "3000",
      isButtonsNeed: true,
      isNumberCountNeed: true,
    },

    whyChooseUs: {
      wordsOfOurVisionary: {
        title: "Words of our Visionary",
        description: `We live in a time where our educational system desperately needs to put more stress on inculcating universal values, such as empathy, service-mindedness, true love, and compassion in our youngsters. We need educational institutions that actively spread these universal, spiritual values.`,
        visionaryName: "Sunit Verma",
        visionaryDesignation: "Director, Dev Samaj Group of Schools",
        visionaryImage: "visionaryImageUrl",
      },
      section1: {
        description:
          "Implement educational practices that foster integrity, empathy, and responsibility in students.",
        icon: "iconUrl",
      },
      section2: {
        description:
          " A curriculum promoting academic excellence and community service.",
        icon: "iconUrl",
      },
      section3: {
        description:
          "Programs that inspire students to grow with integrity and empathy.",
        icon: "iconUrl",
      },
      section4: {
        description:
          "Opportunities to excel academically and in extracurriculars.",
        title: "Why Choose Us",
      },
      section5: {
        description:
          " Our mission is to provide a safe, nurturing environment where children can learn and grow through a variety of experiences.",
        title: "Why Choose Us",
      },
      teacher: Teacher,
    },
    imageGallery: {
      title: "Moments to Cherish",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      images: [image1, image2, image3,image4],
      button: "See More",
    },
    vidoeGallery: {
      title: "Stories in Motion",
      description:
        "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
      videoUrl: 'https://www.youtube.com/watch?v=vHL8OvW19Nc',
      button: "See More",
    },
    homePagePrayers: [
      {
        title: "Monday Prayer",
        day: "Monday",
        prayer: "Prayer text here",
        img: "imagrUrl",
      },
      {
        title: "Monday Prayer",
        day: "Monday",
        prayer: "Prayer text here",
        img: "imagrUrl",
      },
      {
        title: "Monday Prayer",
        day: "Monday",
        prayer: "Prayer text here",
        img: "imagrUrl",
      },
      {
        title: "Monday Prayer",
        day: "Monday",
        prayer: "Prayer text here",
        img: "imagrUrl",
      },
      {
        title: "Monday Prayer",
        day: "Monday",
        prayer: "Prayer text here",
        img: "imagrUrl",
      },
      {
        title: "Monday Prayer",
        day: "Monday",
        prayer: "Prayer text here",
        img: "imagrUrl",
      },
    ],
    leaders: TeacherData,
    contactUs:{
        email:'contact@nehrunagar.com',
        landline:'+91 12345 67890',
        address:{ line1:"Sukhdev Nagar, Bhopal, Madhya Pradesh 462003", line2:"India"},
        mobile: '+91 12345 67890',
        googleMapEmbedLink:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8234567890123!2d77.2755284!3d28.5584104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f29eea6293%3A0xf9a4bdade84de6e5!2sShop%20No.4%2C%20Metro%20Station%20Sukhdev%20Vihar%2C%20Sukhdev%20Vihar%2C%20Masihgarh%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1732886406961!5m2!1sen!2sin'
    },
    testimonials: [
        {
          id: 1,
          name: "John Doe",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/101/101",
          title: "Student",
          delay: 0.2,
        },
        {
          id: 2,
          name: "Steve Smith",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/102/102",
          title: "Student",
          delay: 0.5,
        },
        {
          id: 3,
          name: "Kristen",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/104/104",
          title: "Teacher",
          delay: 0.8,
        },
        {
          id: 5,
          name: "Ariana",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/103/103",
          title: "Student",
          delay: 1.1,
        },
      ],
  },
  visionAndHistory: {
    title: "VISION and HISTORY",
    description:
      "Keeping in view the vision of Revered Bhagwan Dev Atma to empower and emancipate women",
    imgUrl: "imageUrl",
    vision: {
      title: "Our Vision",
      description: [
        "To shape, sensitize and inculcate scientific temper combined with right attitudes, values and ideologies in the prospective teachers.",
        "To achieve academic excellence through evolutionary vision, critical thinking and effective decision making.",
        "To facilitate learning among the pupils using appropriate methodologies and enhance their skills to render selfless service to the community.",
      ],
      heroImg: "imgUrl",
    },
    mission: {
      title: "Our Mission",
      description: `To train a qualitative renewable talent bank of dedicated, committed educators who a r e intellectually well developed, socially concerned and morally upright. The focus is on wholesome personality development which empowers them. t o address problems faced nationally and globally with evolutionary vision, scientific temper andresearch oriented mind`,
    },
    leadersSay: [
      {
        name: "Sunit Verma",
        designation: "Director, Dev Samaj Group of Schools",
        image: "imageUrl",
        description: `We live in a time where our educational system desperately needs to put more stress on inculcating universal values, such as empathy, service-mindedness, true love, and compassion in our youngsters. We need educational institutions that actively spread these universal, spiritual values.`,
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        name: "Sunit Verma",
        designation: "Director, Dev Samaj Group of Schools",
        image: "imageUrl",
        description: `We live in a time where our educational system desperately needs to put more stress on inculcating universal values, such as empathy, service-mindedness, true love, and compassion in our youngsters. We need educational institutions that actively spread these universal, spiritual values.`,
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
    ourStory: [
      {
        title: "Dev Samaj School, Nehru Nagar was established",
        year: "1966",
        description:
          "Dev Samaj School, Nehru Nagar was established in 1966 with a vision to provide quality education to the children of the locality.",
        imgUrl: "url",
      },
      {
        title: "Dev Samaj School, Nehru Nagar was established",
        year: "1966",
        description:
          "Dev Samaj School, Nehru Nagar was established in 1966 with a vision to provide quality education to the children of the locality.",
        imgUrl: "url",
      },
      {
        title: "Dev Samaj School, Nehru Nagar was established",
        year: "1966",
        description:
          "Dev Samaj School, Nehru Nagar was established in 1966 with a vision to provide quality education to the children of the locality.",
        imgUrl: "url",
      },
      {
        title: "Dev Samaj School, Nehru Nagar was established",
        year: "1966",
        description:
          "Dev Samaj School, Nehru Nagar was established in 1966 with a vision to provide quality education to the children of the locality.",
        imgUrl: "url",
      },
      {
        title: "Dev Samaj School, Nehru Nagar was established",
        year: "1966",
        description:
          "Dev Samaj School, Nehru Nagar was established in 1966 with a vision to provide quality education to the children of the locality.",
        imgUrl: "url",
      },
      {
        title: "Dev Samaj School, Nehru Nagar was established",
        year: "1966",
        description:
          "Dev Samaj School, Nehru Nagar was established in 1966 with a vision to provide quality education to the children of the locality.",
        imgUrl: "url",
      },
    ],
  },
  imageGallery: [
    [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      },
    ],
    [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      },
    ],
    [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      },
    ],
    [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
      },
    ],
  ],
  vidoeGallery: [
    {
      title: "Beautiful Nature Compilation",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668130718429-7abf7b186f2f?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "City Landscapes Around the World",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1664008628916-3b72a2136e22?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mountain Adventures",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ocean Waves and Beaches",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Beautiful Nature Compilation",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668130718429-7abf7b186f2f?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "City Landscapes Around the World",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1664008628916-3b72a2136e22?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mountain Adventures",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ocean Waves and Beaches",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  prayerPage: prayers,

  events: {
    pastEvent: [
      {
        image:
          "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
        title: "Science Fair",
        date: "2023-11-15",
        description:
          "Join us for the annual science fair showcasing innovative projects from students.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorXbVtUTt5xBiceQPALPnOersj1cQ-bmbLA&s",
        title: "Music Concert",
        date: "2023-12-01",
        description:
          "Enjoy an evening of music performed by our talented students.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzGqDifK-kwjKAe_Yzwd0MGreO23Uy8mmmg&s",
        title: "Sports Day",
        date: "2023-10-10",
        description: "A day filled with fun and competitive sports activities.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgmLwXg3cXV7hOE9iUF_QiT3bsANhi91J3JBRDYBozsxz3pOLVBvuSKCmI0JwDxdvIjQ&usqp=CAU",
        title: "Art Exhibition",
        date: "2023-09-20",
        description:
          "Explore the creative works of our students in this art exhibition.",
      },
    ],
    upcomingEvent: [
      {
        image:
          "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
        title: "Science Fair",
        date: "2023-11-15",
        description:
          "Join us for the annual science fair showcasing innovative projects from students.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorXbVtUTt5xBiceQPALPnOersj1cQ-bmbLA&s",
        title: "Music Concert",
        date: "2023-12-01",
        description:
          "Enjoy an evening of music performed by our talented students.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzGqDifK-kwjKAe_Yzwd0MGreO23Uy8mmmg&s",
        title: "Sports Day",
        date: "2023-10-10",
        description: "A day filled with fun and competitive sports activities.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgmLwXg3cXV7hOE9iUF_QiT3bsANhi91J3JBRDYBozsxz3pOLVBvuSKCmI0JwDxdvIjQ&usqp=CAU",
        title: "Art Exhibition",
        date: "2023-09-20",
        description:
          "Explore the creative works of our students in this art exhibition.",
      },
      {
        image:
          "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
        title: "Science Fair",
        date: "2023-11-15",
        description:
          "Join us for the annual science fair showcasing innovative projects from students.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorXbVtUTt5xBiceQPALPnOersj1cQ-bmbLA&s",
        title: "Music Concert",
        date: "2023-12-01",
        description:
          "Enjoy an evening of music performed by our talented students.",
      },
    ],
  },
  registrationForm: "formUrl",
  registrationCriteria: "criteriaUrl",
  facilities: {
    facilitiesList: [
      {
        name: "Transportation",
        description: "Safe and reliable school buses for students.",
        icon: "iconUrl",
      },
      {
        name: "Library",
        description: "A vast collection of books and digital resources.",
        icon: "iconUrl",
      },
      {
        name: "Canteen",
        description: "Healthy and hygienic meals for students.",
        icon: "iconUrl",
      },
      {
        name: "Sports Activity",
        description: "Indoor and outdoor sports facilities.",
        icon: "iconUrl",
      },
    ],
    transportation: {
      title: "Transportation",
      description:
        "Our school provides safe and reliable transportation services for students. We have a fleet of well-maintained buses with trained drivers to ensure the safety and comfort of our students during their commute to and from school.",
      image: "imageUrl",
    },
    library: {
      title: "Library",
      description:
        "Our school library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources. It is a quiet and conducive space for students to read, research, and expand their horizons.",
      image: "imageUrl",
    },
    canteen: {
      title: "Canteen",
      image: "imageUrl",
      description: [
        "Our school canteen offers a variety of healthy and hygienic meals for students. We prioritize nutritious options to ensure that our students have the energy they need for their academic and extracurricular activities.",
        "The canteen follows strict hygiene standards to provide a safe dining environment for all students.",
      ],
    },
    sports: {
      title: "Sports Activity",
      description:
        "Our school is committed to promoting physical fitness and sportsmanship among students. We offer a range of indoor and outdoor sports facilities, including a playground, basketball court, and indoor gymnasium. Our sports programs encourage teamwork, discipline, and a healthy lifestyle.",
      lisOfSports: [
        {
          title: "Football",
          description:
            "Our school football team competes in local and regional tournaments, fostering teamwork and sportsmanship among students.",
          icon: "iconUrl",
        },
        {
          title: "Basketball",
          description:
            "We have a dedicated basketball court where students can practice and participate in inter-school competitions.",
          icon: "iconUrl",
        },
        {
          title: "Badminton",
          description:
            "Our badminton facilities allow students to enjoy this fast-paced sport and improve their agility and reflexes.",
          icon: "iconUrl",
        },
        {
          title: "Table Tennis",
          description:
            "Table tennis is a popular sport at our school, with regular tournaments and practice sessions for students of all skill levels.",
          icon: "iconUrl",
        },
      ],
    },
  },
  academic: {
    prePrimary: {
      subNavbarData: subNavbarData,
      aboutAcademicData: aboutAcademicData,
      pillers: pillers,
    },
  },
};
