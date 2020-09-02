import { JourneyEnum } from "./Journey";
import { Routine } from "./Routine";

export class Apprentice{

    document: number;
    email: string;
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