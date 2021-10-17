import chatInfoReducer from "../Store/Reducers/chatInfoReducer";
import setCurrentChatAction from "../Store/Actions/setCurrentChatAction";
const Chance = require('chance');
const chance = new Chance();

const newCurrentChatInfo = {
    chatId: chance.random(),
    chatName: chance.name(),
    chatUsers: [
        {
            chatUserId: chance.random(),
            chatUserName: chance.name()
        }
    ]
}

const action = setCurrentChatAction(newCurrentChatInfo)

describe("ChatInfoReducer should:", () => {
    let state

    describe("add chatInfo if:", () => {
        beforeEach(() => {
            state = null
        })
        test("store is empty", () => {
            state = chatInfoReducer(state, action)
            expect(state).toHaveLength(1)
        });
        test("store has one entry", () => {
            state = {
                chatId: chance.random(),
                chatName: chance.name(),
                chatUsers: [
                    {
                        chatUserId: chance.random(),
                        chatUserName: chance.name()
                    }
                ]
            }
            state = chatInfoReducer(state, action)
            expect(state).toHaveLength(2)
        });
        test("store store has two entries", () => {
            state = [
                {
                    chatId: chance.random(),
                    chatName: chance.name(),
                    chatUsers: [
                        {
                            chatUserId: chance.random(),
                            chatUserName: chance.name()
                        }
                    ]
                },
                {
                    chatId: chance.random(),
                    chatName: chance.name(),
                    chatUsers: [
                        {
                            chatUserId: chance.random(),
                            chatUserName: chance.name()
                        }
                    ]
                },
            ]
            state = chatInfoReducer(state, action)
            expect(state).toHaveLength(3)
        });
    })

    describe("add correct chatInfo if:", () => {
        afterEach(() => {
            state = null
        })

        test("store is empty", () => {
            state = chatInfoReducer(state, action)
            expect(state).toEqual(newCurrentChatInfo)
        });

        test("store has one entry", () => {
            state = [{
                chatId: chance.random(),
                chatName: chance.name(),
                chatUsers: [
                    {
                        chatUserId: chance.random(),
                        chatUserName: chance.name()
                    }
                ]}]
            state = chatInfoReducer(state, action)
            expect(state[1]).toEqual(newCurrentChatInfo)
        });

        test("store has two entries", () => {
            state = [
                {
                    chatId: chance.random(),
                    chatName: chance.name(),
                    chatUsers: [
                        {
                            chatUserId: chance.random(),
                            chatUserName: chance.name()
                        }
                    ]
                },
                {
                    chatId: chance.random(),
                    chatName: chance.name(),
                    chatUsers: [
                        {
                            chatUserId: chance.random(),
                            chatUserName: chance.name()
                        }
                    ]
                }
                ]
            state = chatInfoReducer(state, action)
            expect(state[2]).toEqual(newCurrentChatInfo)
        });
    })
})
