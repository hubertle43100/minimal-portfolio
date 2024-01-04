import React from "react";
import FooterItem from "./FooterItem";
import footer from "./data/footer";

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            {footer.map((footer) => (
              <FooterItem
                href={footer.href}
                bgColor={footer.bgColor}
                title={footer.title}
                viewBox={footer.viewBox}
                path={footer.path}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm mt-2 p-2 opacity-50">
        &copy; {new Date().getFullYear()} Hubert Le. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
