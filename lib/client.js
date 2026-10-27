/**
 * dsh-claude-brand - Claude Desktop UI theme & branding for DeepSeek Harness Web GUI
 */
window.__ModuleLoader__.load({
	id: "dsh-claude-brand",
	factory: (require) => {
		const module = { exports: {} };
		const exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

		const React = window.React || require("react");

		const CLAUDE_PATH = "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z";

		function ClaudeMark(props) {
			const size = props && props.size ? props.size : 20;
			const className = props && props.className ? props.className : undefined;
			return React.createElement("svg", {
				viewBox: "0 0 24 24",
				width: size,
				height: size,
				className: className,
				fill: "#D97757",
				style: { display: "inline-block", verticalAlign: "middle", flexShrink: 0 }
			}, React.createElement("path", { d: CLAUDE_PATH }));
		}

		function ClaudeHeroMark() {
			return React.createElement(ClaudeMark, { size: 48 });
		}

		function ClaudeName() {
			return React.createElement("span", {
				style: {
					fontWeight: 500,
					fontSize: "17px",
					letterSpacing: "-0.015em",
					fontFamily: '"Copernicus", "Canela", "Tiempos Text", "Georgia", "Cambria", serif',
					display: "inline-flex",
					alignItems: "center",
					color: "var(--dsw-alias-label-primary, #262524)"
				}
			}, "Claude");
		}

		const CLAUDE_CSS = `
/* =========================================================
 * Claude Desktop Theme for DeepSeek Harness (DSH)
 * ========================================================= */

:root {
  --claude-accent: #D97757;
  --claude-accent-hover: #C86646;
  --claude-font-serif: "Copernicus", "Canela", "Tiempos Text", "Georgia", "Cambria", "Times New Roman", serif;
  --claude-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --claude-font-code: "SF Mono", "JetBrains Mono", "Fira Code", Menlo, Monaco, Consolas, monospace;
}

body {
  font-family: var(--claude-font-sans) !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Claude Warm Light Palette */
body:not([data-ds-dark-theme]) {
  --dsw-alias-bg-base: #FAF9F5 !important;
  --dsw-alias-bg-layer-1: #FFFFFF !important;
  --dsw-alias-bg-layer-2: #F3F1EC !important;
  --dsw-alias-bg-overlay: #FFFFFF !important;
  --dsw-specific-sidebar-fill: #F3F1EC !important;
  --dsw-alias-border-l1: #EBE7DF !important;
  --dsw-alias-border-l2: #DFDAD0 !important;
  --dsw-alias-border-l3: #D0C9BD !important;
  --dsw-alias-border-l4: #C4BCAD !important;
  --dsw-alias-brand-primary: #D97757 !important;
  --dsw-alias-brand-hover: #C86646 !important;
  --dsw-alias-label-primary: #262524 !important;
  --dsw-alias-label-secondary: #787570 !important;
  --dsw-alias-interactive-bg-hover: #EBE7DF !important;
  --dsw-alias-interactive-bg-active: #E0DAD0 !important;
  --dsw-alias-interactive-bg-selected: #E7E2D8 !important;
  --dsw-alias-markdown-code-block: #F0ECE1 !important;
  --dsw-alias-markdown-inline-code: #EBE6DB !important;
  --dsw-alias-state-business-primary: #D97757 !important;
  --dsw-alias-state-business-hover: #C86646 !important;
  --dsh-boot-bg: #FAF9F5 !important;
  background-color: #FAF9F5 !important;
  color: #262524 !important;
}

/* Claude Warm Dark Palette */
body[data-ds-dark-theme] {
  --dsw-alias-bg-base: #1F1E1D !important;
  --dsw-alias-bg-layer-1: #262624 !important;
  --dsw-alias-bg-layer-2: #2E2D2A !important;
  --dsw-alias-bg-overlay: #262624 !important;
  --dsw-specific-sidebar-fill: #191817 !important;
  --dsw-alias-border-l1: #383633 !important;
  --dsw-alias-border-l2: #464440 !important;
  --dsw-alias-border-l3: #54514C !important;
  --dsw-alias-border-l4: #636059 !important;
  --dsw-alias-brand-primary: #D97757 !important;
  --dsw-alias-brand-hover: #E07A5F !important;
  --dsw-alias-label-primary: #ECE9E2 !important;
  --dsw-alias-label-secondary: #9E9B94 !important;
  --dsw-alias-interactive-bg-hover: #2F2E2B !important;
  --dsw-alias-interactive-bg-active: #383633 !important;
  --dsw-alias-interactive-bg-selected: #33322F !important;
  --dsw-alias-markdown-code-block: #161514 !important;
  --dsw-alias-markdown-inline-code: #282725 !important;
  --dsw-alias-state-business-primary: #D97757 !important;
  --dsw-alias-state-business-hover: #E07A5F !important;
  --dsh-boot-bg: #1F1E1D !important;
  background-color: #1F1E1D !important;
  color: #ECE9E2 !important;
}

/* Selection Highlight */
::selection {
  background-color: rgba(217, 119, 87, 0.25) !important;
  color: inherit !important;
}

/* Focus Ring */
:focus-visible {
  outline-color: var(--claude-accent) !important;
}

/* Sidebar Styling: strip deepseek bluish gradient on macOS */
[data-platform="darwin"] [class*="sidebarCol"],
[data-platform="darwin"] .PIRFFq_sidebarCol,
[class*="sidebarCol"] {
  background: var(--dsw-specific-sidebar-fill) !important;
  border-right: 1px solid var(--dsw-alias-border-l1) !important;
}

/* Main Frame & Center Column */
[class*="frame"], .PIRFFq_frame {
  background: var(--dsw-alias-bg-base) !important;
}

[class*="centerCol"], .PIRFFq_centerCol {
  background: var(--dsw-alias-bg-base) !important;
}

/* Claude Desktop Composer (Rounded card with subtle shadow) */
[class*="composerBar"],
[class*="ComposerBar"] {
  border-radius: 20px !important;
  transition: border-color 0.15s ease, box-shadow 0.15s ease !important;
}

body:not([data-ds-dark-theme]) [class*="composerBar"],
body:not([data-ds-dark-theme]) [class*="ComposerBar"] {
  background: #FFFFFF !important;
  border: 1px solid #DFDAD0 !important;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03) !important;
}

body:not([data-ds-dark-theme]) [class*="composerBar"]:focus-within,
body:not([data-ds-dark-theme]) [class*="ComposerBar"]:focus-within {
  border-color: #D97757 !important;
  box-shadow: 0 4px 24px -2px rgba(217, 119, 87, 0.15), 0 2px 8px -1px rgba(0, 0, 0, 0.04) !important;
}

body[data-ds-dark-theme] [class*="composerBar"],
body[data-ds-dark-theme] [class*="ComposerBar"] {
  background: #262624 !important;
  border: 1px solid #383633 !important;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.3), 0 2px 6px -1px rgba(0, 0, 0, 0.15) !important;
}

body[data-ds-dark-theme] [class*="composerBar"]:focus-within,
body[data-ds-dark-theme] [class*="ComposerBar"]:focus-within {
  border-color: #D97757 !important;
  box-shadow: 0 4px 24px -2px rgba(217, 119, 87, 0.25), 0 2px 8px -1px rgba(0, 0, 0, 0.2) !important;
}

/* Claude Submit / Send Action Button */
button[aria-label*="send" i],
button[aria-label*="submit" i],
button[data-composer-submit] {
  background: var(--claude-accent) !important;
  color: #FFFFFF !important;
  border-radius: 9999px !important;
  border: none !important;
  transition: background-color 0.15s ease !important;
}

button[aria-label*="send" i]:hover,
button[aria-label*="submit" i]:hover,
button[data-composer-submit]:hover {
  background: var(--claude-accent-hover) !important;
}

/* Claude Serif Headlines & Hero Titles */
[class*="hero"] h1,
[class*="Hero"] h1,
[class*="heroTitle"],
[class*="HeroTitle"],
h1.conversation-headline {
  font-family: var(--claude-font-serif) !important;
  font-weight: 500 !important;
  letter-spacing: -0.02em !important;
  color: var(--dsw-alias-label-primary) !important;
}

/* Claude Desktop User Message Bubble */
[data-message-role="user"],
[class*="userMessage"],
[class*="UserMessage"] {
  background-color: var(--dsw-alias-bg-layer-2) !important;
  border-radius: 18px !important;
  border: 1px solid var(--dsw-alias-border-l1) !important;
}

/* Sidebar "New Chat" button */
.kB3qhq_newSession,
[class*="newSession"] {
  border-radius: 10px !important;
  transition: background-color 0.15s ease !important;
}

/* Sidebar session list rows */
[class*="sessionRow"],
[class*="SessionRow"],
[class*="session-row"] {
  border-radius: 8px !important;
  transition: background-color 0.15s ease !important;
}

/* Active session item */
[class*="sessionActive"],
[class*="SessionActive"],
[data-session-active="true"] {
  background: var(--dsw-alias-interactive-bg-selected) !important;
}

/* Thin Claude Scrollbar */
::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}

::-webkit-scrollbar-track {
  background: transparent !important;
}

::-webkit-scrollbar-thumb {
  background: var(--dsw-alias-border-l2) !important;
  border-radius: 9999px !important;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--dsw-alias-border-l3) !important;
}

/* Code block typography & styling */
pre, code, kbd, samp {
  font-family: var(--claude-font-code) !important;
}

pre {
  border-radius: 12px !important;
  border: 1px solid var(--dsw-alias-border-l1) !important;
}

/* ===== dsh-deepseek-chat mode switcher -> Claude Desktop style ===== */
.dsh-chat-brand-control-host { width: auto !important; }
.dsh-chat-brand-control .dsh-chat-mode-wrap,
.dsh-chat-brand-control .dsh-chat-modes { width: auto !important; }
.dsh-chat-modes {
  gap: 2px !important;
  padding: 2px !important;
  height: 28px !important; min-height: 28px !important; max-height: 28px !important;
  border-radius: 9px !important;
  background: var(--dsw-alias-interactive-bg-hover) !important;
  overflow: visible !important;
}
.dsh-chat-modes button {
  position: relative;
  display: inline-flex !important; align-items: center; justify-content: center;
  flex: none !important;
  width: 32px !important; height: 24px !important; min-height: 24px !important; max-height: 24px !important;
  padding: 0 !important;
  font-size: 0 !important; letter-spacing: 0 !important;
  border-radius: 7px !important;
  color: var(--dsw-alias-label-secondary) !important;
  transition: background-color .15s ease, color .15s ease;
}
.dsh-chat-modes button:hover { color: var(--dsw-alias-label-primary) !important; }
.dsh-chat-modes button::before {
  content: ""; width: 16px; height: 16px; background-color: currentColor;
  -webkit-mask: var(--claude-mode-icon) center / 16px 16px no-repeat;
  mask: var(--claude-mode-icon) center / 16px 16px no-repeat;
}
.dsh-chat-modes button:nth-of-type(1) { --claude-mode-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 3.25c3.87 0 7 2.6 7 5.8s-3.13 5.8-7 5.8c-.77 0-1.5-.1-2.2-.3L4 16.25l.95-3.05C3.73 12.15 3 10.67 3 9.05c0-3.2 3.13-5.8 7-5.8Z'/%3E%3C/svg%3E"); }
.dsh-chat-modes button:nth-of-type(2) { --claude-mode-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 6 3 10l4 4M13 6l4 4-4 4M11.2 4.5 8.8 15.5'/%3E%3C/svg%3E"); }
.dsh-chat-modes button[aria-pressed="true"] {
  background: var(--dsw-alias-bg-layer-1) !important;
  color: var(--dsw-alias-label-primary) !important;
  box-shadow: 0 0 0 .5px var(--dsw-alias-border-l2), 0 1px 2px rgba(0,0,0,.06) !important;
}
body[data-ds-dark-theme] .dsh-chat-modes button[aria-pressed="true"] {
  background: var(--dsw-alias-bg-layer-2) !important;
}
.dsh-chat-mode-compact .dsh-chat-modes {
  flex-direction: column !important; width: 28px !important;
  height: auto !important; max-height: none !important;
}
.dsh-chat-mode-compact .dsh-chat-modes button { width: 24px !important; }

/* ===== Brand: "Claude" wordmark instead of deepseek HARNESS ===== */
.dsh-chat-brand-wordmark { display: none !important; }
.dsh-chat-brand-name { flex: 0 0 auto !important; width: auto !important; }
.dsh-chat-brand-name::before {
  content: "Claude";
  font-family: var(--claude-font-serif);
  font-size: 20px; font-weight: 500; letter-spacing: -0.02em; line-height: 24px;
  color: var(--dsw-alias-label-primary);
}
.dsh-chat-brand-control-host[data-claude-fallback] {
  display: inline-flex !important; align-items: center;
  margin-left: auto !important; width: auto !important; height: 28px !important;
}
`;

		function installClaudeStyles() {
			if (typeof document === "undefined") return () => {};
			let tag = document.getElementById("dsh-claude-desktop-theme");
			if (!tag) {
				tag = document.createElement("style");
				tag.id = "dsh-claude-desktop-theme";
				tag.dataset.plugin = "dsh-claude-brand";
				tag.textContent = CLAUDE_CSS;
				document.head.appendChild(tag);
			} else {
				tag.textContent = CLAUDE_CSS;
			}
			return () => {
				tag?.remove();
			};
		}

		function initTextReplacement() {
			if (typeof document === "undefined") return () => {};
			const replaceText = (node) => {
				if (!node) return;
				if (node.nodeType === 3) {
					// TEXT_NODE
					const val = node.nodeValue;
					if (val && (val.includes("Signed in to DeepSeek") || val.includes("已登录 DeepSeek"))) {
						node.nodeValue = val
							.replace(/Signed in to DeepSeek/g, "Signed in to Chinese Claude")
							.replace(/已登录 DeepSeek/g, "Signed in to Chinese Claude");
					}
				} else if (node.nodeType === 1) {
					// ELEMENT_NODE
					for (let i = 0; i < node.childNodes.length; i++) {
						replaceText(node.childNodes[i]);
					}
				}
			};

			const startObserver = () => {
				if (!document.body) {
					window.requestAnimationFrame(startObserver);
					return;
				}
				replaceText(document.body);
				const observer = new MutationObserver((mutations) => {
					for (let i = 0; i < mutations.length; i++) {
						const m = mutations[i];
						if (m.type === "childList") {
							for (let j = 0; j < m.addedNodes.length; j++) {
								replaceText(m.addedNodes[j]);
							}
						} else if (m.type === "characterData") {
							replaceText(m.target);
						}
					}
				});
				observer.observe(document.body, { childList: true, subtree: true, characterData: true });
			};

			if (document.readyState === "loading") {
				document.addEventListener("DOMContentLoaded", startObserver);
			} else {
				startObserver();
			}
		}

		const THEME_TOKENS = {
			"--dsw-alias-bg-base": { light: "#FAF9F5", dark: "#1F1E1D" },
			"--dsw-alias-bg-layer-1": { light: "#FFFFFF", dark: "#262624" },
			"--dsw-alias-bg-layer-2": { light: "#F3F1EC", dark: "#2E2D2A" },
			"--dsw-alias-bg-overlay": { light: "#FFFFFF", dark: "#262624" },
			"--dsw-alias-border-l1": { light: "#EBE7DF", dark: "#383633" },
			"--dsw-alias-border-l2": { light: "#DFDAD0", dark: "#464440" },
			"--dsw-alias-brand-primary": { light: "#D97757", dark: "#D97757" },
			"--dsw-alias-label-primary": { light: "#262524", dark: "#ECE9E2" },
			"--dsw-alias-label-secondary": { light: "#787570", dark: "#9E9B94" },
			"--dsw-alias-state-error-primary": { light: "#DC382D", dark: "#E05349" },
			"--dsw-alias-state-idle-primary": { light: "#787570", dark: "#9E9B94" },
			"--dsw-alias-state-success-primary": { light: "#3E8635", dark: "#5EA854" },
			"--dsw-alias-state-warn-primary": { light: "#D97706", dark: "#F59E0B" },
			"--dsw-specific-sidebar-fill": { light: "#F3F1EC", dark: "#191817" }
		};

		exports.inject = ["slots"];
		exports.apply = function(ctx) {
			// Install CSS rules
			const removeStyles = installClaudeStyles();
			if (typeof ctx.effect === "function") {
				ctx.effect(() => removeStyles, "claude-desktop-theme: styles");
			}

			// Override theme tokens if theme service is available
			try {
				if (ctx.theme && typeof ctx.theme.overrideTokens === "function") {
					ctx.theme.overrideTokens("dsh-claude-brand", THEME_TOKENS);
				}
			} catch (error) {
				console.warn("[dsh-claude-brand] theme override skipped", error);
			}

			// Intercept locale strings for "Signed in to DeepSeek" -> "Signed in to Chinese Claude"
			try {
				const locale = ctx.get ? ctx.get("locale") : ctx.locale;
				if (locale && typeof locale.translate === "function") {
					const origTranslate = locale.translate.bind(locale);
					locale.translate = function(ns, key, params) {
						if (ns === "settings.account" && key === "signedIn") {
							return "Signed in to Chinese Claude";
						}
						return origTranslate(ns, key, params);
					};
				}
				if (locale && locale.dicts) {
					const patchDicts = () => {
						const accountLocales = locale.dicts.get("settings.account");
						if (accountLocales) {
							for (const dict of accountLocales.values()) {
								if (dict && typeof dict === "object") {
									dict.signedIn = "Signed in to Chinese Claude";
								}
							}
						}
					};
					patchDicts();
					if (typeof ctx.on === "function") {
						ctx.on("locale/change", patchDicts);
					}
				}
			} catch (error) {
				console.warn("[dsh-claude-brand] locale patch error", error);
			}

			// Real-time DOM text replacer
			initTextReplacement();

			// Brand Mark & Name Slots — each guarded so a missing slot never blocks boot
			const brandSlots = [
				["sidebar.brand.mark", ClaudeMark],
				["conversation.hero.brand.mark", ClaudeHeroMark]
			];
			for (const [slotName, Comp] of brandSlots) {
				try {
					const dispose = ctx.slots.inject(slotName, () => ctx.slots.register({
						name: slotName,
						id: "dsh-claude-brand:" + slotName,
						priority: -100,
						registrant: "dsh-claude-brand"
					}, Comp));
					if (typeof dispose === "function" && typeof ctx.effect === "function") {
						ctx.effect(() => dispose, "claude-brand: " + slotName);
					}
				} catch (error) {
					console.warn("[dsh-claude-brand] skip slot", slotName, error);
				}
			}
		};

		return module.exports;
	}
});
