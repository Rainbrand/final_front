import userReducer from "../Store/Reducers/userReducer";
import setUserAction from "../store/Actions/setUserAction";
import logoutAction from "../Store/Actions/logoutAction";
const Chance = require('chance');
const chance = new Chance();

const expectedUser = {
    userName: chance.name(),
    userAvatar: chance.avatar()
}

const login = setUserAction(expectedUser)
const logout = logoutAction()

describe("UserReducer should:", () =>{
    let state
    describe("login if:", () => {
        beforeEach(() => {
            state = null
        })
        afterEach(() => {
            expect(state).toEqual(expectedUser)
        })
        test("logged user store is empty", () => {
            state = userReducer(state, login)
        })
        test("user is already logged", () => {
            state = {
                userName: chance.name()
            }
            state = userReducer(state, login)
        })
    })
    describe("logout if:", () => {
        beforeEach(() => {
            state = null
        })
        afterEach(() => {
            expect(state).toBeNull()
        })
        test("logged user store is empty", () => {
            state = userReducer(state, logout)
        })
        test("user is already logged", () => {
            state = {
                userName: chance.name()
            }
            state = userReducer(state, logout)
        })
    })
})
