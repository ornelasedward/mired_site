# Discord notifications for AI readiness leads

When someone completes the [AI readiness assessment](https://mired.io/ai-readiness) or books via Calendly, **miredbot** posts to your Discord channel with lead details and AI-generated meeting prep notes for Catelyn.

## 1. Get the channel ID

1. In Discord: **User Settings → Advanced → Developer Mode** (on).
2. Right-click the target channel → **Copy Channel ID**.

## 2. Set Supabase secrets

**Do not commit the bot token to git.** Set it only via Supabase:

```bash
supabase secrets set \
  DISCORD_BOT_TOKEN=your-bot-token \
  DISCORD_CHANNEL_ID=your-channel-id \
  ANTHROPIC_API_KEY=sk-ant-... \
  INBOUND_FORWARD_EMAIL=contactmired@gmail.com
```

If the token was ever shared in chat or committed, **reset it** in the [Discord Developer Portal](https://discord.com/developers/applications) → your app → Bot → Reset Token.

## 3. Redeploy edge functions

```bash
pnpm sb:deploy
```

Or at minimum:

```bash
supabase functions deploy submit-ai-readiness
supabase functions deploy calendly-webhook --no-verify-jwt
```

## What gets posted

| Trigger | Discord | Gmail |
|---------|---------|-------|
| Assessment submitted (name + email) | Lead embed + meeting prep | `NOTIFY_TO_EMAIL` + `INBOUND_FORWARD_EMAIL` |
| Calendly booking | Booking embed + prep (links assessment if same email) | Same |

Meeting prep uses **Claude Haiku 4.5** (`claude-haiku-4-5`) when `ANTHROPIC_API_KEY` is set (4s timeout). Without it, a rule-based fallback is used so Discord still posts instantly.

Supported Claude models (see [Anthropic docs](https://platform.claude.com/docs/en/about-claude/models/overview)):

| Role | Model ID |
|------|----------|
| Fast (default) | `claude-haiku-4-5` |
| Balanced | `claude-sonnet-4-6` |
| Most capable | `claude-opus-4-8` |

Set `ANTHROPIC_MODEL` to override the default.

## Bot permissions

The bot needs **View Channel** and **Send Messages** in the target channel. It should already be in the server if you invited it to the pod channel.
