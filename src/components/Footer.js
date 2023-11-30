import { Link } from "react-router-dom";
import BotBar from "../styles/footerstyle";

const Footer = props => {
  return (
    <BotBar>
      <Link to="/home">{props.children}</Link>
    </BotBar>
  );
};

export default Footer;
