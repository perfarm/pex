import { useState } from "react";

import { getAccessToken } from "~/commons/storage/adminAccessToken";
import { Login } from "~/components/pages/admin/release/Login";
import { Manage } from "~/components/pages/admin/release/Manage";

export default function Release() {
  const [token, setToken] = useState(getAccessToken());

  const onSuccess = (token: string) => setToken(token);

  return token ? <Manage /> : <Login onSuccess={onSuccess} />;
}
