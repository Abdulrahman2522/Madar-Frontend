type Lang = "ar" | "en";

// translate function to get current language content
export const t = <T>(obj: { ar: T; en: T }, lang: Lang): T => obj[lang];

// check image url
export const isImageValid = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (!url) {
      resolve(false);
      return;
    }

    const img = new Image();

    img.onload = () => {
      resolve(true); // الصورة شغالة
    };

    img.onerror = () => {
      resolve(false); // الصورة بايظة
    };

    img.src = url;
  });
};
