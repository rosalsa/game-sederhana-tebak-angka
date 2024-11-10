var nilaiAwal = 1;
var angka = 0;
var jmlAngka = 3
while(angka <= 3) {

	//pilihan player
	var p = prompt('AYO MAIN TEBAK ANGKA!!' + " " + '\nSilahkan pilih nomor 1-10');


	//generator komputer
	//bilangan random
	var comp = Math.random();

	if(comp < 3) {
			comp = '6'
		} else if(comp >= 2 && comp < 9) {
			comp = '10'
		} else{
			comp = '2'
			
	console.log(comp);

	var hasil = ' ';
	//rules
	if(p == comp) {
		hasil = 'MENDEKATI!!'
	} else if(p = '5') {
		hasil = (comp == '5') ? 'BENAR!!' : 'RENDAH!!';
	} else if(p = '4') {
		hasil = (comp == '5') ? 'BENAR!!' : 'RENDAH!!';
	} else if(p = '2') {
		hasil = (comp == '7') ? 'BENAR!!' : 'RENDAH!!';
	} else{
		hasil = 'Angka yang anda pilih SALAH!!';
	}


	//hasil
	switch(angka) {
	case 'hasil' + p == 'BENAR' :
		alert('Kamu' + " " + hasil + " " + '\nKesempatanmu tinggal' + " " + angka)
		break;
	case 'hasil' + p == comp :
		alert('Pilihanmu' + " " + hasil + " " + '\nKesempatanmu tinggal' + " " + angka)
		break;
	default :
		alert('Terlalu' + " " + hasil + " " + '\nKesempatanmu tinggal' + " " + angka)
		break;
	}




		// for(var angka; angka < jmlAngka; angka++) {
		// 	if(angka == 1 || angka == 2 || angka == 3 || angka == 4) {
		// 		alert('Kesempatanmu tinggal' + " " + angka)
		// 	} else{
		// 		alert('Kesempatanmu HABIS.')
		// 	}
		// }


		// if(p == 'Benar') {
		//   	alert('Kamu' + " " + hasil)
		//   } else if(p == comp) {
		//   	alert('Pilihanmu' + " " + hasil)
		//   } else{
		//   	alert('Terlalu' + " " + hasil)
		//   }

	nilaiAwal++;	

}




