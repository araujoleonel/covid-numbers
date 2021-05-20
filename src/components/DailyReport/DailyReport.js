import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; 
import NumberFormat from 'react-number-format';
import Confirmados from '../../resources/images/casosConfirmados.png';
import Recuperados from '../../resources/images/casosRecuperados.png';
import Fallecidos from '../../resources/images/casosFallecidos.png';
import Activos from '../../resources/images/casosActivos.png';
import { getDataAPI } from '../../api/dataAPI';
import moment from 'moment';
import 'moment/locale/es';
import './DailyReport.css';

function DailyReport() {
	const [fechas, setFechas] = useState([]);
	const [reporteDia, setReporteDia] = useState({});
	const [dia, setDia] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getAsync() {
			const dataAPI = await getDataAPI();
			setFechas(dataAPI.fechas);
			setDia(dataAPI.diarep);
			setReporteDia(dataAPI.reportdia);
			setLoading(dataAPI.load);
		}
		getAsync();
	},[]);

	function getReporteDia(buscaFecha){
		for(var n=0; n<fechas.length; n++){
			if(fechas[n].Date === buscaFecha){
				setReporteDia({
					Confirmed: fechas[n].Confirmed.New,
					Recovered: fechas[n].Recovered.New,
					Deaths: fechas[n].Deaths.New,
					Active: fechas[n].Active.Count
				});
				moment.locale('es'); 
				var diaReporte = moment(fechas[n].Date).format('DD MMMM').toUpperCase();
				setDia(diaReporte);
				break;
			}
		}
	}

	return(
		<section id="diarios" className="secciones">
			<div className="contenedor-seccion">
				<p className="secciones__titulo">
					Diarios
				</p>
				<div id="diarios_contenido">
					<div id="diarios__select">
						<p id="reportados">Días reportados:</p>
						<select disabled={ loading } onChange = { (e) => {
							const selectedFecha = e.target.value;
							getReporteDia(selectedFecha);
						}}>
							{fechas.map( tfechas => (
								<option key={ tfechas.Date } value={ tfechas.Date }>
									{ tfechas.Date }
								</option>
							))}
						</select>
						<div id="loading">
							{ loading ? <div style={{marginBottom:'90px'}}><Loader type="Oval" color="#00BFFF" height="60" width="60" /></div> : <div></div> }
						</div>
					</div>
					<div id="diarios__reporte">
						<p id="reporte-del-dia"><span><FontAwesomeIcon icon={ faCalendarAlt } /></span>
							{ dia }
						</p>
						<div className="diarios__data">
							<p className="diarios__datos"><span><img src={ Confirmados } alt="" /></span>CASOS CONFIRMADOS</p>
							<NumberFormat className="diarios__valores" value={ reporteDia.Confirmed } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
						</div>
						<div className="diarios__data">
							<p className="diarios__datos"><span><img src={ Recuperados } alt="" /></span>CASOS RECUPERADOS</p>
							<NumberFormat className="diarios__valores" value={ reporteDia.Recovered } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
						</div>
						<div className="diarios__data">
							<p className="diarios__datos"><span><img src={ Fallecidos } alt="" /></span>CASOS FALLECIDOS</p>
							<NumberFormat className="diarios__valores" value={ reporteDia.Deaths } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
						</div>
						<div className="diarios__data">
							<p className="diarios__datos"><span><img src={ Activos } alt="" /></span>CASOS ACTIVOS</p>
							<NumberFormat className="diarios__valores" value={ reporteDia.Active } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DailyReport;