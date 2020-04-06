import React from "react";
import Main from "./Main";
import { Figure } from "react-bootstrap";
import "./About.css";
import orit from "../orit.jpg";
import PageHeader from "./PageHeader";

const About = () => {
  return (
    <Main>
      <PageHeader>אודות</PageHeader>
      <Figure className="about-figure">
        <Figure.Image className="figure-img" alt="171x180" src={orit} />
        <Figure.Caption className="figure-text">
          שמי אורית זיצר-יועצת מס.
          <br />
          בעלת משרד ליעוץ מס,החזרי מס,משכורות והנהלת חשבונות לעצמאים. מתמחה
          בעסקים קטנים ובינוניים, עם ניסיון של מעל ל-17 שנים בחברות הייטק
          ובמשרדי רואי חשבון. אם לא בא לכם לקבל מכתב מפתיע ממס הכנסה על חובות של
          עשרות אלפי שקלים אני ממליצה לכם לשים לב טוב לאופן בו אתם ממלאים את
          הדו"ח השנתי. לא בטוחים שאתם מבינים את כל הסעיפים? צריכים מישהו מקצועי
          ש'מדבר את השפה'? רוצים להיות רגועים כי מומחה מטפל לכם בניירות? פנו
          אלי, אני פה בכדי לעזור לכם, לחסוך עבורכם ולראות אתכם גדלים.
          <br />
          אורית זיצר, יועצת מס 052-5557541
        </Figure.Caption>
      </Figure>
    </Main>
  );
};

export default About;
