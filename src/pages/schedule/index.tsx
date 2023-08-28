import { useEffect } from "react";

import PrivateRoute from "~/components/PrivateRoute";
import { useAuth } from "~/context/auth/useAuth";

export default function Schedule() {
  const { user } = useAuth();

  useEffect(() => {
    console.log("MOUNT USER", user);
  }, [user]);

  return (
    <PrivateRoute>
      <div>CRONOGRAMA</div>
    </PrivateRoute>
  );
}
