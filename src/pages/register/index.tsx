import { useRouter } from "next/router";

export default function Register() {
  const { push } = useRouter();

  const onClick = () => push("/install");

  return (
    <div>
      Register Screen
      <button onClick={onClick}>Ir tela instalção</button>
    </div>
  );
}
