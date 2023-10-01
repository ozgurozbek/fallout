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
            text: ["Art by Bethesda, Fallout Shelter"]
          }}
        />
        <Deity
          imageSrc={"./Factions/Bogaz.webp"}
          descriptionProps={{
            title: "Boğaz Biraderliği",
            body: "The Boğaz Biraderliği reveres pre-war technology as the key to humanity's salvation. They see themselves as the protectors and preservers of advanced knowledge.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Osmanogullari.webp"}
          descriptionProps={{
            title: "Osmanoğulları",
            body: "The Osmanoğulları are dedicated to reviving the traditions and values of the Ottoman Empire. They believe that by restoring order and cultural heritage, they can bring stability to the wasteland.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Gamyoncular.webp"}
          descriptionProps={{
            title: "Gamyoncular",
            body: "Profit and power are their driving forces. The Gamyoncular controls the wasteland's economy through monopolies on essential resources and trade routes. They are mostly from Kastamonu.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Tovbekar.webp"}
          descriptionProps={{
            title: "Tövbekârlar",
            body: "Survival of the fittest is their mantra. The Tövbekârlar take what they want through force and fear. They have no moral qualms about raiding and plundering. They value Galata too much.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Cappadocian.webp"}
          descriptionProps={{
            title: "Cappadocian Legion",
            body: "The Cappadocian Legion embrace a nomadic lifestyle, valuing adaptability and resourcefulness. They roam the wasteland in caravans, trading, and surviving.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Gulyabani.webp"}
          descriptionProps={{
            title: "Yenikapı Gûlyabani Topluluğu",
            body: "Acceptance and unity among mutants and ghouls. They aim to create a safe haven where their kind can thrive, free from discrimination.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Qiz.webp"}
          descriptionProps={{
            title: "Qız Qalası Gözetçileri",
            body: "Vigilance and protection of the Qız Qalası, guarding it against all threats, human or mutant. They are known for their precision marksmanship.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Artisans.webp"}
          descriptionProps={{
            title: "Golden Horn Artisans",
            body: "The Artisans are dedicated to preserving and reviving pre-war art and craftsmanship. They believe that through art and beauty, they can elevate humanity.",
          }}
        />
        <Deity
          imageSrc={"./Factions/BoS.webp"}
          descriptionProps={{
            title: "Brotherhood of Steel",
            body: "Branch of BoS from the US that have joined the EU Commonwealth and then ended up in Turkey.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Aydinlik.webp"}
          descriptionProps={{
            title: "Aydınlık Enstitüsü",
            body: "The Aydınlık Enstitüsü (Atatürk Institute of Enlightenment) would be dedicated to the pursuit of knowledge, science, and education.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Kediler.webp"}
          descriptionProps={{
            title: "Atom Kedileri",
            body: "A faction of gunsmiths.",
          }}
        />
        <Deity
          imageSrc={"./Factions/BarbarOS.webp"}
          descriptionProps={{
            title: "Barbar OS.",
            body: "A rogue AI from an abandoned video game.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Cekirdek.webp"}
          descriptionProps={{
            title: "Gaye-i Çekirdek",
            body: "A cult of radiation worshippers.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Tosunlar.webp"}
          descriptionProps={{
            title: "Tosunlar",
            body: "A faction of Super Mutants.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Surgeon.webp"}
          descriptionProps={{
            title: "Neşter",
            body: "While being isolated in their vault, this group of medical professionals decided to feed on humans as it is the substance that is least radiated.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Fan.webp"}
          descriptionProps={{
            title: "Abiler",
            body: "They are extremely interested in any form of art, whether it is pre-war or not. They are well respected throughout, and they preverve this as they dabble with art more and more.",
          }}
        />
        <Deity
          imageSrc={"./Factions/Vault.webp"}
          descriptionProps={{
            title: "Ay Yildiz",
            body: "Affiliated with pre-war Turkey, and its ideologies. They preserve olden values due to being isolated within the vaults.",
          }}
        />
      </Card>
    </section>
  );
}
