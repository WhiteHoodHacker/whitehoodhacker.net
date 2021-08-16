import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import icon96 from "../img/icon96.png"

class Navigation extends React.Component {
    render() {
        return (
            <div className="container py-5">
                <nav className="main-navbar d-flex flex-md-row flex-column navbar navbar-expand navbar-custom">
                    <span className="navbar-brand main-color-title"><img src={icon96} width="48" height="48" className="main-circle align-middle me-3" alt="Icon" />WhiteHoodHacker</span>
                    <div className="d-flex flex-row">
                        <Link className="nav-link" to="/">/home</Link>
                        <Link className="nav-link" to="/posts">/posts</Link>
                        <Link className="nav-link" to="/contact">/contact</Link>
                        <ThemeToggler>
                            {({ theme, toggleTheme }) => (
                                <div className="d-flex align-items-center">
                                    <span className="main-bottom-tooltip d-flex">
                                        <input
                                            id="dark-toggle"
                                            part="toggleCheckbox"
                                            type="checkbox"
                                            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                                            checked={theme === "dark"}
                                        />
                                        <label
                                            className="px-3"
                                            htmlFor="dark-toggle"
                                            part="toggleLabel"
                                        >
                                            <svg className={theme === "dark" ? "main-social-svg d-flex" : "main-social-svg d-none"} xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 24 24"><path d="M17.945 8c-1.139 0-2.377.129-3.395.491-2.283.828-2.791.838-5.102 0-1.016-.362-2.257-.491-3.393-.491-1.971 0-4.17.387-6.055.878v1.789c.848.255 1.068.627 1.203 1.493.381 2.443 1.256 4.84 5.068 4.84 3.037 0 4.051-2.259 4.723-4.345.34-1.06 1.662-1.087 2.008-.015.674 2.089 1.682 4.36 4.725 4.36 3.814 0 4.689-2.397 5.07-4.841.135-.866.355-1.237 1.203-1.493v-1.788c-1.887-.491-4.084-.878-6.055-.878zm-15.472 4.915c-.117-.357-.223-.724-.312-1.101-.352-1.473-.043-1.789.434-2.074.695-.418 1.973-.665 3.295-.732-2.437.554-3.474 1.117-3.417 3.907zm11.75 0c-.117-.357-.223-.724-.312-1.101-.352-1.473-.043-1.789.434-2.074.695-.418 1.973-.665 3.295-.732-2.437.554-3.474 1.117-3.417 3.907z"/></svg>
                                            <svg className={theme === "light" ? "main-social-svg d-flex" : "main-social-svg d-none"} xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/></svg>
                                        </label>
                                        <span className="main-bottom-tooltip-text d-sm-block d-none">{theme === "dark" ? "Light mode" : "Dark mode"} </span>
                                    </span>
                                </div>
                            )}
                        </ThemeToggler>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation