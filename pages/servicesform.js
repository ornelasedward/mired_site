// import components
import Tiers from "../components/Tiers";
import Footer from "../components/Footer";

// import data
import { tiersData, navData, headerData, footerData } from "../data.json";

const servicesform = ({ tiersData, navData, headerData, footerData }) => {
  return (
    <div className="overflow-hidden mx-auto bg-[#FDFAEC]">
      <div className="gradient_bg1">
        <Tiers
          tiersData={tiersData}
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
      tiersData,
      navData,
      headerData,
      footerData,
    },
  };
};

export default servicesform;
