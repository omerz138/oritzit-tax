import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./QA.css";
import PageHeader from "./PageHeader";
import Main from "./Main";

const QA = () => (
  <Main>
    <PageHeader>שאלות ותשובות</PageHeader>
    <Accordion defaultActiveKey="0">
      <Card className="QA-card">
        <Accordion.Toggle
          className="card-acc-text"
          as={Card.Header}
          eventKey="0"
        >
          בפתיחת עסק אילו תיקים עלייך לפתוח?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="card-acc-text">
            כיום עליך לפתוח תיקים במע"מ ובמס הכנסה ובמוסד לביטוח לאומי בטרם העסק
            החל בפיעולותו.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="QA-card">
        <Accordion.Toggle
          className="card-acc-text"
          as={Card.Header}
          eventKey="1"
        >
          כמה זמן לשמור מסמכים חשובים ?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="card-acc-text">7 שנים</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="QA-card">
        <Accordion.Toggle
          className="card-acc-text"
          as={Card.Header}
          eventKey="2"
        >
          מהם סוגי המס?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body className="card-acc-text">
            מס עסקאות(מס על הכנסות) מס תשומות(מס על הוצאות, לרבות אבחנה מול מס
            תשומות בגין רכוש קבוע), מס תשומות של עסק בהקמה- יוכר אם יוכח ששימש
            בהקמת העסק.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="QA-card">
        <Accordion.Toggle
          className="card-acc-text"
          as={Card.Header}
          eventKey="3"
        >
          כל כמה זמן עלי להגיש דוחות ?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body className="card-acc-text">
            דו"ח תקופתי – בכל 15 בחודש (ישנם עוסקים הנדרשים לדווח פעם בחודשיים),
            על העוסק לחשב את ההפרש בין מס העסקאות לבין מס התשומות ואת מס התשומות
            בגין הרכוש הקבוע.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="QA-card">
        <Accordion.Toggle
          className="card-acc-text"
          as={Card.Header}
          eventKey="4"
        >
          מי מקבל פטורים ובאיזה מקרה אני יכול לקזז הפסדים ?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body className="card-acc-text">
            7פיצויי פיטורין (משכורת לכל שנת עבודה עד לגובה התקרה בתקנות) קיזוז
            הפסדים שוטפים, קיזוז הפסדי הון-רק מול רווח הון.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="QA-card">
        <Accordion.Toggle
          className="card-acc-text"
          as={Card.Header}
          eventKey="5"
        >
          מהם סוגי המס ?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body className="card-acc-text">
            מס על הכנסה , מס פורגרסיבי (ככל שההכנסה עולה כך עולה שיעור המס) אל
            מול רגרסיבי (בשיעור הקבוע כדוגמת מע"מ) התשכרות מהימורים,הגרלות או
            פרסים- חייב במס מעל הסכום הרשום בתקנו ריבית רעיונית לפי סעיף 3ט ו3י
            לפקודת מס הכנסה , רווח על הון.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="QA-card">
        <Accordion.Toggle
          className="card-acc-text"
          as={Card.Header}
          eventKey="6"
        >
          אילו מקורות הכנסה חייבים במס ?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <Card.Body className="card-acc-text">
            קיצבה,טובת הנאה (לרבות עסק סלולרי ועוד) דיבידנד,ריבית והפרשי
            הצמדה,דמי ניכיון, שכר דירה המתקבל לתקופה ארוכה משנת המס קיזוז תשלומי
            יתר בסוף שנת מס.{" "}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Main>
);

export default QA;
