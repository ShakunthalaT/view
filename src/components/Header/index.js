import "./index.css";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="menu-icon" onClick={toggleSidebar}>
        Menu
      </button>
      <h1>My App</h1>
    </div>
  );
};

export default Header;
