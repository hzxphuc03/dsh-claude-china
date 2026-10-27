# dsh-claude-china

Plugin theme cho **DeepSeek Harness (DSH) Desktop**: giao diện kiểu Claude Desktop.

- Palette ấm sáng/tối, accent cam `#D97757`, font serif cho tiêu đề
- Logo Claude + chữ "Claude" ở đầu sidebar
- Switcher Chat / Harness của `dsh-deepseek-chat` hiển thị dạng 2 icon (💬 / `</>`)
- Mọi slot đăng ký đều bọc try/catch nên không làm hỏng web boot

## Cài đặt

```bash
git clone <repo-url> ~/.dsh/local-plugins/dsh-claude-brand
```

Trong `~/.dsh/profiles/desktop`:
- `package.json` → dependencies: `"dsh-claude-brand": "link:../../local-plugins/dsh-claude-brand"` và thêm vào mảng `bundles`
- `cordis.patch.yml` → thêm `- id: dsh-claude-brand` / `name: 'dsh-claude-brand'`
- chạy `pnpm install` để lockfile khớp

Cmd+Q rồi mở lại DSH.

## Patch cho dsh-deepseek-chat (tùy chọn)

Khi `dsh-better-sidebar` đổi cấu trúc sidebar, `dsh-deepseek-chat` (0.2.7) tự ẩn switcher.
`patches/dsh-deepseek-chat-switcher.patch` cho nó gắn switcher cạnh tên thương hiệu thay vì ẩn:

```bash
cd ~/.dsh/profiles/desktop/node_modules/dsh-deepseek-chat
patch -p1 < ~/.dsh/local-plugins/dsh-claude-brand/patches/dsh-deepseek-chat-switcher.patch
```

Patch nằm trong `node_modules` nên mất khi plugin đó cập nhật — áp lại sau mỗi lần update.

## Giới hạn

- Đăng nhập Google trong tab Chat bị Google chặn (webview nhúng). Dùng email + mật khẩu.
