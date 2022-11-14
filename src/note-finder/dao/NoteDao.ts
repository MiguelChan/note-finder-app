import * as Scale from "@tonaljs/scale";
import * as Key from "@tonaljs/key";
import { Note, ScaleResult } from "../model";

export class NoteDao {
  public getScale(keyName: Note): ScaleResult {
    const currentScale = this.toTonalScaleName(keyName);
    const chordForTonic = Key.minorKey(currentScale.tonic ?? '');

    // console.info(`CurrentScale: ${JSON.stringify(currentScale, null, 2)} `);
    // console.info(`ChordsForTonic: ${JSON.stringify(chordForTonic, null, 2)}`);
    // console.info(`ScaleChords: ${JSON.stringify(scaleChords, null, 2)} `);

    return {
      key: keyName,
      keyChords: [
        ...chordForTonic.natural.chords,
      ],
      scaleNotes: currentScale.notes,
    }
  }

  private toTonalScaleName(key: Note): Scale.Scale {
    return Scale.get(`${key.noteName} ${key.noteType}`);
  }
}