const Header = () => {
  const body=document.querySelector('body');
  return (
    <header>
      <h2>Where in the world?</h2>
      <button id="theme-toggle" onClick={(e)=> body.classList.toggle('dark-mode')}>
        <span className="material-symbols-outlined">
          <i className="fa-regular fa-moon"></i>
        </span>
        Dark Mode
      </button>
    </header>
  );
};
export default Header;
