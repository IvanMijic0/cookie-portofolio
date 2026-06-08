import { useEffect, useState } from "react";

export function useLocation() {
  const [location, setLocation] = useState(() => {
    if (typeof window !== "undefined") {
      return {
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash
      };
    }
    return { pathname: "/", search: "", hash: "" };
  });

  useEffect(() => {
    const handlePopState = () => {
      setLocation({
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash
      });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return location;
}

export function useNavigate() {
  return (to: string, options?: { replace?: boolean }) => {
    if (typeof window === "undefined") return;
    
    const isValidOrigin = window.location.protocol.startsWith('http');
    if (!isValidOrigin) {
      if (options?.replace) {
        window.location.replace(to);
      } else {
        window.location.href = to;
      }
      return;
    }

    try {
      if (options?.replace) {
        window.history.replaceState(null, "", to);
      } else {
        window.history.pushState(null, "", to);
      }
      window.dispatchEvent(new PopStateEvent("popstate"));
    } catch (e) {
      if (options?.replace) {
        window.location.replace(to);
      } else {
        window.location.href = to;
      }
    }
  };
}

export function useParams() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  const lang = parts[0] === "ba" || parts[0] === "en" ? parts[0] : "en";
  return { lang };
}
