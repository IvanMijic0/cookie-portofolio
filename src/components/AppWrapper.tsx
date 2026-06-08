import type { PropsWithChildren } from "react";
import { UIProvider } from "~/context/ui";
import { FlipbookProvider } from "~/context/flipbook";
import { I18nProvider } from "~/context/I18nProvider";
import BookLayoutWrapper from "./BookLayoutWrapper";

export default function AppWrapper({ children, lang, isMobile }: PropsWithChildren<{ lang: any; isMobile: boolean }>) {
  // Normalize language code
  const normalizedLang = lang === "ba" ? "bs" : (lang || "en");

  return (
    <I18nProvider lang={normalizedLang}>
      <UIProvider>
        <FlipbookProvider>
          <BookLayoutWrapper lang={normalizedLang} isMobile={isMobile}>
            {children}
          </BookLayoutWrapper>
        </FlipbookProvider>
      </UIProvider>
    </I18nProvider>
  );
}
