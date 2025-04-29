import styles from "./Icon.module.scss";

export const IconBox = ({ icon }) => {
  return (
    <div className={styles.iconCustom}>
      <i className={icon}></i>
    </div>
  );
};

export default IconBox;
