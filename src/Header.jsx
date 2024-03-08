import { h, Component } from 'preact';
import './HeaderStyle.css';
import siteLogo from './assets/site-logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: true,
            isAtTop: true
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const isAtTop = window.scrollY === 0; // Verifica si la posición vertical del scroll es 0
        this.setState({ isAtTop });
    }

    toggleExpanded = () => {
        this.setState(prevState => ({
            isAtTop: !prevState.isAtTop
        }));
    };

    render() {
        const { isExpanded, isAtTop } = this.state;
        return (
            <div id="Header" className={`Header ${isAtTop ? 'extended' : 'collapsed'}`}>
                <div className={"header-left"}>
                    <p className={"fallback-text"}>Página de prueba</p>
                    <img className={"TitleLogo"} src={siteLogo} onError={(e) => { e.target.style.display = 'none'; }} alt="Logo" />
                </div>
                <div className={"header-center"}>
                    <button onClick={this.toggleExpanded}>
                        <p>Abrir / Cerrar</p>
                    </button>
                </div>
                <div className={"header-right"}>
                    <p>Texto de la derecha</p>
                </div>
            </div>
        );
    }
}

export default Header;
