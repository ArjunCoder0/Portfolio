// Bootcamp Management Functions

/**
 * Get bootcamp progress percentage
 */
export const calculateProgress = (bootcamp) => {
  const totalNotes = bootcamp.days.reduce((sum, day) => sum + day.totalNotes, 0);
  const completedNotes = bootcamp.days.reduce((sum, day) => sum + day.completedNotes, 0);
  return Math.round((completedNotes / totalNotes) * 100);
};

/**
 * Mark a note as completed
 */
export const completeNote = (bootcamp, dayNumber, noteId) => {
  const day = bootcamp.days.find(d => d.dayNumber === dayNumber);
  if (!day) return bootcamp;

  const note = day.notes.find(n => n.id === noteId);
  if (!note || note.isCompleted) return bootcamp;

  note.isCompleted = true;
  day.completedNotes += 1;

  // Unlock next day if current day is completed
  if (day.completedNotes === day.totalNotes) {
    const nextDay = bootcamp.days.find(d => d.dayNumber === dayNumber + 1);
    if (nextDay) {
      nextDay.isUnlocked = true;
    }
  }

  bootcamp.progress = calculateProgress(bootcamp);
  return bootcamp;
};

/**
 * Get current day's notes
 */
export const getCurrentDayNotes = (bootcamp) => {
  const currentDay = bootcamp.days.find(d => d.dayNumber === bootcamp.currentDay);
  return currentDay ? currentDay.notes : [];
};

/**
 * Get notes by day number
 */
export const getNotesByDay = (bootcamp, dayNumber) => {
  const day = bootcamp.days.find(d => d.dayNumber === dayNumber);
  return day ? day.notes : [];
};

/**
 * Get note by ID
 */
export const getNoteById = (bootcamp, noteId) => {
  for (const day of bootcamp.days) {
    const note = day.notes.find(n => n.id === noteId);
    if (note) return { note, day };
  }
  return null;
};

/**
 * Check if a day is unlocked
 */
export const isDayUnlocked = (bootcamp, dayNumber) => {
  const day = bootcamp.days.find(d => d.dayNumber === dayNumber);
  return day ? day.isUnlocked : false;
};

/**
 * Get next incomplete note
 */
export const getNextIncompleteNote = (bootcamp) => {
  for (const day of bootcamp.days) {
    if (!day.isUnlocked) break;
    
    const incompleteNote = day.notes.find(n => !n.isCompleted);
    if (incompleteNote) {
      return { note: incompleteNote, day };
    }
  }
  return null;
};

/**
 * Get day completion percentage
 */
export const getDayProgress = (day) => {
  return Math.round((day.completedNotes / day.totalNotes) * 100);
};

/**
 * Get all completed notes
 */
export const getCompletedNotes = (bootcamp) => {
  const completed = [];
  bootcamp.days.forEach(day => {
    day.notes.forEach(note => {
      if (note.isCompleted) {
        completed.push({ ...note, dayNumber: day.dayNumber });
      }
    });
  });
  return completed;
};

/**
 * Get total study time
 */
export const getTotalStudyTime = (bootcamp) => {
  let totalMinutes = 0;
  bootcamp.days.forEach(day => {
    day.notes.forEach(note => {
      if (note.isCompleted && note.duration) {
        totalMinutes += note.duration;
      }
    });
  });
  
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes, totalMinutes };
};

/**
 * Reset bootcamp progress
 */
export const resetBootcamp = (bootcamp) => {
  bootcamp.days.forEach((day, index) => {
    day.isUnlocked = index === 0;
    day.completedNotes = 0;
    day.notes.forEach(note => {
      note.isCompleted = false;
    });
  });
  bootcamp.currentDay = 1;
  bootcamp.progress = 0;
  return bootcamp;
};

/**
 * Get bootcamp statistics
 */
export const getBootcampStats = (bootcamp) => {
  const totalNotes = bootcamp.days.reduce((sum, day) => sum + day.totalNotes, 0);
  const completedNotes = bootcamp.days.reduce((sum, day) => sum + day.completedNotes, 0);
  const unlockedDays = bootcamp.days.filter(d => d.isUnlocked).length;
  const completedDays = bootcamp.days.filter(d => d.completedNotes === d.totalNotes).length;
  const studyTime = getTotalStudyTime(bootcamp);

  return {
    totalDays: bootcamp.totalDays,
    completedDays,
    unlockedDays,
    totalNotes,
    completedNotes,
    progress: bootcamp.progress,
    studyTime: `${studyTime.hours}h ${studyTime.minutes}m`,
    daysRemaining: bootcamp.totalDays - completedDays
  };
};

/**
 * Filter notes by type
 */
export const getNotesByType = (bootcamp, type) => {
  const notes = [];
  bootcamp.days.forEach(day => {
    day.notes.forEach(note => {
      if (note.type === type) {
        notes.push({ ...note, dayNumber: day.dayNumber });
      }
    });
  });
  return notes;
};

/**
 * Search notes by title or content
 */
export const searchNotes = (bootcamp, query) => {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  bootcamp.days.forEach(day => {
    day.notes.forEach(note => {
      if (
        note.title.toLowerCase().includes(lowerQuery) ||
        note.content.toLowerCase().includes(lowerQuery)
      ) {
        results.push({ ...note, dayNumber: day.dayNumber, dayTitle: day.title });
      }
    });
  });
  
  return results;
};
