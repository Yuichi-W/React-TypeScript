// ■■■FCを使用した例■■■
// import { FC } from "react";
// type Props = {
//   color: string;
//   fontSize: string;
// };
// // 関数コンポーネントの型定義　FC:function component (暗黙的にchildren受け取れる)
// // 「関数コンポーネント名: FC<定義型名>」とする
// // export const Text:  = (props: Props) => {
// export const Text: FC<Props> = (props) => {
//   const { color, fontSize, children } = props;
//   return <p style={{ color, fontSize }}>テキストです</p>;
// };

// ■■■VFCを使用した例■■■
// FCが勝手にchildren受け取るの良くないのでVFCというものが代わりにあるのでそちらを使用する
import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// 関数コンポーネントの型定義　FC:function component (暗黙的にchildren受け取れる)
// 「関数コンポーネント名: FC<定義型名>」とする
// export const Text:  = (props: Props) => {
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
