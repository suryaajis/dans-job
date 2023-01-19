import { call, put, takeEvery } from "redux-saga/effects"
import axios from "axios"
import { loginUser } from "../reducers/userSlice"

let baseUrl = "http://localhost:5000"

function* workLoginUser(data) {
  const token = yield call(async () => {  
    const response = await axios({
      url: `${baseUrl}/login`,
      method: "POST",
      data: data.payload
    })
    
    return response.data
  })

  localStorage.setItem("access_token", token.access_token)
  yield put(loginUser(token))
}

function* userSaga() {
  yield takeEvery("users/loginUser", workLoginUser)
}

export default userSaga