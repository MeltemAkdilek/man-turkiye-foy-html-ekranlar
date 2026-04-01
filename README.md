# FÖY - Fikir Öneri Yönetimi Sistemi
## HTML Ekran Prototipi Koleksiyonu

**Müşteri:** MAN Türkiye A.Ş. - MNPS Birimi
**Geliştirici:** RG Labs
**Proje Kodu:** DP-36, DP-55
**Tarih:** Nisan 2026
**Hazırlayanlar:** Eylül Gülbin Yılmaz, Meltem Akdilek

---

## 📋 Proje Hakkında

Bu HTML prototip koleksiyonu, FÖY (Fikir Öneri Yönetimi) sisteminin Oracle platformundan yeni bir platforma taşınması projesi kapsamında hazırlanmıştır. Ekranlar, `FOY_Is_Gereksinimleri_Analizi.md` dokümanı referans alınarak tasarlanmıştır.

## 🎯 Amaç

- Yeni sistemin ekran yapılarını görselleştirmek
- Kullanıcı deneyimini test etmek
- İş akışlarını simüle etmek
- Geliştirme ekibi için referans oluşturmak
- Müşteri onayı için prototip sunmak

## 📁 Klasör Yapısı

```
FOY_HTML_Ekranlar/
├── index.html              # Ana giriş sayfası (tüm ekranların listesi)
├── css/
│   └── style.css          # Ortak stil dosyası
├── js/
│   └── main.js            # Ortak JavaScript fonksiyonları
├── admin/                 # Admin ekranları
│   ├── dashboard.html     # ✅ Dashboard (Kokpit)
│   ├── foy-olustur.html   # ✅ FÖY Oluşturma formu
│   ├── foy-listesi.html   # ⏳ Yakında
│   ├── raporlar.html      # ⏳ Yakında
│   ├── bakim.html         # ⏳ Bakım ekranları
│   ├── arsiv.html         # ⏳ Arşiv
│   └── patent-adaylari.html # ⏳ Patent adayları
├── koordinator/           # Koordinatör ekranları
│   ├── giris.html         # ⏳ Giriş ekranı
│   ├── idl-listesi.html   # ✅ IDL Listesi (Task listesi)
│   ├── degerlendirme.html # ✅ Öneri değerlendirme
│   └── raporlar.html      # ⏳ Raporlar
├── yonetici/              # Yönetici ekranları
│   ├── dashboard.html     # ⏳ Dashboard
│   └── raporlar.html      # ⏳ Raporlar
└── it/                    # IT ekranları
    ├── dashboard.html     # ⏳ Dashboard
    ├── bakim.html         # ⏳ Bakım ekranları
    └── raporlar.html      # ⏳ Raporlar
```

## ✅ Tamamlanan Ekranlar

### Admin Ekranları
1. **Dashboard (Kokpit)** - `admin/dashboard.html`
   - Özet istatistikler (toplam öneri, gerçekleşen, çalışılıyor, red)
   - Aylık öneri dağılımı grafiği
   - Öneri kazançları (İşçilik, Kalite, Maliyet, Enerji)
   - Top 10 en çok öneri veren çalışanlar
   - Top 10 departmanlar
   - Bekleyen öneriler listesi

2. **FÖY Oluştur** - `admin/foy-olustur.html`
   - Temel bilgiler (Personel no, öneri no, tarihler)
   - Öneri detayları (konu, problem, çözüm)
   - Öneri kazançları tablosu
   - Destek bölümleri (çoklu seçim)
   - Patent adayı checkbox (YENİ)
   - Dosya yükleme (çoklu, her format)
   - Drag & drop destekli

### Koordinatör Ekranları
3. **IDL Listesi** - `koordinator/idl-listesi.html`
   - Departmana atanan öneri listesi
   - Açık gün sayısı (renk kodlu: yeşil, sarı, kırmızı)
   - Filtreleme özellikleri
   - Öncelik göstergeleri
   - Özet istatistikler

4. **Değerlendirme** - `koordinator/degerlendirme.html`
   - Öneri detay görüntüleme
   - Üç karar seçeneği:
     - ✅ Gerçekleştirildi
     - ❌ Gerçekleştirilemedi (red açıklama zorunlu)
     - 🔄 Transfer (başka departmana)
   - Ekli dosyaları görüntüleme ve indirme
   - Dosya yükleme özelliği

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary Color:** #003366 (MAN Türkiye kurumsal mavi)
- **Secondary Color:** #0066cc
- **Success:** #28a745 (Yeşil)
- **Warning:** #ffc107 (Sarı)
- **Danger:** #dc3545 (Kırmızı)
- **Info:** #17a2b8

