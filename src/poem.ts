import _poems from './poems.json'

export default interface Poem {
    title: string;
    verses: string[];
    score: number;
}
export interface ExtendedPoem {
    title: string;
    verses: string[];
    rating: any[];
}


export const allPoems: Poem[] = _poems
