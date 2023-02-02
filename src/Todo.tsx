// コンポーネントのpropsに対する型定義
// ?とすることで送られてこない場合でもエラーを出さなくて済む
// ■下記を共通管理するためコメントアウト→types/todo.tsx
// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean;
// };

import { TodoType } from "./types/todo";
import { VFC } from "react";

// このファイルではidは不要なので下記のように記載
// Pick<型名, "プロパティー名">   使用するプロパティー名のみ記載
// Omit<型名, "プロパティー名">   不要なプロパティー名のみ記載
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // props: Omit<TodoType, "id">
  // 定義で？としている場合は初期値を設定しとく
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