### Tipografi
- **Font Family:** Segoe UI, Tahoma, sans-serif
- **Font Size:** 14px (base)
- **Line Height:** 1.6

### Responsive Design
- Mobile-first yaklaşım
- Grid ve Flexbox layout
- Breakpoint: 768px

## 🔧 Teknik Özellikler

### Kullanılan Teknolojiler
- **HTML5**
- **CSS3** (CSS Variables, Grid, Flexbox, Animations)
- **Vanilla JavaScript** (ES6+)
- **No Framework/Library** (Pure implementation)

### Özellikler
- ✅ Responsive (mobil uyumlu) tasarım
- ✅ Drag & Drop dosya yükleme
- ✅ Modal popup'lar
- ✅ Form validasyonları
- ✅ Dinamik tablo filtreleme
- ✅ Renk kodlu uyarı sistemi (yeşil/sarı/kırmızı)
- ✅ İnteraktif karar butonları
- ✅ Hover ve transition efektleri
- ✅ Print-friendly stil

### Tarayıcı Desteği
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Kullanım

### 🌐 Online Demo (Dockploy/Cloud Deployment)

Proje otomatik olarak deploy edilebilir. Docker ve nginx ile hazır!

**GitHub Repository:** https://github.com/MeltemAkdilek/man-turkiye-foy-html-ekranlar

### 🐳 Docker ile Çalıştırma

```bash
# Docker image oluştur
docker build -t foy-html .

# Container başlat
docker run -d -p 8080:80 foy-html

# Tarayıcıda aç: http://localhost:8080
```

### Yerel Sunucu ile Çalıştırma (Önerilen)

```bash
# Python 3 kullanarak
cd "FOY_HTML_Ekranlar"
python3 -m http.server 8000

# Tarayıcıda aç:
# http://localhost:8000
```

### Doğrudan Açma
`index.html` dosyasını çift tıklayarak tarayıcıda açabilirsiniz.

### 📦 Dockploy Deployment

#### Yöntem 1: Static Site (En Kolay - ÖNERİLEN!)
1. Dockploy dashboard'da **"Create Service"** veya **"New Project"** tıklayın
2. **Build Settings** kısmında **"Static"** seçin
3. **Repository:** `https://github.com/MeltemAkdilek/man-turkiye-foy-html-ekranlar`
4. **Branch:** `main`
5. **Build Command:** (boş bırakın)
6. **Output Directory:** `.` veya `/` (root directory)
7. **Install Command:** (boş bırakın)
8. **Deploy** butonuna basın

#### Yöntem 2: Docker (Alternatif)
Eğer "Docker" seçeneğini tercih ederseniz:
1. Dockploy dashboard'da **"Create Service"** tıklayın
2. **Service Type:** Docker veya Dockerfile
3. **Repository:** `https://github.com/MeltemAkdilek/man-turkiye-foy-html-ekranlar`
4. **Branch:** `main`
5. **Dockerfile Path:** `./Dockerfile` (otomatik algılanır)
6. **Port:** 80
7. Deploy butonuna basın

#### Deployment Ayarları
```json
{
  "type": "static",
  "framework": "html",
  "buildCommand": "",
  "outputDirectory": ".",
  "installCommand": ""
}
```

#### Deployment Özellikleri
- ✅ Pure HTML/CSS/JS (framework yok)
- ✅ Tüm dosyalar root dizinde
- ✅ index.html ana sayfa
- ✅ Responsive tasarım
- ✅ SSL/HTTPS uyumlu

## 📖 Navigasyon

1. **Ana Sayfa:** `index.html` - Tüm ekranların listesi ve açıklamaları
2. **Admin Dashboard:** `admin/dashboard.html`
3. **FÖY Oluştur:** `admin/foy-olustur.html`
4. **IDL Listesi:** `koordinator/idl-listesi.html`
5. **Değerlendirme:** `koordinator/degerlendirme.html`

Her ekranda üst navigasyon menüsü bulunmaktadır.

## 📋 İş Kuralları ve Özellikler

