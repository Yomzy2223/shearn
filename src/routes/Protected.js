import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ isVerified, children, path }) => {
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
