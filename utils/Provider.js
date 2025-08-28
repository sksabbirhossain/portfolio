import { MobileMenuProvider } from "@/contexts/mobileMenuContext";
import ScrollAnimation from "./ScrollAnimation";

const Provider = ({ children }) => {
  return (
    <ScrollAnimation>
      <MobileMenuProvider>{children}</MobileMenuProvider>
    </ScrollAnimation>
  );
};

export default Provider;
