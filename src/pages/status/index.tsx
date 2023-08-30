import { useRouter } from "next/router";
import { Fragment } from "react";
import { useReleaseSocketWithStorage } from "~/hooks/useReleaseSocketWithStorage";

export default function Register() {
  const { push } = useRouter();
  const { currentFeatureIndex, feature, releasedFeature, message } =
    useReleaseSocketWithStorage();
  console.log({ currentFeatureIndex, feature, releasedFeature, message });

  const onClick = () => push("/install");

  return (
    <div>
      Register Screen - {currentFeatureIndex}
      <br />
      <br />
      Message - {message}
      <br />
      <br />
      Liberado - {releasedFeature}
      <br />
      <br />
      ---- FEATURES ----
      <br />
      <br />
      {Object.entries(feature).map(([key, value], index) => (
        <Fragment key={`${key}-${index}`}>
          <div>
            {key} - {String(value)}
          </div>
          <br />
        </Fragment>
      ))}
      <button onClick={onClick}>Ir tela instalção</button>
    </div>
  );
}
