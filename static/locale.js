const translationPairs = [
  ['SISTEM ONLINE','SYSTEM ONLINE'],['Bahasa','Language'],['Pilih bahasa','Choose language'],
  ['// SOFTWARE & DATA DEVELOPMENT','// SOFTWARE & DATA DEVELOPMENT'],['Proyek terarah.','Projects with direction.'],['Solusi berdampak.','Solutions that deliver impact.'],
  ['Lab Kode mengembangkan aplikasi dan tools berbasis Python serta teknologi data untuk membantu pelajar, mahasiswa, profesional, industri, dan instansi bekerja lebih mudah.','Lab Kode develops Python-powered apps, tools, automation, and data solutions for students, professionals, industries, and institutions.'],
  ['Layanan utama','Core services'],['PYTHON ENGINEERING','PYTHON ENGINEERING'],['DATA & AUTOMATION','DATA & AUTOMATION'],['APLIKASI & TOOLS','APPS & TOOLS'],
  ['Ringkasan proyek','Project overview'],['01 / TOTAL PROYEK','01 / TOTAL PROJECTS'],['02 / SELESAI','02 / COMPLETED'],['03 / SEDANG BERJALAN','03 / IN PROGRESS'],['04 / TENGGAT HARI INI','04 / DUE TODAY'],['05 / DIHENTIKAN','05 / STOPPED'],
  ['BERJALAN','IN PROGRESS'],['SELESAI','COMPLETED'],['DIHENTIKAN','STOPPED'],
  ['// PROJECT WORKSPACE','// PROJECT WORKSPACE'],['Portofolio proyek','Project portfolio'],['Aksi proyek','Project actions'],['Ekspor Excel','Export Excel'],['Tambah proyek','Add project'],
  ['Cari proyek, deskripsi, atau kategori...','Search projects, descriptions, or categories...'],['Cari proyek','Search projects'],['Dari','From'],['Sampai','To'],['Reset','Reset'],['Tanggal mulai','Start date'],['Tanggal akhir','End date'],['Navigasi halaman proyek','Project page navigation'],
  ['Belum ada proyek.','No projects yet.'],['Tambahkan proyek untuk mulai mengelola pekerjaan.','Add a project to start organizing your work.'],['+ Tambah proyek baru','+ Add new project'],
  ['PROYEK BARU','NEW PROJECT'],['Tambahkan proyek baru','Add a new project'],['Nama proyek','Project name'],['Misalnya, Dashboard analitik','For example, Analytics dashboard'],
  ['Deskripsi proyek','Project description'],['Jelaskan tujuan dan ruang lingkup proyek','Describe the project goals and scope'],['opsional','optional'],['Bidang / kategori','Field / category'],['Umum','General'],['Prioritas','Priority'],['Rendah','Low'],['Sedang','Medium'],['Tinggi','High'],['Link proyek','Project link'],['Target penyelesaian','Target completion'],['Batal','Cancel'],['Simpan proyek','Save project'],
  ['Lampiran','Attachments'],['opsional, maksimal 50 MB per file','optional, max. 50 MB per file'],['PDF, Excel, Word, CSV, image, dan format lainnya.','PDF, Excel, Word, CSV, images, and other formats.'],
  ['Tandai proyek selesai','Mark project as completed'],['Lihat','View'],['Ubah','Edit'],['Hapus','Delete'],['Tahapan','Milestones'],['Aktifkan kembali','Reactivate'],['Hentikan','Stop'],['Menyiapkan...','Preparing...'],
  ['UBAH PROYEK','EDIT PROJECT'],['Perbarui informasi proyek','Update project information'],['Simpan perubahan','Save changes'],['DETAIL PROYEK','PROJECT DETAILS'],['STATUS','STATUS'],['BIDANG / KATEGORI','FIELD / CATEGORY'],['PRIORITAS','PRIORITY'],['TARGET PENYELESAIAN','TARGET COMPLETION'],['LINK PROYEK','PROJECT LINK'],['DESKRIPSI PROYEK','PROJECT DESCRIPTION'],['Belum ada deskripsi proyek.','No project description yet.'],['LAMPIRAN','ATTACHMENTS'],['Belum ada lampiran.','No attachments yet.'],['Tutup','Close'],['Ubah proyek','Edit project'],['Belum ditentukan','Not set'],
  ['Tidak ada proyek yang sesuai dengan filter.','No projects match the current filters.'],['Mulai dengan menambahkan proyek pertama.','Start by adding your first project.'],['Tidak ada proyek aktif saat ini','No active projects at the moment'],['Belum ada proyek yang selesai','No completed projects yet'],['Belum ada proyek dalam workspace','No projects in this workspace yet'],['Tidak ada proyek yang dihentikan','No stopped projects'],['Tidak ada tenggat hari ini','No projects due today'],
  ['TAHAPAN BARU','NEW MILESTONE'],['UBAH TAHAPAN','EDIT MILESTONE'],['Tambahkan tahapan proyek','Add a project milestone'],['Perbarui tahapan proyek','Update project milestone'],['Nama tahapan','Milestone name'],['Misalnya, Analisis kebutuhan','For example, Requirements analysis'],['Unggah file','Upload file'],['maks. 50 MB per file','max. 50 MB per file'],['Simpan tahapan','Save milestone'],
  ['DETAIL TAHAPAN','MILESTONE DETAILS'],['CATATAN','NOTES'],['Tidak ada catatan.','No notes.'],['Ubah tahapan','Edit milestone'],['Tanpa tenggat','No target date'],['Ada catatan','Has notes'],['TAHAPAN PROYEK','PROJECT MILESTONES'],['+ Tambah tahapan','+ Add milestone'],['Belum ada tahapan proyek.','No project milestones yet.'],['Belum ada tahapan. Tambahkan tahapan pertama.','No milestones yet. Add the first milestone.'],
  ['LAB KODE — SOFTWARE & DATA','LAB KODE — SOFTWARE & DATA'],['CEPAT • BERGUNA • BERBASIS PYTHON','FAST • USEFUL • POWERED BY PYTHON'],['VERSI','VERSION'],['DIPERBARUI','UPDATED']
];

