var kesempatan = 3;
var angka = 0;

var nama = prompt('Hallo Selamat Datang' + " " + '\nSilahkan masukan username :');
alert('Selamat Datang' + " " + nama);
alert('GAME TEBAK ANGKA 1-10' + " " + 'Kamu memiliki' + " " + kesempatan + " " + 'kesempatan');
alert('Selamat Bermain');

kesempatan--

while(kesempatan >= 0) {
	var user = prompt('Masukan angka')
	var comp = Math.random

	console.log(comp);

	if(user == comp) {
		alert('Tebakanmu BENAR' + " " + '\nAngka yang dicari' + " " + comp);
		break;
	} else if(kesempatan == 0) {
		alert('Kesempatanmu habis');
		break;
	} else if(user > comp) {
		alert('Tebakanmu terlalu tinggi' + " " + '\nKamu punya' + " " + kesempatan + " " + 'kesempatan.');
	} else if(user < comp) { 
		alert('Tebakanmu terlalu rendah' + " " + '\nKamau punya' + " " + kesempatan + " " + 'kesempatan.');
		kesempatan--
	}
}

alert('TERIMA KASIH!!')