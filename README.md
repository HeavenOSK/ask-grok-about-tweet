# Ask Grok About Tweet - Chrome拡張機能

X (Twitter) のツイートについて Grok に質問するための Chrome 拡張機能です。

![Demo](https://img.shields.io/badge/Chrome-Extension-blue)

## 🎯 機能

- X.com や Twitter.com でツイート一覧・詳細画面に「🤖」ボタンを追加
- ボタンをクリックするとモーダルが表示され、ツイートのURLが自動入力される
- 追加の質問を入力して、Grok に聞くことができる
- **ショートカットキー対応**:
  - `Command + Enter` (Mac) / `Ctrl + Enter` (Windows): Grokへ遷移
  - `Escape`: モーダルを閉じる

## 📥 インストール方法（開発者以外の方向け）

### 手順1: このリポジトリをダウンロード

以下のいずれかの方法でファイルをダウンロードしてください：

**方法A: ZIPファイルでダウンロード（推奨）**
1. このページの緑色の「Code」ボタンをクリック
2. 「Download ZIP」を選択
3. ダウンロードしたZIPファイルを解凍

**方法B: Gitを使う場合（開発者向け）**
```bash
git clone https://github.com/HeavenOSK/ask-grok-about-tweet.git
```

### 手順2: Chrome拡張機能として読み込む

1. **Chromeを開き、アドレスバーに以下を入力してEnter**
   ```
   chrome://extensions/
   ```

2. **右上の「デベロッパーモード」をONにする**
   
   ![デベロッパーモード](https://img.shields.io/badge/Developer_Mode-ON-green)

3. **「パッケージ化されていない拡張機能を読み込む」ボタンをクリック**

4. **ダウンロードしたフォルダを選択**
   - 解凍した `ask-grok-about-tweet` フォルダを選択
   - ⚠️ 注意: ZIPファイルではなく、解凍後のフォルダを選択してください

5. **インストール完了！**
   - 拡張機能一覧に「Ask Grok About Tweet」が表示されればOK

## 🚀 使い方

1. **X.com または Twitter.com にアクセス**

2. **ツイートの横に表示される「🤖」ボタンをクリック**
   - タイムラインのツイート
   - ツイート詳細ページ
   
3. **モーダルで質問を入力**
   - ツイートURLは自動で入力されています
   - 追加の質問があれば入力できます

4. **「Ask Grok」ボタンをクリック または `Cmd/Ctrl + Enter`**
   - 新しいタブで Grok が開き、質問が入力された状態になります

## ⌨️ キーボードショートカット

| 操作 | Mac | Windows/Linux |
|------|-----|---------------|
| Grokへ遷移 | `Cmd + Enter` | `Ctrl + Enter` |
| モーダルを閉じる | `Escape` | `Escape` |

## 🔧 トラブルシューティング

### 拡張機能が動作しない場合

1. **ページをリロード** (F5 または Cmd/Ctrl + R)
2. **拡張機能を更新**
   - `chrome://extensions/` で「更新」ボタンをクリック
3. **Chromeを再起動**

### ボタンが表示されない場合

- X.com または Twitter.com にアクセスしているか確認
- 拡張機能が有効になっているか確認（chrome://extensions/）

## 📝 注意事項

- この拡張機能は X.com と Twitter.com でのみ動作します
- Grok のアカウントが必要です
- プライベートブラウジング（シークレットモード）では動作しません

## ⚠️ 免責事項

- このツールは個人的な実験プロジェクトです
- **自己責任でご利用ください**
- 自由に改造・カスタマイズしてご利用いただいて構いません
- 動作保証やサポートは提供していません

## 📄 ライセンス

MIT License - ご自由にお使いください