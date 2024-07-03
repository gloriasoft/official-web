import "./globals.css";
import Script from 'next/script'
import { Providers } from './providers'
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "嘉兰荣光Gloriasoft",
  description: "嘉兰荣光Gloriasoft",
};

export default function RootLayout({ children }) {

  return (
    <html lang="zh-CN">
      <head>
        <Script id="hmt">
          {
            `var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?bbc5287b4c3832d8a0762feb311d5083";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();`
          }
        </Script>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
