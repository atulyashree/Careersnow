export interface Career {
  id: string;
  title: string;
  summary: string;
  overview: string;
  salary: {
    entry: string;
    mid: string;
    senior: string;
  };
  timeToLearn: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  demand: 'High' | 'Very High' | 'Medium';
  skills: {
    core: string[];
    advanced: string[];
    soft: string[];
  };
  roadmap: {
    phase: string;
    steps: string[];
  }[];
  resources: {
    courses: {
      name: string;
      platform: string;
      price: string;
      rating: string;
    }[];
    books: string[];
    tools: string[];
  };
  companies: string[];
  tags: string[];
}

export const careers: Career[] = [
  {
    id: 'backend-developer',
    title: "Backend Developer",
    summary: "Build and maintain server-side applications, APIs, and databases.",
    overview: "As a backend developer, you'll work with databases, APIs, server logic, and ensure applications run smoothly and securely.",
    salary: {
      entry: "₹6-12 LPA",
      mid: "₹12-20 LPA", 
      senior: "₹20-35 LPA"
    },
    timeToLearn: "6-12 months",
    difficulty: "Intermediate",
    demand: "Very High",
    tags: ["Programming", "Remote", "High Salary", "In Demand", "Computer Science", "Developer", "Development", "Software"],
    skills: {
      core: ["JavaScript/Node.js", "Python", "Databases (SQL/NoSQL)", "APIs & REST", "Git"],
      advanced: ["Microservices", "Cloud Platforms (AWS/Azure)", "Docker", "CI/CD", "System Design"],
      soft: ["Problem Solving", "Communication", "Team Collaboration", "Time Management"]
    },
    roadmap: [
      {
        phase: "Foundation (2-3 months)",
        steps: [
          "Learn programming fundamentals with JavaScript or Python",
          "Understand basic data structures and algorithms",
          "Learn version control with Git",
          "Practice with simple projects"
        ]
      },
      {
        phase: "Backend Basics (3-4 months)",
        steps: [
          "Learn a backend framework (Express.js, Django, or Flask)",
          "Understand databases and SQL",
          "Build RESTful APIs",
          "Learn authentication and authorization"
        ]
      },
      {
        phase: "Advanced Topics (3-5 months)",
        steps: [
          "Learn about microservices architecture",
          "Understand cloud platforms and deployment",
          "Study system design and scalability",
          "Learn DevOps practices"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "Node.js Complete Guide", platform: "Udemy", price: "₹499", rating: "4.7/5" },
        { name: "Python Backend Development", platform: "Coursera", price: "Free", rating: "4.6/5" },
        { name: "Database Design", platform: "edX", price: "₹999", rating: "4.5/5" }
      ],
      books: [
        "Clean Code by Robert C. Martin",
        "Designing Data-Intensive Applications by Martin Kleppmann",
        "The Pragmatic Programmer by Andrew Hunt"
      ],
      tools: ["VS Code", "Postman", "MongoDB Compass", "Docker Desktop", "GitHub"]
    },
    companies: ["Google", "Microsoft", "Amazon", "Netflix", "Uber", "Startups"]
  },
  {
    id: 'ui-ux-designer',
    title: "UI/UX Designer",
    summary: "Design user interfaces and create seamless user experiences.",
    overview: "You'll combine creativity with user research to design interfaces that solve real problems and provide delightful user experiences.",
    salary: {
      entry: "₹4-8 LPA",
      mid: "₹8-15 LPA",
      senior: "₹15-25 LPA"
    },
    timeToLearn: "4-8 months",
    difficulty: "Beginner",
    demand: "High",
    tags: ["Web Design", "Creative", "Remote", "Flexible"],
    skills: {
      core: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
      advanced: ["Design Systems", "User Testing", "Accessibility", "Animation", "Design Thinking"],
      soft: ["Creativity", "Empathy", "Communication", "Problem Solving", "Attention to Detail", "Speaking"]
    },
    roadmap: [
      {
        phase: "Design Fundamentals (2-3 months)",
        steps: [
          "Learn design principles and color theory",
          "Master Figma or Adobe XD",
          "Understand typography and layout",
          "Study user psychology"
        ]
      },
      {
        phase: "UX Process (2-3 months)",
        steps: [
          "Learn user research methods",
          "Create wireframes and prototypes",
          "Conduct user testing",
          "Understand information architecture"
        ]
      },
      {
        phase: "Advanced Skills (2-3 months)",
        steps: [
          "Build design systems",
          "Learn micro-interactions",
          "Study accessibility guidelines",
          "Create portfolio projects"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "UI/UX Design Bootcamp", platform: "Udemy", price: "₹699", rating: "4.8/5" },
        { name: "Google UX Design", platform: "Coursera", price: "Free", rating: "4.7/5" },
        { name: "Figma Masterclass", platform: "YouTube", price: "Free", rating: "4.6/5" }
      ],
      books: [
        "Don't Make Me Think by Steve Krug",
        "The Design of Everyday Things by Don Norman",
        "Sprint by Jake Knapp"
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Hotjar"]
    },
    companies: ["Apple", "Google", "Airbnb", "Spotify", "Figma", "Design Agencies"]
  },
  {
    id: 'data-scientist',
    title: "Data Scientist",
    summary: "Analyze complex data to help organizations make informed decisions.",
    overview: "You'll work with large datasets, build predictive models, and communicate insights to stakeholders to drive business decisions.",
    salary: {
      entry: "₹8-15 LPA",
      mid: "₹15-25 LPA",
      senior: "₹25-45 LPA"
    },
    timeToLearn: "8-15 months",
    difficulty: "Advanced",
    demand: "Very High",
    tags: ["Analytics", "High Salary", "Remote", "Growing Field", "AI"],
    skills: {
      core: ["Python", "R", "SQL", "Statistics", "Machine Learning"],
      advanced: ["Deep Learning", "Big Data Tools", "Data Visualization", "A/B Testing", "MLOps"],
      soft: ["Analytical Thinking", "Business Acumen", "Storytelling", "Problem Solving"]
    },
    roadmap: [
      {
        phase: "Mathematics & Statistics (3-4 months)",
        steps: [
          "Learn linear algebra and calculus",
          "Master probability and statistics",
          "Understand hypothesis testing",
          "Study data distributions"
        ]
      },
      {
        phase: "Programming & Data (3-4 months)",
        steps: [
          "Learn Python for data science",
          "Master pandas, numpy, matplotlib",
          "Learn SQL and database concepts",
          "Practice data cleaning and preprocessing"
        ]
      },
      {
        phase: "Machine Learning (4-6 months)",
        steps: [
          "Learn supervised and unsupervised learning",
          "Master scikit-learn and TensorFlow",
          "Understand model evaluation",
          "Build end-to-end projects"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "Data Science Specialization", platform: "Coursera", price: "₹2,999", rating: "4.8/5" },
        { name: "Python for Data Science", platform: "DataCamp", price: "₹1,499", rating: "4.7/5" },
        { name: "Machine Learning Course", platform: "Stanford Online", price: "Free", rating: "4.9/5" }
      ],
      books: [
        "Python for Data Analysis by Wes McKinney",
        "The Elements of Statistical Learning by Trevor Hastie",
        "Hands-On Machine Learning by Aurélien Géron"
      ],
      tools: ["Jupyter Notebook", "Google Colab", "Tableau", "Power BI", "Apache Spark"]
    },
    companies: ["Google", "Microsoft", "Amazon", "Netflix", "Uber", "Consulting Firms"]
  },
  {
    id: 'product-manager',
    title: "Product Manager",
    summary: "Lead product development and strategy across cross-functional teams.",
    overview: "You'll be the bridge between business, technology, and design teams, making strategic decisions about product features, priorities, and roadmap.",
    salary: {
      entry: "₹10-18 LPA",
      mid: "₹18-30 LPA",
      senior: "₹30-50 LPA"
    },
    timeToLearn: "6-10 months",
    difficulty: "Intermediate",
    demand: "High",
    tags: ["Leadership", "Strategy", "High Salary", "Growth"],
    skills: {
      core: ["Product Strategy", "User Research", "Agile/Scrum", "Data Analysis", "Stakeholder Management"],
      advanced: ["Product Analytics", "A/B Testing", "Go-to-Market Strategy", "Competitive Analysis", "Roadmapping"],
      soft: ["Leadership", "Communication", "Problem Solving", "Decision Making", "Empathy", "Speaking"]
    },
    roadmap: [
      {
        phase: "Product Fundamentals (2-3 months)",
        steps: [
          "Learn product management principles",
          "Understand user research methods",
          "Study agile methodologies",
          "Learn basic analytics and metrics"
        ]
      },
      {
        phase: "Core Skills (3-4 months)",
        steps: [
          "Master product strategy and roadmapping",
          "Learn stakeholder management",
          "Understand go-to-market strategies",
          "Practice with case studies"
        ]
      },
      {
        phase: "Advanced Topics (3-4 months)",
        steps: [
          "Learn advanced analytics and A/B testing",
          "Study competitive analysis",
          "Understand business models",
          "Build portfolio projects"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "Product Management Certification", platform: "Product School", price: "₹15,000", rating: "4.7/5" },
        { name: "Digital Product Management", platform: "Coursera", price: "Free", rating: "4.6/5" },
        { name: "Product Strategy", platform: "edX", price: "₹2,999", rating: "4.5/5" }
      ],
      books: [
        "Inspired by Marty Cagan",
        "The Lean Product Playbook by Dan Olsen",
        "Product-Led Growth by Wes Bush"
      ],
      tools: ["Jira", "Confluence", "Figma", "Mixpanel", "Amplitude", "Notion"]
    },
    companies: ["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Startups"]
  },
  {
    id: 'cybersecurity-analyst',
    title: "Cybersecurity Analyst",
    summary: "Protect organizations from digital threats and security breaches.",
    overview: "You'll be responsible for identifying vulnerabilities, responding to security incidents, and ensuring compliance with security policies and regulations.",
    salary: {
      entry: "₹6-12 LPA",
      mid: "₹12-20 LPA",
      senior: "₹20-35 LPA"
    },
    timeToLearn: "6-12 months",
    difficulty: "Intermediate",
    demand: "Very High",
    tags: ["Security", "High Demand", "Remote", "Stable"],
    skills: {
      core: ["Network Security", "Incident Response", "Vulnerability Assessment", "Security Tools", "Compliance"],
      advanced: ["Penetration Testing", "Threat Intelligence", "Security Architecture", "Forensics", "Cloud Security"],
      soft: ["Analytical Thinking", "Attention to Detail", "Problem Solving", "Communication", "Ethics"]
    },
    roadmap: [
      {
        phase: "Security Fundamentals (3-4 months)",
        steps: [
          "Learn networking fundamentals",
          "Understand security principles",
          "Study common attack vectors",
          "Learn basic security tools"
        ]
      },
      {
        phase: "Core Security Skills (3-4 months)",
        steps: [
          "Master incident response procedures",
          "Learn vulnerability assessment",
          "Understand compliance frameworks",
          "Practice with security labs"
        ]
      },
      {
        phase: "Advanced Security (3-5 months)",
        steps: [
          "Learn penetration testing",
          "Study threat intelligence",
          "Understand security architecture",
          "Get relevant certifications"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "CompTIA Security+", platform: "CompTIA", price: "₹8,000", rating: "4.8/5" },
        { name: "Cybersecurity Fundamentals", platform: "Coursera", price: "Free", rating: "4.7/5" },
        { name: "Ethical Hacking", platform: "Udemy", price: "₹999", rating: "4.6/5" }
      ],
      books: [
        "The Art of Deception by Kevin Mitnick",
        "Network Security Essentials by William Stallings",
        "Applied Cryptography by Bruce Schneier"
      ],
      tools: ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "Splunk", "Qualys"]
    },
    companies: ["Google", "Microsoft", "Amazon", "IBM", "Cisco", "Consulting Firms"]
  },
  {
    id: 'devops-engineer',
    title: "DevOps Engineer",
    summary: "Bridge development and operations to improve software delivery.",
    overview: "You'll work on automating deployment processes, managing cloud infrastructure, and ensuring reliable software delivery through CI/CD pipelines.",
    salary: {
      entry: "₹8-15 LPA",
      mid: "₹15-25 LPA",
      senior: "₹25-40 LPA"
    },
    timeToLearn: "8-14 months",
    difficulty: "Intermediate",
    demand: "Very High",
    tags: ["Automation", "High Salary", "Remote", "Technical", "Software", "Engineering"],
    skills: {
      core: ["Linux Administration", "Docker", "Kubernetes", "CI/CD", "Cloud Platforms"],
      advanced: ["Infrastructure as Code", "Monitoring & Logging", "Security", "Microservices", "System Design"],
      soft: ["Problem Solving", "Automation Mindset", "Collaboration", "Continuous Learning"]
    },
    roadmap: [
      {
        phase: "Infrastructure Basics (3-4 months)",
        steps: [
          "Learn Linux administration",
          "Understand networking concepts",
          "Study cloud platforms (AWS/Azure)",
          "Learn basic scripting"
        ]
      },
      {
        phase: "DevOps Tools (4-5 months)",
        steps: [
          "Master Docker and containers",
          "Learn Kubernetes orchestration",
          "Understand CI/CD pipelines",
          "Practice with automation tools"
        ]
      },
      {
        phase: "Advanced DevOps (3-5 months)",
        steps: [
          "Learn Infrastructure as Code",
          "Study monitoring and logging",
          "Understand security practices",
          "Build end-to-end pipelines"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "DevOps Bootcamp", platform: "Udemy", price: "₹1,299", rating: "4.8/5" },
        { name: "AWS DevOps Engineer", platform: "AWS", price: "₹12,000", rating: "4.7/5" },
        { name: "Kubernetes Course", platform: "Coursera", price: "Free", rating: "4.6/5" }
      ],
      books: [
        "The Phoenix Project by Gene Kim",
        "Site Reliability Engineering by Google",
        "Infrastructure as Code by Kief Morris"
      ],
      tools: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana"]
    },
    companies: ["Google", "Microsoft", "Amazon", "Netflix", "Uber", "Tech Companies"]
  },
  {
    id: 'marketing-manager',
    title: "Marketing Manager",
    summary: "Plan and execute marketing strategies to promote products and build brand awareness.",
    overview: "Marketing managers analyze market trends, develop campaigns, manage social media, and coordinate with sales teams to drive business growth.",
    salary: {
      entry: "₹4-8 LPA",
      mid: "₹10-18 LPA", 
      senior: "₹20-35 LPA"
    },
    timeToLearn: "4-8 months",
    difficulty: "Intermediate",
    demand: "High",
    tags: ["Marketing", "Communication", "Business", "Creativity", "Strategy", "Digital Marketing"],
    skills: {
      core: ["Marketing Fundamentals", "Digital Marketing", "Social Media", "Google Analytics", "Copywriting"],
      advanced: ["SEO/SEM", "Paid Ads (Meta, Google)", "Email Marketing", "CRM Tools", "Brand Management"],
      soft: ["Creativity", "Analytical Thinking", "Communication", "Leadership", "Speaking"]
    },
    roadmap: [
      {
        phase: "Marketing Basics (1-2 months)",
        steps: [
          "Understand marketing principles and consumer behavior",
          "Learn content creation and brand positioning",
          "Practice analyzing competitors and target markets"
        ]
      },
      {
        phase: "Digital Marketing Skills (2-3 months)",
        steps: [
          "Learn SEO, SEM, and social media marketing",
          "Practice using Google Ads and Facebook Ads",
          "Run basic campaigns on LinkedIn, Instagram"
        ]
      },
      {
        phase: "Campaign Management (2-3 months)",
        steps: [
          "Study analytics tools like Google Analytics",
          "Manage email marketing and automation",
          "Learn to measure ROI and optimize campaigns"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "Digital Marketing Specialization", platform: "Coursera", price: "Free", rating: "4.8/5" },
        { name: "Google Digital Garage", platform: "Google", price: "Free", rating: "4.7/5" },
        { name: "Meta Ads Mastery", platform: "Udemy", price: "₹499", rating: "4.5/5" }
      ],
      books: [
        "This is Marketing by Seth Godin",
        "Contagious by Jonah Berger",
        "Made to Stick by Chip Heath"
      ],
      tools: ["Canva", "Google Analytics", "HubSpot", "Meta Ads Manager", "Mailchimp"]
    },
    companies: ["Unilever", "Zomato", "Swiggy", "Google", "Amazon", "Startups"]
  },
  {
    id: 'hr-executive',
    title: "Human Resources (HR) Executive",
    summary: "Manage hiring, employee engagement, and organizational development.",
    overview: "HR executives handle recruitment, onboarding, training, employee relations, and help create a positive workplace culture.",
    salary: {
      entry: "₹3-6 LPA",
      mid: "₹7-12 LPA",
      senior: "₹15-25 LPA"
    },
    timeToLearn: "3-6 months",
    difficulty: "Beginner",
    demand: "High",
    tags: ["HR", "Recruitment", "People Management", "Communication", "Employee Engagement", "Speaking"],
    skills: {
      core: ["Recruitment & Selection", "HR Policies", "Employee Onboarding", "Payroll Basics", "Conflict Resolution"],
      advanced: ["HR Analytics", "Labor Laws", "Performance Management", "Diversity & Inclusion", "HRMS Tools"],
      soft: ["Empathy", "Communication", "Negotiation", "Ethical Judgment"]
    },
    roadmap: [
      {
        phase: "HR Fundamentals (1-2 months)",
        steps: [
          "Learn about core HR functions",
          "Understand the recruitment process",
          "Familiarize with onboarding procedures"
        ]
      },
      {
        phase: "HR Tools & Compliance (1-2 months)",
        steps: [
          "Learn payroll management basics",
          "Understand labor laws and regulations",
          "Use HRMS tools (Zoho, Darwinbox)"
        ]
      },
      {
        phase: "Advanced HR & Strategy (1-2 months)",
        steps: [
          "Study employee performance systems",
          "Implement diversity and inclusion practices",
          "Apply data analytics in HR decisions"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "HR Fundamentals", platform: "LinkedIn Learning", price: "Free Trial", rating: "4.7/5" },
        { name: "People Management", platform: "Coursera", price: "Free", rating: "4.6/5" },
        { name: "Introduction to HRM", platform: "edX", price: "Free", rating: "4.5/5" }
      ],
      books: [
        "First Break All the Rules by Marcus Buckingham",
        "The New HR Leader's First 100 Days",
        "Drive by Daniel H. Pink"
      ],
      tools: ["Zoho People", "Darwinbox", "Excel", "Workday", "Slack"]
    },
    companies: ["TCS", "Infosys", "Deloitte", "EY", "Unacademy", "L&T"]
  },
  {
    id: 'management-consultant',
    title: "Management Consultant",
    summary: "Advise businesses on strategies to improve efficiency, growth, and profitability.",
    overview: "Management consultants work with companies to solve complex business problems, improve performance, and drive change. They gather data, conduct analysis, and present actionable insights to clients.",
    salary: {
      entry: "₹6-10 LPA",
      mid: "₹12-25 LPA",
      senior: "₹30-50+ LPA"
    },
    timeToLearn: "6-12 months",
    difficulty: "Advanced",
    demand: "High",
    tags: ["Strategy", "Business", "Analysis", "Leadership", "Consulting", "Problem Solving"],
    skills: {
      core: ["Business Analysis", "Market Research", "Excel & PowerPoint", "Presentation Skills", "Data Interpretation"],
      advanced: ["Financial Modeling", "Change Management", "Project Management", "Strategic Thinking", "Client Communication", "Speaking"],
      soft: ["Analytical Thinking", "Time Management", "Persuasion", "Professionalism"]
    },
    roadmap: [
      {
        phase: "Business Basics (2-3 months)",
        steps: [
          "Understand business fundamentals (operations, finance, marketing)",
          "Learn business case solving techniques",
          "Practice case study analysis"
        ]
      },
      {
        phase: "Consulting Tools (2-4 months)",
        steps: [
          "Master Excel and PowerPoint for analysis and storytelling",
          "Learn project management basics",
          "Understand business frameworks (SWOT, BCG, 5 Forces)"
        ]
      },
      {
        phase: "Client-Readiness (2-5 months)",
        steps: [
          "Practice mock consulting cases",
          "Build communication and presentation skills",
          "Learn about industries (tech, retail, healthcare, etc.)"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "Foundations of Business Strategy", platform: "Coursera", price: "Free", rating: "4.6/5" },
        { name: "Consulting Case Interview Prep", platform: "Udemy", price: "₹499", rating: "4.5/5" },
        { name: "Strategic Management", platform: "edX", price: "Free", rating: "4.4/5" }
      ],
      books: [
        "Case in Point by Marc Cosentino",
        "The McKinsey Way by Ethan M. Rasiel",
        "The Pyramid Principle by Barbara Minto"
      ],
      tools: ["Excel", "PowerPoint", "Tableau", "Notion", "Google Slides"]
    },
    companies: ["McKinsey", "BCG", "Bain", "Deloitte", "Accenture", "Startups"]
  },
  {
    id: 'social-media-manager',
    title: "Social Media Manager",
    summary: "Create and manage content, campaigns, and brand presence across social platforms.",
    overview: "Social media managers build brand identity, grow followers, and engage with audiences on platforms like Instagram, Twitter, LinkedIn, and YouTube. They analyze trends, create content calendars, and report performance.",
    salary: {
      entry: "₹3-6 LPA",
      mid: "₹7-12 LPA",
      senior: "₹15-20 LPA"
    },
    timeToLearn: "3-6 months",
    difficulty: "Intermediate",
    demand: "High",
    tags: ["Social Media", "Creativity", "Content", "Digital Marketing", "Branding"],
    skills: {
      core: ["Content Creation", "Social Media Strategy", "Hashtag Research", "Post Scheduling", "Analytics"],
      advanced: ["Reels/TikTok Editing", "Influencer Marketing", "Paid Campaigns", "Community Management", "Crisis Handling"],
      soft: ["Creativity", "Trend Awareness", "Time Management", "Brand Voice"]
    },
    roadmap: [
      {
        phase: "Content Basics (1-2 months)",
        steps: [
          "Learn how different social platforms work",
          "Practice content writing, design, and captions",
          "Use scheduling tools (Buffer, Later)"
        ]
      },
      {
        phase: "Strategy & Growth (1-2 months)",
        steps: [
          "Learn how to plan a content calendar",
          "Use analytics to improve engagement",
          "Study viral growth strategies"
        ]
      },
      {
        phase: "Campaigns & Monetization (1-2 months)",
        steps: [
          "Manage influencer outreach and collaborations",
          "Run paid campaigns (Meta Ads, LinkedIn Ads)",
          "Handle brand crises and comments professionally"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "Social Media Marketing Mastery", platform: "Udemy", price: "₹499", rating: "4.7/5" },
        { name: "Meta Social Media Certification", platform: "Coursera", price: "Free", rating: "4.6/5" },
        { name: "Hootsuite Social Marketing", platform: "Hootsuite Academy", price: "Free", rating: "4.5/5" }
      ],
      books: [
        "Jab, Jab, Jab, Right Hook by Gary Vaynerchuk",
        "Building a StoryBrand by Donald Miller",
        "Everybody Writes by Ann Handley"
      ],
      tools: ["Canva", "Buffer", "Later", "Meta Business Suite", "Hootsuite"]
    },
    companies: ["Nykaa", "Zomato", "CRED", "Tata", "Startups", "Agencies"]
  },
  {
    id: 'web3-developer',
    title: "Web3 Developer",
    summary: "Build decentralized applications (dApps) using blockchain technology.",
    overview: "Web3 developers create smart contracts, interact with blockchain networks, and build frontends that communicate with decentralized backends, enabling transparent, permissionless apps.",
    salary: {
      entry: "₹6-10 LPA",
      mid: "₹15-25 LPA",
      senior: "₹30-60+ LPA"
    },
    timeToLearn: "6-12 months",
    difficulty: "Advanced",
    demand: "High",
    tags: ["Blockchain", "Smart Contracts", "Crypto", "Web3", "DeFi", "Solidity"],
    skills: {
      core: ["JavaScript", "Solidity", "Ethereum", "Smart Contracts", "Web3.js or Ethers.js"],
      advanced: ["DeFi Protocols", "Layer 2s", "Hardhat", "The Graph", "Security Audits"],
      soft: ["Innovation", "Attention to Detail", "Community Engagement", "Open Source Collaboration"]
    },
    roadmap: [
      {
        phase: "Blockchain Basics (1-2 months)",
        steps: [
          "Learn how blockchains work",
          "Understand consensus, wallets, gas, and tokens",
          "Use MetaMask and connect to testnets"
        ]
      },
      {
        phase: "Smart Contract Development (2-4 months)",
        steps: [
          "Learn Solidity and write basic contracts",
          "Use tools like Remix, Hardhat, and Truffle",
          "Test and deploy contracts on testnets"
        ]
      },
      {
        phase: "dApp Development (2-4 months)",
        steps: [
          "Connect frontend to blockchain with Ethers.js or Web3.js",
          "Create complete decentralized apps",
          "Explore NFTs, DAOs, and DeFi use cases"
        ]
      }
    ],
    resources: {
      courses: [
        { name: "Ethereum & Solidity Bootcamp", platform: "Udemy", price: "₹499", rating: "4.8/5" },
        { name: "CryptoZombies", platform: "FreeCodeCamp", price: "Free", rating: "4.6/5" },
        { name: "Build a dApp with Hardhat", platform: "Alchemy", price: "Free", rating: "4.7/5" }
      ],
      books: [
        "Mastering Ethereum by Andreas Antonopoulos",
        "The Infinite Machine by Camila Russo",
        "Blockchain Basics by Daniel Drescher"
      ],
      tools: ["MetaMask", "Remix", "Hardhat", "Ethers.js", "The Graph"]
    },
    companies: ["Polygon", "Consensys", "Chainlink", "Solana Labs", "Web3 Startups"]
  }
];

