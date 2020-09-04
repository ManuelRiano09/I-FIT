import { StatusEnum } from './Status';
import { Exercise } from './Exercise';

export class Routine {
  status: StatusEnum;
  exercises: Exercise[];
}
