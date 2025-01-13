import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public originalTitle: string,
        public year: number,
        public country: string,
        public tagline: string,
        public genre: string[],
        public duration: number,
        public poster: string
    ) {}
}
