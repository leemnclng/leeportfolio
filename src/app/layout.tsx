import Navigation from "./navigation/navigation";
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-100">
      <Navigation />
        {children}
      </body>
    </html>
  )
}
