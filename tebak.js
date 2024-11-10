var i = 3
var j = 0

var nama = prompt('AYO MAIN TEBAK ANGKA' + '\nMaukan username:')
	alert('Hallo' + " " + nama);
var ayo = alert('SELAMAT BERMAIN!!!')
var p = prompt('Silahkan pilih nomor 1-10');
 
while(j < i) {
	// var nama = prompt('AYO MAIN TEBAK ANGKA' + '\nMaukan username:')
	// 	alert('Hallo' + " " + nama);
	// var ayo = alert('SELAMAT BERMAIN!!!')
	// var p = prompt('Silahkan pilih nomor 1-10'); 

	var comp = Math.random();
	if(comp < 3) {
			comp = '6'
		} else if(comp <= 2 && comp <= 9) {
			comp = '10'
		} else{
			comp = '2'
		}
		console.log(comp);


	var hasil = '';
	if(p == comp) {
		hasil = 'Kurang Tepat'
	} else if(p == '6') {
		hasil = (comp == '2') ? 'BENAR' : 'RENDAH'
	} else if(p == '10') {
		hasil = (comp == '6') ? 'BENAR' : 'RENDAH'
	} else if(p = '2') {
		hasil = (comp == '10') ? 'BENAR' : 'RENDAH'
	} else{
		hasil = 'Kamu memasukan pilihan yang salah!'
	}


	switch(i) {
		case 'p' == 'BENAR' :
			alert('Kamu' + " " + hasil + " " + '\nKesempatanmu tinggal' + " " + i)
			break;
		case 'p' == 'comp' :
			alert('Pilihanmu' + " " + hasil + " " + '\nKesempatanmu tinggal' + " " + i)
			break;
		case 'p' == 'RENDAH' :
			alert('Terlalu' + " " + hasil + " " + '\nKesempatanmu tinggal' + " " + i)
			break;
		default :
			alert('Kamu memasukan pilihan yang salah!' + " " + '\nKesempatanmu tinggal' + " " + i)
			break;
		}





	// switch(i) {
	// 	case 'hasil' = 'BENAR' :
	// 		alert('Kamu' + " " + hasil + " " + '\nKesempatanmu tinggal' + " " + i);
	// 		break;
	// 	case 'hasil' = 'RENDAH' : 
	// 		alert('Terlalu' + " " + hasil + " " + '\nKesempatanmu tinggal' + " " + i)
	// 		break;
	// 	case 'hasil' = 'Kurang Tepat' :
	// 		alert('Pilihanmu' + " " + hasil + " " + '\nKesempatanmu tinggal' + " " + i)
	// 		break;
	// 	default :
	// 		alert('Kamu memasukan huruf / angka yang salah!')
	// 		break;
	// }

	j++;
}

alert('Kesempatanmu sudah habis.')

alert('TERIMA KASIH')