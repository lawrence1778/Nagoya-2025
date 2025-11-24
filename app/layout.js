import "./globals.css";

export const metadata = {
  title: "Nagoya-2025", // 瀏覽器分頁標題
  description: "2025名古屋家庭旅遊行程表",
  manifest: "/manifest.json",
  icons: {
    icon: '/icon.png', // 一般瀏覽器圖示
    apple: '/icon.png', // iPhone 桌面圖示 (關鍵設定)
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nagoya-2025", // iPhone 加入主畫面時的預設名稱
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
