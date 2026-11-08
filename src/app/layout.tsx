import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "المكتب الدولي للتحكيم وتسوية المنازعات | IOADR",
  description:
    "هيئة تحكيمية دولية عليا توفر بيئة إجرائية محايدة وفائقة السرية، تتولى إدارة وتسوية النزاعات المعقدة العابرة للحدود بموجب اتفاقية نيويورك لعام 1958، وقواعد لجنة الأمم المتحدة للقانون التجاري الدولي (UNCITRAL).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="ar">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Serif:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-ivory font-body-md text-on-surface antialiased selection:bg-primary selection:text-surface-ivory min-h-screen">
        {children}
      </body>
    </html>
  );
}
