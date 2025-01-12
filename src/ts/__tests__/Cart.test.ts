import Cart from '../service/Cart';
import Movie from '../domain/Movie';

// Шаг 1. Тестирование пустой корзины
test('new cart should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

// Шаг 2. Тестирование добавления фильма в корзину
test('should add a movie to the cart', () => {
  const cart = new Cart();
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

  cart.addItem(movie);
  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toBe(movie);
});

// Шаг 3. Тестирование функции подсчета общей стоимости без скидки
test('should calculate total price without discount', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'Мстители', 500, 'The Avengers', 2012, 'США', '«Avengers Assemble!»', ['фантастика'], 137, 'https://example.com/avengers.jpg');
  const movie2 = new Movie(2, 'Гарри Поттер', 400, 'Harry Potter', 2001, 'Великобритания', 'The Boy Who Lived', ['фэнтези'], 152, 'https://example.com/harrypotter.jpg');

  cart.addItem(movie1);
  cart.addItem(movie2);

  cart.setPrice(movie1.id, 500);
  cart.setPrice(movie2.id, 600);

  expect(cart.getTotalPrice()).toBe(1100);
});

// Шаг 4. Тестирование функции подсчета общей стоимости с учетом скидки
test('should calculate total price with discount', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'Мстители', 500, 'The Avengers', 2012, 'США', '«Avengers Assemble!»', ['фантастика'], 137, 'https://example.com/avengers.jpg');
  const movie2 = new Movie(2, 'Гарри Поттер', 400, 'Harry Potter', 2001, 'Великобритания', 'The Boy Who Lived', ['фэнтези'], 152, 'https://example.com/harrypotter.jpg');

  cart.addItem(movie1);
  cart.addItem(movie2);

  cart.setPrice(movie1.id, 500);
  cart.setPrice(movie2.id, 600);

  const discount = 0.1; // 10% скидка
  expect(cart.getTotalPriceWithDiscount(discount)).toBe(990); // (500 + 600) * 0.9 = 990
});

// Шаг 5. Тестирование удаления фильма из корзины
test('should remove a movie from the cart by id', () => {
  const cart = new Cart();
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

  cart.addItem(movie);
  expect(cart.items.length).toBe(1);

  cart.removeItemById(movie.id);
  expect(cart.items.length).toBe(0);
});
