"use client"
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaSave, 
  FaUsers,
  FaChartBar,
  FaCopy,
  FaDownload,
  FaUpload
} from 'react-icons/fa';

// Admin Dashboard Component
export const AdminDashboard = ({ bootcamp, students, onUpdate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaChartBar /> },
    { id: 'days', label: 'Manage Days', icon: <FaEdit /> },
    { id: 'students', label: 'Students', icon: <FaUsers /> }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{bootcamp.title}</h1>
          <p className="text-muted-foreground">Admin Dashboard</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FaDownload className="mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <FaCopy className="mr-2" />
            Clone
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-primary'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <OverviewTab bootcamp={bootcamp} students={students} />
      )}
      {activeTab === 'days' && (
        <ManageDaysTab bootcamp={bootcamp} onUpdate={onUpdate} />
      )}
      {activeTab === 'students' && (
        <StudentsTab bootcamp={bootcamp} students={students} />
      )}
    </div>
  );
};

// Overview Tab
const OverviewTab = ({ bootcamp, students }) => {
  const totalNotes = bootcamp.days.reduce((sum, day) => sum + day.totalNotes, 0);
  const totalDuration = bootcamp.days.reduce((sum, day) => 
    sum + day.notes.reduce((noteSum, note) => noteSum + (note.duration || 0), 0), 0
  );

  const stats = [
    { label: 'Total Days', value: bootcamp.totalDays },
    { label: 'Total Notes', value: totalNotes },
    { label: 'Total Duration', value: `${Math.floor(totalDuration / 60)}h ${totalDuration % 60}m` },
    { label: 'Enrolled Students', value: students.length }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Days Overview */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Days Overview</h3>
        <div className="space-y-3">
          {bootcamp.days.map(day => (
            <div key={day.dayNumber} className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
              <div>
                <span className="font-semibold">Day {day.dayNumber}: {day.title}</span>
                <p className="text-sm text-muted-foreground">{day.totalNotes} notes</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {day.notes.filter(n => n.type === 'video').length} videos
                </span>
                <span className="text-sm text-muted-foreground">
                  {day.notes.filter(n => n.type === 'quiz').length} quizzes
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

// Manage Days Tab
const ManageDaysTab = ({ bootcamp, onUpdate }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isAddingDay, setIsAddingDay] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Days List */}
      <div className="lg:col-span-1 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Days</h3>
          <Button size="sm" onClick={() => setIsAddingDay(true)}>
            <FaPlus className="mr-2" />
            Add Day
          </Button>
        </div>
        
        <div className="space-y-2">
          {bootcamp.days.map(day => (
            <Card
              key={day.dayNumber}
              className={`p-3 cursor-pointer transition-colors ${
                selectedDay?.dayNumber === day.dayNumber
                  ? 'border-primary bg-primary/5'
                  : 'hover:border-primary/50'
              }`}
              onClick={() => setSelectedDay(day)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Day {day.dayNumber}</div>
                  <div className="text-sm text-muted-foreground">{day.title}</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {day.totalNotes} notes
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Day Details */}
      <div className="lg:col-span-2">
        {selectedDay ? (
          <DayEditor 
            day={selectedDay} 
            onUpdate={onUpdate}
            onAddNote={() => setIsAddingNote(true)}
          />
        ) : (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">Select a day to edit</p>
          </Card>
        )}
      </div>

      {/* Add Day Modal */}
      {isAddingDay && (
        <AddDayModal 
          onClose={() => setIsAddingDay(false)}
          onSave={(dayData) => {
            onUpdate('addDay', dayData);
            setIsAddingDay(false);
          }}
        />
      )}

      {/* Add Note Modal */}
      {isAddingNote && selectedDay && (
        <AddNoteModal
          dayNumber={selectedDay.dayNumber}
          onClose={() => setIsAddingNote(false)}
          onSave={(noteData) => {
            onUpdate('addNote', selectedDay.dayNumber, noteData);
            setIsAddingNote(false);
          }}
        />
      )}
    </div>
  );
};

// Day Editor Component
const DayEditor = ({ day, onUpdate, onAddNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(day.title);
  const [description, setDescription] = useState(day.description);

  const handleSave = () => {
    onUpdate('updateDay', day.dayNumber, { title, description });
    setIsEditing(false);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Day {day.dayNumber}</h3>
        <div className="flex gap-2">
          {isEditing ? (
            <Button size="sm" onClick={handleSave}>
              <FaSave className="mr-2" />
              Save
            </Button>
          ) : (
            <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
              <FaEdit className="mr-2" />
              Edit
            </Button>
          )}
          <Button size="sm" variant="outline" onClick={onAddNote}>
            <FaPlus className="mr-2" />
            Add Note
          </Button>
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Title</label>
            <Input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Day title"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Day description"
              rows={3}
            />
          </div>
        </div>
      ) : (
        <div className="mb-6">
          <h4 className="font-semibold mb-1">{day.title}</h4>
          <p className="text-sm text-muted-foreground">{day.description}</p>
        </div>
      )}

      {/* Notes List */}
      <div className="space-y-2">
        <h4 className="font-semibold mb-3">Notes ({day.totalNotes})</h4>
        {day.notes.map((note, index) => (
          <div key={note.id} className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">#{index + 1}</span>
              <div>
                <div className="font-medium">{note.title}</div>
                <div className="text-sm text-muted-foreground">
                  {note.type} • {note.duration} min
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost">
                <FaEdit />
              </Button>
              <Button size="sm" variant="ghost" className="text-red-500">
                <FaTrash />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// Add Day Modal
const AddDayModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full p-6">
        <h3 className="text-xl font-bold mb-4">Add New Day</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Introduction to React"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the day"
              rows={3}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={() => onSave({ title, description })}>
              Add Day
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Add Note Modal
const AddNoteModal = ({ dayNumber, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('text');
  const [duration, setDuration] = useState(15);
  const [fileUrl, setFileUrl] = useState('');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Add New Note</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Content</label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Note content"
              rows={4}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="text">Text</option>
              <option value="video">Video</option>
              <option value="code">Code</option>
              <option value="pdf">PDF</option>
              <option value="quiz">Quiz</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Duration (minutes)</label>
            <Input
              type="number"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              min="1"
            />
          </div>
          {(type === 'video' || type === 'pdf') && (
            <div>
              <label className="text-sm font-medium mb-2 block">File URL</label>
              <Input
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                placeholder="https://..."
              />
            </div>
          )}
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={() => onSave({ title, content, type, duration, fileUrl })}>
              Add Note
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Students Tab
const StudentsTab = ({ bootcamp, students }) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Enrolled Students</h3>
      <div className="space-y-3">
        {students.map(student => (
          <div key={student.id} className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg">
            <div>
              <div className="font-semibold">{student.name}</div>
              <div className="text-sm text-muted-foreground">{student.email}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">
                {student.completedNotes.length} notes completed
              </div>
              <div className="text-sm text-muted-foreground">
                Progress: 75%
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
