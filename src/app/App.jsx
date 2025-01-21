import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/cv.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { BsFacebook, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPhp } from "react-icons/si";

//import images
import Ataa from '../assets/images/Ataa.png';
import Elzero from '../assets/images/Elzero.png';
import ModelPortifolio from '../assets/images/ModelPortifolio.png';
import LogReact from '../assets/images/LogReact.png';
import TMDB from '../assets/images/TMDB.png';
import GET from '../assets/images/Get.png';

// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'HTML 5',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'React Query',
		icon: <SiReactquery size="25px" color="white" />,
		cssName: "react-query"
	},
	{
		name: 'Postman',
		icon: <SiPostman size="25px" color="white" />,
		cssName: "postman"
	},
	{
		name: 'Design Responsivo',
		icon: <FaMobileAlt size="25px" color="white" />,
		cssName: "responsive"
	},
	{
		name: 'C++',
		icon: <TbBrandCpp size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'PostgreSQL',
		icon: <BiLogoPostgresql size="25px" color="white" />,
		cssName: "postgresql"
	},
	{
		name: 'PHP',
		icon: <SiPhp size="25px" color="white" />,
		cssName: "php"
	},
	{
		name: 'Resolução de Problemas',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}
];
const TypewriterText = ({ text, typingSpeed = 100, pauseDuration = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
	useEffect(() => {
        if (isTyping) {
            let currentCharIndex = 0;
            const typingInterval = setInterval(() => {
                if (currentCharIndex < text.length) {
                    setDisplayedText((prev) => prev + text[currentCharIndex]);
                    currentCharIndex++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, typingSpeed);
            return () => clearInterval(typingInterval);
        } else {
            const pauseTimeout = setTimeout(() => {
                setDisplayedText('');
                setIsTyping(true);
            }, pauseDuration);
            return () => clearTimeout(pauseTimeout);
        }
    }, [isTyping, text, typingSpeed, pauseDuration]);

    return <h1>{displayedText}</h1>;
};

const projects = [
	{
		name: 'GET! Grupo',
		link: 'https://getgrupo.com.br/',
		github: 'https://github.com/joaotif/Grupo-GET---Site',
		description: (
			<>
				O site da GET! foi o <strong>meu primeiro projeto publicado</strong> como funcionário do <strong>Grupo GET!</strong>. 
				Atendendo aos requisitos definidos pelos meus supervisores, desenvolvi o projeto com uma <strong>interface intuitiva e autoral</strong>, priorizando a <strong></strong>experiência do usuário e destacando os valores da empresa. O site foi planejado para apresentar de forma clara e atraente a trajetória do Grupo GET!, seus serviços e produtos, além de uma seção dedicada aos principais clientes. Este trabalho reforça o compromisso da empresa com a inovação e a excelência no relacionamento com seus parceiros.
			</>
		),
		image: GET
	},
	{
		name: 'Parking Lots',
		link: 'https://parking-lots.vercel.app/',
		github: 'https://github.com/joaotif/Gerenciamento-de-Estacionamentos-PKLS',
		description: (
			<>
			  A <strong>Parking Lots</strong> é um sistema desenvolvido para gerenciamento de estacionamentos, criado com a parceria de 
			  <a href="https://github.com/fernandofriche" target="_blank" rel="noopener noreferrer">
				<strong> Fernando Rodrigues Friche</strong>
			  </a>. Este projeto foi pensado para ser uma solução robusta e eficiente, focada na experiência do usuário e na facilidade de gerenciamento
			   de vagas. A plataforma foi projetada para computadores, com uma interface intuitiva e funcionalidades que atendem a diferentes necessidades 
			   dos usuários. A Parking Lots visa otimizar a <strong>busca por vagas</strong> e <strong>administração dos estacionamentos</strong>, oferecendo 
			   uma <strong>gestão simples e eficaz de reservas</strong>, <strong>preços e localizações</strong>.
			</>
		  ),		
		image: Ataa
	  },
	  {
		name: 'Portifólio Profissional - Modelo Simples',
		link: 'https://potifolio-profissional-model.vercel.app/',
		github: 'https://github.com/joaotif/Portifolio-React-Modelo-Simples',
		description: (
			<>
				Esse <strong>Portfólio Profissional</strong> é uma aplicação <strong>desenvolvida em React</strong>, criada para apresentar de 
				forma moderna e interativa os trabalhos e experiências do usuário. Este projeto foi pensado 
				para oferecer uma <strong>navegação fluida e uma interface intuitiva</strong>, permitindo que visitantes explorem 
				informações sobre o profissional, seus projetos e formas de contato. Um dos destaques do portfólio
				é a <strong>integração com a API do GitHub</strong>, que permite exibir automaticamente os repositórios mais recentes 
				diretamente na página de projetos. Essa funcionalidade demonstra habilidades técnicas e atualizações
			    constantes no desenvolvimento de software, tornando o portfólio uma vitrine dinâmica e sempre 
				atualizada. O <strong>Portfólio Profissional</strong> é uma <strong>solução criativa e funcional</strong> para destacar habilidades, 
				projetos e conectividade em um único espaço digital.
			</>
		),
		image: ModelPortifolio
	},  
	{
		name: 'Movies TMDB',
		link: 'https://movies-tmdb-flax.vercel.app/',
		github: 'https://github.com/joaotif/API-de-Filmes-TheMovieDatabase',
		description: (
				<>
					Um site de filmes que utiliza a <strong>API do 'The Movie Database'</strong> para busca e exibição de conteúdos.
					 Permite explorar<strong> sinopses, orçamentos e detalhes de filmes</strong>, com <strong>interface intuitiva e dinâmica</strong> . 
					 Oferece funcionalidades como busca avançada, proporcionando uma <strong>experiência imersiva para os usuários</strong>.
				</>
			),
		image: TMDB
	},
	{
		name: 'Login React - Não Funcional',
		link: 'https://loginreactlayout.vercel.app/',
		github: 'https://github.com/joaotif/Login-React',
		description: (
			<>
				O projeto tem como objetivo apresentar o  design de uma <strong>Tela de Login desenvolvida em React</strong>. 
				Trata-se de uma <strong>interface não funcional</strong>, focada exclusivamente no layout, que pode ser adaptada e 
				integrada em futuros projetos mais completos e elaborados.			
			</>
		),
		image: LogReact
	},
	
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_wsw2tv4', 'template_u7om8tm', form.current, 'HDMwz57k3xrihLg4J')
				.then((result) => {
					console.log('Email enviado com sucesso:', result);
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				})
				.catch((error) => {
					console.error('Erro ao enviar email:', error);
				})
			setLoading(false);
		}, 2000);

	};
	
	return (
		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
					<img src="FavLogo.svg" alt="" />
				</a>
				<ul>
					<li><a href="#Home">Início</a></li>
					<li><a href="#About">Sobre Mim</a></li>
					<li><a href="#Projects">Projetos</a></li>
					<li><a href="#Contact">Contato</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Início</a></li>
					<li><a href="#About">Sobre Mim</a></li>
					<li><a href="#Projects">Projetos</a></li>
					<li><a href="#Contact">Contato</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
					<h1>Olá, sou o João Pedro</h1>
					<p>Desenvolvedor Full Stack com Foco em Personalizações e Soluções Web</p>
					<a
						href={cv}
						download="cv-PDF-document"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DownloadButton >
							Baixar Currículo
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/joaotif' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/joaopedrosribeiro/' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:joaopedroszr@gmail.com?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>
					<a className={style.facebook} target="_blank" href='https://www.instagram.com/joaotiff' >
						<FaInstagram size="30px" color='black' />
					</a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>Sobre Mim</h2>
					<p>Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais principalmente em termos de programação e tecnologia</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Quem sou eu?</h3>
							<p>
								Sou um desenvolvedor em início de carreira, com <strong>conhecimentos em React e experiência no desenvolvimento de interfaces Web modernas e responsivas</strong>. Tenho trabalhado em projetos que envolvem a criação de sistemas internos e soluções personalizadas para clientes, com foco na usabilidade e eficiência.
								Também possuo experiência com a plataforma <strong>Scriptcase</strong>, onde participei da <strong>implementação de sistemas e relatórios dinâmicos usando HTML5</strong>. Além disso, trabalho com <strong>PHP</strong> e <strong>PostgreSQL</strong> para criar backends e gerenciar dados de forma eficaz.
								Tenho familiaridade com ferramentas como o <strong>Postman para testar e integrar APIs</strong> , o que me ajuda a garantir a comunicação adequada entre os sistemas. Já contribui na <strong>criação de sites corporativos</strong>, sempre buscando seguir boas práticas de desenvolvimento e design para atender às necessidades do cliente.
								<br /><br />Estou constantemente aprendendo e me aprimorando, buscando oportunidades para aplicar meus conhecimentos em projetos que desafiem minhas habilidades e me ajudem a crescer como profissional.
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>Habilidades</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projetos</h2>
					<p>Aqui você encontrará alguns dos projetos pessoais e de clientes que criei, cada projeto contendo seu próprio estudo de caso</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											<IconButton
												width="170px"
												height="50px"
												backgroundColor="#0473E3"
												color="white"
												link={project.link}
												icon={<AiOutlineEye size="25px" color='white' />}
											>
												Live Demo
											</IconButton>
											<IconButton
												width="100px"
												height="50px"
												backgroundColor="black"
												color="white"
												link={project.github}
												icon={<AiFillGithub size="25px" color='white' />}
											>
												Github
											</IconButton>
										</div>
									</div>
								</div>
							})
						}
					</div>
				</div>
			</div>

			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contato</h2>
					<p>Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e entrarei em contato com você o mais breve possível</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Digite Seu Nome"
							label="Nome"
							type="text"
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Digite Seu Email"
							label="Email"
							type="email"
						/>
						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Digite Sua Mensagem"
							label="Mensagem"
							type="text"
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="#0473E3"
						>
							Enviar
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>joão pedro soares</h3>
							<p>Desenvolvedor focado em criar soluções funcionais e modernas, sempre buscando aprimorar minhas habilidades para entregar resultados eficientes e de qualidade. </p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/joaotif' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/joaopedrosribeiro/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:joaopedroszr@gmail.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
								<a className={style.facebook} target="_blank" href='https://www.instagram.com/joaotiff' >
									<FaInstagram size="30px" color='white' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2024. <span>João Pedro Soares Ribeiro</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;