import chatMessagesReducer from "../Store/Reducers/chatMessagesReducer";
import addMessageAction from "../Store/Actions/addMessageAction";
const Chance = require('chance');
const chance = new Chance();

const newMessage = {
    messageId: chance.random(),
    messageText: chance.sentence(),
    messageTime: chance.timestamp(),
    messageOwn: chance.bool(),
    messageRead: chance.bool()
}

const action = addMessageAction(newMessage)

describe("ChatMessagesReducer should:", () => {
    let state = []

    describe("add message if:", () =>{
        afterEach(() => {
            state = []
        })

        test("messages state is empty", () => {
            state = chatMessagesReducer(state, action)
            expect(state).toHaveLength(1)
        })

        test("messages store has one entry", () => {
            state = [{
                messageId: chance.random(),
                messageText: chance.sentence(),
                messageTime: chance.timestamp(),
                messageOwn: chance.bool(),
                messageRead: chance.bool()
            }]
            state = chatMessagesReducer(state, action)
            expect(state).toHaveLength(2)
        })

        test("messages state has two or more entries", () => {
            state = [
                {
                    messageId: chance.random(),
                    messageText: chance.sentence(),
                    messageTime: chance.timestamp(),
                    messageOwn: chance.bool(),
                    messageRead: chance.bool()
                },
                {
                    messageId: chance.random(),
                    messageText: chance.sentence(),
                    messageTime: chance.timestamp(),
                    messageOwn: chance.bool(),
                    messageRead: chance.bool()
                },
            ]
            state = chatMessagesReducer(state, action)
            expect(state).toHaveLength(3)
        })
    })

    describe("add correct message if:", () => {
        afterEach(() => {
            state = []
        })
        test("store is empty", () => {
            state = chatMessagesReducer(state, action)
            expect(state[0]).toEqual(newMessage)
        })
        test("state has one entry", () => {
            state = [{
                messageId: chance.random(),
                messageText: chance.sentence(),
                messageTime: chance.timestamp(),
                messageOwn: chance.bool(),
                messageRead: chance.bool()
            }]
            state = chatMessagesReducer(state, action)
            expect(state[1]).toEqual(newMessage)
        })
        test("state has two or more entries", () => {
            state = [
                {
                    messageId: chance.random(),
                    messageText: chance.sentence(),
                    messageTime: chance.timestamp(),
                    messageOwn: chance.bool(),
                    messageRead: chance.bool()
                },
                {
                    messageId: chance.random(),
                    messageText: chance.sentence(),
                    messageTime: chance.timestamp(),
                    messageOwn: chance.bool(),
                    messageRead: chance.bool()
                },
            ]
            state = chatMessagesReducer(state, action)
            expect(state[2]).toEqual(newMessage)
        })
    })
})
