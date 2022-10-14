import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Protected = ({ isVerified, children, path }) => {
  // const [user, setUser] = useState(false);

  // const navigate = useNavigate();

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(user);
  //     // setUser(user);
  //     return children;
  //   } else {
  //     console.log("signedOut");
  //     // setUser(false);
  //     navigate(path ? path : "/login");
  //   }
  // });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isVerified) {
      navigate(path ? path : "/login");
    }
  }, []);

  if (isVerified) {
    return children;
  }
};

export default Protected;
