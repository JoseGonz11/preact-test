import {Component} from "preact";
import LottieAnim from "../LottieAnim.jsx";
import ExpandCollapseArrowAnimation from '../assets/ExpandCollapseArrow.json'
import LottieAnimComponent from "../LottieAnim.jsx";

class SidebarHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { isCollapsed: false };
        this.onCollapseButton = this.onCollapseButton.bind(this);
    }

    onCollapseButton() {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    render(props, state, context) {
        return (
            <div className={`sidebar_element header ${state.isCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar_element header flex_container">
                    <button className="sidebar_element header collapse_button" onClick={this.onCollapseButton}>
                        <LottieAnimComponent
                            animationData={ExpandCollapseArrowAnimation}
                            speed={4}
                            value={this.state.isCollapsed}
                            onCollapseButton={this.onCollapseButton}
                        />
                    </button>
                    <p>{props.header_text}</p>
                </div>
                <div className={`sidebar_element header content ${state.isCollapsed ? 'collapsed' : ''}`}>
                    {props.children}
                </div>
            </div>
        );
    }
}

export default SidebarHeader;
