import { MobileMenuProvider } from "@/contexts/mobileMenuContext";
import { ToastContainer } from "react-toastify";
import ScrollAnimation from "./ScrollAnimation";

const Provider = ({ children }) => {
  return (
    <ScrollAnimation>
      <MobileMenuProvider>{children}</MobileMenuProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ScrollAnimation>
  );
};

export default Provider;
