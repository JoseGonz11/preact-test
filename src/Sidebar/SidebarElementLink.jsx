import {Component} from "preact";

class SidebarElementLink extends Component {
    constructor(props) {
        super(props);

    }

    render(props, state, context) {
        return <div className={"sidebar_element link"}>
            <a href={props.link_ref}>{props.link_text}</a>
        </div>;
    }
}

export default SidebarElementLink;