//import React from "react";
/*import LogoImage from "../../assets/logo.png";

export default function Logo() {
  return <img src={LogoImage} alt="logo" width={67} />;
}*/

import LogoImage from "../../assets/logo.png";

export default function Logo({ className }) {
  return <img src={LogoImage} alt="logo" width={67} className={className} />;
}

