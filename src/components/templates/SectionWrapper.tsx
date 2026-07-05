import type {PropsWithChildren} from "react";

type Props = {
  title?: string;
}

export const SectionWrapper = ({ title, children }:PropsWithChildren<Props>) => {
  return (
    <section className="section-wrapper">
      <h2 className="section-wrapper__title">{title}</h2>
      <div className="section-wrapper__body">{children}</div>
    </section>
  );
};
