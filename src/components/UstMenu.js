import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip,
} from "reactstrap";

function UstMenu() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            const limit = 25;
            if (
                document.documentElement.scrollTop > limit ||
                document.body.scrollTop > limit
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} expand="lg" color="primary">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            href="/"
                            id="navbar-brand"
                            style={{fontWeight: "bold"}}
                        >
                            BİLİM VE TEKNOLOJİ OYUNCULARI
                        </NavbarBrand>
                        <UncontrolledTooltip target="#navbar-brand">
                            ATÜ Tiyatro Öğrenci Topluluğu
                        </UncontrolledTooltip>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/oyunlar">
                                    <i className="fa-solid fa-masks-theater" style={styles.fa6icon}></i>
                                    <p>Oyunlar</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/kulis">
                                    <i className="fa-solid fa-masks-theater" style={styles.fa6icon}></i>
                                    <p>Kulis</p>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    href="#"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="now-ui-icons media-2_sound-wave"></i>
                                    <p>Etkinlikler</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/etkinliklerimiz" tag={Link}>
                                        <i className="now-ui-icons ui-1_calendar-60" style={styles.fa6icon}></i>
                                        Etkinliklerimiz
                                    </DropdownItem>
                                    <DropdownItem href="/etkinlik-takvimi" tag={Link}>
                                        <i className="now-ui-icons ui-1_calendar-60" style={styles.fa6icon}></i>
                                        Etkinlik Takvimi
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/duyurular">
                                    <i className="now-ui-icons files_paper"></i>
                                    <p>Duyurular</p>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle caret color="default" href="#" nav>
                                    <i className="fa-solid fa-info-circle" style={styles.fa6icon}></i>
                                    <p>Hakkımızda</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/hakkimizda" tag={Link}>
                                        <i className="now-ui-icons ui-1_calendar-60" style={styles.fa6icon}></i>
                                        Bilim ve Teknoloji Oyunculari
                                    </DropdownItem>
                                    <DropdownItem href="/topluluk" tag={Link}>
                                        <i className="now-ui-icons ui-1_calendar-60" style={styles.fa6icon}></i>
                                        Tiyatro Topluluğu
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/iletisim">
                                    <i className="now-ui-icons business_globe"></i>
                                    <p>İletişim</p>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

const styles = {
    fa6icon: {
        fontSize: "16px",
        marginRight: "5px",
        verticalAlign: "middle",
    }
}
export default UstMenu;
