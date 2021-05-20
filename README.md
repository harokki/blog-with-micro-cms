This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

microCMS + Next.js のJamstackブログ(Vercel デプロイ)

このリポジトリで作成されたブログは[こちら](https://www.rokki-road.com/)。

## 環境変数の設定

### local
1. 環境変数ファイル`.env.development.local`と`.env.local`を作成
2. API_KEY,API_ENDPOINTにmicroCMSで取得したAPIのキーとエンドポイントを設定する
3. NEXT_PUBLIC_SITE_NAME,NEXT_PUBLIC_FOOTER_COPYに任意の値を設定する

### デプロイ環境

Vercelの管理画面の`Settings > Environment Variables`にlocalと同じようにAPI_KEY,API_ENDPOINT,NEXT_PUBLIC_SITE_NAME,NEXT_PUBLIC_FOOTER_COPYをする。

Google Analyticsを設定したい場合は、`NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`も設定する。

## microCMS

### エンドポイント

- `/blog`
  - blog記事のエンドポイント
- `/about`
  - プロフィール、プライバシーポリシーのエンドポイント
- `/categories`
  - blogのカテゴリ管理用エンドポイント
