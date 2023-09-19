import classes from "./IconNetwork.module.css";

const IconNetwork = ({ network }) => {
  return (
    <a href={network.url} target="_blank" className={classes.Container}>
      <img src={network.icon} alt={network.name} className={classes.Icon} />
    </a>
  );
};

export default IconNetwork;
