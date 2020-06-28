### redux 应用
1.redux react-redux
2.redux-logger redux-devtools-extension
3.redux-thunk

cnpm install -S redux react-redux @types/react-redux
cnpm install -D redux-logger @types/redux-logger
cnpm install -D redux-devtools-extension
cnpm install -S redux-thunk

reducers文件  应用状态的变化如何响应 actions 并发送到 store ;
actions文件  把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说通过  store.dispatch()  将 action 传到 store。
constants 定义连接条件