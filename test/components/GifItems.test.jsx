/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/react'
import {GifItems} from '../../src/components/GifItems';

describe('Prueba en < GifItems >', () => { 
    
    const mytitle = "Saitama";
    const myurl   =   "https://one-match.com/saitam.jpg";

    test('Debe hacer un match con el snapshop', () => { 
        // render(<GifItems/>)
        const { container } = render(<GifItems title={ mytitle } url={myurl}/>)
        expect( container ).toMatchSnapshot();
     })
 })