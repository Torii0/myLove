import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./LetterPage.css";

const LetterPage = () => {
  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title-lp">
          <Title />
        </Link>
        <div className="letter">
          <p>Dear [Recipient],</p>
          <p>
            I hope this letter finds you well. I wanted to write to you about...
            [Your letter content goes here]. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ipsa est earum ex veniam iure
            dignissimos exercitationem, error ea necessitatibus fugit unde, quae
            voluptatibus explicabo veritatis tempora libero, recusandae
            accusamus alias. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi magnam voluptatibus ad. Rerum, autem culpa sed omnis
            nemo, dolores iusto similique accusantium repellat aspernatur alias
            odit dolore excepturi magni optio!I hope this letter finds you well.
            I wanted to write to you about... [Your letter content goes here].
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa est
            earum ex veniam iure dignissimos exercitationem, error ea
            necessitatibus fugit unde, quae voluptatibus explicabo veritatis
            tempora libero, recusandae accusamus alias. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi magnam voluptatibus ad.
            Rerum, autem culpa sed omnis nemo, dolores iusto similique
            accusantium repellat aspernatur alias odit dolore excepturi magni
            optio!I hope this letter finds you well. I wanted to write to you
            about... [Your letter content goes here]. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ipsa est earum ex veniam iure
            dignissimos exercitationem, error ea necessitatibus fugit unde, quae
            voluptatibus explicabo veritatis tempora libero, recusandae
            accusamus alias. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi magnam voluptatibus ad. Rerum, autem culpa sed omnis
            nemo, dolores iusto similique accusantium repellat aspernatur alias
            odit dolore excepturi magni optio!I hope this letter finds you well.
            I wanted to write to you about... [Your letter content goes here].
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa est
            earum ex veniam iure dignissimos exercitationem, error ea
            necessitatibus fugit unde, quae voluptatibus explicabo veritatis
            tempora libero, recusandae accusamus alias. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi magnam voluptatibus ad.
            Rerum, autem culpa sed omnis nemo, dolores iusto similique
            accusantium repellat aspernatur alias odit dolore excepturi magni
            optio!I hope this letter finds you well. I wanted to write to you
            about... [Your letter content goes here]. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ipsa est earum ex veniam iure
            dignissimos exercitationem, error ea necessitatibus fugit unde, quae
            voluptatibus explicabo veritatis tempora libero, recusandae
            accusamus alias. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi magnam voluptatibus ad. Rerum, autem culpa sed omnis
            nemo, dolores iusto similique accusantium repellat aspernatur alias
            odit dolore excepturi magni optio!
          </p>
          <p>Best regards,</p>
          <p>[Your Name]</p>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;
