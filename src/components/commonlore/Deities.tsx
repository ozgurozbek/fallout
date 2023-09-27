import { Typography, Avatar, Tooltip } from "antd";

const { Title } = Typography;

/**
 * Returns a domain image based on domain name.
 * @generator
 * @param name 
 * @returns Tooltip(antd) > Avatar(antd)
 */
function GetDomainObject(name: string) {
  switch (name) {
    case "War":
      return (
        <Tooltip
          className="float-right"
          placement="left"
          color={"#00ff1c"}
          title={"War"}
        >
          {" "}
          <Avatar
            // title="War"
            size={{ xs: 32, sm: 32, md: 32, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/war.png"}
            alt={""}
            draggable={false}
            shape="square"
            className="float-right"
          />
        </Tooltip>
      );
    case "Nature":
      return (
        <Tooltip
          className="float-right"
          placement="left"
          color={"#00ff1c"}
          title={"Nature"}
        >
          {" "}
          <Avatar
            // title="Nature"
            size={{ xs: 32, sm: 32, md: 32, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/nature.png"}
            alt={""}
            draggable={false}
            shape="square"
            className="float-right"
          />
        </Tooltip>
      );
    case "Trickery":
      return (
        <Tooltip
          className="float-right"
          placement="left"
          color={"#00ff1c"}
          title={"Trickery"}
        >
          {" "}
          <Avatar
            // title="Trickery"
            size={{ xs: 32, sm: 32, md: 32, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/trickery.png"}
            alt={""}
            draggable={false}
            shape="square"
            className="float-right"
          />
        </Tooltip>
      );
    case "Fundamental":
      return (
        <Tooltip
          className="float-right"
          placement="left"
          color={"#00ff1c"}
          title={"Fundamental"}
        >
          {" "}
          <Avatar
            // title="Fundamental"
            size={{ xs: 32, sm: 32, md: 32, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/fundamental.png"}
            alt={""}
            draggable={false}
            shape="square"
            className="float-right"
          />
        </Tooltip>
      );
    case "Knowledge":
      return (
        <Tooltip
          className="float-right"
          placement="left"
          color={"#00ff1c"}
          title={"Knowledge"}
        >
          {" "}
          <Avatar
            // title="Knowledge"
            size={{ xs: 32, sm: 32, md: 32, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/knowledge.png"}
            alt={""}
            draggable={false}
            shape="square"
            className="float-right"
          />
        </Tooltip>
      );
    case "Tempest":
      return (
        <Tooltip
          className="float-right"
          placement="left"
          color={"#00ff1c"}
          title={"Tempest"}
        >
          {" "}
          <Avatar
            // title="Tempest"
            size={{ xs: 32, sm: 32, md: 32, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/tempest.png"}
            alt={""}
            draggable={false}
            shape="square"
            className="float-right"
          />
        </Tooltip>
      );
    case "Life":
      return (
        <Tooltip
          className="float-right"
          placement="left"
          color={"#00ff1c"}
          title={"Life"}
        >
          {" "}
          <Avatar
            // title="Life"
            size={{ xs: 32, sm: 32, md: 32, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/life.png"}
            alt={""}
            draggable={false}
            shape="square"
            className="float-right"
          />
        </Tooltip>
      );
    case "Light":
      return (
        <Tooltip
          className="float-right"
          placement="left"
          color={"#00ff1c"}
          title={"Light"}
        >
          {" "}
          <Avatar
            // title="Light"
            size={{ xs: 32, sm: 32, md: 32, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/light.png"}
            alt={""}
            draggable={false}
            shape="square"
            className="float-right"
          />
        </Tooltip>
      );
    case "Death":
      return (
        <Tooltip
          className="float-right"
          placement="left"
          color={"#00ff1c"}
          title={"Death"}
        >
          {" "}
          <Avatar
            // title="Death"
            size={{ xs: 32, sm: 32, md: 32, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/death.png"}
            alt={""}
            draggable={false}
            shape="square"
            className="float-right"
          />
        </Tooltip>
      );
    default:
      return "Error";
  }
}

/**
 * Splits multiple domains by ", " and pushes a GetDomainObject image into an array. Used for deities, some can have multiple domains. 
 * @generator
 * @param data 
 * @returns array
 */
function GetDomains(data: string) {
  let splitData = data.split(", ");
  let result = [];
  for (let i = 0; i < splitData.length; i++) {
    result.push(GetDomainObject(splitData[i]));
  }
  return result;
}

/**
 * Creates the inline deity entry on Deities page.
 * @tutorial
 * @param imageSrc
 * @param descriptionProps
 * @returns div
 */
export default function Deity({
  imageSrc,
  descriptionProps,
}: {
  imageSrc: string;
  descriptionProps: { title: string; body: string};
}) {
  return (
    <div className="inline-flex w-full py-4">
      <Avatar
        size={{ xs: 64, sm: 64, md: 64, lg: 80, xl: 100, xxl: 120 }}
        src={imageSrc}
        alt={descriptionProps.title}
        draggable={false}
        onClick={() => window.open(imageSrc, "_blank")}
      />
      <div className="px-4 w-full">
        <Title level={2}>{descriptionProps.title}</Title>
        <p>{descriptionProps.body}</p>
      </div>
    </div>
  );
}
