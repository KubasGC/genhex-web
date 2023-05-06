import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/3">
          <h4 className="text-lg font-bold mb-2">GenHex</h4>
          <p className="text-sm mb-4">
            Empowering game developers and creators.
          </p>
          <ul className="text-sm">
            <li className="mb-1">123 Main St</li>
            <li className="mb-1">Anytown, USA</li>
            <li className="mb-1">contact@gennhex.com</li>
            <li>555-555-5555</li>
          </ul>
        </div>
        <div className="lg:w-1/3">
          <h4 className="text-lg font-bold mb-2">Products</h4>
          <ul className="text-sm">
            <li className="mb-1">
              <a href="#">GenHex Engine</a>
            </li>
            <li className="mb-1">
              <a href="#">GenHex Game Maker</a>
            </li>
            <li>
              <a href="#">GenHex Game Creator</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <ul className="flex text-sm">
            <li className="mr-4">
              <a href="#">Facebook</a>
            </li>
            <li className="mr-4">
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
          <p className="text-xs mt-4">
            Copyright © 2023 GenHex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
