import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Scrollspy from "react-scrollspy"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#222222d8`,
      // marginBottom: `1.45rem`,
    }}
    className="site-header sticky-header transparent"
  >
    <div
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        maxWidth: 360,
        float: 'left',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav id="site-navigation" className="main-navigation" role="navigation">
      <ul className="nav-menu">
        <li
          id="menu-item-42"
          className="menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-42"
        >
          <a href="#features">Inicio</a>
        </li>
        <li
          id="menu-item-44"
          className="menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-44"
        >
          <a href="#about">Acerca de</a>
        </li>
        <li
          id="menu-item-49"
          className="menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-49"
        >
          <a href="#video">Showreel</a>
        </li>
        <li
          id="menu-item-45"
          className="menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-45"
        >
          <a href="#services">Servicios</a>
        </li>
        <li
          id="menu-item-46"
          className="menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-46"
        >
          <a href="#clients">Clientes</a>
        </li>
        <li
          id="menu-item-48"
          className="menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-48"
        >
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
