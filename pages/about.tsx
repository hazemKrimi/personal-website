import React, { FC, useContext, useState } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import { useForm, ValidationError } from '@formspree/react';
import Head from 'next/head';
import { Wrapper } from './styles/about';
import Image from 'next/image';
import Input from '../components/Input';
import MDXButton from '../components/MDXButton';

const About: FC = () => {
	const { dark } = useContext(DarkModeContext);
	const [form, setForm] = useState<{ name: string; email: string; message: string }>({
		name: '',
		email: '',
		message: ''
	});
	const [state, Submit] = useForm('xoqpgyge');
	const [submitted, setSubmitted] = useState<boolean>(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			await Submit(event);
			setSubmitted(true);
		} finally {
			setTimeout(() => setSubmitted(false), 1000);
			setForm({ name: '', email: '', message: '' });
		}
	};

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='author' content='Hazem Krimi' />
				<meta
					name='description'
					content='Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
				/>
				<link rel='canonical' href='https://hazemkrimi.tech/about' />
				<meta property='og:image' content='/logo.png' />
				<meta
					property='og:description'
					content='Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
				/>
				<meta property='og:title' content='Hazem Krimi' />
				<meta
					name='keywords'
					content='Hazem, Krimi, Developer, Software, Engineer, Web, Mobile, Frontend, Backend, Fullstack, JavaScript, React.js, React Native, Node.js, Portfolio, Blog, Tutorials, Tech News'
				/>
				<title>About | Hazem Krimi</title>
			</Head>
			<Wrapper dark={dark}>
				<div className='content'>
					<div>
						<h1>About Me</h1>
						<div className='about'>
							<p>
								I am a software developer and a student. I have experience as a full stack developer
								but I lean more to the front end and I have built a lot of web apps and some mobile
								apps. Also, I am always learning and experimenting with new technologies (currently
								learning about the ethereum blockchain) and other topics other than software
								engineering.
							</p>
						</div>
					</div>
					<div>
						<h1>Contact Me {submitted && <span className='success'>Message sent ✔️</span>}</h1>
						<form className='contact' onSubmit={handleSubmit}>
							<Input
								type='text'
								placeholder='Name'
								variant='small'
								name='name'
								required
								value={form.name}
								onChange={handleChange}
							/>
							<ValidationError className='error' prefix='Name' field='name' errors={state.errors} />
							<Input
								type='text'
								placeholder='Email'
								variant='small'
								name='email'
								required
								value={form.email}
								onChange={handleChange}
							/>
							<ValidationError
								className='error'
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
							<Input
								type='text'
								placeholder='Message'
								variant='big'
								name='message'
								required
								value={form.message}
								onChange={handleChange}
							/>
							<ValidationError
								className='error'
								prefix='Message'
								field='message'
								errors={state.errors}
							/>
							<MDXButton type='submit' variant='action' disabled={state.submitting || submitted}>
								Submit
							</MDXButton>
						</form>
					</div>
				</div>
				<div className='photo'>
					<Image src='/picture.jpg' width='100%' height='100%' layout='responsive' />
				</div>
			</Wrapper>
		</>
	);
};

export default About;
