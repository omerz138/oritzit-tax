import React from "react";
import Main from "./Main";
import {ListGroup} from "react-bootstrap";
import "./OfficeServices.css"
import PageHeader from "./PageHeader";

const OfficeServices = () => {
	return (
		<Main >
			<PageHeader>שירותי המשרד</PageHeader>
			<h3 className="second-header">תחומי התמחות</h3>
			<ListGroup variant="flush">
				<ListGroup.Item className="os-list-item">הדרכה וליווי ללקוחות העומדים לפני הקמת עסק – מילוי הטפסים הדרושים ופתיחת התיקים הנדרשים ברשויות המס.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">ייעוץ עסקי וייעוץ מס לעסקים ותיקים.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">הנהלת חשבונות חד צדדית / כפולה עד למאזן – בהתאם להוראות ניהול ספרים.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">חישובי שכר והפקת תלושי משכורת ודוחות ניכויים.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">העברת דוחות תקופתיים ומקדמות לרשויות המס.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">במהלך השנה מופקים דוחות רווח תקופתיים, המלמדים על מצב העסק, חבות המס והתאמת מק' ביטוח לאומי ומס הכנסה.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">המשרד מקושר למחשבי מע"מ, מס הכנסה וביטוח לאומי – כך שניתן להפיק אישורים ולטפל אונליין.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">הגשת דוחות שנתיים והצהרות הון למס הכנסה.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">ביטוח חיים, ביטוח מנהלים וקרן פנסיה ללקוחות המשרד ולעובדיהם.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">החזרי מס לעובדים שכירים – הבדיקה נעשית ללא חיוב, החזר המס מועבר ישירות לחשבון הבנק של השכיר.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">מיסוי פרישה - יעוץ וליווי פורשים לחסכון במס.</ListGroup.Item>
				<ListGroup.Item className="os-list-item">מיסוי אמריקאי.</ListGroup.Item>
			</ListGroup>
			<div className="video-tip">
				<iframe title="facebook-tips-video"
					src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1811538615%2Fvideos%2F10210716459986912%2F&amp;show_text=0&amp;width=560"
					style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0"
					allowFullScreen={true} />
			</div>
		</Main>
	);
};

export default OfficeServices;