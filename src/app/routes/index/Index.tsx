import CampaignCard from "./components/CampaignCard";
import "./Index.scss";

function Index() {
  return (
    <>
      <div className="">
        <span className="index-text-secondary">MESA · HUB</span>
        <h2 className="index-text-primary">SELECIONE A MESA</h2>
        <p className="secondary">
          Painéis de campanha reunidos em um só domínio. Escolha um registro
          para abrir sua dashboard.
        </p>
      </div>
      <div className="card-container">{/* <CampaignCard /> */}</div>
      <span className="index-text-secondary secondary">{} MESAS ATIVAS</span>
    </>
  );
}

export default Index;
