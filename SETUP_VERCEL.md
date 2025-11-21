# 🚀 Setup на Vercel Deployment

**Дата:** $(Get-Date -Format "yyyy-MM-dd")
**Проект:** Ave Musica Next.js

---

## 📋 Стъпки за Setup

### 1. Отиди в Vercel Dashboard

1. Отиди в: https://vercel.com/new
2. Влез с GitHub акаунта
3. Кликни **Add New Project**

---

### 2. Import от GitHub

1. Избери **Import Git Repository**
2. Намери `ave-musica-nextjs` repository
3. Кликни **Import**

---

### 3. Настройка на Проекта

**Project Name:** `ave-musica-nextjs` (или както предпочиташ)

**Framework Preset:** Next.js (трябва автоматично да се засече)

**Root Directory:** `./` (default)

**Build Command:** `npm run build` (default)

**Output Directory:** `.next` (default)

**Install Command:** `npm install` (default)

---

### 4. Environment Variables

Добави следните environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**Как да ги намериш:**
1. Отиди в Supabase Dashboard: https://supabase.com/dashboard
2. Избери проекта (или създай нов)
3. Settings → API
4. Копирай URL и keys

---

### 5. Deploy!

Кликни **Deploy**

Vercel ще:
1. Клонира проекта от GitHub
2. Инсталира зависимости
3. Build проекта
4. Deploy-не в production

---

### 6. Автоматично Deployment

**От сега нататък:**
- Всеки push към `main` branch автоматично ще deploy-не
- Pull requests ще получат preview deployments
- Всичко е автоматично! ✅

---

## 🔗 URLs

**Production URL:** Ще получиш URL след първия deploy:
- `https://ave-musica-nextjs.vercel.app` (или custom domain)

**Preview URLs:** Всеки PR получава собствен URL

---

## ✅ Резултат

След тези стъпки:
- ✅ Vercel проект е създаден
- ✅ Автоматично deployment е настроен
- ✅ Environment variables са конфигурирани
- ✅ Сайтът е live!

---

**Следваща стъпка:** Миграция на компонентите

