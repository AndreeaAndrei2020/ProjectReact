import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopCafeaCard from "../ShopCafeaCard";

const listaProduse = [
  {
    id: 1,
    src: "/photos/CafeaDecaf.jpg",
    pret: "50lei ",
    text: "NOTES OF CARAMEL, CHOCOLATE, LIME",
    title: "Cafea Decaf"
  },
  {
    id: 2,
    src: "/photos/CafeaBlend.jpg",
    pret: "60lei ",
    text: "NOTES OF CARAMEL, CHOCOLATE, LIME",
    title: "Cafea Blend"
  },

  {
    id: 3,
    src: "/photos/CafeaBrasil.jpg",
    pret: "55lei ",
    text: "NOTES OF CARAMEL, CHOCOLATE, LIME",
    title: "Cafea Brasil"
  },
  {
    id: 4,
    src: "/photos/CafeaPeru.jpg",
    pret: "70lei ",
    text: "NOTES OF CARAMEL, CHOCOLATE, LIME",
    title: "Cafea Peru"
  },
];

export default function Shop() {
  const mystyle = {
    marginTop: "15px",
    fontFamily: "Arial",
  };

  return (
    <div className="ShopCafeaCard" style={mystyle}>
      <Row xs={1} md={2} className="g-4">
        {listaProduse.map((produs) => (
          <ShopCafeaCard
            path={"/produs" + "/" + produs.id}
            src={produs.src}
            pret={produs.pret}
            text={produs.text}
            title={produs.title}
          />
        ))}
      </Row>
    </div>
  );
}
