import Content from "../styles/mainstyle";

const Main = props => {
  console.log(props);
  return <Content>{props.children}</Content>;
};

export default Main;
