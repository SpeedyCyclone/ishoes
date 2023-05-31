import styles from "../styles/Loader.module.css";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <ScaleLoader color="#eeeeee" size={80} className={styles.loader} />
    </div>
  );
};

export default Loader;
