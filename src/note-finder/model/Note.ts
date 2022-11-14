export enum NoteType {
  Major = 'major',
  Minor = 'minor',
}

export interface Note {
  noteType: NoteType;
  noteName: string;
}