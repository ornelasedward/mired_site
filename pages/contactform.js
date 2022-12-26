// import components
import Connect from "../components/Connect";
import Footer from "../components/Footer";

// import data
import { connectData, navData, headerData, footerData } from "../data.json";

const contactform = ({ connectData, navData, headerData, footerData }) => {
  return (
    <div className="overflow-hidden mx-auto bg-[#FDFAEC]">
      <div className="gradient_bg1">
        <Connect
          connectData={connectData}
          headerData={headerData}
          navData={navData}
        />
        <Footer footerData={footerData} />
      </div>
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      connectData,
      navData,
      headerData,
      footerData,
    },
  };
};

export default contactform;
