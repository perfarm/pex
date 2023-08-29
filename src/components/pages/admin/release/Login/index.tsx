import { FC, FormEventHandler, useState } from "react";

import { Button } from "~/components/Button";

import { setAdminAuthorizationToken } from "~/commons/api";
import { loginViaAdmin } from "~/commons/api/loginViaAdmin";
import { setAccessToken } from "~/commons/storage/adminAccessToken";
import { Props } from "./types";

export const Login: FC<Props> = ({ onSuccess }) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();

    setLoading(true);

    try {
      const { token } = await loginViaAdmin(username, password);
      setAccessToken(token);
      setAdminAuthorizationToken();
      onSuccess(token);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      Admin Login
      <br />
      <div>
        <input
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <div>
        <Button
          color="primary"
          disabled={loading}
          showLoader={loading}
          type="submit"
        >
          Login
        </Button>
      </div>
    </form>
  );
};
