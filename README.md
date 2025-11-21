# 🎵 Ave Musica - Next.js Website

Официален уебсайт на Ave Musica - професионален хор, специализиран в класическа хорова музика.

## 🚀 Технологии

- **Next.js 16** - React framework с App Router
- **React 19** - UI библиотека
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Supabase** - Backend as a Service (Database, Storage)
- **Lucide React** - Modern icons
- **Vercel** - Автоматично deployment

## 📋 Quick Start

### Локална Разработка

```bash
# Инсталирай зависимости
npm install

# Създай .env.local файл с твоите Supabase credentials
# NEXT_PUBLIC_SUPABASE_URL=your-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key

# Стартирай dev server
npm run dev
```

Отвори [http://localhost:3000](http://localhost:3000) в браузъра.

### Build за Production

```bash
npm run build
npm start
```

## 📁 Структура на Проекта

```
ave-musica-nextjs/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Главен layout
│   ├── page.tsx           # Главна страница
│   ├── events/            # Събития
│   ├── performances/      # Изпълнения
│   ├── about/             # За хора
│   ├── contact/           # Контакт
│   ├── admin/             # Админ панел
│   └── api/               # API routes
├── components/             # React компоненти
├── lib/                    # Utility функции
├── types/                  # TypeScript типове
├── supabase/               # Supabase migrations
└── public/                 # Статични файлове
```

## 🔗 Deployment

Сайтът се deploy-ва автоматично към Vercel при push към `main` branch.

**Production URL:** (ще се добави след първия deploy)

## 📝 Environment Variables

Създай `.env.local` файл:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 🤝 Принос

1. Fork проекта
2. Създай feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit промените (`git commit -m 'Add some AmazingFeature'`)
4. Push към branch-а (`git push origin feature/AmazingFeature`)
5. Отвори Pull Request

## 📄 Лиценз

MIT

---

**🎵 Създадено с ❤️ за музиката и хората**
