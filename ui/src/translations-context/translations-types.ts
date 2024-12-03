export interface Translation {
    id: string;
    original: string;
    translated: string;
};

export interface Answer {
    translation: string;
    answer: string;
    level: number;
}

export interface TranslationsState {
    allTranslations: Translation[];
    currentTranslation: string;
    possibleTranslations: string[];
    remainingTranslations: string[];
    currentLevel: number;
    answers: Answer[];
    translationsLoaded: boolean;
}

export type TranslationsAction =
    | { type: 'SET_ALL_TRANSLATIONS'; payload: Translation[] }
    | { type: 'INCREMENT_LEVEL' }
    | { type: 'ADD_ANSWER'; payload: Answer }
    | { type: 'ADD_TRANSLATION'; payload: string }
    | { type: 'REMOVE_TRANSLATION'; payload: string }
    | { type: 'SET_ANSWERS'; payload: Answer[] };