type Lang = "ar" | "en";

export const t = <T,>(obj: { ar: T; en: T }, lang: Lang): T => obj[lang];
