import React from "react";
import {mount} from "enzyme";
import ChatMessage from "../Components/ChatMessage";
const Chance = require('chance');
const chance = new Chance();

const expectedProps = {
    className: "chatMessage--own",
    messageSenderName: chance.name(),
    messageTime: chance.timestamp(),
    avatar: chance.avatar(),
    read: false
}

const expectedText = chance.sentence()

describe("ChatMessage component should:", () => {
    let component
    beforeAll(() => {
        component = mount(<ChatMessage {...expectedProps}>
            {expectedText}
        </ChatMessage>)
        console.log(component.debug())
    })

    test("render ChatMessage component", () => {
        expect(component).toMatchSnapshot()
    })

    test('props', () => {
        expect(component.props()).not.toBeUndefined()
    })

    describe("get correct props:", () => {
        test("key", () => {
            expect(component.props().key).toEqual(expectedProps.key)
        });
        test("className", () => {
            expect(component.props().className).toEqual(expectedProps.className)
        });
        test("messageSenderName", () => {
            expect(component.props().messageSenderName).toEqual(expectedProps.messageSenderName)
        });
        test("messageTime", () => {
            expect(component.props().messageTime).toEqual(expectedProps.messageTime)
        });
        test("avatar", () => {
            expect(component.props().avatar).toEqual(expectedProps.avatar)
        });
        test("read", () => {
            expect(component.props().read).toEqual(expectedProps.read)
        });
    })
})