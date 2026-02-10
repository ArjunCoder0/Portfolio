Name="container mx-auto px-6 py-12">
      <BootcampDashboard 
        bootcamp={bootcamp}
        onCompleteNote={handleCompleteNote}
      />
    </div>
  );
}
```

## License

MIT License - Feel free to use in your projects!
port { bootcampData } from '@/bootcamp-system/bootcampData';

export default function BootcampPage() {
  const [bootcamp, setBootcamp] = useState(null);
  
  useEffect(() => {
    // Load from database or use sample data
    setBootcamp(bootcampData);
  }, []);
  
  const handleCompleteNote = (dayNumber, noteId) => {
    const updated = completeNote(bootcamp, dayNumber, noteId);
    setBootcamp(updated);
    // Save to database
  };
  
  if (!bootcamp) return <div>Loading...</div>;
  
  return (
    <div classistics and analytics

### Admin Controls
- Full CRUD operations
- Bulk operations for efficiency
- Clone bootcamps for reuse
- Export/import for backup

### Student Experience
- Clean, intuitive interface
- Progress visualization
- Easy navigation
- Mobile responsive

## Integration Example

```javascript
// app/bootcamp/page.jsx
import { useState, useEffect } from 'react';
import { BootcampDashboard } from '@/bootcamp-system/BootcampUI';
import { completeNote } from '@/bootcamp-system/bootcampFunctions';
imort |
| `validateBootcamp(bootcamp)` | Validate structure |

## Note Types

1. **text** - Text-based lessons
2. **video** - Video tutorials
3. **code** - Code examples and exercises
4. **pdf** - PDF documents
5. **quiz** - Quizzes and assessments

## Features in Detail

### Sequential Unlocking
- Day 1 is unlocked by default
- Complete all notes in a day to unlock the next day
- Students can't skip ahead

### Progress Tracking
- Track completion at note, day, and bootcamp level
- Calculate study time
- View statbootcamp, dayNumber, data)` | Add note to day |
| `updateNote(bootcamp, dayNumber, noteId, updates)` | Update note |
| `deleteNote(bootcamp, dayNumber, noteId)` | Delete note |
| `bulkAddNotes(bootcamp, dayNumber, notes)` | Add multiple notes |
| `getBootcampAnalytics(bootcamp, students)` | Get analytics |
| `cloneBootcamp(bootcamp, newTitle)` | Clone bootcamp |
| `exportBootcamp(bootcamp)` | Export as JSON |
| `importBootcamp(jsonData)` | Import from JSON |
| `generateReport(bootcamp, students)` | Generate repentage |
| `getTotalStudyTime(bootcamp)` | Get total study time |
| `getBootcampStats(bootcamp)` | Get comprehensive statistics |
| `searchNotes(bootcamp, query)` | Search notes by title/content |

### Admin Functions (adminFunctions.js)

| Function | Description |
|----------|-------------|
| `createBootcamp(data)` | Create new bootcamp |
| `addDay(bootcamp, data)` | Add new day |
| `updateDay(bootcamp, dayNumber, updates)` | Update day info |
| `deleteDay(bootcamp, dayNumber)` | Delete a day |
| `addNote( Date
}
```

## API Functions

### Student Functions (bootcampFunctions.js)

| Function | Description |
|----------|-------------|
| `calculateProgress(bootcamp)` | Get overall progress percentage |
| `completeNote(bootcamp, dayNumber, noteId)` | Mark note as completed |
| `getCurrentDayNotes(bootcamp)` | Get current day's notes |
| `getNotesByDay(bootcamp, dayNumber)` | Get notes for specific day |
| `getNextIncompleteNote(bootcamp)` | Get next note to study |
| `getDayProgress(day)` | Get day completion perc1,
  startDate: Date,
  endDate: Date,
  progress: 0,
  days: [...]
}
```

### Day Object
```javascript
{
  dayNumber: 1,
  title: "Introduction to HTML",
  description: "Learn HTML basics",
  isUnlocked: true,
  completedNotes: 0,
  totalNotes: 10,
  notes: [...]
}
```

### Note Object
```javascript
{
  id: "day1-note1",
  title: "What is HTML?",
  content: "HTML stands for...",
  type: "text", // text, video, code, pdf, quiz
  duration: 15,
  fileUrl: "/videos/intro.mp4",
  isCompleted: false,
  createdAt:addNote(bootcamp, args[0], args[1]);
        break;
      case 'updateDay':
        updated = updateDay(bootcamp, args[0], args[1]);
        break;
    }
    
    setBootcamp(updated);
  };
  
  return (
    <AdminDashboard 
      bootcamp={bootcamp}
      students={students}
      onUpdate={handleUpdate}
    />
  );
}
```

