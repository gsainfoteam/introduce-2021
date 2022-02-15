import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "config/mediaQuery";
import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
  return useMediaQuery({
    query: `(${MEDIA_QUERY_WIDTH_MOBILE_WIDTH})`,
  });
};

export default useIsMobile;
