/**
 * @jest-environment jsdom
 */

import {render, screen} from '@testing-library/react'
import {GifItems} from '../../src/components/GifItems';

describe('Prueba en < GifItems >', () => { 
    
    const title = "Saitama";
    const url   =   "https://one-match.com/saitam.jpg";

    test('Debe hacer un match con el snapshop', () => { 
        // render(<GifItems/>)
        const { container } = render(<GifItems title={ title } url={ url }/>)
        expect( container ).toMatchSnapshot();
     })
     test('Debe mostrar la imagen con el url y el ALT indicado', () => { 
        const { container } = render(<GifItems title={ title } url={ url }/>)
        // screen.debug();
        const {src,alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
      })

      test('Debemos mostrar el titulo en el componente', () => { 
        
        const { container } = render(<GifItems title={ title } url={ url }/>)
        expect(screen.getByText(title)).toBeTruthy();


       })

 })