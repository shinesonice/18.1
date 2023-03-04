import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation/MainNavigation";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
