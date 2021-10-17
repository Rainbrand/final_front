import React from "react";
import {shallow} from "enzyme";
import Input from "../Components/Input";

describe("Input component should:", () => {
    let component

    beforeAll(() => {
        component = shallow(<Input ref="ref" className="chat__input"/>)
        console.log(component.debug())
    })

    test("render Input component", () => {
        expect(component).toMatchSnapshot()
    })

    test("have props", () => {
        expect(component.props()).not.toBeUndefined()
    })

    describe("get correct props:", () => {
        test("className", () => {
            expect(component.props().className).toEqual("chat__input")
        });
    })
})
