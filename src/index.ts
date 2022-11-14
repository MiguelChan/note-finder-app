/**
 * This is the initial point of our project.
 * We want to build a really small CLI App that will display the Chords/Notes/Scales for a given
 * Key in the Circle of Fifths.
 * 
 * There are two modules:
 * 
 * NoteFinder: which will return the corret Scale/Chords/Notes to use
 * NotePlayer: Which will play a set of Notes.
 */
import {
  NoteFinder,
  NoteType,
} from './note-finder';


const result = new NoteFinder().getMatchingChords({
  noteName: 'A',
  noteType: NoteType.Minor,
});

console.info(`Values: ${JSON.stringify(result, null, 2)}`);