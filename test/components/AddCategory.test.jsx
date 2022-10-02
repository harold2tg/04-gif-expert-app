/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en el <AddCategory/>', () => { 
    test('Debe de cambiar el valor en la caja de texto', () => { 
       render(<AddCategory onNewCategory = {()=> {console.log('hola')}}/>) 
      //  screen.debug()
      const input = screen.getByRole('textbox');
      fireEvent.input(input, {target:{value:'Saitama'}})
      // screen.debug();
      expect(input.value).toBe('Saitama')

     })
 })