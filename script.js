const kalimat = [
    " gimana kabarnya?",
    " Allhamdulillah kalau sehat :)",
    " Syafakillah Kalo sakit, semoga cepat sembuh yaa",
    " milaa masih inget janji aku ngaa?",
    " Aku engga ingkar tau sama janji aku",
    " terserah si kalo engga percaya juga hehe",
    " tapi yang jelas aku engga ingkar janji sama milaa",
    " aku cuma mau ngomong beberapa kata buat mila",
    " selamat ulang tahun mila, semoga mila menjadi anak yang bisa diandalkan dimanapun,dan semoga di usia baru ini milaa lebih bahagaia menjali keseharian nya"
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
        document.getElementById('pesan').textContent = "maaf cuma bisa ngucapin kaya gini , terus makasi milaa udah mau baca semuanya :)";
    }
});
