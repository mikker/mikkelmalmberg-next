import cn from "classnames";

export const Container = ({ className, ...props }) => (
  <div className={cn("max-w-6xl mx-auto relative p-5", className)} {...props} />
);

export const A = ({ ...props }) => <a className="link" {...props} />;

export const H1 = ({ ...props }) => (
  <h1 className="font-cahuenga text-3xl mb-4" {...props} />
);

export const H2 = ({ ...props }) => (
  <h2 className="font-cahuenga text-3xl mb-4" {...props} />
);
