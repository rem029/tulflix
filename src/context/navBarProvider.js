import { createContext, useState } from "react";

export const navBarContext = createContext({
  navBar: false,
  toggleNavBar: () => {},
  activePlaylist: null,
  setActivePlaylist: () => {},
});

const NavBarProvider = (props) => {
  const [navBar, setNavBar] = useState(false);
  const [activePlaylist, setActivePlaylist] = useState(null);

  const toggleNavBar = () => setNavBar((state) => !state);

  console.log("@Provider NavBar");
  return (
    <navBarContext.Provider
      value={{
        navBar: navBar,
        toggleNavBar: toggleNavBar,
        activePlaylist: activePlaylist,
        setActivePlaylist: setActivePlaylist,
      }}
    >
      {props.children}
    </navBarContext.Provider>
  );
};

export default NavBarProvider;
