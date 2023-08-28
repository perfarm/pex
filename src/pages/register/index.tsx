import useDidMount from "beautiful-react-hooks/useDidMount";
import { fetchCurrentUser } from "~/commons/api/fetchCurrentUser";

export default function Register() {
  useDidMount(async () => {
    const resp = await fetchCurrentUser();
    console.log("MOUNT", resp);
  });

  return <div>Register Screen</div>;
}
