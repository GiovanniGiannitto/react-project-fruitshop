import LogoImg from "../assets/logo.png";

export const Logo = ({ logoStyle }) => {
  return <img className={logoStyle} src={LogoImg} alt="orangeLogo" />;
};
