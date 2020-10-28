import { JourneyEnum } from "./Journey";
import { Routine } from "./Routine";

export class Apprentice{

    id: string;
    document: number;
    email: string;
    photo: string;
    password: string;
    name: string;
    journeyEnum: JourneyEnum;
    weight: number;
    age: number;
    height: number;
    comments: string;
    limitations: string;
    routine: Routine;
}