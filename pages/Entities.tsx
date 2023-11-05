import { Card } from "antd";
import Deity from "Comp/commonlore/Deities";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";
export default function EntitiesPage() {
  return (
    <section>
      <GetCrumbs path={"Fallout: Istanbul,Entities"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Entities",
            text: ["Art by Midjourney AI, except Sivaslılar and Euro."]
          }}
        />
        <Deity
          imageSrc={"./Entities/Ghoul.png"}
          descriptionProps={{
            title: "Ghouls",
            body: "Friendly or feral, with a glowing variant. They speak Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Mutant.png"}
          descriptionProps={{
            title: "Nightkin",
            body: "Super Mutants. They speak Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Bullz.png"}
          descriptionProps={{
            title: "Bullz",
            body: "Mutated animalistic humanoids. They speak Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Turk.png"}
          descriptionProps={{
            title: "Turks",
            body: "Main inhabitants of Istanbul. They speak Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Batu.png"}
          descriptionProps={{
            title: "Sivaslılar",
            body: "Kabadayi culture lives on, they also speak Sivas' Cant. or Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Aze.png"}
          descriptionProps={{
            title: "Azeris",
            body: "Pre-war historic researchers and architects. They speak a dialect of Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Southerner.png"}
          descriptionProps={{
            title: "Southerners",
            body: "Pre-war weapon scientists and fanatics. They speak a dialect of Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Enclave.png"}
          descriptionProps={{
            title: "The Enclave",
            body: "Pre-war US Government, Americans. They speak English.",
          }}
        />
        <Deity
          imageSrc={"./Entities/China.png"}
          descriptionProps={{
            title: "Asia",
            body: "Ideals heavily influenced by the pre-war Chinese Government, Asian community. They mostly speak Japanese (because I know it), some English, and some Euro.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Russian.png"}
          descriptionProps={{
            title: "Slavs",
            body: "Pre-war Soviet Government, Russians. They speak Euro.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Alkan.jpg"}
          descriptionProps={{
            title: "Euro",
            body: "Pre-war European Commonwealth. They speak Euro.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Alien.png"}
          descriptionProps={{
            title: "Aliens",
            body: "They exist",
          }}
        />
        <Deity
          imageSrc={"./Entities/Psycho.png"}
          descriptionProps={{
            title: "Cyberpsychos",
            body: "People obsessed with enhancing their bodies with tech.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Dweller.png"}
          descriptionProps={{
            title: "Dwellers",
            body: "Vault dwellers.",
          }}
        />
      </Card>
    </section>
  );
}
