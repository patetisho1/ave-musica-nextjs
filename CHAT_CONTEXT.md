# 💬 Chat Context - Ave Musica Project

**Последно обновен:** $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
**Проект:** Ave Musica - Официален уебсайт на професионален хор

---

## 📋 Текущо Състояние на Проекта

### ✅ Завършени Функционалности

1. **Next.js Setup**
   - Next.js 16 с App Router
   - React 19
   - TypeScript за type safety
   - Tailwind CSS за styling

2. **Компоненти**
   - Header с навигация
   - Hero секция
   - Events компонент
   - Newsletter форма
   - Footer

3. **Supabase Integration**
   - Database setup
   - Storage за изображения/аудио
   - Supabase client конфигурация

---

## 🔧 Технически Детайли

### Backend
- **Supabase** за database, storage
- **Next.js 16** App Router
- **TypeScript** за type safety

### Frontend
- **React 19** с Next.js
- **Tailwind CSS** за styling
- **Lucide React** за икони

### Deployment
- **Vercel** за автоматично deployment
- **GitHub** за version control

---

## 📦 Environment Variables

### Локална Разработка (`.env.local`)

**⚠️ ВАЖНО:** Този файл НЕ се commit-ва в git заради `.gitignore`. Създай го след clone:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-ave-musica-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-ave-musica-anon-key
```

**Как да намериш keys:**
1. Supabase Dashboard → Settings → API
2. `NEXT_PUBLIC_SUPABASE_URL` - Project URL
3. `NEXT_PUBLIC_SUPABASE_ANON_KEY` - `anon` `public` key

---

## 🔧 Важни Конфигурации

### Package Versions (package.json)

**Core Dependencies:**
- `next`: `^16.0.0`
- `react`: `^19`
- `@supabase/supabase-js`: `^2.54.0`
- `typescript`: `^5`

**Key Dependencies:**
- `lucide-react`: за икони
- `tailwindcss`: `^3.3.0` за styling

**Важно:** Виж `package.json` за пълния списък. След clone изпълни:
```bash
npm install
```

---

## 🛠️ Setup Instructions

### След Преинсталация:

#### 1. Clone проекта
```powershell
git clone https://github.com/patetisho1/ave-musica-nextjs.git
cd ave-musica-nextjs
```

#### 2. Инсталирай зависимости
```powershell
npm install
```

#### 3. Създай `.env.local` файл
```powershell
# Копирай структурата от env.example
copy env.example .env.local
# Или създай ръчно с редактор
code .env.local
```

**Попълни следните стойности:**
- `NEXT_PUBLIC_SUPABASE_URL` - от Supabase Dashboard
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - от Supabase Dashboard

#### 4. Стартирай dev server
```powershell
npm run dev
```

#### 5. Тествай локално
```powershell
# Отвори в браузър
# http://localhost:3000

# Тествай build
npm run build
```

---

## 📁 Структура на Проекта

```
ave-musica-nextjs/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Главен layout
│   ├── page.tsx           # Главна страница
│   └── globals.css        # Глобални стилове
├── components/             # React компоненти
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Events.tsx
│   └── Newsletter.tsx
├── lib/                    # Utility функции
│   └── supabase.ts        # Supabase client
├── types/                  # TypeScript типове
│   ├── event.ts
│   ├── newsletter.ts
│   └── performance.ts
├── supabase/               # Supabase migrations
└── public/                 # Статични файлове
```

---

## 🎯 Последни Промени

### Миграция към Next.js
- Миграция от HTML/CSS/JS към Next.js
- React компоненти
- Supabase integration
- Vercel deployment

---

## 📝 Важни Бележки

### За Deployment
- Vercel deployment минава успешно
- GitHub repository е настроен
- Автоматично deployment при push към `main`

---

## 🔗 Полезни Линкове

- **GitHub:** https://github.com/patetisho1/ave-musica-nextjs
- **Supabase Dashboard:** https://supabase.com/dashboard
- **Vercel Dashboard:** https://vercel.com/dashboard

---

## 🚀 Следващи Стъпки

1. Добавяне на събития (Events)
2. Добавяне на изпълнения (Performances)
3. Админ панел за управление
4. Newsletter функционалност

---

## 💡 Как да Възстановиш Контекста

След преинсталация на компютъра:

1. **Clone на репозиторията:**
   ```bash
   git clone https://github.com/patetisho1/ave-musica-nextjs.git
   cd ave-musica-nextjs
   ```

2. **Прочети този файл:**
   ```bash
   cat CHAT_CONTEXT.md
   # или
   code CHAT_CONTEXT.md
   ```

3. **Стартирай AI чата и му кажи:**
   ```
   Прочети CHAT_CONTEXT.md файла и възстанови контекста на проекта Ave Musica.
   ```

---

## 📌 Важни Файлове

- `CHAT_CONTEXT.md` - Този файл (контекст на проекта)
- `README.md` - Обща документация
- `MIGRATION_STATUS.md` - Статус на миграцията
- `SETUP_GITHUB.md` - GitHub setup guide
- `SETUP_VERCEL.md` - Vercel setup guide

---

## ⚠️ ВАЖНО - Изолация от Rabotim.com

**Този проект е НАПЪЛНО НЕЗАВИСИМ от Rabotim.com:**

- Различни GitHub repositories
- Различни Supabase проекти
- Различни Vercel deployments
- Различни `.env.local` файлове
- Различни `node_modules/` папки

**НЕ споделяй код, конфигурации или environment variables между двата проекта!**

---

_Запази този файл в git за да можеш да възстановиш контекста след преинсталация._