export const getCareerById = (id: string): Career | undefined => {
  return careers.find(career => career.id === id);
};

export const searchCareers = (query: string): Career[] => {
  const lowercaseQuery = query.trim().toLowerCase();
  if (!lowercaseQuery || lowercaseQuery.length < 2) {
    // Return [] to show no results for empty/very short queries
    return [];
  }
  return careers.filter(career => 
    career.title.toLowerCase().includes(lowercaseQuery) ||
    career.summary.toLowerCase().includes(lowercaseQuery) ||
    career.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    career.skills.core.some(skill => skill.toLowerCase().includes(lowercaseQuery))
  );
}; 

async function fetchSynonyms(word: string): Promise<string[]> {
  const response = await fetch(`https://api.datamuse.com/words?rel_syn=${encodeURIComponent(word)}`);
  const data = await response.json();
  // Datamuse returns an array of objects with a 'word' property
  return data.map((item: { word: string }) => item.word);
}

export async function smartSearchCareers(query: string): Promise<Career[]> {
  const lowercaseQuery = query.toLowerCase();
  const synonyms = await fetchSynonyms(lowercaseQuery);
  const searchTerms = [lowercaseQuery, ...synonyms];

  return careers.filter(career =>
    searchTerms.some(term =>
      career.title.toLowerCase().includes(term) ||
      career.summary.toLowerCase().includes(term) ||
      career.tags.some(tag => tag.toLowerCase().includes(term)) ||
      career.skills.core.some(skill => skill.toLowerCase().includes(term))
    )
  );
} 
