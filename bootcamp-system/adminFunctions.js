// Admin Functions for Bootcamp Management

/**
 * Create a new bootcamp
 */
export const createBootcamp = (bootcampData) => {
  return {
    id: `bootcamp-${Date.now()}`,
    title: bootcampData.title,
    description: bootcampData.description,
    totalDays: bootcampData.totalDays || 15,
    currentDay: 1,
    startDate: bootcampData.startDate || new Date(),
    endDate: bootcampData.endDate || new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    days: [],
    progress: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
};

/**
 * Add a new day to bootcamp
 */
export const addDay = (bootcamp, dayData) => {
  const newDay = {
    dayNumber: bootcamp.days.length + 1,
    title: dayData.title,
    description: dayData.description,
    isUnlocked: bootcamp.days.length === 0, // First day is unlocked
    completedNotes: 0,
    totalNotes: 0,
    notes: [],
    createdAt: new Date()
  };
  
  bootcamp.days.push(newDay);
  bootcamp.updatedAt = new Date();
  return bootcamp;
};

/**
 * Update day information
 */
export const updateDay = (bootcamp, dayNumber, updates) => {
  const day = bootcamp.days.find(d => d.dayNumber === dayNumber);
  if (!day) return bootcamp;
  
  Object.assign(day, updates);
  bootcamp.updatedAt = new Date();
  return bootcamp;
};

/**
 * Delete a day
 */
export const deleteDay = (bootcamp, dayNumber) => {
  bootcamp.days = bootcamp.days.filter(d => d.dayNumber !== dayNumber);
  
  // Renumber remaining days
  bootcamp.days.forEach((day, index) => {
    day.dayNumber = index + 1;
  });
  
  bootcamp.updatedAt = new Date();
  return bootcamp;
};

/**
 * Add a note to a specific day
 */
export const addNote = (bootcamp, dayNumber, noteData) => {
  const day = bootcamp.days.find(d => d.dayNumber === dayNumber);
  if (!day) return bootcamp;
  
  const newNote = {
    id: `day${dayNumber}-note${day.notes.length + 1}-${Date.now()}`,
    title: noteData.title,
    content: noteData.content,
    type: noteData.type || 'text',
    duration: noteData.duration || 15,
    fileUrl: noteData.fileUrl || null,
    isCompleted: false,
    createdAt: new Date()
  };
  
  day.notes.push(newNote);
  day.totalNotes = day.notes.length;
  bootcamp.updatedAt = new Date();
  return bootcamp;
};

/**
 * Update a note
 */
export const updateNote = (bootcamp, dayNumber, noteId, updates) => {
  const day = bootcamp.days.find(d => d.dayNumber === dayNumber);
  if (!day) return bootcamp;
  
  const note = day.notes.find(n => n.id === noteId);
  if (!note) return bootcamp;
  
  Object.assign(note, updates);
  bootcamp.updatedAt = new Date();
  return bootcamp;
};

/**
 * Delete a note
 */
export const deleteNote = (bootcamp, dayNumber, noteId) => {
  const day = bootcamp.days.find(d => d.dayNumber === dayNumber);
  if (!day) return bootcamp;
  
  day.notes = day.notes.filter(n => n.id !== noteId);
  day.totalNotes = day.notes.length;
  
  // Recalculate completed notes
  day.completedNotes = day.notes.filter(n => n.isCompleted).length;
  
  bootcamp.updatedAt = new Date();
  return bootcamp;
};

/**
 * Reorder notes within a day
 */
export const reorderNotes = (bootcamp, dayNumber, noteIds) => {
  const day = bootcamp.days.find(d => d.dayNumber === dayNumber);
  if (!day) return bootcamp;
  
  const reorderedNotes = noteIds.map(id => 
    day.notes.find(n => n.id === id)
  ).filter(Boolean);
  
  day.notes = reorderedNotes;
  bootcamp.updatedAt = new Date();
  return bootcamp;
};

/**
 * Bulk add notes to a day
 */
export const bulkAddNotes = (bootcamp, dayNumber, notesArray) => {
  const day = bootcamp.days.find(d => d.dayNumber === dayNumber);
  if (!day) return bootcamp;
  
  notesArray.forEach((noteData, index) => {
    const newNote = {
      id: `day${dayNumber}-note${day.notes.length + index + 1}-${Date.now()}`,
      title: noteData.title,
      content: noteData.content,
      type: noteData.type || 'text',
      duration: noteData.duration || 15,
      fileUrl: noteData.fileUrl || null,
      isCompleted: false,
      createdAt: new Date()
    };
    day.notes.push(newNote);
  });
  
  day.totalNotes = day.notes.length;
  bootcamp.updatedAt = new Date();
  return bootcamp;
};

/**
 * Get all students enrolled in bootcamp
 */
export const getEnrolledStudents = (bootcampId, students) => {
  return students.filter(student => 
    student.enrolledBootcamps.includes(bootcampId)
  );
};

/**
 * Get student progress
 */
export const getStudentProgress = (student, bootcamp) => {
  const completedNotes = student.completedNotes.filter(noteId => {
    return bootcamp.days.some(day => 
      day.notes.some(note => note.id === noteId)
    );
  });
  
  const totalNotes = bootcamp.days.reduce((sum, day) => sum + day.totalNotes, 0);
  const progress = Math.round((completedNotes.length / totalNotes) * 100);
  
  return {
    studentId: student.id,
    studentName: student.name,
    completedNotes: completedNotes.length,
    totalNotes,
    progress
  };
};

/**
 * Get bootcamp analytics
 */
export const getBootcampAnalytics = (bootcamp, students) => {
  const enrolledStudents = getEnrolledStudents(bootcamp.id, students);
  const totalStudents = enrolledStudents.length;
  
  const studentProgress = enrolledStudents.map(student => 
    getStudentProgress(student, bootcamp)
  );
  
  const averageProgress = totalStudents > 0
    ? Math.round(
        studentProgress.reduce((sum, sp) => sum + sp.progress, 0) / totalStudents
      )
    : 0;
  
  const completedStudents = studentProgress.filter(sp => sp.progress === 100).length;
  
  return {
    totalStudents,
    averageProgress,
    completedStudents,
    activeStudents: totalStudents - completedStudents,
    studentProgress
  };
};

/**
 * Clone a bootcamp
 */
export const cloneBootcamp = (bootcamp, newTitle) => {
  const cloned = JSON.parse(JSON.stringify(bootcamp));
  cloned.id = `bootcamp-${Date.now()}`;
  cloned.title = newTitle || `${bootcamp.title} (Copy)`;
  cloned.createdAt = new Date();
  cloned.updatedAt = new Date();
  cloned.startDate = new Date();
  cloned.endDate = new Date(Date.now() + bootcamp.totalDays * 24 * 60 * 60 * 1000);
  
  // Reset all progress
  cloned.days.forEach((day, index) => {
    day.isUnlocked = index === 0;
    day.completedNotes = 0;
    day.notes.forEach(note => {
      note.isCompleted = false;
      note.id = `${note.id}-clone-${Date.now()}`;
    });
  });
  
  return cloned;
};

/**
 * Export bootcamp data
 */
export const exportBootcamp = (bootcamp) => {
  return JSON.stringify(bootcamp, null, 2);
};

/**
 * Import bootcamp data
 */
export const importBootcamp = (jsonData) => {
  try {
    const bootcamp = JSON.parse(jsonData);
    bootcamp.id = `bootcamp-${Date.now()}`;
    bootcamp.createdAt = new Date();
    bootcamp.updatedAt = new Date();
    return bootcamp;
  } catch (error) {
    throw new Error('Invalid bootcamp data');
  }
};

/**
 * Generate bootcamp report
 */
export const generateReport = (bootcamp, students) => {
  const analytics = getBootcampAnalytics(bootcamp, students);
  const totalNotes = bootcamp.days.reduce((sum, day) => sum + day.totalNotes, 0);
  const totalDuration = bootcamp.days.reduce((sum, day) => 
    sum + day.notes.reduce((noteSum, note) => noteSum + (note.duration || 0), 0), 0
  );
  
  return {
    bootcampInfo: {
      id: bootcamp.id,
      title: bootcamp.title,
      totalDays: bootcamp.totalDays,
      totalNotes,
      totalDuration: `${Math.floor(totalDuration / 60)}h ${totalDuration % 60}m`,
      startDate: bootcamp.startDate,
      endDate: bootcamp.endDate
    },
    analytics,
    dayBreakdown: bootcamp.days.map(day => ({
      dayNumber: day.dayNumber,
      title: day.title,
      totalNotes: day.totalNotes,
      noteTypes: {
        video: day.notes.filter(n => n.type === 'video').length,
        text: day.notes.filter(n => n.type === 'text').length,
        code: day.notes.filter(n => n.type === 'code').length,
        pdf: day.notes.filter(n => n.type === 'pdf').length,
        quiz: day.notes.filter(n => n.type === 'quiz').length
      }
    }))
  };
};

/**
 * Validate bootcamp structure
 */
export const validateBootcamp = (bootcamp) => {
  const errors = [];
  
  if (!bootcamp.title || bootcamp.title.trim() === '') {
    errors.push('Bootcamp title is required');
  }
  
  if (bootcamp.days.length === 0) {
    errors.push('Bootcamp must have at least one day');
  }
  
  bootcamp.days.forEach((day, index) => {
    if (!day.title || day.title.trim() === '') {
      errors.push(`Day ${index + 1} title is required`);
    }
    
    if (day.notes.length === 0) {
      errors.push(`Day ${index + 1} must have at least one note`);
    }
    
    day.notes.forEach((note, noteIndex) => {
      if (!note.title || note.title.trim() === '') {
        errors.push(`Day ${index + 1}, Note ${noteIndex + 1} title is required`);
      }
      
      if (!['text', 'video', 'code', 'pdf', 'quiz'].includes(note.type)) {
        errors.push(`Day ${index + 1}, Note ${noteIndex + 1} has invalid type`);
      }
    });
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
