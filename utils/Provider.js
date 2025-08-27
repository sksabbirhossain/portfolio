import { MobileMenuProvider } from "@/contexts/mobileMenuContext";

const Provider = ({ children }) => {
  return <MobileMenuProvider>{children}</MobileMenuProvider>;
};

export default Provider;
