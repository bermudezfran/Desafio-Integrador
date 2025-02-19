import {resolve} from 'path' 

export default{
    css: {
        devSourcemap: true 
    },
    build: {
        rollupOptions: {
            input:{
                main: resolve(__dirname, 'index.html'),
                contacto: resolve(__dirname, '/src/pages/contacto/contacto.html'),
                nosotros: resolve(__dirname, '/src/pages/nosotros/nosotros.html')
            }
        }
    }
}