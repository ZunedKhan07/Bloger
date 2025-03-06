import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children, authentication = true }) => {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth?.status);

  useEffect(() => {
  //   if (authentication && authStatus !== authentication) {
  //     navigate("/login");
  //   } else if (!authentication && authStatus !== authentication) {
  //     navigate("/");
  //   }
  //   setLoader(false);
  // }, [authStatus, navigate, authentication]);

  if (authStatus === undefined) return; // Exit early if authStatus is undefined

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    } else {
      setLoader(false); // Set loader to false once authentication is validated
    }
   }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children}</>
};

export default Protected;
