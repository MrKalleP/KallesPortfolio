import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectIsOn } from "../Redux/Theme/LightSwitcherSlice";

const Darkmode = () => {
  const theme = useSelector(selectIsOn);
  const send = useDispatch();
  const discoloration = () => send(toggleTheme());

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );
  }, [theme]);

  return (
    <div onClick={() => discoloration()} className="LightSwitcher">
      {theme && <i className="fa-regular fa-lightbulb">theme</i>}
      {!theme && <i className="fa-solid fa-lightbulb">theme</i>}
    </div>
  );
};

export default Darkmode;

/*I use Redux for managing the theme state, and that updates the document's `data-theme` attribute based on the current theme and i use Font awesome icons that change the lightbulb after onClick*/
