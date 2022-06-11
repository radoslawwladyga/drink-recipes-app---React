import { useState, useEffect } from "react";
import classes from "./Menu.module.css";
import Logo from "../Image/icon.png";

const Account = () => {
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 2500);
    return () => clearTimeout(timer);
  }, [showAlert]);

  const displayMessage = () => {
    setShowAlert(true)
  }

  const Alert = () => {
    return (
      <div className={classes.alert}>
        <div className={classes.alertOpen}>
        Logging in to the account is temporarily suspended.
        </div>
      </div>
    );
  };

  return (
    <section className={classes.sectionLogin}>
      <img className={classes.logo} src={Logo} alt="ikona logowania" />
      <p onClick={displayMessage}>Your account</p>
      {showAlert ? Alert() : ""}
    </section>
  );
};

export default Account;
