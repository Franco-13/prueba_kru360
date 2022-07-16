import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/reducer/userSlice";

import styles from "./navbar.module.css";

function Navbar() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.users.userInfo);

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserInfo(null));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.navContent}>
        <img
          className={styles.logo}
          src="https://media-exp2.licdn.com/dms/image/C4D0BAQHG4k75pL9B5Q/company-logo_200_200/0/1649637900583?e=1665619200&v=beta&t=TmopJ8MA_RaeF4eQumasR-cZeZwd-8FQU7r38Ppj9Fs"
          alt="kru 360 logo"
        />
        {user && (
          <>
            <p className={styles.rol_user}>
              Rol:
              {user?.is_admin ? " Admin" : " User"}
            </p>
            <p className={styles.email_user}>Email: {user.email}</p>
            <button className={styles.btn_secondary} onClick={logout}>
              Salir
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
