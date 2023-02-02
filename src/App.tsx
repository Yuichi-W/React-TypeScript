import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

// Userの型定義でhobbiesに？をつけているが出力時にjoinをそのまま使用しているとエラーになる
const user: User = {
  name: "ぴきぴき",
  hobbies: ["釣り", "ダーツ", "ボーリング"]
};

// 型の定義
// ■下記を共通管理するためコメントアウト→types/todo.tsx
// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

export default function App() {
  // stateに対する型指定の仕方　useState<型>
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    // axiosの型はgetの後に<型>で指定する　今回は配列内に型定義したTodoTypeがあるのでArray<TOdoType>
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // 取得時の型指定したことでdata.入力した時点で配列に使用可能関数のリストが出てくるようになる
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
