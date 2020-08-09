// React
import React from "react";
// Icons
import Ai from "./icons/ai.svg";
// import Bootstrap from "./icons/bootstrap.svg";
import CSS from "./icons/css.svg";
// import Express from "./icons/express.svg";
import Figma from "./icons/figma.svg";
import Firebase from "./icons/firebase.svg";
import Git from "./icons/git.svg";
import Heroku from "./icons/heroku.svg";
import HTML from "./icons/html.svg";
import Jest from "./icons/jest.svg";
import Js from "./icons/js.svg";
import MUI from "./icons/material-ui.svg";
import MySql from "./icons/mysql.svg";
import NextJs from "./icons/nextjs.svg";
import NodeJs from "./icons/nodejs.svg";
import NPM from "./icons/npm.svg";
import Ps from "./icons/ps.svg";
// import Python from "./icons/python.svg";
import ReactIcon from "./icons/react.svg";
// import Redux from "./icons/redux.svg";
import ReduxSaga from "./icons/redux-saga.svg";
import RTL from "./icons/rtl.svg";
import Sass from "./icons/sass.svg";
import Storybook from "./icons/storybook.svg";
import StyledComponents from "./icons/styled-components.svg";
import Typescript from "./icons/typescript.svg";
import Xd from "./icons/xd.svg";
import Yarn from "./icons/yarn.svg";

import { ISkill } from "./types";

export const skills: Array<ISkill> = [
	{
		id: 0,
		label: "HTML",
		icon: <HTML />,
		keyword: "HTML",
	},
	{
		id: 1,
		label: "CSS",
		icon: <CSS />,
		keyword: "CSS",
	},
	{
		id: 2,
		label: "SASS - SCSS",
		icon: <Sass />,
		keyword: "SCSS",
	},
	{
		id: 3,
		label: "JavaScript ES6+",
		icon: <Js />,
		keyword: "Javascript",
	},
	{
		id: 4,
		label: "ReactJs",
		icon: <ReactIcon />,
		keyword: "React",
	},
	{
		id: 5,
		label: "Redux + Sagas + Ducks",
		icon: <ReduxSaga />,
		keyword: "Redux",
	},
	{
		id: 6,
		label: "NextJs",
		icon: <NextJs />,
		keyword: "Next",
	},
	{
		id: 7,
		label: "Styled Components",
		icon: <StyledComponents />,
		keyword: "Styled Components",
	},
	{
		id: 8,
		label: "Typescript",
		icon: <Typescript />,
		keyword: "Typescript",
	},
	{
		id: 9,
		label: "Material UI",
		icon: <MUI />,
		keyword: "MUI",
	},
	{
		id: 10,
		label: "NodeJs + Express",
		icon: <NodeJs />,
		keyword: "NodeJs",
	},
	{
		id: 11,
		label: "MySQL",
		icon: <MySql />,
		keyword: "MySQL",
	},
	{
		id: 12,
		label: "NPM",
		icon: <NPM />,
		keyword: "NPM",
	},
	{
		id: 13,
		label: "Yarn",
		icon: <Yarn />,
		keyword: "YARN",
	},
	{
		id: 14,
		label: "GIT",
		icon: <Git />,
		keyword: "GIT",
	},
	{
		id: 15,
		label: "Storybook",
		icon: <Storybook />,
		keyword: "Storybook",
	},
	{
		id: 16,
		label: "Jest",
		icon: <Jest />,
		keyword: "Jest",
	},
	{
		id: 17,
		label: "Testing Library",
		icon: <RTL />,
		keyword: "Testing Library",
	},
	{
		id: 18,
		label: "Firebase",
		icon: <Firebase />,
		keyword: "Firebase",
	},
	{
		id: 19,
		label: "Heroku",
		icon: <Heroku />,
		keyword: "Heroku",
	},
];

export const designSkills: Array<ISkill> = [
	{
		id: 0,
		label: "Illustrator",
		icon: <Ai />,
	},
	{
		id: 1,
		label: "Photoshop",
		icon: <Ps />,
	},
	{
		id: 2,
		label: "XD",
		icon: <Xd />,
	},
	{
		id: 3,
		label: "Figma",
		icon: <Figma />,
	},
];

export const otherSkills: Array<ISkill> = [
	{
		id: 0,
		label: "Inglés Bilingüe",
	},
	{
		id: 5,
		label: "Liderazgo",
	},
	{
		id: 2,
		label: "Gestión de proyectos",
	},
	{
		id: 3,
		label: "Design Thinking",
	},
	{
		id: 4,
		label: "Trabajo en Equipo",
	},
];
