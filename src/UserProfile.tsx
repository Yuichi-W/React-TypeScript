import { VFC } from "react";
import { User } from "./types/user";

// コンポーネントのpropsのtype定義
type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* joinは（）内の文字列で配列を区切って表示できる */}
      {/* オプショナルチェイニング 下記の「?」のこと*/}
      {/* これは？の部分でundefinedとしjoinまで読み込ませなくしている */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};

// 渡す方は./types/user.tsに記載
