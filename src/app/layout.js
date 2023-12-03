import "./globals.css";
export const metadata = {
  title: "Chizuruoke's Portfolio",
  description: "Get to know me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
