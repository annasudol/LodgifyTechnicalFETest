import type { Metadata } from "next";
import { DataProvider, IDataContext } from "@/app/provider/DataContext";
import { FunctionComponent, PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple form",
  description: "Lodgify - FE Technical Challenge - created with Next.js",
};

interface Props {
  params: IDataContext;
}

const layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  params,
}) => {
  return (
    <>
      <DataProvider {...params}>
        <html lang="en">
          <body className="bg-gray-300">{children}</body>
        </html>
      </DataProvider>
    </>
  );
};

export default layout;
