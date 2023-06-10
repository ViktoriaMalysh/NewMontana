import { Button, Dropdown, Icon, Menu } from "semantic-ui-react";
import { currency, lang } from "../../Backend/Data";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_USER } from "../../redux/types";

const TopHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userStore = useSelector((state) => state.user.user);
  const [headerShow, setHeaderShow] = useState(false);
  const [userName, setUserName] = useState("");

  const [language, setLanguage] = useState("");
  const [curr, setCurrency] = useState("");

  useEffect(() => {
    localStorage.setItem("currency", "USD");
    setCurrency(localStorage.getItem("currency"));
    localStorage.setItem("language", "eng");
    setLanguage(localStorage.getItem("language"));
    setUserName(localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [headerShow]);

  const handleScroll = () => {
    window.scrollY > 0 ? setHeaderShow(true) : setHeaderShow(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("isUser");
    localStorage.removeItem("token");
    dispatch({ type: CLEAR_USER }).then(navigate("/"));
    // setTimeout(() => {

    // }, 1400);
  };

  return (
    <Menu
      secondary
      pointing
      className={styles.headerMenuTop}
      style={{ background: headerShow ? "#fff" : "transparent" }}
    >
      <Menu.Item className={styles.headerItemsTop} name={"item"}>
        <Icon name="phone" className={styles.iconHeaderTop} /> +2 123 4567 897
      </Menu.Item>
      <Menu.Item className={styles.headerItemsTop} name={"item"}>
        <Icon name="envelope" className={styles.iconHeaderTop} />{" "}
        info@example.com
      </Menu.Item>

      <Menu.Item className={styles.headerItemsTop}>
        <base target="_blank"></base>
        <a href="https://uk-ua.facebook.com/">
          <Icon name="facebook" className={styles.iconHeaderTopLinks} />
        </a>
      </Menu.Item>

      <Menu.Item className={styles.headerItemsTop}>
        <base target="_blank"></base>
        <a href="https://twitter.com/">
          <Icon name="twitter" className={styles.iconHeaderTopLinks} />
        </a>
      </Menu.Item>
      <Menu.Item className={styles.headerItemsTop}>
        <base target="_blank"></base>
        <a href="https://www.instagram.com/">
          <Icon name="instagram" className={styles.iconHeaderTopLinks} />
        </a>
      </Menu.Item>
      <Menu.Item className={styles.headerItemsTop}>
        <base target="_blank"></base>
        <a href="https://www.linkedin.com/">
          <Icon name="linkedin" className={styles.iconHeaderTopLinks} />
        </a>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item className={styles.headerItemsTop}>
          <Dropdown
            compact
            text={language}
            simple
            item
            className={styles.headerDropdown}
            onClick={(event) => {
              localStorage.setItem("language", event.target.lastChild.data);
              setLanguage(localStorage.getItem("language"));
            }}
          >
            <Dropdown.Menu className={styles.headerDropdownMenu}>
              {lang.map((item, key) => (
                <div key={key}>
                  <Dropdown.Item className={styles.headerDropdownItem}>
                    {item.key}
                  </Dropdown.Item>
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item className={styles.headerItemsTop}>
          <Dropdown
            compact
            text={curr}
            simple
            item
            className={styles.headerDropdown}
            onClick={(event) => {
              localStorage.setItem("currency", event.target.lastChild.data);
              setCurrency(localStorage.getItem("currency"));
            }}
          >
            <Dropdown.Menu className={styles.headerDropdownMenu}>
              {currency.map((item, key) => (
                <div key={key}>
                  <Dropdown.Item className={styles.headerDropdownItem}>
                    {item.key}
                  </Dropdown.Item>
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        {!localStorage["isUser"] && !userStore.firstName ? (
          <Menu.Item className={styles.headerItemsTop}>
            <Button className={styles.headerTopButton} onClick={handleLogin}>
              <Icon name="sign in" />
              Login
            </Button>
          </Menu.Item>
        ) : (
          <>
            <Menu.Item className={styles.headerItemsTop}>
              <span>{userName}</span>
            </Menu.Item>
            <Menu.Item className={styles.headerItemsTop}>
              <Button className={styles.headerTopButton} onClick={handleLogout}>
                <Icon name="sign-out" />
                Log out
              </Button>
            </Menu.Item>
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default TopHeader;
