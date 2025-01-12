import Buyable from './Buyable';

export default class Movie implements Buyable {
    id: number;
    name: string;  // Добавлено обязательное свойство name
    price: number; // Добавлено обязательное свойство price
    originalTitle: string;
    year: number;
    country: string;
    tagline: string;
    genre: string[];
    duration: number;
    poster: string;

    constructor(
        id: number,
        name: string,  // Добавлено в конструктор
        price: number, // Добавлено в конструктор
        originalTitle: string,
        year: number,
        country: string,
        tagline: string,
        genre: string[],
        duration: number,
        poster: string
    ) {
        this.id = id;
        this.name = name;  // Инициализация name
        this.price = price; // Инициализация price
        this.originalTitle = originalTitle;
        this.year = year;
        this.country = country;
        this.tagline = tagline;
        this.genre = genre;
        this.duration = duration;
        this.poster = poster;
    }
}
