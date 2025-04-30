import { useTranslation } from "react-i18next";
import "./App.css";
import i18next from "i18next";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const { t } = useTranslation();
  const handleLanguageChange = (lang: string) => {
    i18next.changeLanguage(lang);
  };
  return (
    <>
      <QRCodeSVG
        imageSettings={{
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQessajFGlfsaMHQPc5N_NLTpyQecw-1ZVlbg&s",
          height: 60,
          width: 60,
          excavate: false,
        }}
        className="m-96"
        value={"https://tailwindcss.com/docs/installation/using-vite"}
      />
    </>
  );
}

export default App;
