import { useState, useEffect } from 'react';
import { getDataAPIdetail } from '../../api/dataAPI';
import NumberFormat from 'react-number-format';
import MapaVen from '../../resources/images/mapaVen.svg';
import { VictoryPie, VictoryBar } from 'victory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'; 
import Confirmados from '../../resources/images/casosConfirmados.png';
import Recuperados from '../../resources/images/casosRecuperados.png';
import Fallecidos from '../../resources/images/casosFallecidos.png';
import Activos from '../../resources/images/casosActivos.png';
import './Consolidated.css';

function Consolidated() {
	const [estado, setEstado] = useState({});
	const [porSexo, setPorSexo] = useState({});
	const [porEdad, setPorEdad] = useState({});
	const [resumen, setResumen] = useState({});
	//
	useEffect(() => {
		async function getAsyncDetail() {
			const apiDetail = await getDataAPIdetail();
			setEstado(apiDetail.edo);
			setPorSexo(apiDetail.sex);
			setPorEdad(apiDetail.eda);
			setResumen(apiDetail.resu);
		}
		getAsyncDetail();
		document.addEventListener('readystatechange', function() {
			if (document.readyState === "complete") {
				interaccionMapa();
			}
		});
	},[]);

	const dataPie = [
		{ x: " ", y: porSexo.male },
		{ x: " ", y: porSexo.female }
	]

	const dataBar = [
		{ x: '90-99', y: porEdad['90-99'] },
		{ x: '80-89', y: porEdad['80-89'] },
		{ x: '70-79', y: porEdad['70-79'] },
		{ x: '60-69', y: porEdad['60-69'] },
		{ x: '50-59', y: porEdad['50-59'] },
		{ x: '40-49', y: porEdad['40-49'] },
		{ x: '30-39', y: porEdad['30-39'] },
		{ x: '20-29', y: porEdad['20-29'] },
		{ x: '10-19', y: porEdad['10-19'] },
		{ x: '0-9', y: porEdad['0-9'] }
	]

	function interaccionMapa() {
		// Mapa de Venezuela
		var mapaSVG:SVGDocument= document.getElementById('mapaVen').getSVGDocument();
		// Estado Amazonas
		var amazonasSVG:SVGElement = mapaSVG.getElementById("amazonas");
		amazonasSVG.onmouseover = function(e) {
			amazonasSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aAma");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bAma");
			filaTabla.style.background = "yellow";
		};
		amazonasSVG.onmouseout = function(e) {
			amazonasSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aAma");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bAma");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Anzoategui
		var anzoateguiSVG:SVGElement = mapaSVG.getElementById("anzoategui");
		anzoateguiSVG.onmouseover = function(e) {
			anzoateguiSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aAnz");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bAnz");
			filaTabla.style.background = "yellow";
		};
		anzoateguiSVG.onmouseout = function(e) {
			anzoateguiSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aAnz");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bAnz");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Apure
		var apureSVG:SVGElement = mapaSVG.getElementById("apure");
		apureSVG.onmouseover = function(e) {
			apureSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aApu");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bApu");
			filaTabla.style.background = "yellow";
		};
		apureSVG.onmouseout = function(e) {
			apureSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aApu");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bApu");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Aragua
		var araguaSVG:SVGElement = mapaSVG.getElementById("aragua");
		araguaSVG.onmouseover = function(e) {
			araguaSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aAra");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bAra");
			filaTabla.style.background = "yellow";
		};
		araguaSVG.onmouseout = function(e) {
			araguaSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aAra");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bAra");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Barinas
		var barinasSVG:SVGElement = mapaSVG.getElementById("barinas");
		barinasSVG.onmouseover = function(e) {
			barinasSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aBar");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bBar");
			filaTabla.style.background = "yellow";
		};
		barinasSVG.onmouseout = function(e) {
			barinasSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aBar");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bBar");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Bolivar
		var bolivarSVG:SVGElement = mapaSVG.getElementById("bolivar");
		bolivarSVG.onmouseover = function(e) {
			bolivarSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aBol");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bBol");
			filaTabla.style.background = "yellow";
		};
		bolivarSVG.onmouseout = function(e) {
			bolivarSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aBol");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bBol");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Carabobo
		var caraboboSVG:SVGElement = mapaSVG.getElementById("carabobo");
		caraboboSVG.onmouseover = function(e) {
			caraboboSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aCar");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bCar");
			filaTabla.style.background = "yellow";
		};
		caraboboSVG.onmouseout = function(e) {
			caraboboSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aCar");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bCar");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Cojedes
		var cojedesSVG:SVGElement = mapaSVG.getElementById("cojedes");
		cojedesSVG.onmouseover = function(e) {
			cojedesSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aCoj");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bCoj");
			filaTabla.style.background = "yellow";
		};
		cojedesSVG.onmouseout = function(e) {
			cojedesSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aCoj");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bCoj");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Delta Amacuro
		var delta_amacuroSVG:SVGElement = mapaSVG.getElementById("delta_amacuro");
		delta_amacuroSVG.onmouseover = function(e) {
			delta_amacuroSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aDel");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bDel");
			filaTabla.style.background = "yellow";
		};
		delta_amacuroSVG.onmouseout = function(e) {
			delta_amacuroSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aDel");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bDel");
			filaTabla.style.background = "#b0aeae";
		};
		// Distrito Capital
		var dcSVG:SVGElement = mapaSVG.getElementById("dc");
		dcSVG.onmouseover = function(e) {
			dcSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aDis");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bDis");
			filaTabla.style.background = "yellow";
		};
		dcSVG.onmouseout = function(e) {
			dcSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aDis");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bDis");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Falcon
		var falconSVG:SVGElement = mapaSVG.getElementById("falcon");
		falconSVG.onmouseover = function(e) {
			falconSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aFal");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bFal");
			filaTabla.style.background = "yellow";
		};
		falconSVG.onmouseout = function(e) {
			falconSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aFal");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bFal");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Guarico
		var guaricoSVG:SVGElement = mapaSVG.getElementById("guarico");
		guaricoSVG.onmouseover = function(e) {
			guaricoSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aGuá");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bGuá");
			filaTabla.style.background = "yellow";
		};
		guaricoSVG.onmouseout = function(e) {
			guaricoSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aGuá");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bGuá");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado La Guaira
		var la_guairaSVG:SVGElement = mapaSVG.getElementById("la_guaira");
		la_guairaSVG.onmouseover = function(e) {
			la_guairaSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aLa");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bLa");
			filaTabla.style.background = "yellow";
		};
		la_guairaSVG.onmouseout = function(e) {
			la_guairaSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aLa");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bLa");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Lara
		var laraSVG:SVGElement = mapaSVG.getElementById("lara");
		laraSVG.onmouseover = function(e) {
			laraSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aLar");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bLar");
			filaTabla.style.background = "yellow";
		};
		laraSVG.onmouseout = function(e) {
			laraSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aLar");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bLar");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Merida
		var meridaSVG:SVGElement = mapaSVG.getElementById("merida");
		meridaSVG.onmouseover = function(e) {
			meridaSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aMér");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bMér");
			filaTabla.style.background = "yellow";
		};
		meridaSVG.onmouseout = function(e) {
			meridaSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aMér");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bMér");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Miranda
		var mirandaSVG:SVGElement = mapaSVG.getElementById("miranda");
		mirandaSVG.onmouseover = function(e) {
			mirandaSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aMir");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bMir");
			filaTabla.style.background = "yellow";
		};
		mirandaSVG.onmouseout = function(e) {
			mirandaSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aMir");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bMir");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Monagas
		var monagasSVG:SVGElement = mapaSVG.getElementById("monagas");
		monagasSVG.onmouseover = function(e) {
			monagasSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aMon");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bMon");
			filaTabla.style.background = "yellow";
		};
		monagasSVG.onmouseout = function(e) {
			monagasSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aMon");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bMon");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Nueva Esparta
		var nueva_espartaSVG:SVGElement = mapaSVG.getElementById("nueva_esparta");
		nueva_espartaSVG.onmouseover = function(e) {
			nueva_espartaSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aNue");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bNue");
			filaTabla.style.background = "yellow";
		};
		nueva_espartaSVG.onmouseout = function(e) {
			nueva_espartaSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aNue");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bNue");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Portuguesa
		var portuguesaSVG:SVGElement = mapaSVG.getElementById("portuguesa");
		portuguesaSVG.onmouseover = function(e) {
			portuguesaSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aPor");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bPor");
			filaTabla.style.background = "yellow";
		};
		portuguesaSVG.onmouseout = function(e) {
			portuguesaSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aPor");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bPor");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Sucre
		var sucreSVG:SVGElement = mapaSVG.getElementById("sucre");
		sucreSVG.onmouseover = function(e) {
			sucreSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aSuc");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bSuc");
			filaTabla.style.background = "yellow";
		};
		sucreSVG.onmouseout = function(e) {
			sucreSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aSuc");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bSuc");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Tachira
		var tachiraSVG:SVGElement = mapaSVG.getElementById("tachira");
		tachiraSVG.onmouseover = function(e) {
			tachiraSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aTác");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bTác");
			filaTabla.style.background = "yellow";
		};
		tachiraSVG.onmouseout = function(e) {
			tachiraSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aTác");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bTác");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Trujillo
		var trujilloSVG:SVGElement = mapaSVG.getElementById("trujillo");
		trujilloSVG.onmouseover = function(e) {
			trujilloSVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aTru");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bTru");
			filaTabla.style.background = "yellow";
		};
		trujilloSVG.onmouseout = function(e) {
			trujilloSVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aTru");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bTru");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Yaracuy
		var yaracuySVG:SVGElement = mapaSVG.getElementById("yaracuy");
		yaracuySVG.onmouseover = function(e) {
			yaracuySVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aYar");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bYar");
			filaTabla.style.background = "yellow";
		};
		yaracuySVG.onmouseout = function(e) {
			yaracuySVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aYar");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bYar");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Zulia1
		var zulia1SVG:SVGElement = mapaSVG.getElementById("zulia1");
		zulia1SVG.onmouseover = function(e) {
			zulia1SVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			var zulia22SVG:SVGElement = mapaSVG.getElementById("zulia2");
			zulia22SVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aZul");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bZul");
			filaTabla.style.background = "yellow";
		};
		zulia1SVG.onmouseout = function(e) {
			zulia1SVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			var zulia22SVG:SVGElement = mapaSVG.getElementById("zulia2");
			zulia22SVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aZul");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bZul");
			filaTabla.style.background = "#b0aeae";
		};
		// Estado Zulia2
		var zulia2SVG:SVGElement = mapaSVG.getElementById("zulia2");
		zulia2SVG.onmouseover = function(e) {
			zulia2SVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			var zulia12SVG:SVGElement = mapaSVG.getElementById("zulia1");
			zulia12SVG.style="fill:yellow;stroke-width:3;stroke:white"; 
			//
			var filaTabla = document.querySelector(".aZul");
			filaTabla.style.background = "yellow";
			filaTabla = document.querySelector(".bZul");
			filaTabla.style.background = "yellow";
		};
		zulia2SVG.onmouseout = function(e) {
			zulia2SVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			var zulia12SVG:SVGElement = mapaSVG.getElementById("zulia1");
			zulia12SVG.style="fill:#bdc0bb;stroke-width:3;stroke:white";
			//
			var filaTabla = document.querySelector(".aZul");
			filaTabla.style.background = "#b0aeae";
			filaTabla = document.querySelector(".bZul");
			filaTabla.style.background = "#b0aeae";
		};
	}

	return(
		<section id="estadisticas" className="secciones">
			<div className="contenedor-seccion">
				<p className="secciones__titulo">
					Consolidados
				</p>
				<div id="estadisticas__contenido">
					<p className="estadisticas__titulos">CASOS POR ESTADO</p>
					<div id="estadisticas__estado">
						<div id="estado__tabla">
							<table>
								<thead>
									<tr id="tabla_header">
										<td colSpan="2">CASOS COMUNITARIOS</td>
									</tr>
								</thead>
								<tbody>	
								{
									Object.keys(estado).map((oneKey,i)=>{
										return (
											<tr id="tabla_lineas">
												<td className={ "tabla_texto a" + oneKey.substring(0,3).trim() }>{oneKey}</td>
												<td className={ "tabla_valores b" + oneKey.substring(0,3).trim() }>
													<NumberFormat value={ estado[oneKey] } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
												</td>
											</tr> 
										)
									})
								}   
								</tbody>
							</table>
						</div>
						<div id="estado__mapa">
							<object data={ MapaVen } type="image/svg+xml" id="mapaVen" title="Mapa"></object>
						</div>
					</div>
					<div id="estadisticas_varias">
						<div id="casos_sexo">
							<p className="porcasos">CASOS POR SEXO</p>
							<div className="varias">
								<div id="content_sexo">
									<VictoryPie
										data={ dataPie }
										colorScale={['#383d5e', '#f96a66']}
										padding={{ top: 30, bottom: 0, right: 50, left:50 }}
									/>
								</div>
								<div id="detal_sexo">
									<div className="sexos">
										<p><FontAwesomeIcon id="hombres" icon={ faMale } /></p>
										<p className="til_sexo">HOMBRES</p>
										<p className="val_sexo">
											<NumberFormat className="resum__valores" value={ porSexo.male } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
										</p>
									</div>
									<div className="sexos">
										<p><FontAwesomeIcon id="mujeres" icon={ faFemale } /></p>
										<p className="til_sexo">MUJERES</p>
										<p className="val_sexo">
											<NumberFormat className="resum__valores" value={ porSexo.female } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
										</p>
									</div>
								</div>  
							</div>
						</div>
						<div id="casos_edad">
							<p className="porcasos">CASOS POR EDAD</p>
							<div className="varias">
								<div id="content_edad">
									<VictoryBar horizontal
										data={ dataBar }
										labels={({ datum }) => `<${datum.x}> años: [${datum.y}]`}
										style={{
											data: {
												fill: "#f96a66",
												width: 25
											}
										}}
										height={380}
										padding={{ top: 60, bottom: 50, right: 200, left:40 }}
									/>
								</div>
							</div>
						</div>
						<div id="casos_resumen">
							<p className="porcasos">RESUMEN</p>
							<div className="varias">
								<div id="resumiendo">
									<div className="resum__data">
										<p className="resum__datos"><span><img src={ Confirmados } alt="" /></span>CASOS CONFIRMADOS</p>
										<NumberFormat className="resum__valores" value={ resumen.Confirmed } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
									</div>
									<div className="resum__data">
										<p className="resum__datos"><span><img src={ Recuperados } alt="" /></span>CASOS RECUPERADOS</p>
										<NumberFormat className="resum__valores" value={ resumen.Recovered } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
									</div>
									<div className="resum__data">
										<p className="resum__datos"><span><img src={ Fallecidos } alt="" /></span>CASOS FALLECIDOS</p>
										<NumberFormat className="resum__valores" value={ resumen.Deaths } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
									</div>
									<div className="resum__data">
										<p className="resum__datos"><span><img src={ Activos } alt="" /></span>CASOS ACTIVOS</p>
										<NumberFormat className="resum__valores" value={ resumen.Active } displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalSeparator={'.'} decimalScale={0} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Consolidated;