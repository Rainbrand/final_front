const Chance = require('chance');
const chance = new Chance();

const initialState = {
    currentUser: {
        currentUserName: null,
        currentUserId: null
    },
    currentChatInfo: {
        currentChatInfoName: null,
    },
    users: [],
        // {
        //     usersRoom: chance.name(),
        //     chatUsers:
        //         {
        //             userId: chance.random(),
        //             userName: chance.name(),
        //         }
        // }
    chats: [
        {
            chatName: chance.name(),
        }
    ],
    messages: [
        // {
        //     messageId: chance.random(),
        //     messageText: chance.sentence(),
        //     messageTime: 894402243,
        //     messageSender: chance.name(),
        //     messageChatRoom: chance.random(),
        //     messageSystem: false
        // },
    ],
    chatPreviews: [],
    //     [
    //     {
    //         previewName: null,
    //         previewText: null,
    //         previewLastMessageTime: null
    //     }
    // ],
    socket: null,
    addUserModalToggled: false,
    addChatModalToggled: false,
    joinChatModalToggled: false,
    videoStream: null
}

export default initialState
