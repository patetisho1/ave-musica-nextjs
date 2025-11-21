# 🔧 Troubleshooting - Ave Musica Next.js

**Дата:** $(Get-Date -Format "yyyy-MM-dd")
**Проблем:** Deployment не работи правилно след environment variables setup

---

## 🔍 Често Срещани Проблеми

### 1. ⚠️ Неправилни Environment Variables

**Проблем:** Използване на стари keys вместо новите

**Решение:**
- ✅ Използвай **Publishable key** (не "anon" key)
- ✅ Използвай **Secret key** (не "service_role" key)

**Проверка:**
- Publishable key трябва да започва с `sb_publishable_...`
- Secret key трябва да започва с `sb_secret_...`

---

### 2. ⚠️ Липсващи Environment Variables

**Проверка в Vercel:**
1. Отиди в Vercel Dashboard → `ave-musica-nextjs` → Settings → Environment Variables
2. Провери дали имаш трите variables:
   - `NEXT_PUBLIC_SUPABASE_URL` ✅
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` ✅
   - `SUPABASE_SERVICE_ROLE_KEY` ✅

**Ако липсва:**
- Добави липсващата variable
- Save
- Redeploy

---

### 3. ⚠️ Build Errors

**Проверка:**
1. Отиди в Vercel Dashboard → `ave-musica-nextjs` → Deployments
2. Кликни на последния deployment
3. Кликни на **"Build Logs"** таб
4. Провери за грешки

**Често срещани грешки:**
- `Missing Supabase environment variables` - Липсват environment variables
- `Cannot find module` - Dependency проблем
- `Type error` - TypeScript проблем

---

### 4. ⚠️ Runtime Errors

**Проверка:**
1. Отиди в Vercel Dashboard → `ave-musica-nextjs` → Deployments
2. Кликни на последния deployment
3. Кликни на **"Runtime Logs"** таб
4. Провери за runtime грешки

**Често срещани грешки:**
- `Invalid API key` - Неправилен key
- `Connection error` - Supabase connection проблем
- `Environment variable not found` - Липсваща variable

---

## 🔧 Как Да Провериш

### Стъпка 1: Провери Environment Variables в Vercel

1. Отиди в Vercel Dashboard → `ave-musica-nextjs`
2. Settings → Environment Variables
3. Провери дали имаш:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...
   SUPABASE_SERVICE_ROLE_KEY=sb_secret_...
   ```

### Стъпка 2: Провери Build Logs

1. Отиди в Deployments tab
2. Кликни на последния deployment
3. Кликни на **"Build Logs"**
4. Провери за грешки

### Стъпка 3: Провери Runtime Logs

1. Отиди в Deployments tab
2. Кликни на последния deployment
3. Кликни на **"Runtime Logs"**
4. Провери за runtime грешки

### Стъпка 4: Провери Browser Console

1. Отвори сайта в браузър
2. Отвори Developer Tools (F12)
3. Провери Console tab за грешки

---

## 💡 Възможни Решения

### Решение 1: Провери Keys

**Ако използваш стари keys:**
- Публикувай отново правилните keys от Supabase
- Publishable key (за `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- Secret key (за `SUPABASE_SERVICE_ROLE_KEY`)

### Решение 2: Провери URL

**Провери дали URL-ът е правилен:**
- Трябва да е: `https://xxxxx.supabase.co`
- БЕЗ `/` в края
- БЕЗ `http://` (трябва да е `https://`)

### Решение 3: Redeploy

**След като оправиш environment variables:**
1. Отиди в Deployments tab
2. Кликни на последния deployment
3. Кликни на трите точки (⋮) → **Redeploy**
4. Избери **Use existing Build Cache: Off**
5. Кликни **Redeploy**

---

## 📋 Checklist

Преди да redeploy-неш, провери:

- [ ] Имаш трите environment variables в Vercel
- [ ] `NEXT_PUBLIC_SUPABASE_URL` е правилен (започва с `https://`)
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` е publishable key (започва с `sb_publishable_...`)
- [ ] `SUPABASE_SERVICE_ROLE_KEY` е secret key (започва с `sb_secret_...`)
- [ ] Всички variables са добавени за "All Environments"
- [ ] Redeploy е направен след добавяне на variables

---

**Какво точно не работи? Виж ли някаква грешка в logs или в браузъра?** 🔍

