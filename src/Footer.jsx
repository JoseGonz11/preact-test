import './FooterStyle.css'

export function Footer() {
    return (
        <div className="Footer">
            <div className={"column-left"}>
                <div className={"link-column"}>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>Sobre nosotros</a>
                    </div>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>Enlace de prueba a "https://google.es/"</a>
                    </div>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>https://google.es/</a>
                    </div>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>No se qué poner xD</a>
                    </div>
                </div>
            </div>
            <div className={"column-center"}>
                <div className={"link-column"}>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>Aquí va un enlace</a>
                    </div>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>Test</a>
                    </div>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>Test</a>
                    </div>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>Test</a>
                    </div>
                </div>
            </div>
            <div className={"column-right"}>
                <div className={"link-column"}>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>Texto de ejemplo</a>
                    </div>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>Test</a>
                    </div>
                    <div className={"footer-link"}>
                        <a href={"https://google.es/"}>Copyright (?)</a>
                    </div>

                    <div className={"footer-link"}>
                        <a target="_blank" href="https://icons8.com/icon/nRgy12QAqQ08/menu">Menu</a> icon by <a
                        target="_blank" href="https://icons8.com">Icons8</a>
                    </div>
                </div>
            </div>
        </div>
    )
}