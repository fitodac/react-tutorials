/**
 * Esta es una simple página de ejemplo a la 
 * que solo puedes acceder si estás autenticado
 */

export const Page1 = () => {
	return (
		<>
			<div className="text-xl">Page 1</div>

			<div className="mt-8 space-y-7">
				<p>{`Don't be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force. Luke, you can destroy the Emperor. He has foreseen this. It is your destiny! Join me, and together, we can rule the galaxy as father and son! Come with me. It is the only way`}</p>
				<p>{`The dark side of the Force is a pathway to many abilities some consider to be unnatural. Give yourself to the dark side. It is the only way you can save your friends. Yes, your thoughts betray you. Your feelings for them are strong. You need a teacher. I could show you the ways of the force.`}</p>
				<p>{`I am altering the deal. Pray, I don't alter it any further. Forgive me. I feel it again... the call from light. There is no escape! Don't make me destroy you. Luke, you do not yet realize your importance. You've only begun to discover your power! Join me, and I will compconste your training! With our combined strength, we can end this destructive conflict, and bring order to the galaxy.`}</p>
			</div>
		</>
	)
}