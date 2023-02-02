// 型を共通で使用できるようにまとめて定義
// typeもexportで他のファイルで使用可能
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
