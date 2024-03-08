import {Component} from "preact";

class SidebarElement extends Component {
    constructor(props) {
        super(props);

    }



    render(props, state, context) {
        return <div className={`sidebar_element ${context.className}`}>{props.children}</div>;
    }
}

export default SidebarElement;