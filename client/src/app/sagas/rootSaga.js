import { all, fork } from "redux-saga/effects";
import jobSaga from "./jobSaga";
import userSaga from "./userSaga";

function* rootSaga() {
    yield all([
        fork(userSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(jobSaga),
    ])
}

export default rootSaga