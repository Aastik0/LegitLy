# LegitLy - AI-Powered Legal Document Verification

LegitLy is an AI-powered legal comprehension tool designed to help Indian families verify and understand legal documents (like court summons or FIRs) to prevent fraud and reduce anxiety. The application features a clean, calming, and responsive UI built with Next.js 14+, TypeScript, and Tailwind CSS.

![LegitLy Banner](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### Core Functionality
- **Document Upload**: Drag-and-drop interface supporting PDF and image files
- **Risk Assessment**: Visual gauge showing document severity (Safe/Caution/Urgent)
- **Plain Language Explanation**: AI-powered summary breaking down legal jargon
- **Deadline Tracking**: Highlighted panel showing crucial dates with urgency indicators
- **Action Checklist**: Interactive to-do list for next steps
- **Multilingual Support**: Toggle between English, Hindi, and Regional languages

### Design Highlights
- 🎨 Calming color palette (blues, soft whites) to reduce user anxiety
- 📱 Mobile-first responsive design
- ✨ Smooth animations and transitions
- ♿ Accessible and user-friendly interface
- 🔒 Secure file handling

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd LegitLy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
LegitLy/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Landing/Upload page
│   ├── globals.css          # Global styles
│   └── dashboard/
│       └── page.tsx         # Analysis results dashboard
├── components/              # React components
│   ├── DocumentUpload.tsx   # File upload with drag & drop
│   ├── RiskMeter.tsx        # Animated risk gauge
│   ├── SummaryCard.tsx      # Plain language summary
│   ├── DeadlinesPanel.tsx   # Deadline tracking
│   ├── ActionChecklist.tsx  # Interactive checklist
│   └── LanguageToggle.tsx   # Language selector
├── store/                   # State management
│   └── uploadStore.ts       # Zustand store
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Component Overview

### DocumentUpload
A sophisticated upload component featuring:
- Drag-and-drop file handling
- File type validation (PDF, PNG, JPG)
- Size limit enforcement (10MB)
- Upload progress tracking
- Preview of selected files

**Usage**:
```tsx
import DocumentUpload from '@/components/DocumentUpload';

<DocumentUpload />
```

### RiskMeter
Visual risk assessment gauge with:
- Animated circular progress (0-100)
- Color-coded risk levels:
  - 🟢 **Safe** (Green): No immediate concerns
  - 🟡 **Caution** (Yellow): Requires attention
  - 🔴 **Urgent** (Red): Immediate action needed
- Smooth animations

**Usage**:
```tsx
import RiskMeter from '@/components/RiskMeter';

<RiskMeter riskScore={35} riskLevel="caution" />
```

### SummaryCard
Displays AI-generated plain language explanations with clean formatting.

### DeadlinesPanel
Shows important dates with:
- Color-coded urgency (based on days remaining)
- Formatted dates in Indian locale
- Visual countdown indicators

### ActionChecklist
Interactive checklist featuring:
- Checkbox toggles
- Progress tracking
- Strike-through for completed items
- Smooth animations

### LanguageToggle
Language selector for multilingual support (English/Hindi/Regional).

## 🔌 Backend Integration

The application is designed to connect to a Python/Flask backend. Update the API endpoint in `components/DocumentUpload.tsx`:

```typescript
// Replace with your actual backend endpoint
await axios.post('/api/upload', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  onUploadProgress: (progressEvent) => {
    // Progress tracking
  },
});
```

### Expected API Response Format

```typescript
{
  riskScore: number;        // 0-100
  riskLevel: 'safe' | 'caution' | 'urgent';
  summary: string;          // Plain language explanation
  deadlines: [
    {
      date: string;         // ISO date format
      description: string;
      daysRemaining: number;
    }
  ];
  actionItems: [
    {
      id: string;
      text: string;
      completed: boolean;
    }
  ];
}
```

## 🎨 Customization

### Color Palette
The calming color scheme is defined in `tailwind.config.ts`:
- **Primary**: Blue tones (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Danger**: Red (#ef4444)

### Typography
Using Inter font family for clean, modern readability.

## 📦 Dependencies

### Core
- **Next.js** (^15.1.6): React framework with App Router
- **React** (^18.3.1): UI library
- **TypeScript** (^5.7.2): Type safety

### Styling
- **Tailwind CSS** (^3.4.17): Utility-first CSS framework
- **PostCSS** (^8.4.49): CSS processing

### State Management
- **Zustand** (^5.0.2): Lightweight state management

### HTTP Client
- **Axios** (^1.7.9): Promise-based HTTP client

### Icons
- **Lucide React** (^0.469.0): Beautiful icon library

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- ESLint configured with Next.js best practices
- TypeScript strict mode enabled
- Component-based architecture

## 🚧 Future Enhancements

- [ ] Multi-language content translation
- [ ] PDF viewer integration
- [ ] Document history tracking
- [ ] Email notifications for deadlines
- [ ] Mobile app (React Native)
- [ ] Advanced fraud detection algorithms
- [ ] Integration with legal databases

## 📄 License

This project is created for educational and demonstration purposes.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ for Indian families seeking legal clarity**
