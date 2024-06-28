import { IdleTimerProvider } from "react-idle-timer";
import { locales } from "../../../locales";
import useLogoutHook from "../../../hooks/useLogoutHook";
export default function ServiceHomePage() {
  const onIdle = useLogoutHook();
  return (
    <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
      <div className="main-container servicehome-container">ServiceHomePage</div>;
    </IdleTimerProvider>
  );
}
