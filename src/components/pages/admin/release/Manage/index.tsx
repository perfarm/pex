import { FC, useState } from "react";
import { Release } from "~/commons/storage/release/types";

import { Button } from "~/components/Button";
import { Loader } from "~/components/Loader";
import { useReleaseSocketWithStorage } from "~/hooks/useReleaseSocketWithStorage";

export const Manage: FC = () => {
  const [loading, setLoading] = useState(false);
  const { sendMessage } = useReleaseSocketWithStorage();

  const enable = async (feature: keyof typeof Release) => {
    setLoading(true);

    try {
      const resp = await sendMessage({ feature });
      console.log("RESP", resp);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      Admin
      {loading && <Loader />}
      <br />
      <Button color="primary" onClick={() => enable("SELCET_MACHINE")}>
        Enable Máquinas
      </Button>
      <br />
      <Button color="error" onClick={() => enable("SELECT_PRODUCTION_INPUT")}>
        Enable Insumos
      </Button>
      <br />
      <Button color="black" onClick={() => enable("SELECT_PRODUCTION")}>
        Enable Produção
      </Button>
      <br />
      <Button color="secondary" onClick={() => enable("REGISTER")}>
        Enable Register
      </Button>
    </div>
  );
};
