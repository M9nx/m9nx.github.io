import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "@sentry/react";
import { Error } from "/src/pages/Error";
import { AppNavBar } from "/src/components/ui/nav/AppNavBar";
import { useUser } from "/src/hooks/use-user";
import { useWindowDimensions } from "/src/hooks/use-window-dimensions";

export function Root() {
  const [user] = useUser();
  const windowDimensions = useWindowDimensions();
  const navBar = windowDimensions.isMobile ? null : user ? <AppNavBar user={user} /> : null;

  return (
    <>
      {navBar}
      <ErrorBoundary fallback={<Error />}>
        <Outlet />
      </ErrorBoundary>
    </>
  );
}
