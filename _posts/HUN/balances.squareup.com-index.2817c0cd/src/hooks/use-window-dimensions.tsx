import { useState, useEffect, createContext, ComponentProps, FunctionComponent } from "react";

// This value is copied from market
const CORE_HORIZONTAL_REGULAR_THRESHOLD = 600;

export interface WindowDimensions {
  width?: number;
  height?: number;
  isMobile: boolean;
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
    isMobile: false,
  });

  useEffect(() => {
    function updateWindowDimensions() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < CORE_HORIZONTAL_REGULAR_THRESHOLD,
      });
    }

    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return windowDimensions;
}

// FIXME(cvu): Remove this when we figure out how we want handle passing mobile viewport state
export const WindowDimensionsContext = createContext<WindowDimensions>({
  width: undefined,
  height: undefined,
  isMobile: false,
});

export function WindowDimensionsProvider({ children }: ComponentProps<FunctionComponent>) {
  const windowDimensions = useWindowDimensions();
  return (
    <WindowDimensionsContext.Provider value={windowDimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  );
}
