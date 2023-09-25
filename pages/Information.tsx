import { Card, Divider } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";

/**
 * Uses SimpleContent to generate a page full of text describing the common lore of teothe.
 * @tutorial
 * @returns Card(antd) wrapped by section
 */
export default function InformationPage() {
  return (
    <section>
      <GetCrumbs path={"Fallout: Istanbul,Common Lore"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Intro",
            text: [
              "In the alternate history of Fallout: Istanbul, the world follows a divergent path from the mid-20th century, leading to a post-apocalyptic wasteland following the Great War of 2077. Istanbul, miraculously spared from nuclear devastation but hit by a series of catastrophic events, becomes a beacon of hope and civilization in the region. As survivors struggle to adapt, numerous factions vie for control, power, and the remnants of a shattered world.",
            ],
          }}
        />
        <Divider />
        <SimpleContent
          contentProps={{
            image: {
              src: "./map.png",
              alt: "Istanbul Map",
            },
            title: "Fallout: Istanbul",
            text: [
              "Welcome to the post-apocalyptic realm of Fallout, a world scarred by nuclear devastation and steeped in darkness and uncertainty. The Fallout Cosmology is a conceptual framework that organizes this grim and interconnected multiverse, offering a glimpse into the bleak dimensions that define this universe.",
              "The wasteland is the primary place where Fallout adventures take place. It's a harsh and unforgiving world, filled with irradiated landscapes, ruined cities, and the constant struggle for resources. The Wasteland is inhabited by wastelanders, mutated creatures, and various factions vying for control.",
              "Particularly hazardous region within the Wasteland, the Glowing Sea, is heavily irradiated and home to some of the most dangerous creatures and anomalies in the Fallout universe. It is a place of extreme danger and mystery.",
              "There are also particularly weird anomalies, such as ghosts, dream-like beings, immortals, and the cyberspace that are almost always explored during adventures.",
            ],
          }}
        />
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Pre-War Turkey",
            text: [
              "In the mid-20th century, the political landscape of Turkey saw Adnan Menderes running for election but ultimately failing to secure victory. This period weakened the religious aspects of Turkey's governance, setting the stage for a pivotal shift. It was a time when Turkey played a crucial role in the post-war recovery efforts across Europe and the Middle East. However, political tensions and an evolving authoritarian climate led to Menderes's eventual execution in the early 1960s, leaving an indelible mark on the nation.",
              "Turkey's strategic location in the 1960s and beyond made it a critical battleground for resource-rich areas. This led to conflicts over access to valuable resources, resulting in political instability and economic turmoil. Turks, guided by various secular governments, began aligning themselves more closely with the European Commonwealth, seeking stability and prosperity in an unstable world.",
              "By the 1980s and 1990s, Turkey had solidified its ties with the European Commonwealth, becoming a key member and reaping the benefits of economic and military support. This period saw Turks emerging as skilled traders and negotiators, drawing upon their historical aptitude for diplomacy and commerce. They also made significant strides in technological advancements, aligning seamlessly with the values of the European Commonwealth.",
              "The 2000s marked a turning point as Turkey became a regional leader in advanced weaponry, infrastructure, and technological innovation. This further modernization of the country was accompanied by the initiation of Turkey's nuclear program, backed by the European Commonwealth. As the world moved into the 2030s, Turkey became a hub for research and development in robotics, nuclear power, and cybernetics, attracting talent from the European Commonwealth.",
              "As tensions escalated and Turkey found itself enmeshed in regional conflicts driven by resource scarcity, the looming specter of nuclear warfare turned the nation into a potential battleground for major world powers. In response to this precarious situation, the deeply ingrained 'Family Structure' of Turkish society catalyzed the creation of a Turkish branch of VaultTec known as Vatandaş Omuzlayan Lütufkar Toplum Teknolojileri, or VOLT-TEK. Within the confines of their vault, Turks prepared diligently for the impending nuclear threats, determined to preserve their cultural heritage and ensure their survival in a world on the precipice of disaster.",
              "In the post-2077 wasteland, Istanbul miraculously escaped nuclear devastation, becoming a beacon of hope and civilization. Despite the cataclysmic events, the surviving Turks, in collaboration with the Turkish branch of VaultTec (Vatandaş Omuzlayan Lütufkar Toplum Teknolojileri - VOLTTEK), rallied to rebuild and preserve their cultural heritage. Their history, characterized by resilience, innovation, and enduring ties to the European Commonwealth, continues to shape their identity as resourceful and adaptable survivors in the post-apocalyptic world.",
            ],
          }}
        />
      </Card>
    </section>
  );
}
