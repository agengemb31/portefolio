import BaseSection from './../BaseSection';
import Divider from './../Divider';
import InfoSheet from './InfoSheet';
import ContactForm from './ContactForm';

export default function ContactSection({bg, textColor, height}) 
{
	return (
		<BaseSection id="contact" bg={bg} textColor={textColor} padding="py-5" style={{ scrollMarginTop: `${height}px` }}>
			<h1 className="text-center mb-4">Contactez-moi</h1>

			<Divider/>	
			<div className="container my-5">
				<div className="row align-items-start text-center text-lg-start">
					<InfoSheet/>
					<ContactForm/>
				</div>
			</div>
		</BaseSection>
	);
}
