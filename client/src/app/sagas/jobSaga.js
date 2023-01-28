import { call, put, takeEvery } from "redux-saga/effects"
import axios from "axios"
import { getListJobs } from "../reducers/jobSlice"

let baseUrl = "http://localhost:5000"

function* workGetListJobs() {
  const output = yield call(async () => {
    const access_token = localStorage.getItem("access_token")
    

    const response = await axios({
      url: `${baseUrl}/jobs`,
      method: "GET",
      headers: { access_token }
    })

    return response
  })


  yield put(getListJobs(output.data))
}

function* jobSaga() {
  yield takeEvery("jobs/getListJobs", workGetListJobs)
}

export default jobSaga