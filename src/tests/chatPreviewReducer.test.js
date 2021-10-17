import chatPreviewReducer from "../Store/Reducers/chatPrevewReducer";
import addChatAction from "../store/Actions/addChatAction";
const Chance = require('chance');
const chance = new Chance();

const newPreview = {
    previewId: chance.random(),
    previewName: chance.name(),
    previewLastMessage: chance.sentence(),
    previewLastMessageTime: chance.timestamp()
}

describe("ChatPreviewReducer should:", () => {
    let state = []

    describe("add preview if:", () => {
        afterEach(() => {
            state = []
        })
        test("store is empty", () => {
            const action = addChatAction(newPreview)
            state = chatPreviewReducer(state, action)
            expect(state).toHaveLength(1)
        })
        test("store has one entry", () => {
            state = [{
                previewId: chance.random(),
                previewName: chance.name(),
                previewLastMessage: chance.sentence(),
                previewLastMessageTime: chance.timestamp()
            }]
            const action = addChatAction(newPreview)
            state = chatPreviewReducer(state, action)
            expect(state).toHaveLength(2)
        })
        test("store has two or more entries", () => {
            state = [
                {
                    previewId: chance.random(),
                    previewName: chance.name(),
                    previewAvatar: chance.avatar(),
                    previewLastMessage: chance.sentence(),
                    previewLastMessageTime: chance.timestamp()
                },
                {
                    previewId: chance.random(),
                    previewName: chance.name(),
                    previewAvatar: chance.avatar(),
                    previewLastMessage: chance.sentence(),
                    previewLastMessageTime: chance.timestamp()
                },
            ]
            const action = addChatAction(newPreview)
            state = chatPreviewReducer(state, action)
            expect(state).toHaveLength(3)
        })
    })

    describe("add correct preview if:", () => {
        afterEach(() => {
            state = []
        })
        test("store is empty", () => {
            const action = addChatAction(newPreview)
            state = chatPreviewReducer(state, action)
            expect(state[0]).toEqual(newPreview)
        })
        test("store has one entry", () => {
            state = [{
                previewId: chance.random(),
                previewName: chance.name(),
                previewAvatar: chance.avatar(),
                previewLastMessage: chance.sentence(),
                previewLastMessageTime: chance.timestamp()
            }]
            const action = addChatAction(newPreview)
            state = chatPreviewReducer(state, action)
            expect(state[1]).toEqual(newPreview)
        })
        test("store two or more entries", () => {
            state = [
                {
                    previewId: chance.random(),
                    previewName: chance.name(),
                    previewAvatar: chance.avatar(),
                    previewLastMessage: chance.sentence(),
                    previewLastMessageTime: chance.timestamp()
                },
                {
                    previewId: chance.random(),
                    previewName: chance.name(),
                    previewAvatar: chance.avatar(),
                    previewLastMessage: chance.sentence(),
                    previewLastMessageTime: chance.timestamp()
                },
            ]
            const action = addChatAction(newPreview)
            state = chatPreviewReducer(state, action)
            expect(state[2]).toEqual(newPreview)
        })
    })
})
