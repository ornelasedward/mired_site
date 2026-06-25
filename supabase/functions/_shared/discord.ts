const DISCORD_API = "https://discord.com/api/v10";

export interface DiscordEmbed {
  title?: string;
  description?: string;
  color?: number;
  fields?: { name: string; value: string; inline?: boolean }[];
  footer?: { text: string };
}

export async function postToDiscord(
  content: string,
  embed?: DiscordEmbed,
): Promise<boolean> {
  const token = Deno.env.get("DISCORD_BOT_TOKEN");
  const channelId = Deno.env.get("DISCORD_CHANNEL_ID");
  if (!token || !channelId) {
    console.warn("Discord not configured (DISCORD_BOT_TOKEN / DISCORD_CHANNEL_ID)");
    return false;
  }

  const body: { content?: string; embeds?: DiscordEmbed[] } = {};
  if (content) body.content = content.slice(0, 2000);
  if (embed) body.embeds = [embed];

  try {
    const res = await fetch(`${DISCORD_API}/channels/${channelId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${token}`,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Discord post failed:", res.status, text);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Discord post error:", err);
    return false;
  }
}

/** Mired brand purple */
const EMBED_COLOR = 0x420fb0;

export function leadEmbed(
  title: string,
  fields: { name: string; value: string; inline?: boolean }[],
  meetingNotes?: string,
): DiscordEmbed {
  const embed: DiscordEmbed = {
    title,
    color: EMBED_COLOR,
    fields: fields.map((f) => ({
      ...f,
      value: f.value.slice(0, 1024),
    })),
    footer: { text: "mired.io · AI readiness" },
  };
  if (meetingNotes) {
    embed.description = `**Meeting prep for Catelyn**\n${meetingNotes.slice(0, 4000)}`;
  }
  return embed;
}
