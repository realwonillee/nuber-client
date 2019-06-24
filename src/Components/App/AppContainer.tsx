import React from "react";
import { graphql } from "react-apollo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import theme from "../../theme";
import { ThemeProvider } from "../../typed-components";
import GlobalStyled from "../GlobalStyled";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";

const AppContainer: React.FC = ({ data }: any) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyled />
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
      </>
    </ThemeProvider>
    <ToastContainer draggable={true} position={"bottom-center"} />
  </>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
