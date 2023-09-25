import { useState } from "react";
import { render } from "react-dom";
import { Menu, Image, Avatar, Card } from "antd";
import Sider from "antd/es/layout/Sider";

import type { MenuProps } from "antd";

import HomebrewsPage from "Pages/Homebrews";
import PricingPage from "Pages/Pricing";
import ToolsPage from "Pages/Tools";
import GetCrumbs from "./NavigationCrumb";
import SimpleContent from "./SimpleCon";
import InformationPage from "Pages/Information";
import EntitiesPage from "Pages/Entities";
import FactionsPage from "Pages/Factions";

type MenuItem = Required<MenuProps>["items"][number];

/**
 * Renders the page on click
 * @generator
 * @param menuItem
 * @returns React Element
 */
const loadPage = (menuItem: any) => {
  let Ele = <></>;
  switch (menuItem.key) {
    case "1":
      Ele = <InformationPage />;
      break;
    case "2":
      Ele = <FactionsPage />;
      break;
    case "3":
      Ele = <EntitiesPage />;
      break;
    case "4":
      Ele = <PricingPage />;
      break;
    case "5":
      Ele = <ToolsPage />;
      break;
    case "6":
      Ele = <HomebrewsPage />;
      break;
    default:
      break;
  }
  render(Ele, document.getElementById("PageContent"));
};

/**
 * Gets Deity icons from the Sidenav icon
 * @generator
 * @param pageName
 * @param avatarSize
 * @returns Deity Avatar
 */
function getIcon(pageName: string, avatarSize: boolean) {
  return (
    <Avatar
      className="transition-all"
      size={avatarSize ? 16 : 24}
      src={"./Icons/SideNav/" + pageName + ".svg"}
      alt={pageName + " Icon"}
      draggable={false}
      shape="square"
    ></Avatar>
  );
}

/**
 * Generates Sidebar Menu items
 * @generator
 * @param label
 * @param key
 * @param icon
 * @param element
 * @param children
 * @returns MenuItem(antd)
 */
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  element?: React.ReactElement,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    element,
  } as MenuItem;
}

/**
 * This is the main sidebar, only overruled by itself
 * @returns Sider(antd)
 */
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  // Menu > defaultSelectedKeys={['1']}
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => {
        setCollapsed(value);
      }}
    >
      <div>
        <Image
          className="cursor-pointer transition-all"
          style={{
            width: collapsed ? "80px" : "200px",
          }}
          src="./app-head.png"
          alt="Fallout Istanbul Icon"
          preview={false}
          onClick={() =>
            render(
              <>
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
              </>,
              document.getElementById("PageContent")
            )
          }
        />
      </div>

      <Menu
        onClick={loadPage}
        style={{
          width: collapsed ? "80px" : "inherit",
        }}
        theme="dark"
        mode="inline"
        items={[
          getItem("General", "1", getIcon("CommonLore", collapsed)),
          //getItem("Factions", "2", getIcon("Locations", collapsed)),
          //getItem("Entities", "3", getIcon("Deities", collapsed)),
          //getItem("Pricing", "4", getIcon("Pricing", collapsed)),
          //getItem("Tools", "5", getIcon("Tools", collapsed)),
          //getItem("Homebrews", "6", getIcon("Homebrews", collapsed))
        ]}
      />
    </Sider>
  );
}
