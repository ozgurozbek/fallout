import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { Card, Divider, Skeleton } from "antd";
import useSWR from "swr";

/**
 * The array elements are stylized here.
 * Fetches all homebrew entries from the backend then categorizes it in FE.
 * @backend fetch
 * @param category
 * @returns Array of li elements
 */
function GetHomebrews() {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://teothe.pythonanywhere.com/getHomebrews",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  let renderedEntries = [];
  let first: boolean = true;
  for (let item of data) {
    if (first) {
      renderedEntries.push(
        <li className="hover:bg-[#141414] py-4">{item[1]}</li>
      );
      first = false;
    } else {
      renderedEntries.push(
        <li className="hover:bg-[#141414] py-4 border-t border-[#e5e7eb]">
          {item[1]}
        </li>
      );
    }
  }
  return renderedEntries;
}

/**
 * Displays the list elements like other Table(antd) elements, and provides categories
 * @returns SimpleContent and response from GetHomebrews wrapped by Card(antd) in section
 */
export default function HomebrewsPage() {
  return (
    <section>
      <GetCrumbs path={"Fallout: Istanbul,Homebrews"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Homebrew Rules",
          }}
        />
        <ul>{GetHomebrews()}</ul>
      </Card>
    </section>
  );
}
