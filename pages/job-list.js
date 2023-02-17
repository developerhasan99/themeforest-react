import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import JobListV1 from "../components/job-listing-pages/job-list";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List" />
      <JobListV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
