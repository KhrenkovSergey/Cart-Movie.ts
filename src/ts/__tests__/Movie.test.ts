import Movie from "../domain/Movie";

test('should correctly create a Movie instance', () => {
    const movie = new Movie(
      1,
      'Мстители',
      500,
      'The Avengers',
      2012,
      'США',
      '«Avengers Assemble!»',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      137,
      'https://example.com/avengers.jpg'
    );
  
    expect(movie.id).toBe(1);
    expect(movie.name).toBe('Мстители');
    expect(movie.originalTitle).toBe('The Avengers');
    expect(movie.year).toBe(2012);
    expect(movie.country).toBe('США');
    expect(movie.tagline).toBe('«Avengers Assemble!»');
    expect(movie.genre).toEqual(['фантастика', 'боевик', 'фэнтези', 'приключения']);
    expect(movie.duration).toBe(137);
    expect(movie.poster).toBe('https://example.com/avengers.jpg');
  });