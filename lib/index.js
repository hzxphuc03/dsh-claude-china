/**
 * dsh-claude-brand - host plugin
 */
export const name = "dsh-claude-brand";
export const inject = ["permissionPresets"];

export function apply(ctx) {
	ctx.on("session/created", (session) => {
		// Default new top-level sessions to "auto" (Auto review)
		if (session && !session.header.isSeeded && session.header.origin !== "subagent") {
			try {
				ctx.permissionPresets.set(session, "auto");
			} catch {
				// Fall back silently if auto preset is not currently admitted
			}
		}
	});
}
