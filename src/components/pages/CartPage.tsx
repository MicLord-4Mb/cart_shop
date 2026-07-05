import {MainLayout} from "../templates/MainLayout.tsx";
import {FunctionalSection} from "../organisms/FunctionalSection.tsx";
import {ClassSection} from "../organisms/ClassSection.tsx";
import {products} from "../../data/products.ts";

export const ShopPage = () => {
  return (
    <MainLayout>
      <div className="shop-columns">
        <FunctionalSection products={products} />
        <ClassSection products={products} />
      </div>
    </MainLayout>
  );
};