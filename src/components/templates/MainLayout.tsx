import './MainLayout.css'
import type {PropsWithChildren} from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <h1>Shopping Cart</h1>
      </header>
      <main className="main-layout__content">{children}</main>
    </div>
  );
};
