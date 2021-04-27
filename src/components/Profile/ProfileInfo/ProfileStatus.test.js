//npm i react-test-renderer@17.0.1 --save-dev
import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus component", ()=> {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="STATUS FOR TEST" />) 
        const instance = component.getInstance()
        expect(instance.state.status).toBe("STATUS FOR TEST")
    })

    test("after creation -span- should be displayed ", () => {
        const component = create(<ProfileStatus status="STATUS FOR TEST" />) 
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    //проверка на отсутствие инпута после рендера профайл статуса
    test("after creation -input- shouldn't be displayed ", () => {
        const component = create(<ProfileStatus status="STATUS FOR TEST" />) 
        const root = component.root

        expect(() => { 
            let input = root.findByType("input") 
        }).toThrow()
        
    })



    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="STATUS FOR TEST" />) 
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("STATUS FOR TEST")
    })

//после даблклика исчезает спан и появляется инпут с текстом
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="STATUS FOR TEST" />) 
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        
        expect(input.props.value).toBe("STATUS FOR TEST")
    })

//проверка был ли вызов колбэка на кнопке, один раз
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="STATUS FOR TEST" updateStatus={ mockCallback } />) 
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })

} 
)