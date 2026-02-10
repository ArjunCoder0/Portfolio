"use client"
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FaCheckCircle, 
  FaLock, 
  FaPlay, 
  FaFilePdf, 
  FaCode, 
  FaQuestionCircle,
  FaClock 
} from 'react-icons/fa';

// Day Card Component
export const DayCard = ({ day, onDayClick, isActive }) => {
  const progress = Math.round((day.completedNotes / day.totalNotes) * 100);
  
  return (
    <Card 
      className={`p-4 cursor-pointer transition-all ${
        isActive ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
      } ${!day.isUnlocked ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={() => day.isUnlocked && onDayClick(day)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            {String(day.dayNumber).padStart(2, '0')}
          </span>
          {!day.isUnlocked && <FaLock className="text-muted-foreground" />}
          {day.completedNotes === day.totalNotes && (
            <FaCheckCircle className="text-green-500" />
          )}
        </div>
        <span className="text-sm text-muted-foreground">
          {day.completedNotes}/{day.totalNotes}
        </span>
      </div>
      
      <h3 className="font-semibold mb-1">{day.title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{day.description}</p>
      
      {/* Progress Bar */}
      <div className="w-full bg-secondary rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </Card>
  );
};

// Note Card Component
export const NoteCard = ({ note, dayNumber, onNoteClick }) => {
  const getIcon = () => {
    switch (note.type) {
      case 'video': return <FaPlay className="text-blue-500" />;
      case 'pdf': return <FaFilePdf className="text-red-500" />;
      case 'code': return <FaCode className="text-green-500" />;
      case 'quiz': return <FaQuestionCircle className="text-purple-500" />;
      default: return null;
    }
  };

  return (
    <Card 
      className={`p-4 cursor-pointer transition-all hover:border-primary/50 ${
        note.isCompleted ? 'bg-green-500/5 border-green-500/30' : ''
      }`}
      onClick={() => onNoteClick(note)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <div className="mt-1">{getIcon()}</div>
          <div className="flex-1">
            <h4 className="font-medium mb-1">{note.title}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {note.content}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <FaClock className="text-xs text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {note.duration} min
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                {note.type}
              </span>
            </div>
          </div>
        </div>
        {note.isCompleted && (
          <FaCheckCircle className="text-green-500 text-xl" />
        )}
      </div>
    </Card>
  );
};

// Bootcamp Dashboard Component
export const BootcampDashboard = ({ bootcamp, onCompleteNote }) => {
  const [selectedDay, setSelectedDay] = useState(bootcamp.days[0]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleNoteComplete = (note) => {
    onCompleteNote(selectedDay.dayNumber, note.id);
    setSelectedNote(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Days Sidebar */}
      <div className="lg:col-span-1 space-y-4">
        <div className="sticky top-4">
          <h2 className="text-2xl font-bold mb-4">Days</h2>
          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {bootcamp.days.map(day => (
              <DayCard 
                key={day.dayNumber}
                day={day}
                isActive={selectedDay?.dayNumber === day.dayNumber}
                onDayClick={setSelectedDay}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Notes Content */}
      <div className="lg:col-span-2">
        {selectedDay && (
          <>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">
                Day {selectedDay.dayNumber}: {selectedDay.title}
              </h2>
              <p className="text-muted-foreground">{selectedDay.description}</p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-sm">
                  Progress: {selectedDay.completedNotes}/{selectedDay.totalNotes}
                </span>
                <div className="flex-1 bg-secondary rounded-full h-2 max-w-xs">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ 
                      width: `${(selectedDay.completedNotes / selectedDay.totalNotes) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {selectedDay.notes.map(note => (
                <NoteCard 
                  key={note.id}
                  note={note}
                  dayNumber={selectedDay.dayNumber}
                  onNoteClick={setSelectedNote}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Note Modal/Viewer */}
      {selectedNote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold">{selectedNote.title}</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedNote(null)}
              >
                ✕
              </Button>
            </div>
            
            <div className="prose dark:prose-invert mb-6">
              <p>{selectedNote.content}</p>
            </div>

            {!selectedNote.isCompleted && (
              <Button 
                className="w-full"
                onClick={() => handleNoteComplete(selectedNote)}
              >
                Mark as Complete
              </Button>
            )}
            
            {selectedNote.isCompleted && (
              <div className="flex items-center justify-center gap-2 text-green-500">
                <FaCheckCircle />
                <span>Completed</span>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

// Progress Stats Component
export const BootcampStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <Card className="p-4">
        <div className="text-2xl font-bold text-primary">{stats.progress}%</div>
        <div className="text-sm text-muted-foreground">Overall Progress</div>
      </Card>
      <Card className="p-4">
        <div className="text-2xl font-bold text-primary">
          {stats.completedDays}/{stats.totalDays}
        </div>
        <div className="text-sm text-muted-foreground">Days Completed</div>
      </Card>
      <Card className="p-4">
        <div className="text-2xl font-bold text-primary">
          {stats.completedNotes}/{stats.totalNotes}
        </div>
        <div className="text-sm text-muted-foreground">Notes Completed</div>
      </Card>
      <Card className="p-4">
        <div className="text-2xl font-bold text-primary">{stats.studyTime}</div>
        <div className="text-sm text-muted-foreground">Study Time</div>
      </Card>
    </div>
  );
};
