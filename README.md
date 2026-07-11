# SMAY! Landing Page (Next.js)

Landing page onboarding hidroponik SMAY!. Siap deploy ke Vercel.

## Cara online-kan (tanpa terminal, lewat browser)

### 1. Upload ke GitHub
1. Buat akun di https://github.com (gratis).
2. Klik tombol **+** kanan atas -> **New repository**.
3. Nama: `smay-landing`. Pilih **Public**. Centang **Add a README file**. Klik **Create repository**.
4. Di halaman repo: **Add file** -> **Upload files**.
5. Buka folder project ini, pilih **SEMUA isinya** (file `package.json`, `next.config.mjs`, `.gitignore`,
   dan folder `app` serta `components`), lalu **drag** ke area upload.
   PENTING: yang di-drag adalah ISI folder, bukan folder pembungkusnya, supaya `package.json` ada di root.
6. Klik **Commit changes**.

### 2. Deploy ke Vercel
1. Buka https://vercel.com -> **Sign Up** -> pilih **Continue with GitHub** (paling gampang).
2. Di dashboard: **Add New...** -> **Project**.
3. Cari repo `smay-landing` -> **Import**.
4. Vercel otomatis mengenali Next.js. Biarkan semua default -> klik **Deploy**.
5. Tunggu 1-2 menit -> muncul link seperti `https://smay-landing-xxxx.vercel.app`. Itu website-mu!

### 3. Edit nanti
Ubah teks (nomor WA, dll) langsung di GitHub: buka file -> ikon pensil (Edit) -> ubah -> Commit.
Vercel otomatis re-deploy tiap ada perubahan.

## Yang perlu diganti sebelum live
Di `components/SmayLanding.jsx` bagian atas:
- `WHATSAPP_URL` -> nomor WhatsApp (sudah: +62 822-1111-2355)
- `LYNK_URL` -> link lynk.id
- `TIKTOK_URL` -> link video TikTok
