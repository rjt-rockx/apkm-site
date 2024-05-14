import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import nesting from 'tailwindcss/nesting/index.js'

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		nesting(),
		tailwindcss(),
		autoprefixer
	]
}

export default config
