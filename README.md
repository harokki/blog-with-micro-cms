This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

microCMS + Next.js のJamstackブログ(Vercel デプロイ)

このリポジトリで作成されたブログは[こちら](https://www.rokki-road.com/)です。

## localでの開発

1. 環境変数`.env.development.local`と`.env.local`にmicroCMSで作成したAPI_KEYとAPI_ENDPOINTを設定する。
2. `src/index.ts`の`siteName`と`footerCopy`は自分で使いたい名前に変更する。

## microCMS

### エンドポイント

- `/blog`
  - blog記事のエンドポイント
- `/about`
  - プロフィール、プライバシーポリシーのエンドポイント

## Google Analytics

Google Analyticsを設定したい場合は、Vercelの管理画面の`Settings > Environment Variables`に`NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`を設定してください。
