# 🔧 Setup на GitHub Repository

**Дата:** $(Get-Date -Format "yyyy-MM-dd")
**Проект:** Ave Musica Next.js

---

## 📋 Стъпки за Setup

### 1. Създай GitHub Repository

1. Отиди в GitHub: https://github.com/new
2. Repository name: `ave-musica-nextjs`
3. Description: `Official website for Ave Musica choir - Next.js version`
4. Visibility: **Public** (или Private - както предпочиташ)
5. НЕ създавай README, .gitignore или license (вече ги имаме)
6. Кликни **Create repository**

---

### 2. Добави Remote и Push

```powershell
# Отиди в проекта
cd "C:\Users\TihomirTodorov\Desktop\Cursor AI\ave-musica-nextjs"

# Добави remote
git remote add origin https://github.com/patetisho1/ave-musica-nextjs.git

# Провери remote
git remote -v

# Добави всички файлове
git add .

# Първи commit
git commit -m "Initial commit: Next.js setup for Ave Musica"

# Push към GitHub
git push -u origin main
```

---

### 3. Проверка

След push, провери в GitHub:
- https://github.com/patetisho1/ave-musica-nextjs

Трябва да видиш всички файлове!

---

## ✅ Резултат

След тези стъпки:
- ✅ GitHub repository е създаден
- ✅ Кодът е push-нат
- ✅ Готов за Vercel deployment

---

**Следваща стъпка:** Setup на Vercel deployment