### Statü Yönetimi
- **Çalışılıyor:** Sisteme girilmiş, destek birimden aksiyon bekleniyor
- **Gerçekleştirildi:** Başarıyla uygulandı
- **Gerçekleştirilemedi:** Red edildi (açıklama zorunlu)
- **Transfer Edildi:** Başka departmana aktarıldı

### Süre Takibi (30 Gün Kuralı)
- **1-14 gün:** 🟢 Yeşil (Normal)
- **15-21 gün:** 🟡 Sarı (Dikkat)
- **22+ gün:** 🔴 Kırmızı (Kritik)

### Destek Bölüm Yönetimi
- Birden fazla departman seçimi
- Ana bölüm ve destek bölüm ayrımı
- Transfer ve ek destek ekleme
- Otomatik mail bildirimleri

### Dosya Yönetimi
- PDF, JPEG, PNG, Excel, Word destekli
- Birden fazla dosya yükleme
- Drag & drop özelliği
- Dosya boyutu gösterimi

### Puanlama Sistemi
- Öneri Tipi Puanı (0-3)
- Kendi İçinde Puanı (0-3)
- MNPS Puanı (0-3)
- Toplam puan hesaplama

## 🔗 İlgili Dokümanlar

1. **FOY_Is_Gereksinimleri_Analizi.md** - İş gereksinimleri analiz dokümanı (ana referans)
2. **FOY_Is_Gereksinimleri_Analizi_Professional.pdf** - PDF versiyonu
3. **FÖY_İş_Analizi_Raporu.docx** - Orijinal analiz raporu
4. **FOY_Analiz_Toplanti_Notu_1.docx** - 1. toplantı notları
5. **FOY_Analiz_Toplanti_Notu_2.docx** - 2. toplantı notları

## ⚠️ Önemli Notlar

### Simülasyon Özellikleri
Bu prototip **yalnızca görsel ve UX testi** içindir. Gerçek backend entegrasyonu yoktur:

- ✅ Ekran tasarımları ve layout
- ✅ Form alanları ve validasyonlar
- ✅ İnteraktif butonlar ve aksiyonlar
- ✅ Modal ve popup'lar
- ❌ Gerçek veri tabanı bağlantısı
- ❌ LDAP/SAP entegrasyonu
- ❌ Mail gönderimi
- ❌ Dosya upload (gerçek)

### Kullanıcı Rolleri
Prototipte 4 farklı kullanıcı rolü için ekranlar bulunmaktadır:
1. **Admin** - Tüm yetkilere sahip (MNPS)
2. **Koordinatör** - Departman bazlı yetki
3. **Yönetici** - Ekip bazlı görüntüleme
4. **IT** - Teknik destek ve bakım

## 📊 İstatistikler

- **Toplam Ekran:** 18+ (planlanan)
- **Tamamlanan:** 5
- **Kod Satırı:** ~3000+ lines
- **Dosya Boyutu:** ~150 KB

## 🎯 Sonraki Adımlar

### Tamamlanacak Ekranlar
- [ ] Admin - FÖY Listesi
- [ ] Admin - Raporlar (11+ rapor)
- [ ] Admin - Bakım Ekranları
- [ ] Admin - Arşiv
- [ ] Admin - Patent Adayları
- [ ] Koordinatör - Giriş Ekranı
- [ ] Koordinatör - Raporlar
- [ ] Yönetici - Dashboard
- [ ] Yönetici - Raporlar
- [ ] IT - Dashboard
- [ ] IT - Bakım Ekranları
- [ ] IT - Raporlar

### Geliştirmeler
- [ ] Grafik kütüphanesi entegrasyonu (Chart.js)
- [ ] Excel export fonksiyonu
- [ ] Print stylesheet iyileştirme
- [ ] Accessibility (WCAG) uyumluluğu
- [ ] Daha fazla animasyon ve geçiş efekti

## 📞 İletişim

### MAN Türkiye FIPC
- **Proje Sorumlusu:** Ayça Gürçelik
- **Ekip:** Aleynanur Kutlu

### RG Labs
- **İş Analistleri:**
  - Eylül Gülbin Yılmaz
  - Meltem Akdilek

---

## 📝 Versiyon Geçmişi

| Versiyon | Tarih | Değişiklik |
|----------|-------|------------|
| 1.0 | 01.04.2026 | İlk versiyon - 5 ekran tamamlandı |

---

**© 2026 MAN Türkiye A.Ş. - Tüm hakları saklıdır.**
**Geliştirici: RG Labs**
