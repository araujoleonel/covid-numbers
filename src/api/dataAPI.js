import axios from 'axios';
import moment from 'moment';
import 'moment/locale/es';

export async function getDataAPI() {
	var tempFechas = [];
	var reportedeldia = {};
	var diadelreporte = '';
	var loadi = true;
	try { 
		//await axios.get('https://covid19.patria.org.ve/api/v1/timeline').then(response => {
		await axios.get('http://localhost/apiCovid/patria-timeline.php').then(response => {
			var nfechas = response.data.length;
			var sw = 0;
			for(var n=nfechas-1; n>=0; n--){
				tempFechas.push(
					response.data[n]
				);
				if(sw === 0){
					reportedeldia = {
						Confirmed: response.data[n].Confirmed.New,
						Recovered: response.data[n].Recovered.New,
						Deaths: response.data[n].Deaths.New,
						Active: response.data[n].Active.Count
					};
					moment.locale('es'); 
					diadelreporte = moment(response.data[n].Date).format('DD MMMM').toUpperCase();
					sw = 1;
				}
			}
			loadi = false;
		});
		return {
			fechas: tempFechas,
			reportdia: reportedeldia,
			diarep: diadelreporte,
			load: loadi
		};
	} catch (error) {
		console.error(error);
	}
}

