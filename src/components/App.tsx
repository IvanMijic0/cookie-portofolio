import { UIProvider } from "~/context/ui";
import { FlipbookProvider } from "~/context/flipbook";
import { I18nProvider } from "~/context/I18nProvider";
import BookLayoutWrapper from "./BookLayoutWrapper";
import { useLocation } from "~/hooks/useRouter";
import { spreadMap } from "~/config/spreads";

export default function App({ lang, isMobile, activeSpread: initialSpread }: { lang: string; isMobile: boolean; activeSpread: string }) {
  const { pathname } = useLocation();

  const getActiveSpread = () => {
    if (typeof window === "undefined") return initialSpread;
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length <= 1) return "homepage";
    return parts.slice(1).join("/");
  };

  const activeSpread = getActiveSpread();
  const normalizedLang = lang === "ba" ? "bs" : (lang || "en");
  const moduleEntry = spreadMap[activeSpread] || spreadMap["homepage"];
  const MobileComponent = moduleEntry.Mobile;

  return (
    <I18nProvider lang={normalizedLang}>
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
