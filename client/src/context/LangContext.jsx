import { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const onLanguageChanged = (lng) => setLanguage(lng);
    i18n.on("languageChanged", onLanguageChanged);

    setLanguage(i18n.language);

    return () => {
      i18n.off("languageChanged", onLanguageChanged);
    };
  }, []);

  const changeLanguage = async (langCode) => {
    try {
      const res = await fetch("http://localhost:3000/lang", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ lang: langCode }),
      });

      if (res.ok) {
        await i18n.changeLanguage(langCode);
      } else {
        const data = await res.json();
        console.error(data.message);
      }
    } catch (err) {
      console.error("Failed to switch language:", err);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
