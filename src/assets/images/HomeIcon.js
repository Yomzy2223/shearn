import React from "react";
import { NavLink } from "react-router-dom";

export const HomeIcon = ({ fill, path }) => {
  return (
    <NavLink to={path}>
      <svg
        width="32"
        height="26"
        viewBox="0 0 32 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.4327 14.668V24.1952C27.4327 24.5392 27.307 24.8369 27.0555 25.0884C26.8041 25.3398 26.5064 25.4655 26.1624 25.4655H18.5406V17.8437H13.4594V25.4655H5.83763C5.49359 25.4655 5.19587 25.3398 4.94445 25.0884C4.69304 24.8369 4.56733 24.5392 4.56733 24.1952V14.668C4.56733 14.6547 4.57064 14.6349 4.57726 14.6084C4.58387 14.5819 4.58718 14.5621 4.58718 14.5489L16 5.14073L27.4128 14.5489C27.4261 14.5753 27.4327 14.615 27.4327 14.668ZM31.8589 13.2984L30.6283 14.7672C30.5224 14.8863 30.3835 14.9591 30.2114 14.9855H30.1519C29.9799 14.9855 29.8409 14.9392 29.7351 14.8466L16 3.39407L2.26492 14.8466C2.10613 14.9524 1.94735 14.9988 1.78856 14.9855C1.61654 14.9591 1.4776 14.8863 1.37174 14.7672L0.141144 13.2984C0.035286 13.1661 -0.0110269 13.0106 0.00220538 12.832C0.0154376 12.6533 0.088215 12.5111 0.220538 12.4052L14.4915 0.516058C14.915 0.172019 15.4178 0 16 0C16.5822 0 17.085 0.172019 17.5085 0.516058L22.3515 4.56513V0.694693C22.3515 0.509442 22.411 0.357271 22.5301 0.238181C22.6492 0.11909 22.8014 0.0595451 22.9866 0.0595451H26.7975C26.9828 0.0595451 27.1349 0.11909 27.254 0.238181C27.3731 0.357271 27.4327 0.509442 27.4327 0.694693V8.79283L31.7795 12.4052C31.9118 12.5111 31.9846 12.6533 31.9978 12.832C32.011 13.0106 31.9647 13.1661 31.8589 13.2984Z"
          fill={`${fill || "#ABB0AE"}`}
        />
      </svg>
    </NavLink>
  );
};
