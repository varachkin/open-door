import { useNavigate } from "react-router-dom";
import { useLoginUpdate } from "../contexts/LoginContext";
import { useServiceLoginUpdate } from "../contexts/ServiceLoginContext";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/data/dataSlice";
export default function useLTimeoutRedirect() {
  const changeLogin = useLoginUpdate();
  const changeServiceLogin = useServiceLoginUpdate();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onIdle = () => {
    changeLogin(false);
    changeServiceLogin(false);
    // dispatch(clearCart())
    navigate("/service-timeout");
  };
  return onIdle;
}
