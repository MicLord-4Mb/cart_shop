import React, {type PropsWithChildren} from "react";

interface Props {
  title?: string;
}

export const SectionWrapper: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <section className="section-wrapper">
      <h2 className="section-wrapper__title">{title}</h2>
      <div className="section-wrapper__body">{children}</div>
    </section>
  );
};
