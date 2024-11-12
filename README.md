# Dokumentasi Aplikasi Ionic dengan Google Authentication

Aplikasi ini menggunakan Ionic, Vue, dan Firebase untuk autentikasi login melalui akun Google. Berikut adalah langkah-langkah proses autentikasi dan penjelasan bagaimana aplikasi mendapatkan username dan profil pengguna dari akun Google.

## 1. Tampilan Halaman Login

![Login](./login.png)

- **Penjelasan**: Tampilan awal halaman login dengan tombol "Sign in with Google." Pengguna perlu menekan tombol ini untuk memulai proses autentikasi menggunakan akun Google.

## 2. Tampilan Pilihan Akun Google

![Login Google](./logingoogle.png)

- **Penjelasan**: Setelah pengguna menekan tombol "Sign in with Google," aplikasi akan membuka halaman login Google. Pengguna kemudian memilih akun Google yang akan digunakan untuk login ke dalam aplikasi.

## 3. Tampilan Halaman Utama (Home)

![Home](./home.png)

- **Penjelasan**: Ini adalah halaman utama aplikasi setelah login. Pengguna bisa berpindah ke tab profil untuk melihat data profil yang sudah diperoleh dari akun Google.

## 4. Tampilan Profil Pengguna

![Profile](./profile.png)

- **Penjelasan**: Setelah berhasil login, aplikasi menampilkan halaman profil yang memuat nama dan email pengguna. Data ini diperoleh dari akun Google yang digunakan untuk login. Foto profil juga ditampilkan berdasarkan URL foto yang diambil dari data akun Google.

---

## Cara Kerja Autentikasi dengan Google

### Langkah 1: Inisialisasi Google Authentication

1. Aplikasi menggunakan Firebase untuk mengatur autentikasi dengan Google.
2. Saat aplikasi dimulai, Firebase diinisialisasi dengan `firebaseConfig`, yang berisi konfigurasi proyek Firebase.

### Langkah 2: Proses Login

1. Ketika pengguna menekan tombol "Sign in with Google," aplikasi menggunakan GoogleAuth untuk membuka halaman login Google.
2. Pengguna memilih akun yang ingin digunakan, dan Firebase mengautentikasi pengguna tersebut.
3. Setelah berhasil login, Firebase akan mengembalikan data pengguna seperti `displayName`, `email`, dan `photoURL`.

### Langkah 3: Mendapatkan dan Menampilkan Data Profil

1. Data yang diterima dari Firebase (`displayName`, `email`, dan `photoURL`) disimpan dalam store (`authStore`).
2. Pada halaman profil, data pengguna yang tersimpan ditampilkan dengan menggunakan binding Vue untuk memperbarui UI secara otomatis.
