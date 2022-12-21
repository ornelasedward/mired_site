// import components
import Connect from "../components/Connect";

// import data
import { connectData, navData, headerData } from "../data.json";

const contactform = ({ connectData, navData, headerData }) => {
  return (
    <div className="overflow-hidden mx-auto bg-[#FDFAEC]">
      <div className="gradient_bg1">
        <Connect
          connectData={connectData}
          headerData={headerData}
          navData={navData}
        />
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
    },
  };
};

export default contactform;
