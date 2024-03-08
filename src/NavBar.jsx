import { h, Component } from 'preact';
import menuAnimationData from './assets/menu.json';
import './DefaultStyle.css'; // Importa tus estilos CSS
import './NavBar.css';
import SidebarElement from "./Sidebar/SidebarElement.jsx";
import SidebarElementLink from "./Sidebar/SidebarElementLink.jsx";
import SidebarHeader from "./Sidebar/SidebarHeader.jsx";
import Animation from "./LottieAnim.jsx";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: false
        };
    }

    toggleSidebar = () => {
        this.setState((prevState) => ({
            isSidebarOpen: !prevState.isSidebarOpen
        }));
    };

        /*componentDidMount() {
    // Renderizar la animación con Lottie
        uselottie({
            container: this.animationContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: menuAnimationData // Tu archivo JSON de animación
        });
    }*/

    render() {
        return (
            <div class="nav-bar">
                <button onClick={this.toggleSidebar} className={"nav-toggle"}>
                    {/*
                    <div className={"Animation"} ref={(elem) => (this.animationContainer = elem)}>

                    </div>
                    */}
                    <Animation animationData={menuAnimationData} value={this.state.isSidebarOpen} />
                </button>
                <div class={this.state.isSidebarOpen ? "sidebar open" : "sidebar"}>
                    {
                        /* Contenido de la barra de navegación lateral */
                        <div className={"sidebar_element root"}>
                            <SidebarHeader header_text={"Header Test"}>
                                <SidebarElementLink link_ref={'https://www.google.es/'} link_text={"Enlace a Google"}/>
                            </SidebarHeader>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default NavBar;
