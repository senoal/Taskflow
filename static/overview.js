function updateOverviewState() {
  const active = Number(document.querySelector('#activeCount').textContent) || 0;
  const completed = Number(document.querySelector('#completedCount').textContent) || 0;
  const total = Number(document.querySelector('#totalCount').textContent) || 0;
  const canceled = Number(document.querySelector('#canceledCount').textContent) || 0;
  const dueToday = Number(document.querySelector('#todayCount').textContent) || 0;
  document.querySelector('#activeLabel').textContent = active ? `${active} proyek sedang dalam pengerjaan` : 'Tidak ada proyek aktif saat ini';
  document.querySelector('#completedLabel').textContent = completed ? `${completed} proyek berhasil diselesaikan` : 'Belum ada proyek yang selesai';
  document.querySelector('#totalLabel').textContent = total ? `${total} proyek dalam portofolio` : 'Belum ada proyek dalam workspace';
  document.querySelector('#canceledLabel').textContent = canceled ? `${canceled} proyek dihentikan` : 'Tidak ada proyek yang dihentikan';
  const deadline = document.querySelector('#deadlineCard');
  deadline.classList.toggle('has-warning', dueToday > 0);
  document.querySelector('#deadlineLabel').textContent = dueToday ? `${dueToday} proyek memerlukan perhatian hari ini` : 'Tidak ada tenggat hari ini';
}
new MutationObserver(updateOverviewState).observe(document.querySelector('#activeCount'), {childList:true, characterData:true, subtree:true});
new MutationObserver(updateOverviewState).observe(document.querySelector('#completedCount'), {childList:true, characterData:true, subtree:true});
new MutationObserver(updateOverviewState).observe(document.querySelector('#todayCount'), {childList:true, characterData:true, subtree:true});
new MutationObserver(updateOverviewState).observe(document.querySelector('#totalCount'), {childList:true, characterData:true, subtree:true});
new MutationObserver(updateOverviewState).observe(document.querySelector('#canceledCount'), {childList:true, characterData:true, subtree:true});
updateOverviewState();