let locale = localStorage.getItem('pythones-language') || 'id';

function translateText(text) {
  const pair = translationPairs.find(([id,en]) => id === text || en === text);
  if (pair) return locale === 'en' ? pair[1] : pair[0];
  let match;
  if (locale === 'en') {
    match=text.match(/^TAHAPAN PROYEK \((\d+)\)$/); if(match)return `PROJECT MILESTONES (${match[1]})`;
    match=text.match(/^LAMPIRAN \((\d+)\)$/); if(match)return `ATTACHMENTS (${match[1]})`;
    match=text.match(/^Menampilkan (\d+) dari (\d+) proyek$/); if(match)return `Showing ${match[1]} of ${match[2]} projects`;
    match=text.match(/^DETAIL PROYEK \/ #(\d+)$/); if(match)return `PROJECT DETAILS / #${match[1]}`;
    match=text.match(/^(\d+) TAHAPAN$/); if(match)return `${match[1]} MILESTONES`;
    match=text.match(/^(\d+) proyek sedang dalam pengerjaan$/); if(match)return `${match[1]} projects in progress`;
    match=text.match(/^(\d+) proyek berhasil diselesaikan$/); if(match)return `${match[1]} projects successfully completed`;
    match=text.match(/^(\d+) proyek dalam portofolio$/); if(match)return `${match[1]} projects in the portfolio`;
    match=text.match(/^(\d+) proyek memerlukan perhatian hari ini$/); if(match)return `${match[1]} projects need attention today`;
    match=text.match(/^(\d+) proyek dihentikan$/); if(match)return `${match[1]} projects stopped`;
    match=text.match(/^(\d+) proyek sedang berjalan dari (\d+) (?:proyek yang ditampilkan|total proyek)\.$/); if(match)return `${match[1]} projects in progress out of ${match[2]} projects.`;
  } else {
    match=text.match(/^PROJECT MILESTONES \((\d+)\)$/); if(match)return `TAHAPAN PROYEK (${match[1]})`;
    match=text.match(/^ATTACHMENTS \((\d+)\)$/); if(match)return `LAMPIRAN (${match[1]})`;
    match=text.match(/^Showing (\d+) of (\d+) projects$/); if(match)return `Menampilkan ${match[1]} dari ${match[2]} proyek`;
    match=text.match(/^PROJECT DETAILS \/ #(\d+)$/); if(match)return `DETAIL PROYEK / #${match[1]}`;
    match=text.match(/^(\d+) MILESTONES$/); if(match)return `${match[1]} TAHAPAN`;
    match=text.match(/^(\d+) projects in progress$/); if(match)return `${match[1]} proyek sedang dalam pengerjaan`;
    match=text.match(/^(\d+) projects successfully completed$/); if(match)return `${match[1]} proyek berhasil diselesaikan`;
    match=text.match(/^(\d+) projects in the portfolio$/); if(match)return `${match[1]} proyek dalam portofolio`;
    match=text.match(/^(\d+) projects need attention today$/); if(match)return `${match[1]} proyek memerlukan perhatian hari ini`;
    match=text.match(/^(\d+) projects stopped$/); if(match)return `${match[1]} proyek dihentikan`;
    match=text.match(/^(\d+) projects in progress out of (\d+) projects\.$/); if(match)return `${match[1]} proyek sedang berjalan dari ${match[2]} proyek yang ditampilkan.`;
  }
  return text;
}

function applyLocale() {
  document.documentElement.lang=locale;
  document.title=locale==='en'?'Lab Kode — Software & Data Development':'Lab Kode — Pengembangan Software & Data';
  const date=document.querySelector('#todayDate');
  const dateText=new Date().toLocaleDateString(locale==='en'?'en-US':'id-ID',{weekday:'long',day:'numeric',month:'long'}).toUpperCase();
  if(date && date.textContent!==dateText) date.textContent=dateText;
  document.querySelector('#languageSelect').value=locale;
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{const raw=node.nodeValue,trimmed=raw.trim(),translated=translateText(trimmed);if(translated!==trimmed)node.nodeValue=raw.replace(trimmed,translated)});
  document.querySelectorAll('[placeholder],[aria-label]').forEach(el=>{['placeholder','aria-label'].forEach(attr=>{if(el.hasAttribute(attr))el.setAttribute(attr,translateText(el.getAttribute(attr)))})});
}

document.querySelector('#languageSelect').addEventListener('change',event=>{locale=event.target.value;localStorage.setItem('pythones-language',locale);applyLocale()});
new MutationObserver(()=>applyLocale()).observe(document.body,{childList:true,subtree:true});
document.addEventListener('click',()=>setTimeout(applyLocale,0),true);
const dashboardLabelUpdate = updateOverviewState;
updateOverviewState = function(){ dashboardLabelUpdate(); applyLocale(); };
applyLocale();