## Data Structure

### Bootcamp Object
```javascript
{
  id: "bootcamp-001",
  title: "Web Development Bootcamp",
  description: "15-day intensive course",
  totalDays: 15,
  currentDay: >
  );
}
```

#### Admin Dashboard

```jsx
import { AdminDashboard } from './AdminUI';
import { addDay, addNote, updateDay } from './adminFunctions';

function AdminPage() {
  const [bootcamp, setBootcamp] = useState(bootcampData);
  const [students, setStudents] = useState(studentsData);
  
  const handleUpdate = (action, ...args) => {
    let updated = bootcamp;
    
    switch(action) {
      case 'addDay':
        updated = addDay(bootcamp, args[0]);
        break;
      case 'addNote':
        updated = ort { getBootcampStats } from './bootcampFunctions';

function StudentPage() {
  const [bootcamp, setBootcamp] = useState(bootcampData);
  
  const handleCompleteNote = (dayNumber, noteId) => {
    const updated = completeNote(bootcamp, dayNumber, noteId);
    setBootcamp(updated);
  };
  
  const stats = getBootcampStats(bootcamp);
  
  return (
    <div>
      <BootcampStats stats={stats} />
      <BootcampDashboard 
        bootcamp={bootcamp}
        onCompleteNote={handleCompleteNote}
      />
    </divjavascript
import { getBootcampAnalytics, generateReport } from './adminFunctions';

// Get analytics
const analytics = getBootcampAnalytics(bootcamp, students);
console.log(`Average Progress: ${analytics.averageProgress}%`);
console.log(`Completed Students: ${analytics.completedStudents}`);

// Generate report
const report = generateReport(bootcamp, students);
console.log(report);
```

### 4. Using UI Components

#### Student Dashboard

```jsx
import { BootcampDashboard, BootcampStats } from './BootcampUI';
imp 'quiz' : 'text',
    duration: 15
  });
}
```

### 2. Student Progress Tracking

```javascript
import { completeNote, calculateProgress, getNextIncompleteNote } from './bootcampFunctions';

// Mark note as completed
bootcamp = completeNote(bootcamp, 1, 'day1-note1');

// Get progress
const progress = calculateProgress(bootcamp);
console.log(`Progress: ${progress}%`);

// Get next note to study
const next = getNextIncompleteNote(bootcamp);
console.log(`Next: ${next.note.title}`);
```

### 3. Admin Analytics

```ate bootcamp
let bootcamp = createBootcamp({
  title: "Web Development Bootcamp",
  description: "15-day intensive course",
  totalDays: 15,
  startDate: new Date("2026-02-10"),
  endDate: new Date("2026-02-24")
});

// Add a day
bootcamp = addDay(bootcamp, {
  title: "Introduction to HTML",
  description: "Learn HTML basics"
});

// Add notes to day 1
for (let i = 1; i <= 10; i++) {
  bootcamp = addNote(bootcamp, 1, {
    title: `HTML Lesson ${i}`,
    content: `Content for lesson ${i}`,
    type: i === 10 ?p-system/
├── types.ts                 # TypeScript interfaces
├── bootcampData.js          # Sample data structure
├── bootcampFunctions.js     # Student-side functions
├── adminFunctions.js        # Admin-side functions
├── BootcampUI.jsx          # Student UI components
├── AdminUI.jsx             # Admin UI components
└── README.md               # Documentation
```

## Usage Examples

### 1. Create a Bootcamp (Admin)

```javascript
import { createBootcamp, addDay, addNote } from './adminFunctions';

// Crer day.

## Features

### Student Side
- ✅ View all 15 days with progress tracking
- ✅ Access 10 notes per day (video, text, code, PDF, quiz)
- ✅ Mark notes as completed
- ✅ Track overall progress
- ✅ Unlock days sequentially
- ✅ View study time statistics

### Admin Side
- ✅ Create and manage bootcamps
- ✅ Add/edit/delete days
- ✅ Add/edit/delete notes
- ✅ Reorder notes
- ✅ Bulk operations
- ✅ Student analytics
- ✅ Export/import bootcamp data
- ✅ Clone bootcamps
- ✅ Generate reports

## File Structure

```
bootcam# Bootcamp Management System

A complete system for managing 15-day bootcamps with 10 notes pe