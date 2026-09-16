# Deploy to Vercel (from VS Code → GitHub)

## 1. Local folder structure (IMPORTANT)

Your GitHub repo root MUST contain these files at the TOP level:

```
package.json
vite.config.ts
index.html
vercel.json
src/
public/
```

If your files are inside a subfolder like `project/`, either:
- Push only the contents of `project/` as the repo root, OR
- In Vercel → Settings → General → **Root Directory** set to `project`

## 2. Push from VS Code

```bash
git add .
git commit -m "Fix Vercel deploy"
git push
```

Make sure `vite.config.ts`, `package.json`, `index.html` are committed (not ignored).

## 3. Vercel project settings

Vercel Dashboard → your project → **Settings** → **Build and Deployment**:

| Setting | Value |
|---------|--------|
| Framework Preset | **Vite** |
| Root Directory | empty (or `project` if nested) |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

## 4. Environment variables (optional)

Settings → Environment Variables (if you use Apply form):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 5. Redeploy

Deployments → Redeploy (clear cache if available).

## 6. Check build logs

If still 404, open the failed deployment → **Building** tab.
- Success ends with `Build Completed` and files in `dist/`
- Failure shows red errors (missing package.json, TypeScript errors, etc.)

## Common 404 causes

1. Root Directory wrong → Vercel can't find package.json
2. Build failed → nothing in dist/
3. Output Directory not `dist`
4. Repo empty or wrong branch (main vs master)
