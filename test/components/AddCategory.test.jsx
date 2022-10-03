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
     });
     test('Debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';
        render(<AddCategory onNewCategory = {()=> {}}/>) 
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target:{value:inputValue}})
        fireEvent.submit(form)
        expect(input.value).toBe('')



      })

 })