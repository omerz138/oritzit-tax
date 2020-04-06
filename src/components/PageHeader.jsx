import React from "react";

const PageHeader = (props) => (
	<h1 style={{marginBottom:50,marginTop:30, fontSize:40,fontFamily:"Arimo,sans-serif"}}>
		{props.children}
	</h1>
);

export default PageHeader;