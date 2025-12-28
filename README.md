# UPRIO Reports - Student Report Generation System

A Proof of Concept (POC) built for UPRIO LMS demonstrating dynamic student report generation with PDF download capabilities. This system generates comprehensive, personalized reports tracking student performance, learning progress, and intervention outcomes.

## Project Overview

This application serves as a reporting module for a Learning Management System, enabling educators and administrators to generate three distinct types of student reports with one-click PDF download functionality.

## Report Types

### 1. Exam Status Report
Comprehensive examination preparation and performance tracking including:
- Student profile with academic details
- Chapter-wise syllabus coverage
- Attendance tracking (scheduled vs attended classes)
- Practice sheet submission status
- Category-level understanding ratings with star-based metrics
- Mid-term revision planning
- Detailed performance analytics with question accuracy percentages

### 2. Intervention Impact Report
Measures the effectiveness of intervention classes on student understanding:
- Pre-intervention understanding baseline
- Intervention class attendance and participation
- Post-intervention improvement analysis
- Side-by-side comparison with improvement indicators
- Step-level evaluation with notebook evidence
- Category-wise breakdown of progress

### 3. Chapter Level QC Report
Quality Control evaluation for specific chapter assessments:
- Four-tier understanding classification
- Category-wise evaluation metrics
- In-depth step evaluation with visual indicators
- Notebook image attachments for verification
- Multi-category detailed analysis

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | Frontend framework |
| TypeScript | Type-safe development |
| Vite | Build tool and dev server |
| Redux Toolkit | Global state management |
| React Router v6 | Client-side routing |
| @react-pdf/renderer | PDF generation from React components |
| file-saver | Browser-based file downloads |
| Tailwind CSS | Utility-first styling |
| SASS/SCSS | Component-scoped styles |
| i18next | Internationalization support |
| Axios | HTTP client |

## Project Structure

```
src/
├── assets/
│   ├── data/           # JSON data files (users, chapters, evaluations)
│   ├── images/         # Logos, student photos, icons
│   └── pdf/            # PDF component templates
├── commons/
│   ├── components/     # Reusable UI components
│   ├── context/        # React Context providers
│   └── constants/      # Configuration files
├── core/               # Feature modules
│   ├── Home/
│   ├── ChapterOutlet/
│   ├── PreInterventionOutlet/
│   ├── PostInterventionOutlet/
│   ├── InDepthQcOutlet/
│   └── MultipleChapterOutlet/
├── types/              # TypeScript type definitions
└── App.tsx             # Main application component
```

## Key Features

- **Dynamic PDF Generation**: Converts React components to downloadable PDF documents
- **Multi-level Evaluation**: Chapter, category, and step-level assessments
- **Visual Progress Indicators**: Star ratings, status badges, and progress metrics
- **Intervention Tracking**: Pre vs post-intervention comparison
- **Mobile Responsive**: Adaptive UI with mobile-first design
- **Nested Routing**: Complex route structure for different report views

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd uprio-reports-poc-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## How PDF Download Works

1. User selects a report type from the dropdown menu
2. Click the download button to trigger PDF generation
3. The system renders the corresponding React PDF component
4. @react-pdf/renderer converts the component to a PDF blob
5. file-saver initiates the browser download with a timestamped filename

## Architecture Highlights

- **Presentation Layer Pattern**: Separation of view, hooks, and dependency injection
- **Context-based State**: Report selection managed through React Context
- **Component Composition**: Modular, reusable components for different report sections
- **Type Safety**: Full TypeScript implementation with strict typing

## Design System

- **Color Palette**: Teal primary (#039882), blue gradients, grayscale neutrals
- **Visual Indicators**: 4-star rating system, checkmarks, error icons, status badges
- **Typography**: Clear hierarchy with Helvetica font family
- **Layout**: A4 page format for PDFs, flexbox-based responsive layouts

---

Built as a Proof of Concept for UPRIO Learning Management System
