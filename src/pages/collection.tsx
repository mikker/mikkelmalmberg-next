import Layout from "../components/Layout";
import { FC } from "react";
import { Container, H1 } from "../components";
import cn from "classnames";
import { sync as markdown } from "../markdown";
import { DetailView, DetailViewProvider, useDetailViewContext } from '../components/DetailView'
import { sections, Section, Token } from '../collection'

const CollectionPage = () => {
  // const cranes = sections[2];
  const florists = sections[1];
  const animation = sections[3];
  const jakeFarmer = sections[4];

  return (
    <Layout active="collection" title="Collection">
      <Container>
        <div className="h-6"></div>

        <header className="text-center lg:p-10 max-w-prose mx-auto leading-relaxed">
          <H1>Collection</H1>
          <h2>
            I collect digital art that I find interesting. Here's a curated
            selection of pieces and works I've collected so far.
          </h2>
        </header>

        <div className="text-center text-gray-300 py-8 lg:py-12">&mdash;</div>

        <div className="space-y-16 lg:space-y-24">
          <p className="text-center">🚧 this page is still under construction 🚧</p>

          <Section>
            <Header section={animation} />

            <Grid className="md:grid-cols-2 md:gap-16 text-center">
              <Token token={animation.tokens[0]} caption />
              <Token token={animation.tokens[1]} caption />
              <Token token={animation.tokens[2]} caption />
              <Token
                token={animation.tokens[3]}
                caption
                assetProps={{ className: "p-4" }}
              />
            </Grid>
          </Section>

          <Section>
            <Header section={florists} />

            <Grid lg={2}>
              <Token token={florists.tokens[9]} />

              <Grid cols={3} className="place-items-start">
                {range(0, 8).map((i: number) => (
                  <Token key={i} token={florists.tokens[i]} />
                ))}
              </Grid>

              {/* <Prose className="py-8">{florists.more}</Prose> */}

              {/* <div className="bg-gray-900 dark:bg-gray-800 text-gray-100 lg:px-48 text-center p-2 lg:py-12"> */}
              {/*   <Token token={florists.tokens[10]} caption /> */}
              {/* </div> */}
            </Grid>
          </Section>

          <Section>
            <Header section={jakeFarmer} />
            <Grid cols={1} lg={2}>
              {jakeFarmer.tokens.map((token) => (
                <Token token={token} key={token.title} caption />
              ))}
            </Grid>
          </Section>

          <p className="text-center">🚧 this page is still under construction 🚧</p>

          {/* <Section> */}
          {/*   <Header section={cranes} /> */}

          {/*   <Grid className="grid-cols-2"> */}
          {/*     <Token token={cranes.tokens[0]} /> */}

          {/*     <Grid className="grid-cols-3"> */}
          {/*       {range(1, 9).map((i: number) => ( */}
          {/*         <Token key={i} fit token={cranes.tokens[i]} /> */}
          {/*       ))} */}
          {/*     </Grid> */}
          {/*   </Grid> */}
          {/* </Section> */}
        </div>
      </Container>

      <DetailView />
    </Layout>
  );
};

const Section = ({ ...props }) => <section className="space-y-8" {...props} />;

const proseCls =
  "prose md:prose-md dark:prose-light prose-h2:font-cahuenga prose-h2:font-normal";

const Prose: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn(proseCls, className)} {...props} />;

const Header: FC<React.HTMLAttributes<HTMLElement> & { section: Section }> = ({
  section,
}) => (
  <Prose>
    <header>
      <h2>{section.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: markdown(section.description) }}
      />
    </header>
  </Prose>
);

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const Grid: FC<GridProps> = ({ className, cols, sm, md, lg, xl, ...props }) => {
  const cls = cn(
    "grid gap-4",
    className?.match(/place-items-/) || "place-items-end",
    className,
    cols && `grid-cols-${cols}`,
    sm && `sm:grid-cols-${sm}`,
    md && `md:grid-cols-${md}`,
    lg && `lg:grid-cols-${lg}`,
    xl && `xl:grid-cols-${xl}`
  );

  return <div className={cls} {...props} />;
};

type TokenProps = {
  token: Token;
  caption?: boolean;
  fit?: boolean;
  assetProps?: React.HTMLAttributes<HTMLElement>;
};

const Token: FC<React.HTMLAttributes<HTMLElement> & TokenProps> = ({
  token,
  caption,
  fit,
  assetProps,
  ...props
}) => {
  const { className, ...restAssetProps } = assetProps || {};
  const assetCls = cn(className, fit && "object-contain h-full");
  const { setToken } = useDetailViewContext();

  return (
    <figure className="space-y-2 lg:space-y-4" {...props}>
      <div
        onClick={() => setToken(token)}
        className="cursor-pointer bg-gray-800 dark:bg-gray-800 w-full flex justify-center items-center aspect-[1/1]"
      >
        {(!token.kind || token.kind === "image") && (
          <img
            className={assetCls}
            src={imgixUrl(token.src)}
            {...restAssetProps}
          />
        )}
        {token.kind === "video" && (
          <video
            className={assetCls}
            autoPlay
            muted
            controls
            playsInline
            loop
            src={token.src}
            {...restAssetProps}
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-base inline-flex items-center space-x-2">
          <span className="text-xl lg:text-2xl italic font-cahuenga">
            &ldquo;{token.title}&rdquo;
          </span>
          {token.artist && (
            <span className="text-gray-600">by {token.artist}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

function imgixUrl(original: string): string {
  return original;
  // return `https://mikkelmalmberg.imgix.net/${encodeURIComponent(original)}`;
}

function range(from: number, to: number): number[] {
  return Array.from(new Array(to - from + 1)).map((_, i) => i + from);
}

export default function wrapped() {
  return (
    <DetailViewProvider>
      <CollectionPage />
    </DetailViewProvider>
  );
}

// Force-include all these in Tailwind build
const _cols = [
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-4",
  "grid-cols-5",
  "grid-cols-6",
  "grid-cols-7",
  "grid-cols-8",
  "grid-cols-9",
  "sm:grid-cols-1",
  "sm:grid-cols-2",
  "sm:grid-cols-3",
  "sm:grid-cols-4",
  "sm:grid-cols-5",
  "sm:grid-cols-6",
  "sm:grid-cols-7",
  "sm:grid-cols-8",
  "sm:grid-cols-9",
  "md:grid-cols-1",
  "md:grid-cols-2",
  "md:grid-cols-3",
  "md:grid-cols-4",
  "md:grid-cols-5",
  "md:grid-cols-6",
  "md:grid-cols-7",
  "md:grid-cols-8",
  "md:grid-cols-9",
  "lg:grid-cols-1",
  "lg:grid-cols-2",
  "lg:grid-cols-3",
  "lg:grid-cols-4",
  "lg:grid-cols-5",
  "lg:grid-cols-6",
  "lg:grid-cols-7",
  "lg:grid-cols-8",
  "lg:grid-cols-9",
  "xl:grid-cols-1",
  "xl:grid-cols-2",
  "xl:grid-cols-3",
  "xl:grid-cols-4",
  "xl:grid-cols-5",
  "xl:grid-cols-6",
  "xl:grid-cols-7",
  "xl:grid-cols-8",
  "xl:grid-cols-9",
];
_cols; // silence lint
