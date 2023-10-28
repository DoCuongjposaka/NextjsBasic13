export const metadata = {
  title: "Blog View Detail",
  description: "Blog Detail",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
