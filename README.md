<div align="center">

# ⛅ Weather

### Очередное погодное приложение 😴

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Axios](https://img.shields.io/badge/Axios-5929e4?logo=axios&logoColor=white)](https://vitejs.dev)
[![Zod](https://img.shields.io/badge/Zod-4398FF?logo=zod&logoColor=white)](https://vitejs.dev)
[![Zustand](https://img.shields.io/badge/Zustand-245acd?logoColor=white)](https://vitejs.dev)
[![Oxlint](https://img.shields.io/badge/Oxlint-1E293B)](https://oxc.rs)

<br />

**Узнай погоду там, где ты есть — и там, где хочешь быть.**

</div>

---

## ✨ Фичи

- **Поиск городов** — добавляй сколько угодно точек на карте твоих интересов
- **Переключение между городами** — один тап, и ты уже в другом часовом поясе
- **Удаление городов** — разлюбил Дубай, удали Дубай
- **°C / °F** — переключение в один клик
- **Сохранение состояния** — обновил страницу, и все на месте
- **Анимированные иконки погоды** — не скучные, милые анимашки

## 🛠 Стек

|                      |                                               |
| -------------------- | --------------------------------------------- |
| **Фреймворк**        | React + TypeScript                            |
| **Сборка**           | Vite                                          |
| **Стейт**            | Zustand                                       |
| **Валидация данных** | Zod                                           |
| **HTTP**             | Axios                                         |
| **Стили**            | Tailwind CSS                                  |
| **Данные о погоде**  | [WeatherAPI.com](https://www.weatherapi.com/) |

## 🚀 Быстрый старт

```bash
# клонируем
git clone https://github.com/AkiraStih/weather.git
cd weather

# ставим зависимости
yarn install

# заводим .env
echo "VITE_WEATHER_API_KEY=твой_ключ" > .env

# погнали
yarn dev
```

Ключ для WeatherAPI — бесплатно на [weatherapi.com](https://www.weatherapi.com/) за пару минут.

## 📸 Как выглядит

<div align="center">
<img src=./docs/preview.png width='800'></img>
</div>

## Структура проекта

```
src/
  api/        → axios-клиент + zod-схемы (валидация ответа API)
  store/      → zustand store
  utils/      → маппинг погодных кодов → иконки, конвертация температур
  components/ → карточки, поиск, список городов
```

<div align="center">

<sub>сделано с ☕ и небольшим дедлайном</sub>

</div>
