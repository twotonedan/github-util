import { put, takeLatest, all, call } from 'redux-saga/effects'

function* fetchPullRequests() {
  try {
    const pullRequests = yield fetch('https://api.github.com/repos/divvydose/fe-coding-challenge/pulls?state=all')
    .then(response => response.json())
    yield put({ type: "SET_PULL_REQUESTS", pullRequests: pullRequests})
  } catch (e) {
    yield put({ type: "SET_ERROR", error: e.message })
  }
}
function* fetchDetails({pullNumber}) {
  try {
    let [pullRequestPromise, commitsPromise, filesPromise, reviewsPromise, commentsPromise] = yield all([
      call(fetch, `https://api.github.com/repos/divvydose/fe-coding-challenge/pulls/${pullNumber}`),
      call(fetch, `https://api.github.com/repos/divvydose/fe-coding-challenge/pulls/${pullNumber}/commits`),
      call(fetch, `https://api.github.com/repos/divvydose/fe-coding-challenge/pulls/${pullNumber}/files`),
      call(fetch, `https://api.github.com/repos/divvydose/fe-coding-challenge/pulls/${pullNumber}/reviews`),
      call(fetch, `https://api.github.com/repos/divvydose/fe-coding-challenge/pulls/${pullNumber}/comments`)
    ])
    let [pullRequest, commits, files, reviews, comments] = yield all([pullRequestPromise.json(), commitsPromise.json(), filesPromise.json(), reviewsPromise.json(), commentsPromise.json()])
    yield put({ type: "SET_DETAILS", details: {pullRequest, commits, files, reviews, comments} })
  } catch (e) {
    yield put({ type: "SET_ERROR", error: e.message })
  }
}
function* actionWatcher() {
  yield takeLatest('FETCH_PULL_REQUESTS', fetchPullRequests)
  yield takeLatest('FETCH_DETAILS', fetchDetails)
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ])
}