# Goods Store — Інтернет-магазин на React

Це простий інтернет-магазин, реалізований на React, з фільтрацією товарів, корзиною та завантаженням даних з API.

## Репозиторій

[ GitHub: Goods Store](https://github.com/AlexandraKazakova1/test-pixoram)

## Функціонал

- Завантаження товарів з [Fake Store API](https://fakestoreapi.com)
- Фільтрація по категоріях
- Додавання / видалення з корзини
- Загальна сума товарів
- Адаптивний інтерфейс
- Лоадер при завантаженні

## Технології

- React + React Router
- Axios
- SCSS
- FakeStoreAPI

## Як запустити локально

1. Склонуйте репозиторій:

   ```bash
   git clone https://github.com/your-username/goods-store.git
   cd goods-store
   ```

2. Встановіть залежності:

   ```bash
   npm install
   ```

3. Запустіть проєкт:

   - Якщо це Vite:
     ```bash
     npm run dev
     ```
   - Якщо Create React App:
     ```bash
     npm start
     ```

4. Відкрий у браузері:
   ```
   http://localhost:5173    (Vite)
   http://localhost:3000    (CRA)
   ```

## Деплой

[Vercel](https://test-pixoram.vercel.app/)

## Структура проєкту

```
src/
├── components/
│   ├── Cart/
│   ├── Filter/
│   ├── Loader/
│   ├── ProductCard/
│   └── ProductList/
├── services/
│   └── productService.js
├── App.jsx
├── App.scss
└── index.css
└── index.jsx

```
