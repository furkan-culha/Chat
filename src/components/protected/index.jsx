import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { auth } from "../../firebase";
import Loader from "../loader";
const Protected = () => {
  // aktif (oturumu açık olan) state'i
  const [user, setUser] = useState(undefined);

  // aktif kullanıcı verisini al
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  // kullanıcı verisi yükleniyorsa ekrana loader bas
  if (user === undefined) return <Loader />;
  // kullanıcı oturumu kapalıysa: login sayfasına yönlendir
  // Navigate: render sırasında yönlendirme yapmak için kullanılır
  // replace: yönlendirmeden önce bulunduğu sayfayı geçmişten sil
  if (user === null) return <Navigate to="/login" replace />;
  return <Outlet context={user} />;
};

export default Protected;
