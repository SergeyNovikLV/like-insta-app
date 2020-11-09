// import React from "react";

// import { ModalContext } from "../../contexts/context";

// const modalStyles = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   background: "blue"
// };

// const Modal = () => {
//   return (
//     <ModalContext.Consumer>
//       {context => {
//         if (context.showModal) {
//           return (
//             <div style={modalStyles}>
//               <h1>I'm a Modal!</h1>
//               <button onClick={context.toggleModal}>Hide Me</button>
//             </div>
//           );
//         }

//         return null;
//       }}
//     </ModalContext.Consumer>
//   );
// };

// export default Modal;