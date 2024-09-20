const kalimat = [
    " gimana kabarnya?",
    " Allhamdulillah kalau sehat :)",
    " Syafakillah Kalo sakit, semoga cepat sembuh yaa",
    " milaa masih inget janji haidar ngaa?",
    " haidar engga ingkar tau sama janji aku",
    " terserah si kalo engga percaya juga hehe",
    " tapi yang jelas haidar engga ingkar janji sama milaa",
    " haidar cuma mau ngomong beberapa kata buat mila",
    " selamat ulang tahun mila, semoga mila bisa menjadi anak yang dapat diandalkan dimanapun,dan semoga di usia baru ini milaa bisa lebih bahagia menjalani keseharian nya,terus semoga apa yang milaa inginkan segera tercapai"
];

let index = 0;

document.getElementById('klikSaya').addEventListener('click', function() {
    if (index === 0) {
        document.getElementById('headerText').textContent = "Baca sampai habis yaa";
        document.querySelector('main p').style.display = 'none';
    }

    if (index < kalimat.length) {
        document.getElementById('pesan').textContent = kalimat[index];
        index++;
    } else {
        document.getElementById('pesan').textContent = "maaf cuma bisa ngucapin kaya gini , terus makasi yaa milaa udah mau baca sampe akhir :)";
    }
});
