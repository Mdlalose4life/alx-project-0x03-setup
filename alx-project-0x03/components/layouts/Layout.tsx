import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";


const Layouts: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layouts;