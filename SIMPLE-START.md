# ⚡ SIMPLE - Start Development

## 1️⃣ Stop Terminal yang Lama
Klik terminal, tekan: **Ctrl+C**

## 2️⃣ Start Ulang
```bash
npm run dev
```

## 3️⃣ Tunggu Sampai Muncul:
```
[0] ➜ Local: http://localhost:5173/
[1] 🚀 Development API Server running on http://localhost:3001
[1] 📧 Email endpoint: http://localhost:3001/api/send-email
```

## ✅ DONE!
- Buka: http://localhost:5173
- Go to Contact page
- Fill form & submit
- Email akan terkirim ke: **hello@nauliconsultants.com**

---

## 🐛 Jika Masih Error:
```bash
# Kill semua node process dulu
taskkill /F /IM node.exe

# Start fresh
npm run dev
```

---

## 💡 Error yang Tadi:
**FIXED!** ✅ Typo `createTransporter` → `createTransport` sudah diperbaiki.

