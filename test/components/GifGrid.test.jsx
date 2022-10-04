/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */


import { render,screen  } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGits } from '../../src/hooks/useFetchGits';
jest.mock('../../src/hooks/useFetchGits');


describe('Prueba en <GifGrid>', () => { 

    const category = 'One Punch';
    
    test('Debe de mostrar el loading inicialmente', () => { 
        useFetchGits.mockReturnValue({
            images: [],
            isLoading: true
        });


        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
        // screen.debug();
     });

     test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGits.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
        


    });
   
 })