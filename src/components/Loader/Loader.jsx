import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
  return <RotatingLines strokeColor="grey" strokeWidth="3" animationDuration="0.75" width="30" visible={true} />;
};
