import React from "react";
import CurrenciesDropMenu from "../../components/NavbarComponents/CurrenciesDropMenu/CurrenciesDropMenu";
import NavbarCategories from "../../components/NavbarComponents/NavbarCategories/NavbarCategories";
import classes from "./Navbar.module.css";
import Logo from "./Logo/Logo.component.js";
import ShoppingCart from "../../components/NavbarComponents/ShoppingCart/ShoppingCart";
import { isMobile } from "react-device-detect";
import { HiMenuAlt2 } from "react-icons/hi";
import NavbarCategoriesMobile from "../../components/NavbarComponents/NavbarCategoriesMobile/NavbarCategoriesMobile";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCategoriesMobileMenu: false,
      showCartMobileMenu: false,
    };
  }

  closeCategoriesMobileMenu = () => {
    this.setState({ ...this.state, showCategoriesMobileMenu: false });
  };

  render() {
    return (
      <div className={[classes.Navbar, isMobile && classes.mobile].join(" ")}>
        {isMobile ? (
          <div
            className={classes.hamburgerMenu}
            onClick={() =>
              this.setState({ ...this.state, showCategoriesMobileMenu: true })
            }
          >
            <HiMenuAlt2 />
          </div>
        ) : (
          <NavbarCategories />
        )}
        {this.state.showCategoriesMobileMenu && (
          <NavbarCategoriesMobile close={this.closeCategoriesMobileMenu} />
        )}
        <div className={classes.center}>  
           <Logo />
        </div>
     
        <div className={classes.rightSide}>
          <CurrenciesDropMenu />
          <ShoppingCart />
        </div>
      </div>
    );
  }
}

export default Navbar;
