import React from "react";
import Nav from "@/components/Nav";
import "@/styles/globals.css";

export const metedata = {
  title: "India Today",
  description:
    "India Today gives you the latest news, politics, current affairs, cricket, sports, business and cinema news from India and around the world. Track the latest from bollywood, hollywood, regional film industries and TV channels."
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
