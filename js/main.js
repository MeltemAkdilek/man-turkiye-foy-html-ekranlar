// =================================================================
// MAN TÜRKİYE - FÖY SİSTEMİ
// Ana JavaScript Dosyası
// =================================================================

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    console.log('FÖY Sistemi yüklendi');

    // Otomatik form validasyonları
    initFormValidations();

    // Modal yönetimi
    initModals();

    // Tooltip'ler
    initTooltips();
});

// =================================================================
// FORM VALİDASYONLARI
// =================================================================

function initFormValidations() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                showAlert('Lütfen tüm zorunlu alanları doldurunuz!', 'danger');
            }
        });
    });
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}

// =================================================================
// MODAL YÖNETİMİ
// =================================================================

function initModals() {
    // Modal açma butonları
    const modalTriggers = document.querySelectorAll('[data-modal]');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Modal kapatma butonları
    const modalCloses = document.querySelectorAll('.modal-close, [data-modal-close]');

    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });

    // Modal dışına tıklandığında kapat
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// =================================================================
// ALERT SİSTEMİ
// =================================================================

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
        <strong>${getAlertIcon(type)}</strong> ${message}
        <button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; font-size: 20px; cursor: pointer;">&times;</button>
    `;

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.insertBefore(alertDiv, mainContent.firstChild);

        // 5 saniye sonra otomatik kapat
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
}

function getAlertIcon(type) {
    const icons = {
        'info': 'ℹ️',
        'success': '✅',
        'warning': '⚠️',
        'danger': '❌'
    };
    return icons[type] || icons['info'];
}

// =================================================================
// TOOLTIP SİSTEMİ
// =================================================================

function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            showTooltip(this);
        });

        element.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}

function showTooltip(element) {
    const tooltipText = element.getAttribute('data-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    tooltip.id = 'active-tooltip';

    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    tooltip.style.position = 'fixed';
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.getElementById('active-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// =================================================================
// TABLO İŞLEVLERİ
// =================================================================

function filterTable(input, tableId) {
    const filter = input.value.toLowerCase();
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }

        row.style.display = found ? '' : 'none';
    }
}

function sortTable(tableId, columnIndex, direction = 'asc') {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();

        if (direction === 'asc') {
            return aValue.localeCompare(bValue, 'tr');
        } else {
            return bValue.localeCompare(aValue, 'tr');
        }
    });

    rows.forEach(row => tbody.appendChild(row));
}

// =================================================================
// YARDIMCI FONKSİYONLAR
// =================================================================

// Tarihi formatla (DD.MM.YYYY)
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

// Sayıyı formatla (1000 -> 1.000)
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Para formatı (1000 -> €1.000)
function formatCurrency(amount, currency = '€') {
    return currency + formatNumber(amount);
}

// Yükleniyor overlay göster
function showLoading() {
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    overlay.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="font-size: 48px; margin-bottom: 20px;">⏳</div>
            <div style="font-size: 20px;">Yükleniyor...</div>
        </div>
    `;
    document.body.appendChild(overlay);
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Onay penceresi
function confirmAction(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

// =================================================================
// EXPORT FONKSİYONLARI
// =================================================================

// Export to Excel (CSV format)
function exportToExcel(tableId, filename = 'export.csv') {
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tr');
    let csv = [];

    rows.forEach(row => {
        const cols = row.querySelectorAll('td, th');
        const rowData = [];
        cols.forEach(col => {
            rowData.push(col.textContent.trim());
        });
        csv.push(rowData.join(','));
    });

    const csvContent = csv.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Print page
function printPage() {
    window.print();
}

// =================================================================
// SİMÜLASYON FONKSİYONLARI (Prototip için)
// =================================================================

// Personel numarası girildiğinde simüle et
function simulatePersonelLookup(personelNo) {
    // Gerçek sistemde LDAP/SAP'den veri çekilecek
    setTimeout(() => {
        const adSoyadField = document.getElementById('adSoyad');
        const masrafMerkeziField = document.getElementById('masrafMerkezi');

        if (adSoyadField && personelNo.startsWith('130')) {
            adSoyadField.value = 'Ahmet ÇELİK';
        }

        if (masrafMerkeziField && personelNo.startsWith('130')) {
            masrafMerkeziField.value = 'MM-1250 - Üretim Hat 3';
        }
    }, 500);
}

// Mail gönderimi simülasyonu
function simulateSendMail(recipients, subject, body) {
    showLoading();

    setTimeout(() => {
        hideLoading();
        showAlert('Mail başarıyla gönderildi! Alıcılar: ' + recipients.join(', '), 'success');
    }, 1500);
}

// Dosya upload simülasyonu
function simulateFileUpload(file) {
    showLoading();

    setTimeout(() => {
        hideLoading();
        showAlert(`Dosya yüklendi: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`, 'success');
    }, 1000);
}

console.log('✅ FÖY Sistemi JavaScript yüklendi ve hazır!');
