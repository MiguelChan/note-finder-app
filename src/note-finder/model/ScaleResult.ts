import { Note } from "./Note";

export interface ScaleResult {
  key: Note;
  scaleNotes: string[];
  keyChords: string[];
}