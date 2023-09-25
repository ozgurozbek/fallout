import { Card, Divider, Skeleton } from "antd";
import Deity from "Comp/commonlore/Deities";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";
import useSWR from "swr";

/**
 * Gets Deity data and passes the props to Deity component
 * @see Deity
 * @backend fetch
 * @param rank The deity rank as string
 * @returns Deity component array
 */
function GetFactions() {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://teothe.pythonanywhere.com/getDeities",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  let renderedFactions = [];
  for (let item of data) {
    renderedFactions.push(
      <Deity
        imageSrc={"./Deities/" + item[1] + ".png"}
        descriptionProps={{
          title: item[1],
          body: item[2],
          domain: item[3],
        }}
      />
    );
  }
  return renderedFactions;
}

/**
 * Categorizes and displays deities with text describing each category
 * @returns SimpleContent and GetDeities response wrapped with Card(antd) in section
 */
export default function FactionsPage() {
  return (
    <section>
      <GetCrumbs path={"Fallout: Istanbul,Deities"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Overdeities",
          }}
        />
        {GetFactions()}
      </Card>
    </section>
  );
}
