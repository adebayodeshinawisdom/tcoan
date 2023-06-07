import bcrypt from 'bcryptjs';
export  const data = {
    products: [
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'Airpods Wireless Bluetooth Headphones',
      slug: 'airpods',
      image: '/images/airpods.jpg',
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      brand: 'Apple',
      category: 'Electronics',
      price: 89.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
    
      user: '63ea287f40aa439f511b3d05',
      name: 'iPhone 11 Pro 256GB Memory',
      slug: 'ipone',
      image: '/images/phone.jpg',
      description:
        'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
      brand: 'Apple',
      category: 'Electronics',
      price: 599.99,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
  
      user: '63ea287f40aa439f511b3d05',
      slug: 'cannon',
      name: 'Cannon EOS 80D DSLR Camera',
      image: '/images/camera.jpg',
      description:
        'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
      brand: 'Cannon',
      category: 'Electronics',
      price: 929.99,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
     
      user: '63ea287f40aa439f511b3d05',
      name: 'Sony Playstation 4 Pro White Version',
      slug: 'playstation',
      image: '/images/playstation.jpg',
      description:
        'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
      brand: 'Sony',
      category: 'Electronics',
      price: 399.99,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      user: '63ea287f40aa439f511b3d05',
      name: 'Logitech G-Series Gaming Mouse',
      slug: 'logitech',
      image: '/images/mouse.jpg',
      description:
        'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
      brand: 'Logitech',
      category: 'Electronics',
      price: 49.99,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
     
      user: '63ea287f40aa439f511b3d05',  
      name: 'Amazon Echo Dot 3rd Generation',
      slug: 'amazon',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
  ],

  courses: [
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'Certificate',
      image: '/images/cert.jpg',
      video: [
        {
          title: "Introduction",
          url: "video1.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },

        {
          title: "Word processing",
          url: "video2.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Excel| Data Analysis",
          url: "video3.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Power Point | Presentation",
          url: "video5.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "The Internet",
          url: "video6.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        }
      ],
      description:
        'The Computer Course is a comprehensive program designed to equip individuals with fundamental knowledge and practical skills in various aspects of computer technology. This course is perfect for beginners who wish t enter the field of computing for professionals seeking to enhance their existing computer skills.',
      category: 'IT',
      price: 25000,
      duration: "12 Weeks",
      rating: 4.5,
      numReviews: 12,
    },
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'Diploma',
      image: '/images/cert.jpg',
      video: [
        {
          title: "Introduction",
          url: "video1.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },

        {
          title: "Word processing",
          url: "video2.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Excel| Data Analysis",
          url: "video3.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Power Point | Presentation",
          url: "video5.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "The Internet",
          url: "video6.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        }
      ],
      description:
        'The Computer Diploma Course is an intensive and in-depth program designed to provide individuals with a comprehensive understanding of computer science and technology.',
      category: 'IT',
      price: 30500,
      duration: "6 Weeks",
      rating: 4.5,
      numReviews: 12,
    },
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'Advanced Diploma',
      image: '/images/cert.jpg',
      video: [
        {
          title: "Introduction",
          url: "video1.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },

        {
          title: "Word processing",
          url: "video2.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Excel| Data Analysis",
          url: "video3.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Power Point | Presentation",
          url: "video5.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "The Internet",
          url: "video6.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        }
      ],
      description:
        'The Computer Advanced',
      category: 'IT',
      price: 35500,
      duration: "20 Weeks",
      rating: 4.5,
      numReviews: 12,
    },
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'Graphic Design',
      image: '/images/videoediting.jpg',
      video: [
        {
          title: "Introduction",
          url: "video1.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },

        {
          title: "Word processing",
          url: "video2.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Excel| Data Analysis",
          url: "video3.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Power Point | Presentation",
          url: "video5.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "The Internet",
          url: "video6.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        }
      ],
      
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      category: 'IT',
      price: 40000,
      duration: "4 Weeks",
      rating: 4.5,
      numReviews: 12,
    },
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'Video Editing',
      image: '/images/videoediting.jpg',
      video: [
        {
          title: "Introduction",
          url: "video1.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },

        {
          title: "Word processing",
          url: "video2.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Excel| Data Analysis",
          url: "video3.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Power Point | Presentation",
          url: "video5.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "The Internet",
          url: "video6.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        }
      ],
      
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      category: 'IT',
      price: 50000,
      duration: "8 Weeks",
      rating: 4.5,
      numReviews: 12,
    },
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'Printing Technology',
      image: '/images/printingtech.jpg',
      video: 'video3.mp4',
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      category: 'IT',
      price: 65000,
      duration: "8 Weeks",
      rating: 4.5,
      numReviews: 12,
    },
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'HTML/CSS and Bootstrap | Frontend Web Dev',
      image: '/images/coding.jpg',
      video: [
        {
          title: "Introduction",
          url: "video1.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },

        {
          title: "Word processing",
          url: "video2.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Excel| Data Analysis",
          url: "video3.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Power Point | Presentation",
          url: "video5.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "The Internet",
          url: "video6.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        }
      ],
      
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      category: 'Coding and Programming',
      price: 50000,
      duration: "4 Weeks",
      rating: 4.5,
      numReviews: 12,
    },
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'React Js, React-Bootstrap, Reactstrap | Frontend Web Dev',
      image: '/images/coding2.jpg',
      video: [
        {
          title: "Introduction",
          url: "video1.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },

        {
          title: "Word processing",
          url: "video2.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Excel| Data Analysis",
          url: "video3.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Power Point | Presentation",
          url: "video5.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "The Internet",
          url: "video6.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        }
      ],
      
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      category: 'Frontend Web Dev',
      price: 100000,
      duration: "12 Weeks",
      rating: 4.5,
      numReviews: 12,
    },
    {
   
      user: '63ea287f40aa439f511b3d05',
      name: 'Next Js, MongoDB | FullStack Web Dev',
      image: '/images/coding.jpg',
     video: [
        {
          title: "Introduction",
          url: "video1.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },

        {
          title: "Word processing",
          url: "video2.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Excel| Data Analysis",
          url: "video3.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "Power Point | Presentation",
          url: "video5.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        },
        {
          title: "The Internet",
          url: "video6.mp4",
          description: "Certificate course",
          thumbnail: "/images/cert.jpg",
        }
      ],
      
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      category: 'Fullstack | Frontend and Backend',
      price: 200000,
      duration: "12 Weeks",
      rating: 4.5,
      numReviews: 12,
    },
  ],

  users:  [
    {
        name: "Admin user",
        email: "admin@gmail.com",
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true
    },
  
    {
        name: "Amos",
        email: "amos@gmail.com",
        password: bcrypt.hashSync('1234', 10),
        
    },
    {
        name: "Kate",
        email: "kate@gmail.com",
        password: bcrypt.hashSync('1234', 10),
       
    },
  ]
  }
  
  