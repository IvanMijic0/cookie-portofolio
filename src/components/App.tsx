import { UIProvider } from "~/context/ui";
import { FlipbookProvider } from "~/context/flipbook";
import { I18nProvider } from "~/context/I18nProvider";
import BookLayoutWrapper from "./BookLayoutWrapper";
import { useLocation } from "~/hooks/useRouter";
import { spreadMap } from "~/config/spreads";

export default function App({ lang, resources, isMobile, activeSpread: initialSpread, initialPathname }: { lang: string; resources?: any; isMobile: boolean; activeSpread: string; initialPathname?: string }) {
  const { pathname } = useLocation(initialPathname);

  const getActiveSpread = () => {
    if (typeof window === "undefined") return initialSpread;
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length <= 1) return "homepage";
    return parts.slice(1).join("/");
  };

  const activeSpread = getActiveSpread();
  const normalizedLang: "en" | "ba" = lang === "ba" ? "ba" : "en";
  const moduleEntry = spreadMap[activeSpread] || spreadMap["homepage"];
  const MobileComponent = moduleEntry.Mobile || (() => null);

  return (
    <I18nProvider lang={normalizedLang} resources={resources}>
      <UIProvider>
        <FlipbookProvider>
          <BookLayoutWrapper lang={normalizedLang} isMobile={isMobile}>
            <MobileComponent />
          </BookLayoutWrapper>
        </FlipbookProvider>
      </UIProvider>
    </I18nProvider>
  );
}
