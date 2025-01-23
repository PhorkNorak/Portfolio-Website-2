import { Project } from '@/types/project';

export const projects: Project[] = [

  {
    id: 'financial-analyst',
    title: 'Personal Financial Analyst',
    description: 'A financial management system with secure authentication and data visualization.',
    technologies: ['Django', 'PostgreSQL', 'ReactJS'],
    category: 'Web Development',
    image: '/projects/personal financial analyst.png',
    demoVideo: 'https://www.youtube.com/embed/FxbgWYSxOqg', // Replace with your actual video ID
    details: {
      overview: 'A comprehensive financial management system that helps users track and analyze their finances.',
      features: [
        'Secure user authentication',
        'Financial category management',
        'Income and expense tracking',
        'Data visualization dashboards',
      ],
      technicalDetails: [
        'Django backend with REST API',
        'ReactJS frontend for dynamic UI',
        'PostgreSQL database',
        'Secure authentication system',
      ],
    },
    date: 'Dec 2024 - Jan 2025',
  },
  {
    id: 'facial-recognition',
    title: 'Facial Recognition for Secured Authentication',
    description: 'A facial recognition system for secure authentication using deep learning.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Django', 'PostgreSQL'],
    category: 'AI/ML',
    image: '/projects/Face Recognition.png',
    researchPaperImage: '/projects/Research Paper.png',
    demoVideo: 'https://www.youtube.com/embed/XZRxHnwuneM',
    details: {
      overview: 'A robust facial recognition system for secure authentication in the Quantum Era.',
      features: [
        'Facial recognition authentication',
        'Deep learning algorithms',
        'Secure user verification',
      ],
      technicalDetails: [
        'Django backend',
        'TensorFlow for deep learning',
        'PostgreSQL database',
        'Advanced ML algorithms',
      ],
      achievements: [
        'Awarded 1st Prize at the 7th Engineering Day Awards 2024',
      ],
    },
    date: 'April 2024 - Dec 2024',
  },
  {
    id: 'facial-skincare-analysis',
    title: 'Facial Skincare Analysis & Recommendation',
    description: 'An AI-powered platform for facial skin analysis and personalized skincare recommendations using advanced deep learning models.',
    technologies: ['Django', 'PostgreSQL', 'MindSpore', 'ModelArts', 'Huawei Cloud'],
    category: 'AI/ML',
    image: '/projects/skincare.png',
    date: 'Ongoing',
    demoVideo: 'https://www.youtube.com/embed/9YX36ZMlHbk',
    details: {
      overview: 'A comprehensive facial analysis system that leverages AI to provide personalized skincare recommendations. The platform combines advanced computer vision techniques with recommendation algorithms to deliver tailored skincare solutions.',
      features: [
        'Real-time facial skin analysis and condition detection',
        'Personalized skincare product recommendations',
        'Skin type classification using deep learning',
        'Integration with Huawei Cloud and ModelArts',
        'User profile and history tracking'
      ],
      technicalDetails: [
        'Built with Django for robust backend implementation',
        'Utilized MindSpore for efficient deep learning model deployment',
        'Implemented on Huawei Cloud using ModelArts for scalable AI services',
        'PostgreSQL database for secure data management',
        'RESTful API architecture for seamless frontend integration'
      ],
      achievements: [
        'Selected project to the HUAWEI ICT COMPETITION National Final CAMBODIA 2024-2025 (AI innovation track).',
      ],
    }
  },
  {
    id: 'eduhub',
    title: 'EduHub',
    description: 'A comprehensive education platform with user roles for admin, instructor, and student.',
    technologies: ['Next.js', 'PostgreSQL'],
    category: 'Web Development',
    image: '/projects/Eduhub.png',
    // demoVideo: 'https://www.youtube.com/embed/xyz789', // Replace xyz789 with your actual video ID
    details: {
      overview: 'EduHub is an educational platform that facilitates course management and learning.',
      features: [
        'User role management (Admin, Instructor, Student)',
        'Course management system',
        'Student enrollment tracking',
        'Platform analytics',
      ],
      technicalDetails: [
        'Built with Next.js for optimal performance and SEO',
        'PostgreSQL database for reliable data storage',
        'Role-based access control',
        'Real-time analytics dashboard',
      ],
    },
    date: 'Ongoing',
  },

  {
    id: 'diamond-shop',
    title: 'Diamond Shop Management System',
    description: 'An integrated system for managing orders and pawn transactions.',
    technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'Docker'],
    category: 'Web Development',
    image: '/projects/Diamond Shop.png',
    // demoVideo: 'https://www.youtube.com/embed/FxbgWYSxOqg',
    details: {
      overview: 'A comprehensive management system for diamond shop operations.',
      features: [
        'E-commerce order management',
        'Pawn transaction handling',
        'Admin dashboard',
        'Docker deployment',
      ],
      technicalDetails: [
        'FastAPI backend for high performance',
        'Next.js frontend',
        'PostgreSQL database',
        'Containerized with Docker',
      ],
    },
    date: 'Dec 2024 - Jan 2025',
  },
  {
    id: 'loan-prediction',
    title: 'Loan Prediction System',
    description: 'An AI-powered system for loan risk assessment and prediction.',
    technologies: ['Django', 'PostgreSQL', 'TensorFlow'],
    category: 'AI/ML',
    image: '/projects/Coming Soon.png',
    // image: '/projects/meme.jpg',
    // demoVideo: 'https://www.youtube.com/embed/FxbgWYSxOqg',
    details: {
      overview: 'Machine learning system for predicting loan approval and risk assessment.',
      features: [
        'Risk evaluation system',
        'Loan request management',
        'Comprehensive assessment tools',
        'ML-based prediction',
      ],
      technicalDetails: [
        'Django web framework',
        'TensorFlow for ML models',
        'PostgreSQL database',
        'RESTful API architecture',
      ],
    },
    date: 'Dec 2024 - Jan 2025',
  },

];
