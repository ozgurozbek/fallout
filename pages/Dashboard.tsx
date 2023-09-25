import { Card, Empty, Layout } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";

import { CaretUpOutlined } from "@ant-design/icons";
import SimpleContent from "@/components/SimpleCon";

const { Header, Content, Footer } = Layout;

export default function Dashboard() {
  function goUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <Layout>
      <Header style={{ padding: "0px" }} />
      <Content id="PageContent" style={{ margin: "0 16px" }}>
        <GetCrumbs path="Fallout: Istanbul" />
        <Card bordered={false} className="w-full">
          <SimpleContent
            contentProps={{
              title: "Fallout: Istanbul Campaign Setting",
              text: [
                "Welcome to the irradiated expanse of Fallout: Istanbul, a world teetering on the brink of oblivion. As the ruins of a once-thriving cityscape beckon, you, intrepid wanderer, must chart your course through the desolation. The echoes of a bygone era resonate in the twisted metal and crumbling concrete, remnants of a world that once aspired to greatness.",
                "The Great War of 2077 has reshaped this land, leaving behind a fractured Istanbul, a city spared from the nuclear inferno but scarred by catastrophic events. The Sea of Marmara, once a source of life, now harbors the eerie radiance of nuclear devastation, while the fault lines tremble beneath your feet, a constant reminder of the fragile equilibrium that holds the city together.",
                "In this unforgiving wasteland, you stand at a crossroads, a lone figure amidst the chaos. Will you be the harbinger of hope, working to rebuild the shattered remnants of society and bring civilization back to Istanbul's streets? Or will you embrace the lawless currents of chaos, carving a path of survival and power through the unforgiving terrain?",
                "As you traverse this treacherous terrain, you will encounter a myriad of challenges and choices. Will you align with one of the emerging factions vying for control, each with its own vision for Istanbul's future? Or will you forge your path as an independent survivor, navigating the dangers and opportunities of the wasteland on your terms?",
                "The fate of Istanbul lies in your hands, as you venture into the heart of this post-apocalyptic maelstrom. The choices you make will shape the destiny of this once-proud city, and with each step, the world reshapes in the wake of your actions. Your story is one of survival, redemption, and the enduring human spirit in the face of adversity. The legacy of Istanbul awaits your imprint; will you rise to the challenge and leave your mark on this desolate landscape? The wasteland beckons, and your journey begins now.",
              ],
            }}
          />
        </Card>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Fallout: Istanbul, its information, its documents and the TTRPG content is provided
        under the{" "}
        <a
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
        >
          CC BY-NC-SA License{" "}
        </a>
        and protected by the{" "}
        <a
          target="_blank"
          href="https://www.modiphius.net/pages/terms-and-conditions"
        >
          Modiphius T&C{" "}
        </a>
        and{" "}
        <a
          target="_blank"
          href="https://fallout.bethesda.net/en/games/fallout"
        >
          Bethesda
        </a>
        . Further attributions can be found on the{" "}
        <a
          target="_blank"
          href="https://www.reddit.com/r/Fallout2d20/"
        >
          Fallout Subreddit & Community Content Creators
        </a>
        , and{" "}
        <a
          target="_blank"
          href="https://fallout.fandom.com/wiki/Fallout_Wiki"
        >
          Fallout Wiki
        </a>
        . 2022-2023.
      </Footer>
      <div
        className="w-12 h-12 rounded-full bg-[#00ff1c] hover:bg-[#004c0a] fixed bottom-4 right-4 transition-all text-center text-4xl"
        onClick={goUp}
      >
        <CaretUpOutlined />
      </div>
    </Layout>
  );
}
