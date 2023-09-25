import { IconProps } from "./index";

const ChevronDown: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.014 16.0182C11.8825 16.0182 11.7522 15.9922 11.6307 15.9418C11.5092 15.8913 11.3989 15.8174 11.306 15.7242L5.31403 9.71525C5.22112 9.62227 5.14743 9.5119 5.09717 9.39045C5.04691 9.269 5.02107 9.13883 5.02112 9.00739C5.02116 8.87595 5.0471 8.74581 5.09744 8.62439C5.14779 8.50297 5.22155 8.39266 5.31453 8.29975C5.4075 8.20684 5.51787 8.13315 5.63932 8.08289C5.76078 8.03263 5.89094 8.00679 6.02238 8.00684C6.15382 8.00688 6.28397 8.03282 6.40539 8.08316C6.5268 8.1335 6.63712 8.20727 6.73003 8.30025L12.016 13.6002L17.316 8.31525C17.5038 8.12787 17.7583 8.02276 18.0236 8.02304C18.2889 8.02333 18.5432 8.12897 18.7305 8.31675C18.9179 8.50452 19.023 8.75904 19.0227 9.02431C19.0224 9.28958 18.9168 9.54387 18.729 9.73125L12.72 15.7262C12.5326 15.9132 12.2787 16.0182 12.014 16.0182Z" />
    </svg>
  );
};
export default ChevronDown;
