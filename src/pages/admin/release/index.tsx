import { Button } from "~/components/Button";
import { useReleaseSocketWithStorage } from "~/hooks/useReleaseSocketWithStorage";

export default function Release() {
  const { sendMessage } = useReleaseSocketWithStorage();

  return (
    <div>
      Admin
      <br />
      <Button
        color="primary"
        onClick={() => sendMessage({ feature: "SELCET_MACHINE" })}
      >
        Enable Máquinas
      </Button>
      <br />
      <Button
        color="error"
        onClick={() => sendMessage({ feature: "SELECT_PRODUCTION_INPUT" })}
      >
        Enable Insumos
      </Button>
    </div>
  );
}
