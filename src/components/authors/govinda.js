import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Govinda() {
  return (
    <div className="avatar padding-bottom--md">
      <span className="avatar__photo-link avatar__photo avatar__photo--lg">
        <img alt="Govinda Hosein" src={useBaseUrl("/img/govinda.jpg")} />
      </span>
      <div className="avatar__intro">
        <div className="avatar__name">Govinda Hosein</div>
        <small className="avatar__subtitle">
          Software Developer and Design Engineer
        </small>
        <small>
          <a href="mailto:govinda.hosein@gmail.com">govinda.hosein@gmail.com</a>
        </small>
      </div>
    </div>
  );
}
