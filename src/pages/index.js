import React from "react";
import { Layout, Seo } from "components/common";
import { Intro, About, Skills, Contact, Projects } from "components/landing";

const Home = () => (
	<Layout>
		<Seo />
		<Intro />
    <About />
		<Skills />
		<Projects />
		<Contact />
	</Layout>
);

export default Home;
