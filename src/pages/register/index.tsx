import { useRouter } from "next/router";
import { Fragment } from "react";
import { useReleaseSocketWithStorage } from "~/hooks/useReleaseSocketWithStorage";

export default function Register() {
  const { push } = useRouter();
  const { currentFeatureIndex, features } = useReleaseSocketWithStorage();

  const onClick = () => push("/install");

  return (
    <div>
      Register Screen - {currentFeatureIndex}
      <br />
      {Object.entries(features).map(([key, value], index) => (
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
