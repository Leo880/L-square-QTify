//import React from "react";
/*import LogoImage from "../../assets/logo.png";

export default function Logo() {
  return <img src={LogoImage} alt="logo" width={67} />;
}*/
import styles from "./Logo.module.css";
import LogoImage from "../../assets/logo.png";

/*export default function Logo({ className }) {
  return <img src={LogoImage} alt="logo" width={67} className={className} />;
}*/

export default function Logo({ className = "" }) {
  return (
    <img
      className={`${styles.logo} ${className}`}
      src={LogoImage}
      alt="logo"
      width={67}
      height={40} // optional: control height for alignment
    />
  );
}
