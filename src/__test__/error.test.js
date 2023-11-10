import { ErrorRepository } from '../js/ErrorRepository';


let errorRepository;

beforeEach(() => {
  errorRepository = new ErrorRepository();
});

test('Должен добавить ошибку в репозиторий', () => {
  errorRepository.addError('404', 'Not Found');
  expect(errorRepository.map.size).toBe(1);
  expect(errorRepository.map.get('404')).toBe('Not Found');
});

test('Должен перевести код ошибки в описание', () => {
  errorRepository.addError('500', 'Internal Server Error');
  const description = errorRepository.translate('500');
  expect(description).toBe('Internal Server Error');
});

test('Должен возвращать "Unknown error" для неизвестного кода ошибки', () => {
  const description = errorRepository.translate('999');
  expect(description).toBe('Unknown error');
});

test('должен возвращать "Unknown error" для неопределенного кода ошибки', () => {
  const description = errorRepository.translate(undefined);
  expect(description).toBe('Unknown error');
});