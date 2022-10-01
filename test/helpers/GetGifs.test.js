import {getGif} from '../../src/helpers/GetGifs'

describe('Pruebas en el GetGifs', () => { 
    test('Debe retornar un arreglo de Gifs', async () => { 
        const gifs = await getGif('One Punch')
        // console.log(gifs)
        expect(gifs.length ).toBeGreaterThan( 0 );
        expect(gifs[0]).toEqual(
            {
                id    : expect.any(String),
                title : expect.any(String),
                url : expect.any(String),

            }
        )

     })
 })