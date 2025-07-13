# Ask Grok About Tweet - Chrome Extension

X (Twitter) のツイートについて Grok に質問するための Chrome 拡張機能です。

## 機能

- ツイート一覧の各ツイートに「🤖」ボタンを追加
- ツイート詳細画面にも同様のボタンを追加
- ボタンをクリックするとモーダルが表示され、ツイートのURLが自動入力される
- 「Ask Grok」ボタンをクリックすると、Grok にツイートURLを含む質問として遷移

## インストール方法

1. Chrome で `chrome://extensions/` を開く
2. 右上の「デベロッパーモード」を有効にする
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. `chrome-extension` フォルダを選択

## アイコンの生成

`icons/generate-icons.html` をブラウザで開き、各サイズのアイコンを右クリックして保存してください：
- icon-16.png (16x16)
- icon-48.png (48x48)
- icon-128.png (128x128)

## 使い方

1. X.com または Twitter.com にアクセス
2. ツイートの横に表示される「🤖」ボタンをクリック
3. モーダルでURLを確認（必要に応じて編集可能）
4. 「Ask Grok」ボタンをクリックして Grok に質問