# Pathwise - Career Path Discovery Platform

Pathwise is a modern web application that helps users discover and explore career paths based on their educational background, interests, and goals. The platform provides detailed roadmaps, learning resources, and progress tracking for various tech and business careers.

## 🚀 Features

### Core Features
- **Career Search**: Search for careers based on degree, skills, or interests
- **Detailed Career Paths**: Comprehensive information about 6+ career paths including:
  - Backend Developer
  - UI/UX Designer
  - Data Scientist
  - Product Manager
  - Cybersecurity Analyst
  - DevOps Engineer

### Career Information
Each career path includes:
- **Overview & Summary**: Detailed description of the role
- **Salary Progression**: Entry, mid, and senior level salaries
- **Learning Roadmap**: Step-by-step learning path with phases
- **Required Skills**: Core, advanced, and soft skills breakdown
- **Learning Resources**: Recommended courses, books, and tools
- **Company Information**: Top companies hiring for each role

### User Experience Features
- **Progress Tracking**: Track learning progress with interactive checkboxes
- **Search & Filtering**: Filter careers by salary, difficulty, demand, and time to learn
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useMemo)
- **Data Storage**: Local Storage for progress tracking
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
pathwise/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page with search
│   │   ├── results/
│   │   │   └── page.tsx          # Search results page
│   │   └── career/
│   │       └── [id]/
│   │           └── page.tsx      # Individual career page
│   ├── components/
│   │   ├── ProgressTracker.tsx   # Progress tracking component
│   │   └── SearchFilters.tsx     # Search and filter component
│   └── data/
│       └── careers.ts            # Centralized career data
├── public/                       # Static assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pathwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage Guide

### For Users

1. **Search for Careers**
   - Enter your degree or area of interest on the home page
   - Use suggested tags for quick searches
   - Click "Explore Careers" to see results

2. **Filter Results**
   - Use the filter panel to narrow down careers
   - Filter by salary range, difficulty level, job demand, or time to learn
   - Clear filters to see all results

3. **Explore Career Paths**
   - Click "View Full Path" on any career card
   - Navigate through different tabs: Overview, Roadmap, Skills, Resources, Companies
   - Use the progress tracker to mark completed learning steps

4. **Track Progress**
   - Check off completed learning steps
   - View your overall progress percentage
   - Reset progress if needed

### For Developers

#### Adding New Careers

1. **Update the data file** (`src/data/careers.ts`):
   ```typescript
   {
     id: 'new-career-id',
     title: "New Career Title",
     summary: "Brief description",
     overview: "Detailed overview",
     salary: {
       entry: "₹X-Y LPA",
       mid: "₹Y-Z LPA",
       senior: "₹Z-W LPA"
     },
     timeToLearn: "X-Y months",
     difficulty: "Beginner|Intermediate|Advanced",
     demand: "High|Very High",
     tags: ["Tag1", "Tag2"],
     skills: {
       core: ["Skill1", "Skill2"],
       advanced: ["Advanced1", "Advanced2"],
       soft: ["Soft1", "Soft2"]
     },
     roadmap: [
       {
         phase: "Phase Name",
         steps: ["Step 1", "Step 2"]
       }
     ],
     resources: {
       courses: [
         { name: "Course Name", platform: "Platform", price: "Price", rating: "Rating" }
       ],
       books: ["Book 1", "Book 2"],
       tools: ["Tool 1", "Tool 2"]
     },
     companies: ["Company 1", "Company 2"]
   }
   ```

#### Customizing Components

- **ProgressTracker**: Modify the progress tracking logic in `src/components/ProgressTracker.tsx`
- **SearchFilters**: Add new filter options in `src/components/SearchFilters.tsx`
- **Styling**: Update Tailwind classes or add custom CSS

## 🔮 Future Enhancements

### Planned Features
- [ ] **User Authentication**: Sign up/login functionality
- [ ] **Saved Paths**: Save favorite career paths
- [ ] **Community Features**: User reviews and ratings
- [ ] **Advanced Analytics**: Learning time estimates and recommendations
- [ ] **Mobile App**: React Native version
- [ ] **AI Recommendations**: Personalized career suggestions
- [ ] **Integration APIs**: Connect with learning platforms
- [ ] **Job Board**: Direct job application links

### Technical Improvements
- [ ] **Database Integration**: Replace localStorage with proper database
- [ ] **API Development**: RESTful API for career data
- [ ] **Testing**: Unit and integration tests
- [ ] **Performance**: Optimize loading and rendering
- [ ] **SEO**: Improve search engine optimization
- [ ] **Accessibility**: Enhance accessibility features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Career data sourced from industry research and job market analysis
- UI/UX inspiration from modern career platforms
- Built with Next.js and Tailwind CSS

## 📞 Support

For support, email support@pathwise.com or create an issue in the repository.

---

**Pathwise** - Find your path after your degree 🎯
