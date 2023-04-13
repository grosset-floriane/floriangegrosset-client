import React from 'react'

const useEmail = () => {
	const email = 'contact@florianegrosset.com'
	return {
		text: (
			<>
				<span aria-label={email}>
					contact@
					<wbr />
					florianegrosset.com
				</span>
			</>
		),
		email,
	}
}

export default useEmail
