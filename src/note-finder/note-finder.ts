import { NoteDao } from "./dao";
import { Note, ScaleResult } from "./model";

/**
 * Class that uses the Circle of Fifths to return the Number of Scales and so on.
 */
export class NoteFinder {

  private readonly noteDao: NoteDao;

  public constructor() {
    this.noteDao = new NoteDao();
  }

  public getMatchingChords(keyName: Note): ScaleResult {
    const currentScale = this.noteDao.getScale(keyName);
    return currentScale;
  }
}