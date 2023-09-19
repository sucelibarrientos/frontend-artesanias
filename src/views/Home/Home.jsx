import classes from "./Home.module.css";
import Navbar from "./../../components/Navbar/Navbar";
import { useEffect } from "react";
import config from "./../../config/config";
import text from "./../../config/text";
import networks from "./../../config/networks";
import IconNetwork from "./IconNetwork/IconNetwork";

function Home() {
  useEffect(() => {
    document.title = config.title.main;
  }, []);

  return (
    <div className={classes.Container}>
      <Navbar />
      <div className={classes.Header}>
        <img src={config.image.home} className={classes.Fondo} alt="fondo" />
        <h1 className={classes.Title}>{text.home.title}</h1>
        {networks.length !== 0 && (
          <div className={classes.SocialNetworks}>
            {networks.map((network)=>{
              return <IconNetwork key={network.id} network={network}/>
            })}
          </div>
        )}
      </div>
      <h2 className={classes.SubTitle}>{text.home.subtitle}</h2>
      <p className={classes.Description}>{text.home.descrition}</p>
    </div>
  );
}

export default Home;
