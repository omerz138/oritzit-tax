import React from "react";
import Main from "./Main";
import PageHeader from "./PageHeader";
import {Button, Col, Form, Row} from "react-bootstrap";
import "./Contact.css"

const Contact = () => (
	<Main>
		<PageHeader>
			צור קשר
		</PageHeader>
		<p className="contact-text">
			אורית זיצר
			<br/>
			אפרים 46/6, מודיעין
			<br/>
			נייד: 0525557541, 08-9730454 פקס:08-9205097
			<br/>
			דוא"ל: oz-tax@oritzit.co.il
		</p>

		<Form className="contact-form">
			<Form.Group as={Row} controlId="name">
				<Form.Label column sm={2}>
					שם *
				</Form.Label>
				<Col sm={5}>
					<Form.Control type="text" placeholder="name" />
				</Col>
			</Form.Group>

			<Form.Group as={Row} controlId="email">
				<Form.Label column sm={2}>
					אימייל *
				</Form.Label>
				<Col sm={5}>
					<Form.Control type="email" placeholder="email"  />
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="title">
				<Form.Label column sm={2}>
					נושא
				</Form.Label>
				<Col sm={5}>
					<Form.Control type="text" placeholder="title"  />
				</Col>
			</Form.Group>

			<Form.Group as={Row} controlId="msg">
				<Form.Label column sm={2}>הודעה *</Form.Label>
				<Form.Control className="contact-textarea" as="textarea" rows="6" cols="2" />
			</Form.Group>
			<div className="bttn-wrapper">
				<Button className="contact-btt" type="submit" variant="secondary" size="lg" >שלח</Button>
			</div>
		</Form>
	</Main>
);

export default Contact;