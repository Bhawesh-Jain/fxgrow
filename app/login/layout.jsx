export const metadata = {
  title: "IForex",
  description: "IForex Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
