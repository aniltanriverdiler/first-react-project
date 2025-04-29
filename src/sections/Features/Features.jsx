import { Card } from "../../components/Card/Card";
import styles from "./Features.module.scss";

const cardData = [
  {
    title: "Fresh new layout",
    description:
      "With Bootstrap 5, we've created a fresh new layout for this template!",
    icon: "bi bi-collection",
  },
  {
    title: "Free to download",
    description:
      "As always, Start Bootstrap has a powerful collection of free templates.",
    icon: "bi bi-cloud-download",
  },
  {
    title: "Jumbotron hero header",
    description:
      "The heroic part of this template is the jumbotron hero header!",
    icon: "bi bi-card-heading",
  },
  {
    title: "Feature boxes",
    description:
      "We've created some custom feature boxes using Bootstrap icons!",
    icon: "bi bi-bootstrap",
  },
  {
    title: "Simple clean code",
    description:
      "We keep our dependencies up to date and squash bugs as they come!",
    icon: "bi bi-code",
  },
  {
    title: "A name you trust",
    description:
      "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    icon: "bi bi-patch-check",
  },
];

export const Features = () => {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          {cardData.map((item, idx) => (
            <Card
              key={idx}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
