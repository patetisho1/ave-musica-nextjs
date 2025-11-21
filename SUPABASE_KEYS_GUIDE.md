# 🔑 Supabase API Keys - Инструкции

**Дата:** $(Get-Date -Format "yyyy-MM-dd")
**Проект:** Ave Musica Next.js

---

## 📋 Какво Виждаш в Supabase

В новия Supabase интерфейс има **НОВА система за API keys**:

### Старата система (НЕ я намираш):
- ❌ `anon public` key - НЯМА Я ВЕЧЕ
- ❌ `service_role` key - НЯМА Я ВЕЧЕ

### Новата система (КОЯТО ВИЖДАШ):
- ✅ **Publishable key** → `sb_publishable_...`
- ✅ **Secret keys** → `sb_secret_...`

---

## ✅ Какво Да Използваш

### За Frontend (`.env.local` и Vercel):

**Вместо:**
```bash
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

**Използвай:**
```bash
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_lV7eY1y0m2ksVNdx_do1XA_e1PVWTnT
```

**📍 Къде да го намериш:**
- Settings → API Keys → **"Publishable key"** секция
- Копирай ключа от полето `sb_publishable_...`

---

### За Backend (только в Vercel Environment Variables):

**Вместо:**
```bash
SUPABASE_SERVICE_ROLE_KEY=...
```

**Използвай:**
```bash
SUPABASE_SERVICE_ROLE_KEY=sb_secret_udMHR...
```

**📍 Къде да го намериш:**
- Settings → API Keys → **"Secret keys"** секция
- Кликни на окото (👁️) до key-а за да го видиш
- Копирай secret key-а от таблицата

**⚠️ ВАЖНО:** Secret key-ът е скрит (••••) - кликни на окото за да го видиш!

---

## 📍 Project URL

**📍 Къде да го намериш:**
- Settings → API Keys (в началото на страницата)
- Или Settings → General → **Project URL**
- Формат: `https://xxxxx.supabase.co`

---

## 🔧 Стъпка по Стъпка

### Стъпка 1: Намери Project URL

1. Отиди в **Settings** → **API Keys**
2. Горе в страницата ще видиш **Project URL**
3. Копирай URL-а (например: `https://xxxxx.supabase.co`)

---

### Стъпка 2: Намери Publishable Key

1. В **Settings** → **API Keys** страницата
2. Скрол надолу до **"Publishable key"** секция
3. Копирай ключа от полето (започва с `sb_publishable_...`)

---

### Стъпка 3: Намери Secret Key

1. В **Settings** → **API Keys** страницата
2. Скрол надолу до **"Secret keys"** секция
3. В таблицата намери реда с "default" key
4. Кликни на окото (👁️) до key-а за да го видиш
5. Копирай secret key-а (започва с `sb_secret_...`)

---

## ✅ След Като Намериш Keys

### Добави ги в Vercel:

1. Отиди в Vercel Dashboard → `ave-musica-nextjs` проект
2. Settings → Environment Variables
3. Добави трите variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...
   SUPABASE_SERVICE_ROLE_KEY=sb_secret_...
   ```
4. Save
5. **Redeploy** проекта

### Добави ги локално:

```powershell
cd "C:\Users\TihomirTodorov\Desktop\Cursor AI\ave-musica-nextjs"
copy env.example .env.local
# Отвори .env.local и попълни:
# NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...
# SUPABASE_SERVICE_ROLE_KEY=sb_secret_...
```

---

## 🎯 Резюме

**Какво търсиш:**
1. ✅ **Project URL** - в началото на API Keys страницата
2. ✅ **Publishable key** - в "Publishable key" секцията
3. ✅ **Secret key** - в "Secret keys" таблицата (кликни окото 👁️)

**Къде са:**
- Settings → API Keys (всичко е на едно място!)

---

**Намери ли ги? Ако имаш проблем, кажи кое точно не намираш!** 🤔

