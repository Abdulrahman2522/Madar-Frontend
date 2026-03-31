type Lang = "ar" | "en";

export const t = <T>(obj: { ar: T; en: T }, key: Lang): T => obj[key];
