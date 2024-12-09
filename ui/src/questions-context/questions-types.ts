import { Answer, Question } from "@/api/query-types";

export interface QuestionsState {
    currentQuestion: string;
}

export type QuestionsAction =
    | { type: 'SET_ALL_QUESTIONS'; payload: Question[] }
    | { type: 'INCREMENT_LEVEL' }
    | { type: 'ADD_ANSWER'; payload: Answer }
    | { type: 'ADD_QUESTION'; payload: string }
    | { type: 'REMOVE_QUESTION'; payload: string }
    | { type: 'SET_ANSWERS'; payload: Answer[] };