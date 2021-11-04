import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Mentor</span>Ship
        <p className={headerStyles.description}>What mentorship means to me.</p>
      </h1>
    </div>
  );
};

export default Header;
