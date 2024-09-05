import { FC, ReactNode } from "react";
import Header from "./Header";
import { IStat } from "../../types";
import Stats from "./Stats";
import Stat from "./Stat";

interface IPageWrapper {
  headerTitle: string;
  stats?: Array<IStat>;
  children?: ReactNode;
}

const PageWrapper: FC<IPageWrapper> = ({ headerTitle, stats, children }) => {
  return (
    <section className="flex-1 overflow-auto relative z-10">
      <Header title={headerTitle} />
      <section className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <Stats>
          {stats?.map(({ title, icon, value, color }: IStat, index) => (
            <Stat
              key={`${title + index + color}`}
              title={title}
              icon={icon}
              value={value}
              color={color}
            />
          ))}
        </Stats>
        {children}
      </section>
    </section>
  );
};

export default PageWrapper;
