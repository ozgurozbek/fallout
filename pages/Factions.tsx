import { Card, Divider, Skeleton } from "antd";
import Deity from "Comp/commonlore/Deities";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";

export default function FactionsPage() {
  return (
    <section>
      <GetCrumbs path={"Fallout: Istanbul,Factions"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Factions",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Boğaz Biraderliği",
            body: "The Boğaz Biraderliği reveres pre-war technology as the key to humanity's salvation. They see themselves as the protectors and preservers of advanced knowledge.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Osmanoğulları",
            body: "The Osmanoğulları are dedicated to reviving the traditions and values of the Ottoman Empire. They believe that by restoring order and cultural heritage, they can bring stability to the wasteland.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Gamyoncular",
            body: "Profit and power are their driving forces. The Gamyoncular controls the wasteland's economy through monopolies on essential resources and trade routes. They are mostly from Kastamonu.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Tövbekârlar",
            body: "Survival of the fittest is their mantra. The Tövbekârlar take what they want through force and fear. They have no moral qualms about raiding and plundering. They value Galata too much.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Cappadocian Legion",
            body: "The Cappadocian Legion embrace a nomadic lifestyle, valuing adaptability and resourcefulness. They roam the wasteland in caravans, trading, and surviving.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Yenikapı Gûlyabani Topluluğu",
            body: "Acceptance and unity among mutants and ghouls. They aim to create a safe haven where their kind can thrive, free from discrimination.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Qız Qalası Gözetçileri",
            body: "Vigilance and protection of the Qız Qalası, guarding it against all threats, human or mutant. They are known for their precision marksmanship.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Golden Horn Artisans",
            body: "The Artisans are dedicated to preserving and reviving pre-war art and craftsmanship. They believe that through art and beauty, they can elevate humanity.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Brotherhood of Steel",
            body: "Branch of BoS from the US that have joined the EU Commonwealth and then ended up in Turkey.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Aydınlık Enstitüsü",
            body: "The Aydınlık Enstitüsü (Atatürk Institute of Enlightenment) would be dedicated to the pursuit of knowledge, science, and education.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Atom Kedileri",
            body: "A faction of gunsmiths.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Barbar OS.",
            body: "A rogue AI from an abandoned video game.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Gaye-i Çekirdek",
            body: "A cult of radiation worshippers.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Temp.png"}
          descriptionProps={{
            title: "Tosunlar",
            body: "A faction of Super Mutants.",
          }}
        />
      </Card>
    </section>
  );
}
