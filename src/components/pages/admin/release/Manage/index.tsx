import { FC, useState } from "react";
import { Release } from "~/commons/storage/release/types";

import { Button } from "~/components/Button";
import { useReleaseSocketWithStorage } from "~/hooks/useReleaseSocketWithStorage";

export const Manage: FC = () => {
  const [loading, setLoading] = useState(false);
  const { sendMessage } = useReleaseSocketWithStorage();

  const enable = async (feature: keyof typeof Release) => {
    setLoading(true);

    try {
      await sendMessage({ feature });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      Admin
      <br />
      <Button color="primary" onClick={() => enable("SELCET_MACHINE")}>
        Enable Máquinas
      </Button>
      <br />
      <Button color="error" onClick={() => enable("SELECT_PRODUCTION_INPUT")}>
        Enable Insumos
      </Button>
    </div>
  );
};
