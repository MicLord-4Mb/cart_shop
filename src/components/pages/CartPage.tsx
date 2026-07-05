import React from "react";
import {MainLayout} from "../templates/MainLayout.tsx";
import {FunctionalSection} from "../organisms/FunctionalSection.tsx";
import {ClassSection} from "../organisms/ClassSection.tsx";
import {products} from "../../data/products.ts";

export const ShopPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="shop-columns">
        <FunctionalSection products={products} />
        <ClassSection products={products} />
      </div>
    </MainLayout>
  );
};