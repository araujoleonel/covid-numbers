import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import Covid from '../../resources/images/covid-19.png';
import './Navigation.css';

function Navigation() {
	
	function activaOpcion(e) {
		var opciones = document.querySelectorAll(".navega__enlaces a");
		opciones.forEach(opc => opc.classList.remove("navega__activo"));
		e.target.classList.add("navega__activo");
	}

  	var oculto = true;

	function mostrarMenu() {
		var elemento = document.getElementById("navega__menu");
		elemento.style.transform = "translateX(-100%)";
		oculto = false;
	}

	function ocultarMenu() {
		var elemento = document.getElementById("navega__menu");
		if(!oculto){
			elemento.style.transform = "translateX(100%)";
			oculto = true;
		}
	}

	window.addEventListener("resize", function () {
		if (window.innerWidth >= 730) { 
			var elemento = document.getElementById("navega__menu");
			if(oculto){
				elemento.style.transform = "translateX(0%)";
			}else{
				elemento.style.transform = "translateX(0%)";
			}
		}
	});
	return (
		<div id="contenedorHeaderNav">
			<div id="headerNav">
				<header>
					<div id="linea1">
						<p className="texto-covid">LOS NUMEROS DEL</p>
					</div>
					<div id="linea2">
						<img id="covid-19" src={ Covid } alt="" /><p className="texto-covid">EN</p><h3>VENEZUELA</h3>
					</div>
				</header>
				<nav id="navega">
					<div id="navega__contenedor">
						<ul id="navega__menu" onClick={ ocultarMenu }>
							<li className="navega__enlaces">
								<a href="#diarios" data-ref="diarios" onClick={ activaOpcion }>Diarios</a>
							</li>
							<li className="navega__enlaces">
								<a href="#estadisticas" data-ref="estadisticas" onClick={ activaOpcion }>Consolidados</a>
							</li>
						</ul>
						<div id="navega_icono" onClick={ mostrarMenu }>
							<FontAwesomeIcon icon={ faBars } />
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Navigation;

