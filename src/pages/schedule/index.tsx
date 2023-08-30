import { useEffect } from "react";

import { Layout } from "~/components/Layout";
import PrivateRoute from "~/components/PrivateRoute";

import { useAuth } from "~/context/auth/useAuth";
import { NextPageWithLayout } from "../_app";

const Schedule: NextPageWithLayout = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log("MOUNT USER", user);
  }, [user]);

  return (
    <PrivateRoute>
      <div>CRONOGRAMA</div>
    </PrivateRoute>
  );
};

Schedule.getLayout = (page) => <Layout>{page}</Layout>;

export default Schedule;
