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
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Ghouls",
            body: "Friendly or feral, with a glowing variant. They speak Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Nightkin",
            body: "Super Mutants. They speak Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Bullz",
            body: "Mutated animalistic humanoids. They speak Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Turks",
            body: "Main inhabitants of Istanbul. They speak Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Sivaslılar",
            body: "Kabadayi culture lives on, they also speak Sivas' Cant. or Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Azeriler",
            body: "Pre-war historic researchers and architects. They speak a dialect of Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Southerners",
            body: "Pre-war weapon scientists and fanatics. They speak a dialect of Common.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "The Enclave",
            body: "Pre-war US Government, Americans. They speak English.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Chinamen",
            body: "Pre-war Chinese Government, Asian community. They speak Japanese because your DM knows Japanese.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Slavs",
            body: "Pre-war Soviet Government, Russians. They speak Euro.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Euro",
            body: "Pre-war European Commonwealth. They speak Euro.",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Aliens",
            body: "They exist",
          }}
        />
        <Deity
          imageSrc={"./Entities/Temp.png"}
          descriptionProps={{
            title: "Ghosts",
            body: "They also exist",
          }}
        />
      </Card>
    </section>
  );
}
