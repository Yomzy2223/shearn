import React from "react";
import { NavLink } from "react-router-dom";

export const OrderIcon = ({ fill, path }) => {
  return (
    <NavLink to={path}>
      <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.68485 9.94848C6.06177 9.94848 6.42326 10.0982 6.68979 10.3647C6.95632 10.6313 7.10606 10.9928 7.10606 11.3697C9.33898 11.3664 11.5075 12.1176 13.2599 13.5015H16.3439C18.2384 13.5015 19.9396 14.3258 21.1107 15.6333H25.5818C26.9252 15.633 28.2412 16.0134 29.3772 16.7306C30.5132 17.4477 31.4226 18.4722 32 19.6852C28.6388 24.1208 23.197 27.003 17.0545 27.003C13.0894 27.003 9.7353 26.146 7.02078 24.6467C6.92136 24.921 6.73973 25.1581 6.50064 25.3254C6.26156 25.4928 5.97668 25.5823 5.68485 25.5818H1.42121C1.04428 25.5818 0.682792 25.4321 0.416263 25.1655C0.149734 24.899 0 24.5375 0 24.1606V11.3697C0 10.9928 0.149734 10.6313 0.416263 10.3647C0.682792 10.0982 1.04428 9.94848 1.42121 9.94848H5.68485ZM7.10748 14.2121L7.10606 21.3494L7.17001 21.3949C9.72109 23.1856 13.0439 24.1606 17.0545 24.1606C21.3239 24.1606 25.2961 22.5177 28.1897 19.7122L28.3788 19.5232L28.2082 19.3811C27.5371 18.8555 26.7236 18.5435 25.8732 18.4857L25.5818 18.4757H22.5816C22.684 18.9334 22.7394 19.4081 22.7394 19.897V21.3182H9.94848V18.4757L19.5985 18.4743L19.5502 18.3635C19.2778 17.7943 18.8589 17.308 18.3364 16.9543C17.8138 16.6006 17.2066 16.3924 16.577 16.351L16.3439 16.3439H12.1798C11.5194 15.6685 10.7305 15.1319 9.85969 14.7658C8.98884 14.3997 8.05357 14.2114 7.1089 14.2121H7.10748ZM4.26363 12.7909H2.84242V22.7394H4.26363V12.7909ZM24.1606 4.26363C25.2914 4.26363 26.3759 4.71284 27.1754 5.51242C27.975 6.31201 28.4242 7.39648 28.4242 8.52727C28.4242 9.65806 27.975 10.7425 27.1754 11.5421C26.3759 12.3417 25.2914 12.7909 24.1606 12.7909C23.0298 12.7909 21.9453 12.3417 21.1458 11.5421C20.3462 10.7425 19.897 9.65806 19.897 8.52727C19.897 7.39648 20.3462 6.31201 21.1458 5.51242C21.9453 4.71284 23.0298 4.26363 24.1606 4.26363ZM24.1606 7.10606C23.7837 7.10606 23.4222 7.25579 23.1556 7.52232C22.8891 7.78885 22.7394 8.15034 22.7394 8.52727C22.7394 8.9042 22.8891 9.26569 23.1556 9.53222C23.4222 9.79875 23.7837 9.94848 24.1606 9.94848C24.5375 9.94848 24.899 9.79875 25.1655 9.53222C25.4321 9.26569 25.5818 8.9042 25.5818 8.52727C25.5818 8.15034 25.4321 7.78885 25.1655 7.52232C24.899 7.25579 24.5375 7.10606 24.1606 7.10606ZM14.2121 0C15.3429 0 16.4274 0.449203 17.227 1.24879C18.0265 2.04838 18.4757 3.13285 18.4757 4.26363C18.4757 5.39442 18.0265 6.47889 17.227 7.27848C16.4274 8.07807 15.3429 8.52727 14.2121 8.52727C13.0813 8.52727 11.9969 8.07807 11.1973 7.27848C10.3977 6.47889 9.94848 5.39442 9.94848 4.26363C9.94848 3.13285 10.3977 2.04838 11.1973 1.24879C11.9969 0.449203 13.0813 0 14.2121 0ZM14.2121 2.84242C13.8352 2.84242 13.4737 2.99216 13.2072 3.25869C12.9406 3.52522 12.7909 3.88671 12.7909 4.26363C12.7909 4.64056 12.9406 5.00205 13.2072 5.26858C13.4737 5.53511 13.8352 5.68485 14.2121 5.68485C14.589 5.68485 14.9505 5.53511 15.2171 5.26858C15.4836 5.00205 15.6333 4.64056 15.6333 4.26363C15.6333 3.88671 15.4836 3.52522 15.2171 3.25869C14.9505 2.99216 14.589 2.84242 14.2121 2.84242Z"
          fill={`${fill || "#ABB0AE"}`}
        />
      </svg>
    </NavLink>
  );
};
