import React from "react";
import useModal from "./useModal";
import Testmodal from "../components/Testmodal/Testmodal";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Testmodal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
