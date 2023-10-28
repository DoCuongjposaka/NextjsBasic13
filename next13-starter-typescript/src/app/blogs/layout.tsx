export const metadata = {
  title: "Blog List",
  description: "Blog bla bla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
