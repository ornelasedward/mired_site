// import components
import Connect from "../components/Connect";

// import data
import { connectData } from "../data.json";

const contactform = ({ connectData }) => {
  return (
    <div className="overflow-hidden mx-auto bg-[#FDFAEC]">
      <div className="gradient_bg1">
        <Connect connectData={connectData} />
      </div>
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      connectData,
    },
  };
};

export default contactform;
