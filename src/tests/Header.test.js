import React from "react";
import {shallow} from "enzyme";
import ChatHeader from "../components/ChatHeader";
const Chance = require('chance');
const chance = new Chance();

describe("ChatHeader component should:", () => {
    let component

    beforeAll(() => {
        component = shallow(<ChatHeader className="header"
                                        lastSeen={chance.timestamp()} users={currentChat.users}/>)
        console.log(component.debug())
    })

    test("render ChatHeader component", () => {
        expect(component).toMatchSnapshot()
    })

    test('have props', () => {
        expect(component.props()).not.toBeUndefined()
    })

})
